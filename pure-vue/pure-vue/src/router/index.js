import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import HeyHey from '@/components/HeyHey'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
})
