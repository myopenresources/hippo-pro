<template>
    <MainContent>
        <div class="waterfall-container">
            <div class="waterfall-card" v-for="item in imgList">
                <img :src="item" />
                <div class="label">{{ '图片' + item }}</div>
            </div>
        </div>
    </MainContent>
</template>

<script setup lang="ts">
import img1 from '../../assets/img/demo/1.jpeg'
import img2 from '../../assets/img/demo/2.jpeg'
import img3 from '../../assets/img/demo/3.jpeg'
import img4 from '../../assets/img/demo/4.jpeg'
import img5 from '../../assets/img/demo/5.jpeg'
import img6 from '../../assets/img/demo/6.jpeg'
import img7 from '../../assets/img/demo/7.jpeg'
import img8 from '../../assets/img/demo/8.jpeg'
import img9 from '../../assets/img/demo/9.jpeg'
import img10 from '../../assets/img/demo/10.jpeg'
import img11 from '../../assets/img/demo/11.jpeg'
import img12 from '../../assets/img/demo/12.jpeg'
import img13 from '../../assets/img/demo/13.jpeg'
import img14 from '../../assets/img/demo/14.jpeg'
import img15 from '../../assets/img/demo/15.jpeg'
import img16 from '../../assets/img/demo/16.jpeg'
import img17 from '../../assets/img/demo/17.jpeg'
import img18 from '../../assets/img/demo/18.jpeg'
import img19 from '../../assets/img/demo/19.jpeg'
import img20 from '../../assets/img/demo/20.jpeg'
import img21 from '../../assets/img/demo/21.jpeg'
import img22 from '../../assets/img/demo/22.jpeg'
import img23 from '../../assets/img/demo/23.jpeg'
import img24 from '../../assets/img/demo/24.jpeg'
import img25 from '../../assets/img/demo/25.jpeg'
const imgList = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11,
    img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25]

</script>

<style lang="scss" scoped>
.waterfall-container {
    column-width: 300px;
    column-gap: 10px;

    .waterfall-card {
        width: 100%;
        margin-bottom: 10px;
        box-sizing: border-box;
        position: relative;
        transition: 0.35s;
        cursor: pointer;

        &:hover {
            transform: scale(1.05);
            z-index: 99;
        }

        img {
            width: 100%;
            box-shadow: var(--el-box-shadow-lighter);
            border-radius: var(--el-border-radius-base);

        }

        .label {
            width: 100%;
            position: absolute;
            bottom: 4px;
            left: 0;
            height: 30px;
            line-height: 30px;
            background-color: rgba(0, 0, 0, 0.522);
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            border-bottom-left-radius: var(--el-border-radius-base);
            border-bottom-right-radius: var(--el-border-radius-base);
            box-sizing: border-box;
            padding-left: 10px;
            padding-right: 10px;
            color: #fff;
            font-size: 13px;
        }
    }
}
</style>