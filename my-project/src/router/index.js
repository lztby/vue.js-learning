import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home/home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hellohome',
      component: home
    },
    
  ]
})