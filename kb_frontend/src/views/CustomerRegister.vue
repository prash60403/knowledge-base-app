<template>
  <div>
    <h2>Register</h2>
    <form @submit.prevent="register">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Register</button>
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
    async register() {
      const res = await fetch(import.meta.env.VITE_API_BASE_URL + '/api/register/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: this.email, password: this.password })
      })
      const data = await res.json()
      if (res.ok) {
        alert('Registration successful')
        this.$router.push('/login')
      } else {
        alert(data.message || 'Registration failed')
      }
    }
  }
}
</script>
