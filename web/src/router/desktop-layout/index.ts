import {
  DesktopLayout,
  homeRouter,
  userRouter,
  roleRouter,
  notFoundRouter
} from "hippo-desktop";

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
