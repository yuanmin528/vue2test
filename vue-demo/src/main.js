// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import store from "./store/index"
import 'element-ui/lib/theme-chalk/index.css'
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.use(Element)
// Vue.use(store)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
