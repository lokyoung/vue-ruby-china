// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index.js'
import { timeAgo } from './filters/timeAgo.js'
import Vuex from 'vuex'

Vue.use(Vuex)

Vue.filter('timeAgo', timeAgo)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})
