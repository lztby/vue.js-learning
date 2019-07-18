import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home/home.vue'
import City from '@/pages/city/City.vue'

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
      component: City
    }
    
  ]
})
