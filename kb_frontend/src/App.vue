<template>
  <div id="app">
    <header class="header">
      <h1>📘 Knowledge Base App</h1>
      <nav class="nav-buttons">
        <router-link to="/login">Login</router-link>
        <router-link to="/register">Register</router-link>
      </nav>
    </header>

    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'AppRoot'
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background: #f5f7fa;
}

#app {
  text-align: center;
}

.header {
  background-color: #42b983;
  color: white;
  padding: 20px;
}

.header h1 {
  margin: 0 0 10px 0;
}

.nav-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.nav-buttons a {
  color: white;
  font-weight: bold;
  text-decoration: none;
  padding: 8px 16px;
  background-color: #2c3e50;
  border-radius: 4px;
}

.nav-buttons a:hover {
  background-color: #1d2a36;
}

.main-content {
  padding: 40px;
}
</style>
