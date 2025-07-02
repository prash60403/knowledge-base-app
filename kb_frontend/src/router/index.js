import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import PrashLogin from '@/views/PrashLogin.vue'
import CustomerRegister from '@/views/CustomerRegister.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: PrashLogin },
  { path: '/register', component: CustomerRegister },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
