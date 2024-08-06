import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  //@ts-ignore
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        title: 'Home'
      },
      component: () => import('../views/HomeView.vue')
    },

  ]
})

router.beforeEach((to, from , next) => {
  document.title = to.meta.title as string
  next()
})

export default router
