import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './router/routes'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(ElementUI);

const router = new VueRouter({
  routes: Routes,
  mode: "hash"
});

new Vue({
  el: '#app',
  components: {App},
  template: '<App/>',
  router: router
});
