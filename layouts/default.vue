<template>
    <v-app id="container" dark>
      <v-toolbar fixed app class="blue-grey darken-3" clipped-left>
        <v-toolbar-side-icon @click="toggleDrawer"></v-toolbar-side-icon>
        <v-spacer />
        <v-toolbar-title v-text="title"></v-toolbar-title>
        <v-spacer />
        <span id="linkedin">
          <a href="https://www.linkedin.com/in/uxphilroberts" target="_blank">
            <img src="/img/linkedin.svg">
          </a>
        </span>
      </v-toolbar>
      <v-navigation-drawer
        v-model="drawer"
        clipped
        fixed
        app
        class="blue-grey lighten-2"
        temporary
      >
        <v-list class="blue-grey lighten-2">
          <v-list-tile
            router
            :to="navItem.to"
            :key="i"
            v-for="(navItem, i) in navItems"
            exact
          >
            <v-list-tile-action>
              <v-icon v-html="navItem.icon" class="black--text"></v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-text="navItem.title" class="black--text"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <v-content class="blue-grey darken-4">
        <!-- communicates page location -->
        <div class="screen-reader" role="alert" aria-atomic="true" aria-live="assertive">Location: {{this.$nuxt.$route.name}}
        </div>
        <!-- content -->
        <transition name="slide-fade">
          <nuxt transition="slide-x-transition" id="content" />
        </transition>
      </v-content>
      <app-footer />
    </v-app>
</template>

<script>
import AppFooter from '../components/AppFooter'
export default {
  data () {
    return {
      drawer: false,
      title: 'Phillip Isaac Roberts',
      routerLocation: this.$router.currentRoute.path,
      dont: true
    }
  },
  computed: {
    navItems: function () {
      return this.$store.getters.navItems
    }
  },
  methods: {
    toggleDrawer: function () {
      this.drawer = !this.drawer
      this.routerLocation = this.$router.currentRoute.path
    }
  },
  components: {
    AppFooter
  }
}
</script>

<style>
.slide-fade-enter-active {
  transition: all 0.8s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(30px);
  opacity: 0;
}
#linkedin {
  margin-top: .4rem;
}
.screen-reader {
  position: absolute !important;
  clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
  clip: rect(1px, 1px, 1px, 1px);
}
</style>
