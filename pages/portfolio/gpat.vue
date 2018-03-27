<template>
  <div>
    <section>
      <v-parallax src="/img/gpat.png" height="550">
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
                  Georgia Project for Assistive Technology</h1>
                  <p class="headline">
                    Master's Capstone Project with the Georgia Department of Education, AMAC Accessibility, and CATEA.
                  </p>
                  <p class="headline">
                    (In Progress)
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
              Univseral Design
            </li>
            <li>
              Accessibility
            </li>
            <li>
              Research
            </li>
            <li>
              Participatory Design
            </li>
            <li>
              Web Application
            </li>
          </ul>
          <div class="text-xs">
            <h2 class="space-top">Background</h2>
            <p>
              This project began when the Georgia Department of Education approached AMAC Accessibility needing to address problems with their current documents and process used to help students with disabilities. <a href="http://www.gpat.org/Georgia-Project-for-Assistive-Technology/Pages/default.aspx" target="_blank">Read more about the Georgia Project for Assistive Technology Here.</a>
            </p>
            <h2>Development</h2>
            <p>
              I begun by consulting the stakeholders of the Georgia Department of Education,  from the state level, to the Atlanta Metro Consortium, and school districts. Using Universal Design Principles, we used the requirements and input from teachers and accessibility experts to design a process for student accesibility considerations. This uses the The International Classification of Functioning, Disability and Health (ICF model) which, to our knowledge, is one of the first programmatic applications of the ICF model. Currently we are testing our protoypes and gathering feedback from teachers.
            </p>
          </div>
        </v-flex>
      </v-layout>
    </section>
  </div>
</template>
<script>
export default {
  head: {
    title: 'GPAT 👩🏻‍🏫'
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
.headline {
  text-align: center;
}
a {
  color: rgb(12, 9, 117);
}
.overimage {
  text-shadow: 1px 1px 2px black, 2px 2px 5px black;
  background-color: rgba(0, 0, 0, 0.55);
  padding: 1.6em;
}
</style>
