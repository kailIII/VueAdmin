// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import BootstrapVue from 'bootstrap-vue'
import VueProgressBar from 'vue-progressbar'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'hover.css/css/hover.css'
import 'vue-awesome/icons'
import Content from './components/Content'
import Content2 from './components/Content2'
import Icon from 'vue-awesome/components/Icon'
Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(VueProgressBar, {
  color: 'rgb(143, 255, 199)',
  failedColor: 'red',
  height: '2px'
})
Vue.config.productionTip = false
Vue.component('icon', Icon)
const routes = [
  { path: '/', component: Content },
  { path: '/content2', component: Content2 }
]
const router = new VueRouter({
  routes
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App, Icon}
})
