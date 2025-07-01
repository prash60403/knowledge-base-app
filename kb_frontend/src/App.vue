<template>
  <div id="App">
    <header>
      <div class="brand">🧠 KnowledgeBaseApp</div>
      <nav>
        <router-link to="/PrashLogin">Login</router-link>
        <router-link to="/CustomerRegister">Sign Up</router-link>
      </nav>
    </header>

    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'AppRoot'
}
</script>

<style scoped>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
  margin: 0;
  padding: 0;
}

/* Header */
header {
  background-color: #fff;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.brand {
  font-size: 1.5rem;
  font-weight: bold;
  color: #2c3e50;
}

/* Navigation Links */
nav a {
  margin-left: 1rem;
  color: #42b983;
  text-decoration: none;
  font-weight: 500;
}

nav a:hover {
  text-decoration: underline;
}

/* Main Content */
main {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}
</style>
