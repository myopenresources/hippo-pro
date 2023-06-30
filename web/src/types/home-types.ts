import type { Component } from 'vue'

interface HomeModule {
  id: string
  icon: string
  label: string
  component: Component | undefined
  data: any
}

interface HomeLayout {
  x: number
  y: number
  w: number
  h: number
  i: number
  module: HomeModule
}

export type { HomeModule, HomeLayout }
