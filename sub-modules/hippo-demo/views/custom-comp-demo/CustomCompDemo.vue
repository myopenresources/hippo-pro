<template>
  <MainContent>
    <div class="demo">
      <div class="label">类型选择：</div>
      <div class="content">
        <SelectTag v-model:value="type" :list="typeList" :size="'large'" />
      </div>
    </div>
    <div class="demo">
      <div class="label">类型选择：</div>
      <div class="content">
        <SelectTag v-model:value="type" :list="typeList2" />
      </div>
    </div>
    <div class="demo">
      <div class="label">类型选择：</div>
      <div class="content">
        <SelectTag v-model:value="type" :list="typeList" :size="'small'" />
      </div>
    </div>
    <div class="demo">
      <div class="label">类型选择：</div>
      <div class="content">
        <SelectTag v-model:value="type" :list="typeList" :size="'small'" round />
      </div>
    </div>

    <div class="demo">
      <div class="label">类型选择：</div>
      <div class="content">
        <SelectTag v-model:value="type" :list="typeList" :round="true" />
      </div>
    </div>

    <div class="demo">
      <div class="label">类型选择：</div>
      <div class="content">
        <SelectTag v-model:value="type" :list="typeList" :round="true" type="success" />
      </div>
    </div>
    <div class="demo">
      <div class="label">类型选择：</div>
      <div class="content">
        <SelectTag v-model:value="type" :list="typeList" :round="true" type="info" />
      </div>
    </div>
    <div class="demo">
      <div class="label">类型选择：</div>
      <div class="content">
        <SelectTag v-model:value="type" :list="typeList" :round="true" type="danger" />
      </div>
    </div>
    <div class="demo">
      <div class="label">类型选择：</div>
      <div class="content">
        <SelectTag v-model:value="type" :list="typeList" :round="true" type="warning" />
      </div>
    </div>

    <div class="demo">
      <div class="label">类型选择：</div>
      <div class="content">
        <SelectTag
          v-model:value="type"
          :list="typeList"
          :size="'small'"
          :round="true"
          type="warning"
        >
          <template v-slot:opt="scope">
            {{ scope.data.label }}
          </template>
        </SelectTag>
      </div>
    </div>

    <div class="demo">
      <div class="label">数值：</div>
      <div class="content">
        <Flop number="189899" />
      </div>
    </div>

    <div class="demo">
      <div class="label">数值：</div>
      <div class="content">
        <Flop number="189899" unit="RMB" />
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
  </MainContent>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { SelectTag, SelectTagOption, Flop, PopoverConfirm } from 'hippo-module-core'

const showConfirm = ref(false)

const type = ref('1')
const typeList: SelectTagOption[] = [
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

const typeList2: SelectTagOption[] = [
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
</script>

<style lang="scss" scoped>
.demo {
  width: 100%;
  display: flex;
  margin-bottom: 10px;
  align-items: center;
  .label {
    width: 80px;
  }
  .content {
    width: calc(100% - 80px);
  }
}
</style>
