import { createRouter, createWebHistory } from 'vue-router'

import BirdyHome from '@/views/BirdyHome.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: BirdyHome,
    },
    {
      path: '/project',
      name: 'Project',
      component: () => import('../views/BirdyProject.vue'),
    },
  ],
})

export default router
