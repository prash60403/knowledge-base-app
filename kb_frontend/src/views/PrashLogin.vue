<template>
  <div class="login-container">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>

    <p class="forgot-link" @click="forgot = true">Forgot Password?</p>

    <div v-if="forgot" class="reset-box">
      <h4>Reset Password</h4>
      <input v-model="resetEmail" type="email" placeholder="Enter your email" />
      <button @click="sendResetEmail">Send Reset Link</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      forgot: false,
      resetEmail: ''
    }
  },
  methods: {
    async login() {
      const res = await fetch(import.meta.env.VITE_API_BASE_URL + '/api/login/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: this.email, password: this.password })
      })
      const data = await res.json()
      if (res.ok) {
        alert('Login successful')
        localStorage.setItem('token', data.token)
        // Redirect to dashboard or homepage
      } else {
        alert(data.message || 'Login failed')
      }
    },
    async sendResetEmail() {
      
      const res = await fetch(import.meta.env.VITE_API_BASE_URL + '/api/password-reset/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: this.resetEmail })
      })
      if (res.ok) {
        alert('Password reset email sent!')
        this.forgot = false
      } else {
        alert('Error sending reset email')
      }
    }
  }
}
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to right, #e0f7fa, #b2ebf2);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

h2 {
  color: #006064;
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 280px;
}

input {
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #b2dfdb;
  border-radius: 8px;
  outline: none;
  transition: border-color 0.3s ease;
}

input:focus {
  border-color: #00796b;
}

button {
  padding: 10px;
  background-color: #00796b;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #004d40;
}

.forgot-link {
  margin-top: 10px;
  color: #007acc;
  text-decoration: underline;
  cursor: pointer;
}

.reset-box {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 280px;
  background: #ffffffaa;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>
