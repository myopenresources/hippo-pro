import {
  DesktopLayout,
  userRouter,
  roleRouter,
  notFoundRouter
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
      ...homeRouter,
      ...userRouter,
      ...roleRouter,
      ...notFoundRouter
    ]
  }
]
