<template>
  <v-layout
    column
    wrap
    align-center
  >
    <v-flex md12> 
      <v-container grid-list-xl>
        <v-layout column wrap align-center>
          <v-flex text-xs-center xs12 md8>
            <v-card class="intro__card">
               <v-card-title class="blue lighten-4 black--text intro__title">
                 <h1>About Me</h1>
                </v-card-title>
            <v-spacer />
              <p>I am a UX Designer with 4 years of Front-End design/development experience and 3 years in Regulatory & Technical Consulting Services. Currently working at Sonification Lab (Psychology: Georgia Institute of Technology) & Lucena Research Quantitative Analytics. Graduating this May with my Master's of Science of Human-Computer Interaction from Georgia Institute of Technology.</p>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      <v-container fluid grid-list-md>
        <v-layout row wrap>
          <v-flex
            v-bind="{ [`sm4 md3`]: true }"
            v-for="card in cards"
            :key="card.title"
          >
            <v-card class="blue lighten-4 popout__card" router :to="card.link" hover>
              <img :src="card.src" width="100%">
              <v-card-title class="grey lighten-4">
                <h3 class="headline" v-text="card.title"></h3>
                <p v-text="card.content" class="text-xs"></p>
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  head: {
    title: 'Portfolio 📱'
  },
  computed: {
    cards: function () {
      return this.$store.getters.cards
    }
  }
}
</script>

<style scoped>
.card-margin {
  margin: 12px;
}
.intro__card {
  margin: 12px;
  border-radius: 14px;
}
.intro__card >>> p {
  margin: 24px;
  padding-bottom: 24px;
}
.card >>> img {
  margin-bottom: -6px;
}
h1 {
  margin: 0 auto;
}
.intro__title {
    border-bottom: 2px solid #1976D2 !important;
}
.screen-reader {
  position: absolute !important;
  clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
  clip: rect(1px, 1px, 1px, 1px);
}
</style>
