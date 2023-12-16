import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
  routes: [

    {
      path:'/',
      name:'main',
      component: ()=> import('../views/Main/Main.vue')
    },


  {
    path:'/Managiment',
    name:'managiment',
    component: ()=> import('../views/Managiments/Managiment.vue')
  },

  {
    path:'/Learners',
    name:'learners',
    component: ()=> import('../views/Opportunities/Components/Learners.vue')
  }
  ]
})

export default router
