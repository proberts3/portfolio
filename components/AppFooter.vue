<template>
  <v-footer app>
    <span>&copy; {{date}} Phillip Isaac Roberts - phil@philroberts.us</span>
  </v-footer>
</template>

<script>
export default {
  computed: {
    date: function () {
      return (new Date()).getFullYear()
    }
  }
}
</script>

<style>

</style>
