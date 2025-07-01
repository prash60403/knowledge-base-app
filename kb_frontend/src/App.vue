<template>
  <div id="app">
    <router-view />
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
  background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  color: #42b983;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
