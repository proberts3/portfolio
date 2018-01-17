<template>
<v-container>
  <v-layout column justify-center align-center>
    <h1>Accessibility</h1>
    <v-flex xs12 sm10 md10>
      <v-card>
        <v-card-title class="headline blue-grey darken-3">
          <v-icon class="white--text">accessible</v-icon>
          <v-spacer />
          This Website
          <v-spacer />
        </v-card-title>
        <v-card-text>
          <p>This site aims to comply with W3C-WCAG 2.0 AA standards and AAA when possible. Site is under development and is compatiable with the latest verisions of NVDA on FireFox and JAWS on IE 11. There may be minor compatibility issues with VoiceOver on OSX or if Javascript is disabled. Please send an email with a description of any problems.</p>
        </v-card-text>
      </v-card>
      <v-card class="card2">
        <v-card-title class="headline blue-grey lighten-2 black--text">
          <v-icon class="black--text">perm_phone_msg</v-icon>
          <v-spacer />
          Consulting
          <v-spacer />
        </v-card-title>
        <v-card-text>
          <p>Please feel free to reach-out with any questions. I focus in programatic testing and code review and usability testing with screen readers and other AT.</p>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>
<style>
.card2 {
  margin-top: 0.8rem;
}
</style>
<script>
export default {
  head: {
    title: 'Accessibility 🤓'
  }
}
</script>
