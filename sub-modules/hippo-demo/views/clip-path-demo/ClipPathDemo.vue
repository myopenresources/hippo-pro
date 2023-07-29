<template>
    <MainContent>
        <div class="demo">
            <div class="demo-item" :class="'clip-path' + index" v-for="(item, index) in 15">
            </div>
        </div>
    </MainContent>
</template>
<script setup lang="ts">


</script>

<style scoped lang="scss">
.demo {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    &-item {
        width: 250px;
        height: 150px;
        border: 1px solid var(--el-border-color-light);
        margin-left: 10px;
        margin-right: 10px;
        margin-bottom: 10px;
        margin-top: 10px;
        background-image: url('../../assets/img/qrcode/bg1.jpg');
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }

    .clip-path0 {
        clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    }

    .clip-path1 {
        clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);
    }

    .clip-path2 {
        clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
    }

    .clip-path3 {
        clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    }

    .clip-path4 {
        clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
    }

    .clip-path5 {
        clip-path: polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%);
    }

    .clip-path6 {
        clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);
    }

    .clip-path7 {
        clip-path: polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%);
    }

    .clip-path8 {
        clip-path: polygon(40% 0%, 40% 20%, 100% 20%, 100% 80%, 40% 80%, 40% 100%, 0% 50%);
    }

    .clip-path9 {
        clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
    }

    .clip-path10 {
        clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);
    }

    .clip-path11 {
        clip-path: polygon(0% 0%, 0% 100%, 25% 100%, 25% 25%, 75% 25%, 75% 75%, 25% 75%, 25% 100%, 100% 100%, 100% 0%);
    }

    .clip-path12 {
        clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%);
    }

    .clip-path13 {
        clip-path: ellipse(25% 40% at 50% 50%);
    }

    .clip-path14 {
        clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%);
    }

}
</style>