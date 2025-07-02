<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
    <p @click="forgot = true" style="cursor: pointer; color: blue;">Forgot Password?</p>

    <div v-if="forgot">
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
        // Redirect to dashboard here
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
