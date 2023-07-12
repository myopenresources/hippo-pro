<template>
    <MainContent>
        <div class="loading-demo">
            <div class="app-init-spinning">
                <span style="--init-spinning-delay: 5"></span>
                <span style="--init-spinning-delay: 4"></span>
                <span style="--init-spinning-delay: 3"></span>
                <span style="--init-spinning-delay: 2"></span>
                <span style="--init-spinning-delay: 1"></span>
                <span style="--init-spinning-delay: 0"></span>
                <span style="--init-spinning-delay: 1"></span>
                <span style="--init-spinning-delay: 2"></span>
                <span style="--init-spinning-delay: 3"></span>
                <span style="--init-spinning-delay: 4"></span>
                <span style="--init-spinning-delay: 5"></span>
            </div>
            <div class="app-init-spinning-bg2">
                <div class="app-init-spinning2"></div>
            </div>
        </div>
    </MainContent>
</template>


<script setup lang="ts">
</script>

<style lang="scss" scoped>
@-moz-keyframes appInitSpinning2 {
    0% {
        transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
    }

    50% {
        transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
    }

    100% {
        transform: rotate(720deg);
        -webkit-transform: rotate(720deg);
        -moz-transform: rotate(720deg);
        -o-transform: rotate(720deg);
        -ms-transform: rotate(720deg);
    }
}

@-o-keyframes appInitSpinning2 {
    0% {
        transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
    }

    50% {
        transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
    }

    100% {
        transform: rotate(720deg);
        -webkit-transform: rotate(720deg);
        -moz-transform: rotate(720deg);
        -o-transform: rotate(720deg);
        -ms-transform: rotate(720deg);
    }
}

@-webkit-keyframes appInitSpinning2 {
    0% {
        transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
    }

    50% {
        transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
    }

    100% {
        transform: rotate(720deg);
        -webkit-transform: rotate(720deg);
        -moz-transform: rotate(720deg);
        -o-transform: rotate(720deg);
        -ms-transform: rotate(720deg);
    }
}

@keyframes appInitSpinning2 {
    0% {
        transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
    }

    50% {
        transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
    }

    100% {
        transform: rotate(720deg);
        -webkit-transform: rotate(720deg);
        -moz-transform: rotate(720deg);
        -o-transform: rotate(720deg);
        -ms-transform: rotate(720deg);
    }
}

.loading-demo {
    display: flex;

}

.app-init-spinning-bg2 {
    width: 160px;
    height: 160px;
    background: linear-gradient(88deg, #2ceed4 0, #06bfcc 50%);
    display: -webkit-flex;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    box-shadow: 0 1px 5px 0 rgba(25, 50, 79, .07), 0 5px 10px 0 rgba(25, 50, 79, .1);
    margin-left: 30px;
}

.app-init-spinning2 {
    position: relative;
    width: 90px;
    height: 90px;
    background: url('./spinning.png');
    background-size: 100% 100%;
    z-index: 9999999;
    -moz-animation: appInitSpinning2 10s linear .5s infinite;
    -o-animation: appInitSpinning2 10s linear .5s infinite;
    -webkit-animation: appInitSpinning2 10s linear .5s infinite;
    animation: appInitSpinning2 6s linear .5s infinite;
}
</style>
