<template>
  <div>
    <section>
      <v-layout
        column
        wrap
        class="my-5"
        align-center
      >
        <v-flex xs11 sm10 md8 class="my-3">
          <h1 class=" mb-2 display-3 text-xs-center">
            Tactile Overlays for Visual Impairment Research</h1>
          <p class="headline">
            Project researching and developing an application to assist veterans who are visually impaired with memory and cognition tasks.
          </p>
          <div class="keywords">
          <h3 class="prelist-header">Keywords: </h3>
            <ul>
              <li>
                Research
              </li>
              <li>
                Physical Prototyping
              </li>
              <li>
                Accessibility
              </li>
            </ul>
          </div>
          <v-layout class="text-xs" row wrap justify-space-around>
            <v-flex xs12 md7>
            <h2 class="space-top">About</h2>
            <p>
              This ongoing project is a volunteer collaboration with the Atlanta VA Medical Center. The team was given a task of developing an iPad application or tool that can assist veterans with visual impairments learn and reason about spatialization tasks. I assited in the design and prototyping for the primary researchers.
            </p>
            <h2>Prototyping</h2>
            <p>
              I created several prototypes of a tactile overlay for the iPad and the initial software. Early-on we determined that the gross motor swipes and gestures that are commonly used for accessible touch-screen interfaces would be insufficient for our grid-based spatialization challenge. We went through several iterations of designs and feedback from participants, prototyping  many cuts, shapes, and layouts. The final design uses braille-like bumps to define a "landscape" for the navigation tasks and fine cut-outs for pointing/orientation tasks.
            </p>
            </v-flex>
            <v-flex xs12 md5>
              <video controls="controls" src="/img/ipad.mov" align="center" width="400px" name="VA Tactile Interface" />
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </section>
  </div>
</template>
<script>
export default {
  head: {
    title: 'Tactile Overlays 👇'
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
video {
  display: block;
  margin: 0 auto;
}
img {
  padding-left: 1.2rem;
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
