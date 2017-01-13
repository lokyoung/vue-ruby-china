// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './vendor/bootstrap.css'
import Vue from 'vue'
import App from './App'
import router from './router/index.js'
import { timeAgo } from './filters/timeAgo.js'
import paginate from 'vuejs-paginate'

Vue.filter('timeAgo', timeAgo)

// Vue.use(require('vuejs-paginate'))
Vue.use(paginate)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})
