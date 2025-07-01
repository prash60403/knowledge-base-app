<template>
  <div class="login-container">
    <h2>Login</h2>
    <form @submit.prevent="login" class="login-form">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async login() {
      try {
        const response = await this.$axios.post('http://localhost:8000/api/auth/login/', {
          email: this.email,
          password: this.password
        })
        localStorage.setItem('token', response.data.access)
        alert('Login successful!')
        this.$router.push('/')
      } catch (error) {
        alert('Login failed')
      }
    }
  }
}
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 100px auto;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  background-color: #ffffff;
  text-align: center;
  font-family: Arial, sans-serif;
}

.login-form {
  display: flex;
  flex-direction: column;
}

.login-form input {
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
}

.login-form button {
  padding: 10px;
  background-color: #28a745;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.login-form button:hover {
  background-color: #218838;
}

h2 {
  margin-bottom: 20px;
  color: #333;
}
</style>
