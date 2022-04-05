<template>
  <h1>Jobs</h1>
  <div v-for="job in jobs" :key="job.id">
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
//
</style>
