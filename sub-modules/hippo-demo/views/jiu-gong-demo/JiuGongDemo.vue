<template>
    <MainContent>
        <div class="img-list">
            <div class="img-item"></div>
            <div class="img-item"></div>
            <div class="img-item"></div>
            <div class="img-item"></div>
            <div class="img-item"></div>
            <div class="img-item"></div>
            <div class="img-item"></div>
            <div class="img-item"></div>
            <div class="img-item"></div>
        </div>
    </MainContent>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.img-list {
    display: flex;
    flex-wrap: wrap;
    width: 970px;
    height: 970px;
    margin-left: -150px;
    margin-top: -200px;
    transform: scale(0.5);
    overflow: hidden;



    .img-item {
        width: calc(100% / 3);
        height: calc(100% / 3);
        background: url('../../assets/img//demo/26.jpg');
        background-size: 100% / 2 100% / 2;
        position: relative;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);

        &:nth-child(3n+1) {
            background-position-x: 0;
            left: -20px;
        }

        &:nth-child(3n+2) {
            background-position-x: -100%;
        }

        &:nth-child(3n) {
            background-position-x: -200%;
            left: 20px;
        }



        &:nth-child(-n + 6) {
            background-position-y: -100%;
        }


        &:nth-child(n + 7) {
            background-position-y: -200%;
            bottom: -20px;
        }

        &:nth-child(-n + 3) {
            background-position-y: 0;
            top: -20px;
        }
    }


    &:hover {
        
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
        .img-item {
            top: 0;
            left: 0;
            box-shadow: none;
        }
    }
}
</style>