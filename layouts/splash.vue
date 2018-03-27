<template>
  <v-app id="vapp">
      <transition name="menu">
        <nuxt />
      </transition>
    <v-footer app id="vfoot" height="auto">
      <v-container text-xs-center>
       <v-layout row wrap justify-center>
         <v-flex xs12>
          <img src="/img/F_icon.svg" alt="Facebook" width="auto" height=" 42px"/>
          <img src="/img/psychology-logo.png" alt="Georgia Institute of Technology School of Psychology" width="auto" height=" 42px"/>
          <img src="/img/nasdaq.png" alt="Georgia Institute of Technology School of Psychology" width="auto" height=" 42px"/>
          <img src="/img/logo_wht.png" alt="Amac Accessibility" width="auto" height=" 42px"/>
          <img src="/img/amac.png" alt="Amac Accessibility" width="auto" height=" 42px"/>
          <img src="/img/gadoe.png" alt="Georgia Institute of Technology School of Psychology" width="auto" height=" 42px"/>
         </v-flex>
      </v-layout>
     </v-container>
  </v-footer>
  <div id="background"></div>
  </v-app>
</template>
<script>

</script>
<style scoped>
#vapp {
  background: rgba(0, 0, 0, 0);
}
#vfoot {
  background-color: rgba(0,51,74,0);
  animation: footin 3s ease 4s forwards;
  opacity: 0;
  height: 100%;
}
@keyframes footin {
  0% {
  opacity: 0;
  background: rgba(0,51,74,0);
  }
  100% {
  opacity: 1;
  background: rgba(0,51,74,1);
  }
}
#background {
  height: 100vh;
  width: 100vw;
  background-image: url("/img/pic.jpg");
  position: absolute;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center; 
  z-index: -1;
  animation: fadein 3s ease 4s forwards;
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
img {
  display: inline;
  padding: 0 20px 0 20px;
}
.container {
  margin: 0 auto;
}
</style>
