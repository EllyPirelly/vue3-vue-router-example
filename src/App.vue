<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <!-- works the same way! -->
    <router-link :to="{ name: 'About' }">About</router-link>
    <router-link :to="{ name: 'Jobs' }">Jobs</router-link>
  </div>

  <button @click="redirect">Redirect</button>
  <button @click="back">Go back</button>
  <button @click="forward">Go forward</button>

  <router-view />
</template>

<script>
export default {
  methods: {
    redirect() {
      this.$router.push({ name: 'Home' })
    },

    back() {
      this.$router.go(-1)
    },

    forward() {
      this.$router.go(1)
    },
  },
}
</script>

<style lang="scss">
#app {
  color: #2c3e50;
  font-family: 'Bitter', serif;
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

    &:hover {
      text-decoration: underline;
      text-underline-offset: 2px;
      text-decoration-thickness: 2px;
    }

    &.router-link-exact-active {
      color: #fff;
      background-color: #dc143c;
    }
  }

  a:not(:last-child) {
    margin-right: 10px;
  }
}

button {
  border: none;
  border-radius: 4px;
  margin: 0 10px;
  padding: 10px;

  &:hover {
    background-color: #ddd;
  }
}
</style>
