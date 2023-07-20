<template>
  <canvas id="renderCanvas" touch-action="none"></canvas>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

import * as BABYLON from '@babylonjs/core/Legacy/legacy' //全部引入
import { Engine, Scene } from '@babylonjs/core' //只引入使用到的类
import '@babylonjs/materials/legacy/legacy' //引入其他模块中的所有类，例如materials
import { useWindowResize } from 'hippo-module-core/hooks'

const engine = ref<Engine>() // 初始化 BABYLON 3D engine

const createScene = () => {
  const canvas = document.getElementById('renderCanvas') // 得到canvas对象的引用
  engine.value = new BABYLON.Engine(canvas as HTMLCanvasElement, true)
  // 创建一个场景scene
  const scene = new BABYLON.Scene(engine.value)

  // 添加一个相机，并绑定鼠标事件
  const camera = new BABYLON.ArcRotateCamera(
    'Camera',
    Math.PI / 2,
    Math.PI / 2,
    2,
    new BABYLON.Vector3(0, 0, 5),
    scene
  )
  camera.attachControl(canvas, true)

  // 添加一组灯光到场景
  new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 0, 0), scene)
  new BABYLON.PointLight('light2', new BABYLON.Vector3(0, 0, 0), scene)

  // 添加一个球体到场景中
  const sphere = BABYLON.MeshBuilder.CreateSphere('sphere', { diameter: 2 }, scene)
  sphere.position = new BABYLON.Vector3(2,0,2)
  sphere.scaling= new BABYLON.Vector3(1.5,1.5,2)


  BABYLON.MeshBuilder.CreateBox(
    'mybox',
    {
      height: 5,
      width: 2,
      depth: 0.5,
      updatable: true,
      faceColors: [
        new BABYLON.Color4(0.5, 0.1, 0.8, 1),
        new BABYLON.Color4(0.1, 0.1, 0.8, 1),
        new BABYLON.Color4(0.1, 0.2, 0.8, 1),
        new BABYLON.Color4(0.1, 0.1, 0.4, 1),
        new BABYLON.Color4(0.7, 0.3, 0.8, 1),
        new BABYLON.Color4(0.8, 0.13, 0.8, 1)
      ]
    },
    scene
  )
  BABYLON.MeshBuilder.CreateGround('myGround', { width: 6, height: 4, subdivisions: 4 }, scene)


  const myPoints = [
    new BABYLON.Vector3(0, 0, 0),
    new BABYLON.Vector3(0, 1, 1),
    new BABYLON.Vector3(0, 1, 0)
  ]

  BABYLON.MeshBuilder.CreateLines('lines', { points: myPoints }, scene)
  
  return scene
}

useWindowResize({
  handle: () => {
    if (engine.value) {
      engine.value.resize()
    }
  }
})

onMounted(() => {
  const scene = createScene()

  if (engine.value) {
    engine.value.runRenderLoop(() => {
      scene.render()
    })
  }
})
</script>

<style lang="scss" scoped>
#renderCanvas {
  width: 100%;
  height: 100%;
  border-radius: var(--main-content-radius);
}
</style>
