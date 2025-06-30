import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'

// ✅ Set up Axios interceptor before mounting the app
axios.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, error => {
  return Promise.reject(error)
})

// Optional: Make axios available globally (for every component)
const app = createApp(App)
app.config.globalProperties.$axios = axios

app.mount('#app')
