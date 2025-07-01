import Vue from 'vue';
import Router from 'vue-router';
import PrashLogin from '@/views/PrashLogin.vue';
import CustomerRegister from '@/views/CustomerRegister.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/PrashLogin', component: PrashLogin },
    { path: '/CustomerRegister', component: CustomerRegister },
    { path: '*', redirect: '/PrashLogin' } // fallback route
  ]
});
