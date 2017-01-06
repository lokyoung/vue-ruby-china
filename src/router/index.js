import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Index from '../components/Index'
import Topics from '../components/Topics'

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Index, name: 'index' },
    { path: '/topics', component: Topics, name: 'topics' }
  ],
  saveScrollPosition: true
})
