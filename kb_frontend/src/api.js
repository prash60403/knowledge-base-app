import axios from 'axios';

const api = axios.create({
  baseURL: 'https://kb-backend.onrender.com/api/', // Replace with actual Render backend URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
