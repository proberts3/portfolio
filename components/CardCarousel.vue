<template>
  <v-flex
    aria-atomic="true"
    aria-live="polite"
    dflex xs10 md4
      >
      <v-layout justify-center>
        <transition name="bounce">
          <v-card class="blue lighten-4 popout__card"
            v-if="show"
            router
            :to="cards[0].link"
            hover
          >
            <img :src="cards[0].src" width="100%" :alt="cards[0].alt">
            <v-card-title class="grey lighten-4">
              <h3 class="headline" v-text="cards[0].title"></h3>
              <p v-text="cards[0].content" class="text-xs"></p>
            </v-card-title>
          </v-card>
        </transition>
      </v-layout>
      <v-layout row wrap justify-center>
        <v-btn fab small @click="$store.dispatch('prev'), fader()" round>
            <v-icon>keyboard_arrow_left</v-icon>
          <span class="screen-reader">project</span>
        </v-btn>
        <v-btn fab small @click="$store.dispatch('next'), fader()" round>
          <v-icon>keyboard_arrow_right</v-icon>
          <span class="screen-reader">next project</span>
        </v-btn>
      </v-layout>
  </v-flex>
</template>

<script>
export default {
  data () {
    return {
      cardOpacity: 1,
      show: true
    }
  },
  computed: {
    cards: function () {
      return this.$store.getters.cards
    }
  },
  methods: {
    fader: function () {
      this.show = !this.show
      setTimeout(this.toggleShow, 300)
    },
    toggleShow: function () {
      this.show = !this.show
    }
  }
}
</script>

<style scoped>
.card {
  border-radius: 16px;
  border-bottom:4px solid #1E88E5;
}
a .card :hover {
  box-shadow: 2px 5px 5px black;
}
.card .toolbar__content {
  border-radius: 16px;
}
.popout__card {
  max-width: 94%;
  position:relative;
}
.popout__card {
  margin-top: 200px;
}

.popout__card img {
  margin-top: -200px;
  margin-bottom: -6px;
}
.bounce-enter-active {
  animation: bounce-in .3s;
}
.bounce-leave-active {
  animation: bounce-in .3s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0.2);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

</style>
