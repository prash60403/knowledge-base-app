import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import API from './services/api'; // Custom axios instance

// ✅ Attach JWT to custom API instance if available
const token = localStorage.getItem('accessToken');
if (token) {
  API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

// ✅ Global axios interceptor (if you use plain axios elsewhere)
axios.interceptors.request.use(config => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

const app = createApp(App);

// ✅ Make axios and API globally available (optional but useful)
app.config.globalProperties.$axios = axios;
app.config.globalProperties.$api = API;

app.use(router);
app.mount('#app');

