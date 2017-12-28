// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Home from './components/HelloFromVux'
import { AjaxPlugin } from 'vux'
import Vuex from 'vuex'
import Message from '@/components/Message'
import Slide from '@/components/Slide'
import Swipe from '@/components/Swipe'
import SwipeTab from '@/components/SwipeTab'

Vue.use(VueRouter)
Vue.use(AjaxPlugin)
Vue.use(Vuex)

const store = new Vuex.Store({})
store.registerModule('vux', {
  state: {
    isLoading: false
  },
  mutations: {
    updateLoadingStatus (state, payload) {
      state.isLoading = payload.isLoading
    }
  }
})

require('es6-promise').polyfill()
const routes = [
  {
    path: '/',
    component: Home
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
  },
  {
    path: '/swipe',
    name: 'Swipe',
    component: Swipe
  },
  {
    path: '/swipe-tab',
    name: 'SwipeTab',
    component: SwipeTab
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach(function (to, from, next) {
  store.commit('updateLoadingStatus', {isLoading: true})
  next()
})
router.afterEach(function (to) {
  store.commit('updateLoadingStatus', {isLoading: false})
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
