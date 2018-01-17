<template>
  <v-container fluid grid-list-md>
    <v-layout column justify-center align-center>
      <h1>Portfolio</h1>
    </v-layout>
    <v-layout row wrap>
      <v-flex
        v-bind="{ [`sm${card.flex}`]: true }"
        v-for="card in cards"
        :key="card.title"
      >
        <v-card>
          <v-card-media
            :src="card.src"
            height="200px"
          >
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <h3 class="headline white--text" v-text="card.title"></h3>
                  <p v-text="card.content" class="text-xs-center"></p>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-media>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue-grey lighten-4 black--text" :to="card.link">
              Read More<span class="screen-reader">&nbsp; about {{card.title}}</span>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  head: {
    title: 'Portfolio 📱'
  },
  data () {
    return {
      cards: [
        { title: 'GPAT', content: 'Project with the Georgia Department of Education improving and developing tools for teachers to manage and assist students with disabilities.', src: '/img/gpat.png', link: '/portfolio/gpat', flex: 4 },
        { title: 'Virtual Reality', content: 'Game Design and Interactive Media', src: '/static/doc-images/cards/road.jpg', link: '/vr', flex: 4 },
        { title: 'VA Tactile Interface', content: 'Reserch and development of tasks to improve the memory and function of veterans with visual impairment.', src: '/img/ipad.jpeg', link: '/portfolio/va', flex: 4 },
        { title: 'SWAN', content: 'Researching, Designing, and developing a system for wearable audio navigation.', src: '/img/vincent.jpg', link: '/portfolio/swan', flex: 4 },
        { title: 'Ultrasonic Arc Piano', content: 'Gesture based musical instrument.', link: '/portfolio/piano', src: '/img/ultrasonicpiano.jpg', flex: 4 },
        { title: 'Potluck', content: 'UX design/research for students trying new foods and resturants', src: '/img/potluck.png', flex: 4 }
      ]
    }
  }
}
</script>

<style>
.card-margin {
  margin: 12px;
}
.card__media__content {
  background-color: rgba(0,0,0, 0.5);
  text-shadow: 1px 1px 2px black, 2px 2px 5px black;
}
</style>
