<template>
  <div class="login-container">
    <h2 v-if="!registerMode && !forgot">Login</h2>
    <h2 v-if="registerMode">Register</h2>
    <h2 v-if="forgot">Reset Password</h2>

    <form @submit.prevent="registerMode ? register() : forgot ? sendResetEmail() : login()">
      <input
        v-model="email"
        type="email"
        placeholder="Email"
        required
      />
      <input
        v-if="!forgot"
        v-model="password"
        type="password"
        placeholder="Password"
        required
      />
      <button type="submit">
        {{ registerMode ? 'Register' : forgot ? 'Send Reset Email' : 'Login' }}
      </button>
    </form>

    <div class="options">
      <p v-if="!forgot">
        <a href="#" @click.prevent="registerMode = !registerMode; forgot = false">
          {{ registerMode ? 'Already have an account? Login' : "Don't have an account? Register" }}
        </a>
      </p>
      <p v-if="!registerMode">
        <a href="#" @click.prevent="forgot = !forgot">Forgot password?</a>
      </p>
      <p v-if="forgot">
        <a href="#" @click.prevent="forgot = false">Back to Login</a>
      </p>
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
      resetEmail: '',
      registerMode: false,
    }
  },
  methods: {
    async login() {
      const res = await axios.post('https://kb-backend-bdx0.onrender.com/api/login/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: this.email,
          password: this.password,
        }),
      })
      const data = await res.json()
      if (res.ok) {
        alert('Login successful')
        localStorage.setItem('token', data.token)
        this.$router.push('/dashboard') // update this if needed
      } else {
        alert(data.message || 'Login failed')
      }
    },

    async register() {
      const res = await axios.post('https://kb-backend-bdx0.onrender.com/api/register/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: this.email,
          password: this.password,
        }),
      })
      const data = await res.json()
      if (res.ok) {
        alert('Registration successful! Logging you in...')
        await this.login() // auto-login
        this.registerMode = false
      } else {
        alert(data.message || 'Registration failed')
      }
    },

    async sendResetEmail() {
      const res = await axios.post('https://kb-backend-bdx0.onrender.com/api/password-reset//', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: this.email, // using login email field
        }),
      })
      if (res.ok) {
        alert('Password reset email sent!')
        this.forgot = false
      } else {
        alert('Error sending reset email')
      }
    },
  },
}
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: auto;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}
input {
  width: 100%;
  margin: 0.5rem 0;
  padding: 0.8rem;
  border-radius: 5px;
  border: 1px solid #ccc;
}
button {
  width: 100%;
  padding: 0.8rem;
  margin-top: 1rem;
  background-color: #2e86de;
  color: white;
  border: none;
  border-radius: 5px;
}
.options {
  margin-top: 1rem;
  text-align: center;
}
a {
  color: #2e86de;
  text-decoration: none;
  font-size: 0.9rem;
}
</style>
