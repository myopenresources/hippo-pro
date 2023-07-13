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

      <div class="loader">
        <div class="loader-inner">
          <div class="loader-line-wrap">
            <div class="loader-line"></div>
          </div>
          <div class="loader-line-wrap">
            <div class="loader-line"></div>
          </div>
          <div class="loader-line-wrap">
            <div class="loader-line"></div>
          </div>
          <div class="loader-line-wrap">
            <div class="loader-line"></div>
          </div>
          <div class="loader-line-wrap">
            <div class="loader-line"></div>
          </div>
        </div>
      </div>
      <div class="dot-wrap">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>

      <div class="figure">
        <div class="dot white"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
    </div>
  </MainContent>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
:root {
  --init-spinning-height: 60px;
  --init-spinning-delay: 0;
}

@keyframes spinning {
  0% {
    background-image: linear-gradient(to top, #fa709a 0%, #fee140 100%);
    height: 20%;
    border-radius: calc(var(--init-spinning-height) * 0.2 * 0.5);
  }

  50% {
    background-image: linear-gradient(to top, #e986cd 0%, #e9d975 100%);
    height: 100%;
    border-radius: calc(var(--init-spinning-height) * 1 * 0.5);
  }

  100% {
    background-image: linear-gradient(to top, #8dece8 0%, #f7b0c7 100%);
    height: 20%;
    border-radius: calc(var(--init-spinning-height) * 0.2 * 0.5);
  }
}

.app-init-spinning-container {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #fff;
  width: 100vw;
  height: 100vh;
  z-index: 9999998;
}

.app-init-spinning-bg {
  position: absolute;
  width: 160px;
  height: 160px;
  top: 50%;
  left: 50%;
  margin-left: -80px;
  margin-top: -90px;
  display: -webkit-flex;
  display: flex;
  justify-content: center;
  align-items: center;
}

.app-init-spinning {
  display: flex;
  align-items: center;
  position: relative;
  height: var(--init-spinning-height);
}

.app-init-spinning span {
  background: linear-gradient(to top, #21c697 0%, #e7fed7 100%);
  width: 6px;
  height: 20%;
  border-radius: calc(var(--init-spinning-height) * 0.2 * 0.5);
  margin-right: 8px;
  animation: spinning 2.5s infinite linear;
  animation-delay: calc(0.2s * var(--init-spinning-delay));
}

.app-init-spinning span:last-child {
  margin-right: 0px;
}

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
  box-shadow: 0 1px 5px 0 rgba(25, 50, 79, 0.07), 0 5px 10px 0 rgba(25, 50, 79, 0.1);
  margin-left: 30px;
}

.app-init-spinning2 {
  position: relative;
  width: 90px;
  height: 90px;
  background: url('../../assets/img/topo/node1.svg');
  background-size: 100% 100%;
  z-index: 9999999;
  -moz-animation: appInitSpinning2 10s linear 0.5s infinite;
  -o-animation: appInitSpinning2 10s linear 0.5s infinite;
  -webkit-animation: appInitSpinning2 10s linear 0.5s infinite;
  animation: appInitSpinning2 6s linear 0.5s infinite;
}

.loader-inner {
  bottom: 0;
  height: 60px;
  left: 50px;
  margin: auto;
  position: relative;
  right: 0;
  top: 50px;
  width: 100px;
}

.loader-line-wrap {
  animation: spin 2000ms cubic-bezier(0.175, 0.885, 0.32, 1.275) infinite;
  box-sizing: border-box;
  height: 50px;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  transform-origin: 50% 100%;
  width: 100px;
}
.loader-line {
  border: 4px solid transparent;
  border-radius: 100%;
  box-sizing: border-box;
  height: 100px;
  left: 0;
  margin: 0 auto;
  position: absolute;
  right: 0;
  top: 0;
  width: 100px;
}
.loader-line-wrap:nth-child(1) {
  animation-delay: -50ms;
}
.loader-line-wrap:nth-child(2) {
  animation-delay: -100ms;
}
.loader-line-wrap:nth-child(3) {
  animation-delay: -150ms;
}
.loader-line-wrap:nth-child(4) {
  animation-delay: -200ms;
}
.loader-line-wrap:nth-child(5) {
  animation-delay: -250ms;
}

.loader-line-wrap:nth-child(1) .loader-line {
  border-color: hsl(0, 80%, 60%);
  height: 90px;
  width: 90px;
  top: 7px;
}
.loader-line-wrap:nth-child(2) .loader-line {
  border-color: hsl(60, 80%, 60%);
  height: 76px;
  width: 76px;
  top: 14px;
}
.loader-line-wrap:nth-child(3) .loader-line {
  border-color: hsl(120, 80%, 60%);
  height: 62px;
  width: 62px;
  top: 21px;
}
.loader-line-wrap:nth-child(4) .loader-line {
  border-color: hsl(180, 80%, 60%);
  height: 48px;
  width: 48px;
  top: 28px;
}
.loader-line-wrap:nth-child(5) .loader-line {
  border-color: hsl(240, 80%, 60%);
  height: 34px;
  width: 34px;
  top: 35px;
}

@keyframes spin {
  0%,
  15% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}

.dot-wrap {
  margin-left: 100px;
  margin-top: 50px;
  .dot {
    width: 24px;
    height: 24px;
    background: #3ac;
    border-radius: 100%;
    display: inline-block;
    animation: slide 1s infinite;
  }
  .dot:nth-child(1) {
    animation-delay: 0.1s;
    background: #32aacc;
  }
  .dot:nth-child(2) {
    animation-delay: 0.2s;
    background: #64aacc;
  }
  .dot:nth-child(3) {
    animation-delay: 0.3s;
    background: #96aacc;
  }
  .dot:nth-child(4) {
    animation-delay: 0.4s;
    background: #c8aacc;
  }
  .dot:nth-child(5) {
    animation-delay: 0.5s;
    background: #faaacc;
  }
}

@-moz-keyframes slide {
  0% {
    transform: scale(1);
  }
  50% {
    opacity: 0.3;
    transform: scale(2);
  }
  100% {
    transform: scale(1);
  }
}
@-webkit-keyframes slide {
  0% {
    transform: scale(1);
  }
  50% {
    opacity: 0.3;
    transform: scale(2);
  }
  100% {
    transform: scale(1);
  }
}
@-o-keyframes slide {
  0% {
    transform: scale(1);
  }
  50% {
    opacity: 0.3;
    transform: scale(2);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes slide {
  0% {
    transform: scale(1);
  }
  50% {
    opacity: 0.3;
    transform: scale(2);
  }
  100% {
    transform: scale(1);
  }
}

.figure {
  position: relative;
  top: 50px;
  bottom: 0;
  left: 50px;
  right: 0;
  width: 6.25em;
  height: 6.25em;
  animation: rotate 2.4s linear infinite;
  .white {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: white;
    animation: flash 2.4s linear infinite;
    opacity: 0;
  }
  .dot {
    position: absolute;
    margin: auto;
    width: 2.4em;
    height: 2.4em;
    border-radius: 100%;
    transition: all 1s ease;
  }
  .dot:nth-child(2) {
    top: 0;
    bottom: 0;
    left: 0;
    background: #ff4444;
    animation: dotsY 2.4s linear infinite;
  }
  .dot:nth-child(3) {
    left: 0;
    right: 0;
    top: 0;
    background: #ffbb33;
    animation: dotsX 2.4s linear infinite;
  }
  .dot:nth-child(4) {
    top: 0;
    bottom: 0;
    right: 0;
    background: #99cc00;
    animation: dotsY 2.4s linear infinite;
  }
  .dot:nth-child(5) {
    left: 0;
    right: 0;
    bottom: 0;
    background: #33b5e5;
    animation: dotsX 2.4s linear infinite;
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  10% {
    width: 6.25em;
    height: 6.25em;
  }
  66% {
    width: 2.4em;
    height: 2.4em;
  }
  100% {
    transform: rotate(360deg);
    width: 6.25em;
    height: 6.25em;
  }
}

@keyframes dotsY {
  66% {
    opacity: 0.1;
    width: 2.4em;
  }
  77% {
    opacity: 1;
    width: 0;
  }
}
@keyframes dotsX {
  66% {
    opacity: 0.1;
    height: 2.4em;
  }
  77% {
    opacity: 1;
    height: 0;
  }
}

@keyframes flash {
  33% {
    opacity: 0;
    border-radius: 0%;
  }
  55% {
    opacity: 0.6;
    border-radius: 100%;
  }
  66% {
    opacity: 0;
  }
}
</style>
