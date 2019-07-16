import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/pages/home/home.vue'
import list from '@/pages/list/list.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hellohome',
      component: home
    },
    {
      path: '/list',
      name: 'Hellolist',
      component: list
    }
  ]
})
