import Vue from 'vue';
import App from './App.vue';
import router from './router';
import API from './services/api';

Vue.config.productionTip = false;
Vue.prototype.$axios = API;

new Vue({
  router,
  render: h => h(App)
}).$mount('#App');


