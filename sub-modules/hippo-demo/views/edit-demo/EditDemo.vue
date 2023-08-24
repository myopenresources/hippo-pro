<template>
  <MainContent>
    <div class="edit-demo">
      <we-toolbar :handle="handle" class="edit-demo-toolbar" />
      <we-editable
        class="edit-demo-editor"
        style="height: fit-content;min-height: 500px;"
        :handle="handle"
        v-model:json="formData.jarr"
        v-model:html="formData.html"
      />
    </div>
  </MainContent>
</template>

<script setup lang="ts">
import { ref, shallowReactive, shallowRef } from 'vue'
import '@wangeditor/editor/dist/css/style.css'
import { type SlateDescendant } from '@wangeditor/editor'
import { WeEditable, WeToolbar, useWangEditor } from 'wangeditor5-for-vue3'

const { opts, handle, instance, clearContent, syncContent, reloadEditor } = useWangEditor({
  reloadDelay: 365,
  toolbar: {
    config: {
      excludeKeys: ['fullScreen']
    }
  },
  editable: {
    config: {
      placeholder: '请输入内容...',
      MENU_CONF: {
        uploadImage: {
          async customUpload(
            file: File,
            insertFn: (url: string, alt: string, href: string) => void
          ) {
            const isJPG = file.type === 'image/jpeg'
            const isPNG = file.type === 'image/png'
            const isLt2M = file.size / 1024 / 1024 < 20

            if (!isJPG && !isPNG) {
              this.$message.error('图片只能是 JPG|PNG 格式!')
              return false
            }
            if (!isLt2M) {
              this.$message.error('图片大小不能超过 20MB!')
              return false
            }

            insertFn('', '图片名称', '')
          }
        }
      }
    }
  }
})

//opts.editable.config.readOnly = true

const formData = shallowReactive({ jarr: [] as SlateDescendant[], jstr: '', html: '' })
</script>

<style lang="scss" scoped>
@import './EditDemo.scss';
</style>
