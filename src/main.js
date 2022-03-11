import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './permission' // permission control

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI)




Vue.config.productionTip = false

import drools from './api/axios/drools.js'
Vue.prototype.dApi = drools

//创建全局输出
const {log} = console
Vue.prototype.log = log

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
