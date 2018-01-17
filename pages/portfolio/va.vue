<template>
  <main>
    <section>
      <v-layout
        column
        wrap
        class="my-5"
        align-center
      >
        <v-flex xs11 sm10 md8 class="my-3">
          <h1 class="white--text mb-2 display-1 text-xs-center">
          VA Tactile Overlays for Interface</h1>
          <p class="headline">
            Project researching and developing and application to assist veterans who are visually impared with memory and cognition tasks.
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
          <div class="text-xs">
            <img src="/img/ipad.jpeg" align="right" width="50%">
            <h2 class="space-top">About</h2>
            <p>
              This ongoing project is part of collaboration and volunteering work with the Atlanta VA Medical Center. The team was given a task of developing an iPad application or tool that can assist veterans with visual impairments learn and reason about spatialization tasks. I assited in the design and prototyping for the primary researchers.
            </p>
            <h2>Prototyping</h2>
            <p>
              I created several protopes of a tactile overlay for the iPad and the initial software. Early-on we determined that the gross motor swipes and guestures that are commonly used for accessibly touch-screen interfaces would be insufficient for our grid-based spatialization challenge. We went through several iterations of designs and feedback from participants, protoyping many cuts, shapes, and lay-outs. The final design uses braille-like bumps to define a "landscape" for the navigation tasks and fine cut-outs for pointing/orientation tasks.
            </p>
          </div>
        </v-flex>
      </v-layout>
    </section>
  </main>
</template>
<script>
export default {
  head: {
    title: 'VA ✌️'
  },
  data () {
    return {
    }
  }
}
</script>

<style>
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
