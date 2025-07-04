<template>
  <div class="reset-container">
    <h2>Reset Password</h2>
    <form @submit.prevent="sendResetEmail">
      <input
        v-model="email"
        type="email"
        placeholder="Enter your registered email"
        required
      />
      <button type="submit">Send Reset Email</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
    }
  },
  methods: {
    async sendResetEmail() {
      try {
        const res = await axios.post('https://kb-backend-bdx0.onrender.com/api/password-reset/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: this.email }),
        })
        if (res.ok) {
          alert('Password reset email sent successfully')
          this.email = ''
          this.$router.push('/login') // Redirect to login page after success
        } else {
          const data = await res.json()
          alert(data.message || 'Failed to send reset email')
        }
      } catch (error) {
        alert('Server error. Try again later.')
      }
    },
  },
}
</script>

<style scoped>
.reset-container {
  max-width: 400px;
  margin: auto;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}
input {
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
}
button {
  width: 100%;
  padding: 0.8rem;
  background-color: #ff6b6b;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
