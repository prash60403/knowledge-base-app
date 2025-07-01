import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

// ✅ Attach JWT token to requests
axios.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

const app = createApp(App)
app.config.globalProperties.$axios = axios
app.use(router)
app.mount('#app')
