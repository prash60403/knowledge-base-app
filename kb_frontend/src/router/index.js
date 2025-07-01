import { createRouter, createWebHistory } from 'vue-router';
import PrashLogin from '@/views/PrashLogin.vue';
import CustomerRegister from '@/views/CustomerRegister.vue';

const routes = [
  { path: '/PrashLogin', component: PrashLogin },
  { path: '/CustomerRegister', component: CustomerRegister }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
