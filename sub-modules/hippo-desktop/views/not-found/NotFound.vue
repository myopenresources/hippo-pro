<template>
  <MainContent :headerVisible="false">
    <div class="not-found">
      <img src="../../assets/img/exception/not-found.svg" />
      <div class="not-found-title">404</div>
      <div class="not-found-desc">对不起，您访问的页面不存在！</div>
    </div>
  </MainContent>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.not-found {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-right: auto;
  width: 500px;
  height: auto;
  img {
    margin-top: 8rem;
    height: 20rem;
  }
  &-title {
    margin-top: 1rem;
    font-size: 2.25rem;
    font-weight: bold;
  }
  &-desc {
    margin-top: 1rem;
    margin-bottom: 3rem;
    font-size: 1.15rem;
    opacity: 0.65;
  }
}
</style>
