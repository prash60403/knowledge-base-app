<template>
  <div class="register-container">
    <h2>Create Your Account</h2>
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

<style scoped>
.register-container {
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
  margin-bottom: 30px;
  font-size: 1.8rem;
}

form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 280px;
}

input {
  padding: 10px 15px;
  font-size: 1rem;
  border: 1px solid #b2dfdb;
  border-radius: 8px;
  outline: none;
  transition: border 0.3s;
}

input:focus {
  border-color: #00796b;
}

button {
  padding: 10px;
  background-color: #00796b;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #004d40;
}
</style>
