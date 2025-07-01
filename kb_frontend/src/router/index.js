// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import PrashLogin from '@/views/PrashLogin.vue';
import CustomerRegister from '@/views/CustomerRegister.vue';

const routes = [
  { path: '/', redirect: '/login' }, // Redirect root to login
  { path: '/login', component: PrashLogin },
  { path: '/register', component: CustomerRegister }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
