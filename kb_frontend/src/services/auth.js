import API from './api';

export const login = async (email, password) => {
  const response = await API.post('/auth/login/', { email, password });
  
  const accessToken = response.data.access; // from DRF Simple JWT
  API.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
  
  // Optionally store in localStorage/sessionStorage
  localStorage.setItem('accessToken', accessToken);

  return response.data;
};
