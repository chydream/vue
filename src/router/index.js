import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Slide from '@/components/Slide'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/message',
      name: 'Message',
      component: Message
    },
    {
      path: '/slide',
      name: 'Slide',
      component: Slide
    }
  ]
})
