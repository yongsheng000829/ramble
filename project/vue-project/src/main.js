import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './untils/element.config';
import './untils/initVue';  //在Vue原型上添加方法
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
