export const state = () => ({
  drawer: true,
  sidebar: true,
  navItems: [
    { icon: 'home', title: 'Home', to: '/' },
    { icon: 'apps', title: 'Portfolio', to: '/portfolio' },
    { icon: 'accessible', title: 'Accessibility', to: '/accessibility' }
  ]
})

export const getters = {
  sidebar: (state) => {
    return state.sidebar
  },
  drawer: (state) => {
    return state.drawer
  },
  navItems: (state) => {
    return state.navItems
  }
}

export const mutations = {
  toggleSidebar (state) {
    state.sidebar = !state.sidebar
  },
  toggleDrawer (state) {
    state.drawer = !state.drawer
  }
}

/* asynchronus */
export const actions = {
  toggleDrawer: (context) => {
    context.commit('toggleDrawer')
  }
}
