<template>
  <div>
      <v-layout column wrap align-center>
        <v-flex xs12 sm10>
            <h1 class="mb-2 display-3 text-xs-center">
            System for Wearable Audio Navigation</h1>
            <p class="headline">
              Developing an audio navigation system for situational awareness and direction
            </p>
            <img src="/img/grouppic.jpg" width="100%" height="auto" alt="Swan team fall 2017. Phillip Roberts, Jeff Wilson, Vincent Martin, Upol Ehsawn">
        </v-flex>

        <v-flex xs11 sm10 md8 class="my-3 keywords">
          <h3 class="prelist-header">Keywords: </h3>
          <ul>
            <li>
              Accessibility
            </li>
            <li>
              Research
            </li>
            <li>
              Prototyping
            </li>

          </ul>
          <div class="text-xs">
            <h2 class="space-top">Background</h2>
            <p>
              SWAN, or the System for Wearable Audio Navigation, was originally conceived through the work and research of Bruce Walker, Jeff Lindsay, Jeff Wilson, and others in the Sonification Lab at Georgia Tech. The goal of SWAN was to provide an audio navigation system that could provide guidance to a person who is visually impaired, either situationally or permanently, so that they may better navigate complicated environments. This first iteration of SWAN included a system of navigation devices and sensors worn in a backpack and on the body. A virtual reality prototype was also used to rapidly test for navigation questions and concepts in a safe and configurable environment.
            </p>
            <h2>VR Prototype</h2>
            <p>
               We have conducted testing using a virtual reality simulation of various scenarios. This enables us to rapidly test and modify our prototype, free of the hazards of the real-world envrionment. We have designed the prototype with the input of visually impaired users, but can also simulate various visual conditions on users enabling us to gather data from a variety of participants for easier testing.
            </p>
          </div>
          <h3 class="prelist-header">Team: </h3>
          <ul>
            <li>
              Phillip Roberts
            </li>
            <li>
              Jeff Wilson
            </li>
            <li>
              Vincent Martin
            </li>
            <li>
              Upol Ehsawn
            </li>
          </ul>
        </v-flex>
      </v-layout>
  </div>
</template>
<script>
export default {
  head: {
    title: 'SWAN 🎧'
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
  color: #b4e9ff !important;
}
.headline {
  text-align: center;
}
</style>

