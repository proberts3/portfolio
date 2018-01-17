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
                  Misc. VR Projects</h1>
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

    <section>
      <v-container grid-list-xl>
        <v-layout row wrap justify-center class="my-5">
          <v-flex xs12 sm4>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout justify-center">
                <h2 class="headline">Info</h2>
              </v-card-title>
              <v-card-text>
asdf
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 sm4 offset-sm1>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout justify-center">
                <h2 class="headline">Contact</h2>
              </v-card-title>
              <v-card-text>
                Please feel free to leave a short message about anything with your contact info. I will not respond to unkown phone calls if you do not leave a message.
              </v-card-text>
              <v-list class="transparent">
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="blue--text text--lighten-2">phone</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>404-538-5064</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="blue--text text--lighten-2">work</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>Lucena Research, Atlanta, GA</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="blue--text text--lighten-2">email</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>phil@proberts.us</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
  </main>
</template>
<script>
export default {
  data () {
    return {
      cards: [
        { title: 'Sonic the Hedghog', content: 'Homework #1', src: '/img/ultrasonicpiano.jpg', link: '/vr/sonic', flex: 4 },
        { title: 'Virtual Reality', content: 'Game Design and Interactive Media', src: '/static/doc-images/cards/road.jpg', link: '/vr', flex: 4 },
        { title: 'Sonic the Hedghog', content: 'Homework #1', src: '/img/sonic.png', link: '/vr/sonic', flex: 4 },
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
