import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // Will be picked from .env
  headers: {
    'Content-Type': 'application/json'
  }
});

// Optional: Attach token if available
const token = localStorage.getItem('accessToken');
if (token) {
  API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export default API;
