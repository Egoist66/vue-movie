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

    {
      path: '/movie/:id',
      name: 'movie',
      meta: {
        title: 'Movie'
      },
      component: () => import('../views/FilmView.vue')
    }

  ]
})

router.beforeEach((to, from , next) => {
  document.title = `${to.meta.title as string } ${to.params.id ? ` - ${to.params.id}` : ''}`
  next()
})

export default router
