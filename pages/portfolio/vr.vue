<template>
  <main>
    <section>
      <v-parallax src="/img/ultrasonicpiano.jpg" height="500">
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
                  Phillip Isaac Roberts</h1>
                  <p class="headline">Research <span aria-hidden="true">=></span> Design <span aria-hidden="true">=></span> Accessibility <span aria-hidden="true">=></span></p> <p class="headline">Build</p>
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
        <v-flex xs8 sm6 m4 class="my-3">
          <div class="text-xs-center">
            <p>
            <img class="circle" src="/img/headshot.jpg" alt="Phillip Roberts headshot" width="200rem" height="auto" align="center"></p>
            <p class="subheading">
              UX Designer and Developer in Atlanta, Georgia. Currently UX/Marketing at Lucena Research and a graduate student at Georgia Institute of Technology, MS-HCI. Pursing full-time opportunities this May 2018.
            </p>
          </div>
        </v-flex>
        <v-container fluid grid-list-md>
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
        </v-flex>
      </v-layout>
    </section>
  </main>
</template>
<script>
export default {
  data () {
    return {
      cards: [
        { title: 'GPAT', content: 'Project with the Georgia Department of Education improving tools for teachers to manage and assist students with disabilities.', src: '/static/doc-images/cards/house.jpg', link: '/gpat', flex: 4 },
        { title: 'Virtual Reality', content: 'Game Design and Interactive Media', src: '/static/doc-images/cards/road.jpg', link: '/vr', flex: 4 },
        { title: 'VA Tactile Interface', content: 'Reserch and development of tasks to improve the memory and function of veterans with visual impairment.', src: '/img/ipad.jpeg', flex: 4 },
        { title: 'SWAN', content: 'Researching, Designing, and developing a system for wearable audio navigation.', src: '/img/vincent.jpg', flex: 4 },
        { title: 'Ultrasonic Arc Piano', content: 'Gesture based musical instrument.', src: '/img/ultrasonicpiano.jpg', flex: 4 },
        { title: 'Potluck', content: 'App for students trying new foods and resturants', src: '/static/doc-images/cards/road.jpg', flex: 4 }
      ]
    }
  }
}
</script>

<style>
.margin-hero {
  margin: 0 auto;
}
.circle {
  border-radius: 50%;
}
.headline {
  text-align: center;
}
.overimage {
  text-shadow: 1px 1px 2px black, 2px 2px 5px black;
  background-color: rgba(0, 0, 0, 0.55);
  padding: 1.6em;
}
.card__media__content {
  background-color: rgba(0,0,0, 0.5);
  text-shadow: 1px 1px 2px black, 2px 2px 5px black;
}
</style>
