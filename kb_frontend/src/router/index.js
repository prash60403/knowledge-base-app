import Vue from 'vue';
import Router from 'vue-router';
import PrashLogin from '@/views/PrashLogin.vue';
import CustomerRegister from '@/views/CustomerRegister.vue';

Vue.use(Router);

export default new Router({
  mode: 'history', // Important for clean URLs on Render
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: PrashLogin
    },
    {
      path: '/register',
      name: 'Register',
      component: CustomerRegister
    },
    {
      path: '*',
      redirect: '/login'
    }
  ]
});
