<template>
  <h1>Jobs</h1>
  <div class="job" v-for="job in jobs" :key="job.id">
    <router-link :to="{ name: 'JobDetails', params: { id: job.id } }">
      <h2>{{ job.title }}</h2>
    </router-link>
  </div>
</template>

<script>
export default {
  name: '',

  data() {
    return {
      jobs: [
        { title: 'UX Developer', id: 1, details: 'lorem' },
        { title: 'Web Developer', id: 2, details: 'loremm' },
        { title: 'Vue Developer', id: 3, details: 'loremmm' },
      ],
    }
  },

  components: {
    //
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
