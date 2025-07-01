<template>
  <div class="register-container">
    <h2>Register</h2>
    <form @submit.prevent="handleRegister" class="register-form">
      <input v-model="username" type="text" placeholder="Username" required />
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
import API from '@/services/api';

export default {
  data() {
    return {
      username: '',
      email: '',
      password: ''
    };
  },
  methods: {
    async handleRegister() {
      try {
        await API.post('auth/register/', {
          username: this.username,
          email: this.email,
          password: this.password
        });
        alert('Registration successful. Please log in.');
        this.$router.push('/');
      } catch (err) {
        alert('Registration failed. Try again.');
        console.error(err.response?.data || err.message);
      }
    }
  }
};
</script>

<style scoped>
.register-container {
  max-width: 400px;
  margin: 100px auto;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  background-color: #ffffff;
  text-align: center;
  font-family: Arial, sans-serif;
}

.register-form {
  display: flex;
  flex-direction: column;
}

.register-form input {
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
}

.register-form button {
  padding: 10px;
  background-color: #007bff;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.register-form button:hover {
  background-color: #0056b3;
}

h2 {
  margin-bottom: 20px;
  color: #333;
}
</style>
