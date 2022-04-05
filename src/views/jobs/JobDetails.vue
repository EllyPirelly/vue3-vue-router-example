<template>
  <h1>Job Details Page</h1>
  <!-- <p>The job id is {{ $route.params.id }}</p> -->
  <p>The job id is {{ id }}</p>
</template>

<script>
export default {
  name: '',

  data() {
    return {
      id: this.$route.params.id,
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
