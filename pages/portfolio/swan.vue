<template>
  <main>
    <section>
      <v-parallax src="/img/ultrasonicpiano.jpg" height="550">
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
                  System for Wearable Audio Navigation</h1>
                  <p class="headline">
                    Developing an audio navigation system for situational awareness and direction
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
              Music
            </li>
            <li>
              Discovery & Invention
            </li>
            <li>
              Prototyping
            </li>
            <li>
              User Research
            </li>
          </ul>
          <div class="text-xs">
            <h2 class="space-top">About</h2>
            <p>
              For our Discovery & Invention class at Georgia Tech, my team was tasked with finding an exisitng project and/or materials, and hacking together an improvment on the concept or prototopye. We chose <a href="http://www.instructables.com/id/Ultrasonic-Pi-Piano-With-Gesture-Controls/" target="blank">this project. <sup>(opens new window)</sup></a> I assited in all parts, but my primary role was designing and creating the physical form of the prototpye. We discovered by testing the defualt prototpye that there was a lot of "bleed" between the sensors, resulting in double notes. Our contribution, using a little trigonometry and a little more trial-and-error, was to arc the sensors so that they didn't overlap which had the bonus of making the instrument more ergonomic.
            </p>
            <h2>Demo</h2>
            <div class="video-container">
              <iframe src="https://www.youtube.com/embed/eIBYThDnX6c" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
          </div>
          <h3 class="prelist-header">Team: </h3>
          <ul>
            <li>
              Phillip Roberts
            </li>
            <li>
              Linda Zhang
            </li>
            <li>
              Phenix Tang
            </li>
            <li>
              Vi Nguyen
            </li>
          </ul>
        </v-flex>
      </v-layout>
    </section>
  </main>
</template>
<script>
export default {
  head: {
    title: 'Arc Piano'
  },
  data () {
    return {
    }
  }
}
</script>

<style>
.video-container iframe,
.video-container object,
.video-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.video-container {
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 30px;
  height: 0;
  overflow: hidden;
}
Iframe {
width: 100%;
height:auto;
}
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
.overimage {
  text-shadow: 1px 1px 2px black, 2px 2px 5px black;
  background-color: rgba(0, 0, 0, 0.55);
  padding: 1.6em;
}
</style>
