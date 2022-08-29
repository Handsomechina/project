import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Element from 'element-ui'; //引入饿了么
import 'element-ui/lib/theme-chalk/index.css'

import "/src/components/table.less"

Vue.config.productionTip = false
import store from './vuex/store'
import router from './Router/index'; //router路由


Vue.use(Element);
Vue.use(VueRouter);

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
