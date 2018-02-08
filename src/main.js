// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import BootstrapVue from 'bootstrap-vue'
import VueProgressBar from 'vue-progressbar'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'hover.css/css/hover.css'
import 'vue-awesome/icons'
import Content from './components/Content'
import Content2 from './components/Content2'
import Mensajes from './components/Mensajes'
import Agenda from './components/Agenda'
import Icon from 'vue-awesome/components/Icon'
import VueContentPlaceholders from 'vue-content-placeholders'
Vue.use(VueContentPlaceholders)
Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(VueResource)
Vue.use(VueProgressBar, {
  color: 'rgb(143, 255, 199)',
  failedColor: 'red',
  height: '2px'
})
Vue.config.productionTip = false
Vue.component('icon', Icon)
const routes = [
  { path: '/', component: Content },
  { path: '/content2', component: Content2 },
  { path: '/mensajes', component: Mensajes },
  { path: '/agenda', component: Agenda }
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
