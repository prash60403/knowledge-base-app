// src/services/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL, // NOT import.meta.env...
});

export default API;
