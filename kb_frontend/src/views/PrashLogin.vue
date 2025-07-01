<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
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
        // Redirect or fetch protected data
      } catch (error) {
        alert('Login failed')
      }
    }
  }
}
</script>
