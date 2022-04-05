<template>
  <h1>Job Details Page</h1>
  <p>The job id is {{ id }}</p>
  <!-- instead of solving this via data object, this can be used: -->
  <!-- <p>The job id is {{ $route.params.id }}</p> -->
</template>

<script>
export default {
  /* id can be passed via data object OR via props, defined in router */
  props: ['id'],

  /*   data() {
    return {
      id: this.$route.params.id,
    }
  }, */

  components: {
    //
  },
}
</script>

<style lang="scss">
//
</style>
