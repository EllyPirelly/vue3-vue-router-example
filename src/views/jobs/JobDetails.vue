<template>
  <div v-if="job">
    <h1>{{ job.title }}</h1>
    <p>The job id is {{ id }}</p>
    <p>{{ job.details }}</p>
  </div>
  <div v-else>
    <p>
      Loading job details...
      <br />
      Did you <i>maybe</i> forgot to run
      <span class="command">npx json-server --watch data/db.json</span> to fire
      up JSON Server?...
      <br />
      Do it. I'll wait.
    </p>
  </div>
</template>

<script>
export default {
  props: ['id'],

  data() {
    return {
      job: null,
    }
  },

  mounted() {
    /* asynchronuous, returns a promise */
    fetch('http://localhost:3000/jobs/' + this.id)
      /* also asynchronuous, also returns a promise */
      .then((response) => response.json())
      .then((data) => (this.job = data))
      /* catch a message if there's an error */
      .catch((err) => console.log(err.message))
  },
}
</script>

<style lang="scss">
.command {
  color: purple;
  font-weight: bold;
  line-height: 1.5em;
}
</style>
