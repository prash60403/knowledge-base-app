import axios from 'axios';

const api = axios.create({
  baseURL: 'https://kb-backend-bdx0.onrender.com/api/',  // ✅ Correct Render backend URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
