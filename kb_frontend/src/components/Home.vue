<template>
  <div class="home">
    <h1>Welcome to Knowledge Base App</h1>
    <button @click="goToLogin">Login</button>
    <button @click="goToRegister">Register</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToLogin() {
      this.$router.push('/login')
    },
    goToRegister() {
      this.$router.push('/register')
    }
  }
}
</script>
