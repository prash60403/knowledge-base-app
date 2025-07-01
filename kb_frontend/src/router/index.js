import Vue from 'vue';
import Router from 'vue-router';
import App from '/App.vue'
import PrashLogin from '@/views/PrashLogin.vue';
import CustomerRegister from '@/views/CustomerRegister.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/App.vue', component: App},
    { path: '/PrashLogin', component: PrashLogin },
    { path: '/CustomerRegister', component: CustomerRegister },
    { path: '*', redirect: '/PrashLogin' } // fallback route
  ]
});
