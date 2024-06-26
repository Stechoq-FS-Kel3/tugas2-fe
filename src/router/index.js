import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '@/pages/Homepage.vue'
import Example from '@/pages/Example.vue'
import Detail from '@/pages/Detail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Homepage
    },
    {
      path: '/example',
      name: 'example',
      component: Example
    },
    {
      path: '/home/detail/:id',
      name: 'detail',
      component: Detail
    }
  ]
})

export default router
