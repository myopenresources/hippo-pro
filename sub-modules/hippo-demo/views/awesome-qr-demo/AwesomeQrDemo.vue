<template>
    <vue-qr text="Hello world!"></vue-qr>
    <vue-qr :bgSrc='bg1' :logoSrc="logo" text="Hello world!" :size="200" :dotScale="0.5"></vue-qr>
    <vue-qr :gifBgSrc='bg2' :logoSrc="logo" text="Hello world!" :size="200" :dotScale="0.35"></vue-qr>
    <vue-qr text="Hello world!" :callback="cb" qid="testid"></vue-qr>
</template>
<script setup lang="ts">
import vueQr from 'vue-qr/src/packages/vue-qr.vue'
import bg1 from '../../assets/img/qrcode/bg1.jpg'
import bg2 from '../../assets/img/qrcode/bg2.gif'
import logo from '../../assets/img/logo.png'

const cb = (dataUrl: string, id: string) => {
    console.log(dataUrl, id)
}
</script>

<style scoped lang="scss"></style>