import { createRouter, createWebHistory } from 'vue-router'

import BirdyHome from '@/views/BirdyHome.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: BirdyHome,
    },
  ],
})

export default router
