import { DesktopLayout, homeRouter } from "hippo-desktop";

export default [
  {
    path: '/',
    name: 'DesktopLayout',
    component: DesktopLayout,
    meta: {
      title: ''
    },
    children: [
      ...homeRouter
    ]
  }
]
