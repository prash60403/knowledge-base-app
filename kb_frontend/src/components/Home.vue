<template>
  <div class="home">
    <h1>Welcome to Knowledge Base App</h1>
    <div class="button-group">
      <button @click="goToLogin">Login</button>
      <button @click="goToRegister">Register</button>
    </div>
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

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #e0f7fa, #80deea);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

h1 {
  color: #006064;
  margin-bottom: 30px;
  font-size: 2.2rem;
  text-align: center;
}

.button-group {
  display: flex;
  gap: 20px;
}

button {
  padding: 10px 25px;
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
</style>
