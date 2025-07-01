<template>
  <div>
    <h2>Register</h2>
    <form @submit.prevent="register">
      <input v-model="username" placeholder="Username" required />
      <input v-model="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      email: '',
      password: ''
    }
  },
  methods: {
    async register() {
      try {
        await this.$axios.post('http://localhost:8000/api/auth/register/', {
          username: this.username,
          email: this.email,
          password: this.password
        })
        alert('Registration successful!')
        this.$router.push('/')
      } catch (error) {
        alert('Registration failed')
      }
    }
  }
}
</script>
