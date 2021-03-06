// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'element-ui/lib/theme-default/index.css'
// import {Button, Alert,Input,Select} from 'element-ui'
import ElementUI from 'element-ui'
import axios from 'axios'
import VueRouter from 'vue-router'
import store from './store'

Vue.config.productionTip = false
Vue.use(ElementUI)
// Vue.use(Alert)
// Vue.use(Select)
// Vue.use(Input)
Vue.use(VueRouter)
Vue.prototype.$axios = axios

const routers=new VueRouter({
  router
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
})
