<template>
  <v-footer app>
    <span>&copy;{{date}} Phillip Isaac Roberts</span> 
    <v-spacer />
      <v-btn
        small
        flat
        round
        href="https://www.linkedin.com/in/uxphilroberts"
        target="_blank"
        class="blue darken-1 white--text main-nav elevation-1"
      >
          <img src="/img/linkedin.svg">
      </v-btn>
    <v-btn
      small
      href="mailto:piroberts@gatech.edu"
      flat
      class="blue darken-1 white--text main-nav elevation-1"
      exact
      round
      router
    >
        <v-icon>email</v-icon>
        <span class="screen-reader">piroberts@gatech.edu</span>
    </v-btn>
    <v-btn
      small
      href="tel:+14045385064"
      flat class="blue darken-1 white--text main-nav elevation-1"
      exact
      round
      router
    >
      <v-icon>phone</v-icon>
      <span class="screen-reader">&nbsp;404.538.5064</span>
    </v-btn>
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

<style scoped>
.btn {
  border-radius: 50%;
  min-width: 0;
  height: 40px;
  width: 40px;
  border-bottom: 2px solid rgb(10, 88, 171) !important;
}
.btn:focus {
  outline: 1px #000 dotted;
}
.btn::before {
  content: " " !important;
  position: absolute !important;
  top: 0px !important;
  left: 0px !important;
  right: 0px !important;
  bottom: 0px !important;
  border-radius: 24px;
  border-bottom: 1px solid rgb(85, 160, 241) !important;
}
.screen-reader {
  position: absolute !important;
  clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
  clip: rect(1px, 1px, 1px, 1px);
}
</style>
