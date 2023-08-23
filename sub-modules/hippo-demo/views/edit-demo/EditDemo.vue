<template>
   <MainContent>
      <div class="edit-demo">
         <we-toolbar :handle="handle" class="edit-demo-toolbar" />
         <we-editable class="edit-demo-editor" style="height: 500px;" :handle="handle" v-model:json="formData.jarr" v-model:html="formData.html" />
      </div>
   </MainContent>
</template>

<script setup lang="ts">
import { ref, shallowReactive, shallowRef } from 'vue';
import '@wangeditor/editor/dist/css/style.css'
import { SlateDescendant } from '@wangeditor/editor'
import { WeEditable, WeToolbar,useWangEditor } from 'wangeditor5-for-vue3'

const { opts, handle, instance, clearContent, syncContent, reloadEditor } = useWangEditor({
   reloadDelay: 365,
   toolbar: {
      config:{
         excludeKeys:["fullScreen"]
      }
   },
   editable: {
      config: {
         placeholder: '请开始你的表演'
      }
   }
})

//opts.editable.config.readOnly = true

const formData = shallowReactive({ jarr: [] as SlateDescendant[], jstr: '', html: '' })

</script>

<style lang="scss" scoped>
@import './EditDemo.scss'
</style>