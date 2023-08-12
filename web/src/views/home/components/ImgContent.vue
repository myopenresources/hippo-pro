<template>
    <div class="img-content">
        <img :src="img" />
    </div>
</template>
  
<script lang="ts" setup>
import img from '../../../../../sub-modules/hippo-demo/assets/img/demo/4.jpeg'
const props = defineProps({
    data: {
        type: Object,
        default: () => {
            return {}
        }
    }
})
</script>
  
<style lang="scss" scoped>
.img-content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px;
    box-sizing: border-box;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
    }
}
</style>
  