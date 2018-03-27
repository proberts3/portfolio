<template>
<div class="psuedo__main">
  <v-content class="fill__container">
    <v-container fill-height fluid style="padding:0">
      <v-layout row justify-center align-center wrap>
        <v-flex xs12>
          <svg width="200px" height="260px" viewBox="0 0 200 250" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g stroke-width="1" fill="none" fill-rule="evenodd"   backface-visibility="hidden">
                <path
                  d="M36.3333333,250 L36,98"
                  id="path1"
                  stroke-width="8"
                  stroke-linecap="round"
                ></path>
                <path
                  d="M112.761348,38 C184.825712,48.8548783 178.607418,163 98.9591813,163 C20.0095707,163 15.1571029,50.5367111 85.2703036,38"
                  id="path2" stroke-width="8" stroke-linecap="round"></path>
                <path
                  d="M100,75 C100,25.6666667 100,1 100,1"
                  id="path3"
                  stroke-width="8"
                  stroke-linecap="round"
                ></path>
                <path
                  d="M190,216 L145,145"
                  id="path4"
                  stroke-width="8"
                  stroke-linecap="round"
                ></path>
            </g>
          </svg>
        </v-flex>
        <v-flex xs12 class="fadein">
          <div class="textbox">
            <div class="innerbox">
            <h1>Phillip Isaac Roberts</h1>
            <p>User Insights, Design, Accessibility</p>
            <v-btn class="blue darken-4 white--text main-nav elevation-1" exact round router href="/portfolio">Enter</v-btn>
            </div>
          </div>
        </v-flex>
    </v-layout>
  </v-container>
  </v-content>
</div>
</template>
<script>
export default {
  layout: 'splash',
  head: {
    title: 'Phillip Isaac Roberts'
  }
}
</script>

<style scoped>
.fill__container {
  height: 85vh;
}
.psuedo__main {
  height: 100%;
}
.fadein {
  animation: fadein 3s ease 5s forwards;
  opacity: 0;
}
@keyframes fadein {
  0% {
  opacity: 0;
  }
  100% {
  opacity: 100;
  }
}
.textbox {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex: 1 1 auto;
  text-align: center;
}
.innerbox {
  flex-basis: 30%;
  padding: 24px;
  border-radius: 14px;
  background-color: rgba(193, 229, 255, 0.9);
}
#path1 {
  stroke-dasharray: 800;
  stroke-dashoffset: 800;
  animation: dash 1s ease-in forwards;
  animation-delay: 0.7s;
  stroke: #1976D2;
  box-shadow: 1px 2px 3px #fff;
  backface-visibility: hidden;
}
@keyframes dash  {
  from {
    stroke-dashoffset: 800;
  }
  to {
    stroke-dashoffset: 0;
  }
}
#path2 {
  stroke-dasharray: 800;
  stroke-dashoffset: 800;
  animation: dash 2s ease-in forwards;
  animation-delay: 1.2s;
  stroke: #1976D2;
  backface-visibility: hidden;
}
#path3 {
  stroke-dasharray: 800;
  stroke-dashoffset: 800;
  animation: dash 2s ease-in forwards;
  animation-delay: 2.8s;
  stroke: #1976D2;
  backface-visibility: hidden;
}
#path4 {
  stroke-dasharray: 800;
  stroke-dashoffset: 800;
  animation: dash 2s ease-in forwards;
  animation-delay: 3.3s;
  stroke: #1976D2;
  backface-visibility: hidden;
}
.blue {
  border-bottom: 2px solid #083281 !important;
}
.blue:focus {
  outline: 1px dotted #000;
}

.blue::before {
  content: " " !important;
  position: absolute !important;
  top: 0px !important;
  left: 0px !important;
  right: 0px !important;
  bottom: 0px !important;
  border-radius: 24px;
  border-bottom: 1px solid rgb(23, 104, 190) !important;
}
svg {
  display: block;
  margin: 0 auto;
  padding: 0;
}
a {
  display: inline-block;
  margin: 0 auto;
  background-color: azure;
  padding: 12px 64px 12px 64px;
  font-size: 1.1em;
}
.center {
  display: block;
  text-align: center;
}
.center {
  text-align: center;
}
</style>
