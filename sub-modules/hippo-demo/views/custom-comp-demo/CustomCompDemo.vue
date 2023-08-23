<template>
  <MainContent>
    <div class="demo">
      <div class="label">类型选择：</div>
      <div class="content">
        <TagSelect v-model:value="type" :list="typeList" :size="'large'" />
      </div>
    </div>
    <div class="demo">
      <div class="label">类型选择：</div>
      <div class="content">
        <TagSelect v-model:value="type" :list="typeList2" />
      </div>
    </div>
    <div class="demo">
      <div class="label">类型选择：</div>
      <div class="content">
        <TagSelect v-model:value="type" :list="typeList" :size="'small'" />
      </div>
    </div>
    <div class="demo">
      <div class="label">类型选择：</div>
      <div class="content">
        <TagSelect v-model:value="type" :list="typeList" :size="'small'" round />
      </div>
    </div>

    <div class="demo">
      <div class="label">类型选择：</div>
      <div class="content">
        <TagSelect v-model:value="type" :list="typeList" :round="true" />
      </div>
    </div>

    <div class="demo">
      <div class="label">类型选择：</div>
      <div class="content">
        <TagSelect v-model:value="type" :list="typeList" :round="true" type="success" />
      </div>
    </div>
    <div class="demo">
      <div class="label">类型选择：</div>
      <div class="content">
        <TagSelect v-model:value="type" :list="typeList" :round="true" type="info" />
      </div>
    </div>
    <div class="demo">
      <div class="label">类型选择：</div>
      <div class="content">
        <TagSelect v-model:value="type" :list="typeList" :round="true" type="danger" />
      </div>
    </div>
    <div class="demo">
      <div class="label">类型选择：</div>
      <div class="content">
        <TagSelect v-model:value="type" :list="typeList" :round="true" type="warning" />
      </div>
    </div>

    <div class="demo">
      <div class="label">类型选择：</div>
      <div class="content">
        <TagSelect v-model:value="type" :list="typeList" :size="'small'" :round="true" type="warning">
          <template v-slot:opt="scope">
            {{ scope.data.label }}
          </template>
        </TagSelect>
      </div>
    </div>

    <div class="demo">
      <div class="label">数值：</div>
      <div class="content">
        <Flop :number="num" />
        <el-button @click="num = '45465465465'"> 更新 </el-button>
      </div>
    </div>

    <div class="demo">
      <div class="label">数值：</div>
      <div class="content">
        <Flop number="1898919" :speed="666" />
      </div>
    </div>

    <div class="demo">
      <div class="label">数值：</div>
      <div class="content">
        <Flop number="189899" unit="RMB" :speed="666" />
      </div>
    </div>

    <div class="demo">
      <div class="label">图标：</div>
      <div class="content">
        <DynamicIcon icon="Close" />
        <DynamicIcon icon="SvgIconTheme" />
      </div>
    </div>

    <div class="demo">
      <div class="label">确认：</div>
      <div class="content">
        <PopoverConfirm v-model:visible="showConfirm">
          <el-button @click="showConfirm = true"> 确认 </el-button>
        </PopoverConfirm>
      </div>
    </div>
    <div class="demo">
      <div class="label">全局loading：</div>
      <div class="content">
        <el-button @click="openLoading">打开</el-button>
      </div>
    </div>
    <div class="demo">
      <div class="label">自定义loading：</div>
      <div class="content" v-img-lazy>
        <el-button @click="openLoading2">打开</el-button>
      </div>
    </div>
    <div class="demo">
      <div class="label">图片懒加载：</div>
      <div class="content">
        <img style="height: 50px" :src="img2" v-img-lazy="'https://img0.baidu.com/it/u=2159574576,3189551048&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=361'
          " />
      </div>
    </div>
    <div class="demo">
      <div class="label">图标选择：</div>
      <div class="content">
        <IconSelect v-model:value="icon" :extendIcons="['SvgIconStartMenu']" />
      </div>
    </div>
    <div class="demo">
      <div class="label">图标选择：</div>
      <div class="content">
        <IconSelect v-model:value="icon" :extendIcons="['SvgIconStartMenu']">
          {{ icon ? icon : '选择' }}
        </IconSelect>
      </div>
    </div>
    <div class="demo">
      <div class="label">图标选择：</div>
      <div class="content">
        <IconSelect v-model:value="icon" :extendIconTabLabel="'菜单图标'" :defaultEnabled="true"
          :extendIcons="['SvgIconStartMenu']" />
      </div>
    </div>
    <div class="demo">
      <div class="label">代码高亮：</div>
      <div class="content">
        <pre v-highlight><code class="javascript">{{ sourcecode }}</code></pre>
      </div>
    </div>
    可通过在web/assets/index.scss中添加其它样式覆盖
    <div class="demo">
      <div class="label">代码高亮：</div>
      <div class="content">
        <pre v-highlight="sourcecode"><code class="javascript"></code></pre>
      </div>
    </div>
  </MainContent>
</template>

<script setup lang="ts">
import { defineComponent, h, onMounted, ref } from 'vue'
import { imgLazy, IconSelect,highlight } from 'hippo-module-core'
import img1 from '../../assets/img/demo/1.jpeg'
import img2 from '../../assets/img/demo/2.jpeg'

import {
  TagSelect,
  type TagSelectOption,
  Flop,
  PopoverConfirm,
  LoadingBarBox,
  type LoadingBar
} from 'hippo-module-core'

const vImgLazy = imgLazy

const vHighlight = highlight

const showConfirm = ref(false)
const num = ref('89894564')

const icon = ref('')

const sourcecode = ref<string>("import { Options,Highlighter,registerLanguages,htmlRender,init} from 'highlightjs';")

const type = ref('1')
const typeList: TagSelectOption[] = [
  {
    label: '不限',
    value: '0',
    icon: 'Warning'
  },
  {
    label: '国内',
    value: '1',
    icon: 'Tools'
  },
  {
    label: '国外',
    value: '2',
    icon: 'Tools'
  },
  {
    label: '火星',
    value: '3',
    icon: 'User'
  },
  {
    label: '水星',
    value: '4',
    icon: 'SvgIconDemo'
  }
]

const typeList2: TagSelectOption[] = [
  {
    label: '不限',
    value: '0'
  },
  {
    label: '国内',
    value: '1'
  },
  {
    label: '国外',
    value: '2'
  },
  {
    label: '火星',
    value: '3'
  },
  {
    label: '水星',
    value: '4',
    icon: 'SvgIconDemo'
  }
]

const openLoading = () => {
  const loadingObj = LoadingBarBox({
    label: '正在加载中...',
    barLabelStyle: {
      color: 'var(--el-color-primary)'
    }
  })

  const st = setTimeout(() => {
    clearTimeout(st)
    loadingObj.close()
  }, 1500)
}

const openLoading2 = () => {
  const loadingObj2 = LoadingBarBox({
    label: '正在加载中...',
    content: (config: LoadingBar) => {
      const label = config && config.label ? config.label + '' : ''
      return h(
        'div',
        {
          style: {
            textAlign: 'center',
            color: 'var(--el-color-primary)'
          }
        },
        [label]
      )
    }
  })

  const st = setTimeout(() => {
    clearTimeout(st)
    loadingObj2.close()
  }, 1200)
}




</script>

<style lang="scss" scoped>
.demo {
  width: 100%;
  display: flex;
  margin-bottom: 10px;
  align-items: center;

  .label {
    width: 120px;
  }

  .content {
    width: calc(100% - 120px);
    display: flex;
  }
}
</style>
