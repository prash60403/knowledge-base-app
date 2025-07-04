<template>
  <div class="register-container">
    <h2>Register</h2>
    <form @submit.prevent="register">
      <input
        v-model="email"
        type="email"
        placeholder="Email"
        required
      />
      <input
        v-model="password"
        type="password"
        placeholder="Password"
        required
      />
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    async register() {
      try {
        const res =  await axios.post('https://kb-backend-bdx0.onrender.com/api/register/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            username: this.email, // backend expects `username`
            password: this.password,
          }),
        })
        const data = await res.json()
        if (res.ok) {
          alert('Registration successful')
          this.$router.push('/login') // Redirect to login page
        } else {
          alert(data.message || 'Registration failed')
        }
      } catch (err) {
        alert('Server error during registration')
      }
    },
  },
}
</script>

<style scoped>
.register-container {
  max-width: 400px;
  margin: auto;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  border-radius: 10px;
}
input {
  display: block;
  width: 100%;
  margin: 1rem 0;
  padding: 0.8rem;
  border-radius: 5px;
  border: 1px solid #ccc;
}
button {
  width: 100%;
  padding: 0.8rem;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
