<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <!-- works the same way! -->
    <router-link :to="{ name: 'About' }">About</router-link> |
    <router-link :to="{ name: 'Jobs' }">Jobs</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
#app {
  color: #2c3e50;
  font-family: 'Bitter', serif;
  /*   margin-top: 60px; */
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  padding: 30px;

  a {
    border-radius: 4px;
    color: #2c3e50;
    font-weight: bold;
    padding: 10px;
    text-decoration: none;

    &.router-link-exact-active {
      color: #fff;
      background-color: #dc143c;
    }
  }
}
</style>
