import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home/home.vue'
import city from '@/pages/city/City.vue'
import detail from '@/pages/detail/detail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hellohome',
      component: home
    },{
      path: '/city',
      name: 'HelloCity',
      component: city
    },{
      path: '/detail/:id',
      name: 'HelloDetail',
      component: detail
    }
    
    // {
    //   path: '/',
    //   name: 'Hellohome',
    //   component: () => import('@/pages/home/home.vue')
    // },{
    //   path: '/city',
    //   name: 'HelloCity',
    //   component: () => import('@/pages/city/City.vue')
    // },{
    //   path: '/detail/:id',
    //   name: 'HelloDetail',
    //   component: () => import('@/pages/detail/detail.vue')
    // }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
