<template>
  <div>
    <section>
      <v-parallax src="/img/dashboard.png" height="550" style="blur">
        <v-layout
          column
          align-center
          justify-center
          class="white--text"
        >
        <div class="overimage">
          <v-container grid-list-xl>
            <v-layout row wrap>
              <v-flex class="margin-hero">
                <div>
                  <h1 class="white--text mb-2 display-1 text-xs-center">
                  Nasdaq Analytics Hub Resource Center</h1>
                  <p class="headline">
                    One-stop-shop for information about investment strategies.
                  </p>
                </div>
              </v-flex>
            </v-layout>
          </v-container>
        </div>
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-layout
        column
        wrap
        class="my-5"
        align-center
      >
        <v-flex xs11 sm10 md8 class="my-3 keywords">
          <h3 class="prelist-header">Keywords: </h3>
          <ul>
            <li>
              Investment
            </li>
            <li>
              Design
            </li>
            <li>
              Prototyping
            </li>
            <li>
              React.js
            </li>
          </ul>
          <div class="text-xs">
            <h2 class="space-top">About</h2>
            <p>
              For this project, we (Lucena Research) were approached by Nasdaq to develop a resource for their intranet to assist their sales people. This resource center is used to help sell the marketing strategies generated for Nasdaq by use and our partners. These strategies are helpful for market investors seeking machine learning validated and optomized market strategies. For more information please contact <a href="www.lucenaresearch.com" target="_blank" rel="nofollow">Lucena Research</a>. 
            </p>
          </div>
          <h3 class="prelist-header">Disclaimer: </h3>
          <p>
            All trademarks, rights, software, and information is property of their respective owners. This page is for my personal portfolio only and does not reflect on Lucena Research, the Nasdaq Analytics Hub, or any partners. For investing advice, please contact a certified investment professional.
          </p>
        </v-flex>
      </v-layout>
    </section>
  </div>
</template>
<script>
export default {
  head: {
    title: 'Nasdaq Sales Resource 📈'
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.space-top {
  margin: 1rem 0 0 0;
}
.prelist-header {
  display: inline;
}
.keywords ul {
  display: inline;
}
.keywords li {
  display: inline-block;
  margin: 0 0 0 1rem;
}
a {
  color: #072697 !important;
}
.headline {
  text-align: center;
}
.overimage {
  text-shadow: 1px 1px 2px black, 2px 2px 5px black;
  background-color: rgba(0, 0, 0, 0.915);
  padding: 1.6em;
}
</style>
