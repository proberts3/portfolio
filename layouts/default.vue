<template>
<div>
  <a href="#content" class="skip">Skip to content</a>
    <v-app id="container">
      <v-toolbar fixed app clipped-left>
        <v-toolbar-side-icon @click="toggleDrawer" class=" hidden-md-and-up"></v-toolbar-side-icon>
        <v-spacer class="hidden-sm-and-up"/>
        <v-toolbar-title v-text="title"></v-toolbar-title>
        <v-spacer class="hidden-xs-and-down"/>
        <ul
          class="nobullets hidden-sm-and-down"
          :key="i"
          v-for="(navItem, i) in navItems"
          exact>
          <li>
            <v-btn flat class="blue darken-1 white--text main-nav elevation-1" exact round router :to="navItem.to"><v-icon v-html="navItem.icon"></v-icon>&nbsp;{{navItem.title}}</v-btn>
          </li>
        </ul>
      </v-toolbar>
      <v-navigation-drawer
        v-model="drawer"
        clipped
        fixed
        app
        temporary
        dark
        class="hidden-md-and-up"
      >
        <v-list>
          <v-list-tile
            router
            :to="navItem.to"
            :key="i"
            v-for="(navItem, i) in navItems"
            exact
          >
            <v-list-tile-action>
              <v-icon v-html="navItem.icon"></v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-text="navItem.title"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <v-content id="content">
        <!-- communicates page location -->
        <div class="screen-reader" role="alert" aria-atomic="true" aria-live="assertive">Location: {{this.$nuxt.$route.name}}
        </div>
        <!-- content -->
        <transition name="slide-fade" mode="in-out">
          <nuxt />
        </transition>
      </v-content>
      <app-footer />
    </v-app>
</div>      
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

<style scoped>
nav {
  border-top: 3px solid #1976D2 !important;
}
#content {
  background: linear-gradient(#BBDEFB, #33bcfc);
}
.slide-fade-enter-active {
  transition: all 0.5s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(200px);
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
.skip {
  background-color: #000;
  color: #fff;
  z-index: 1001;
  padding: 1rem;
  position: absolute !important;
  clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
  clip: rect(1px, 1px, 1px, 1px); 
}
.skip:focus {
  background-color: #000;
  color: #fff;
  z-index: 1001;
  padding: 1rem;
  margin: 0.3rem;
  border-radius: 12px;
  position: absolute;
  display: block;
  width: 100%;
  clip: auto;
}
.nobullets {
  list-style-type: none;
}
.btn {
  letter-spacing: 0.1em;
  border-bottom: 2px solid rgb(10, 88, 171) !important;
}
.btn:focus {
  outline: 1px #000 dotted;
}
.btn:hover {
  box-shadow: 0 3px 3px -2px rgba(0, 0, 0, 0.2), 0 2px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 4px 0 rgba(0, 0, 0, 0.12) !important;
  transition: all 0.3s ease;
  transform: scale(1.005);
}
.btn::before {
  content: " " !important;
  position: absolute !important;
  top: 0px !important;
  left: 0px !important;
  right: 0px !important;
  bottom: 0px !important;
  border-radius: 24px;
  border-bottom: 1px solid rgb(85, 160, 241) !important;
}
.toolbar__content {
  border-top: 4px solid;
  border-color:#1E88E5;
}
.tagline {
  font-size: 2.2rem;
}
.projects {
  margin-bottom: 1.6em;
}
.margin-hero {
  margin: 0 auto;
}
</style>
