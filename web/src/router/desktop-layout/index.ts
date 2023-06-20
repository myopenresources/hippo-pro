import {
  DesktopLayout,
  notFoundRouter,
  startMenuRouter
} from "hippo-desktop";

import homeRouter from './home'

export default [
  {
    path: '/',
    name: 'DesktopLayout',
    component: DesktopLayout,
    meta: {
      title: ''
    },
    children: [
      ...notFoundRouter,
      ...startMenuRouter
    ]
  }
]
