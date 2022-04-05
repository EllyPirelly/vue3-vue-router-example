<template>
  <h1>Jobs</h1>
  <div v-if="jobs.length">
    <div class="job" v-for="job in jobs" :key="job.id">
      <router-link :to="{ name: 'JobDetails', params: { id: job.id } }">
        <h2>{{ job.title }}</h2>
      </router-link>
    </div>
  </div>
  <div v-else>
    <p>Loading jobs...</p>
  </div>
</template>

<script>
export default {
  name: '',

  data() {
    return {
      jobs: [],
    }
  },

  mounted() {
    /* asynchronuous, returns a promise */
    fetch('http://localhost:3000/jobs')
      /* also asynchronuous, also returns a promise */
      .then((response) => response.json())
      .then((data) => (this.jobs = data))
      /* catch a message if there's an error */
      .catch((err) => console.log(err.message))
  },
}
</script>

<style lang="scss">
.job {
  h2 {
    background-color: #f4f4f4;
    border-radius: 10px;
    color: #444;
    cursor: pointer;
    margin: 10px auto;
    max-width: 600px;
    padding: 20px;

    &:hover {
      background-color: #ddd;
    }
  }

  a {
    text-decoration: none;
  }
}
</style>
