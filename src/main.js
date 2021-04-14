import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Header from './mycomponents/Header'
import signupform from './mycomponents/signupform'

Vue.use(VueRouter);
const routes = [
  {path:'/',component:Header},
  {path:'/signup',component:signupform}
]
const router = new VueRouter({
  routes
})
Vue.config.productionTip = false

new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
