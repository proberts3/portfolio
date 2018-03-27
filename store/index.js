export const state = () => ({
  drawer: true,
  sidebar: true,
  navItems: [
    { icon: 'apps', title: 'Portfolio', to: '/portfolio' },
    { icon: 'description', title: 'Resume', to: '/resume' },
    { icon: 'accessible', title: 'Accessibility', to: '/accessibility' }
  ],
  cards: [
    {
      title: 'Nasdaq Resource Center',
      content: `Front-End resource about investment strategies for Nasdaq Analytics Hub intranet.`,
      src: '/img/ndaqscreen.png',
      link: '/portfolio/nasdaq',
      alt: 'Screenshots of nasdaq analytics hub intranet resource.',
      flex: 3
    },
    {
      title: 'GPAT',
      content: `Capstone Project with the Georgia Department of Education helping students with disabilities.`,
      src: '/img/cards/wireframe.png',
      link: '/portfolio/gpat',
      alt: 'Detailed task analysis of student disability considerations using the ICF model.',
      flex: 3
    },
    {
      title: 'SWAN',
      content: 'Researching and developing a system for wearable audio navigation using spatial tracking information.',
      src: '/img/vincent.png',
      link: '/portfolio/swan',
      alt: 'Vincent Martin is using VR equipment not to see, but for the precise tracking that is possible for a 3d simulation.',
      flex: 3
    },
    {
      title: 'VA Tactile Interface',
      content: 'Volunteer project with the VA. Research and development to improve the function of veterans with visual impairment.',
      src: '/img/va.jpg',
      link: '/portfolio/va',
      alt: 'This tactile overlay on an ipad uses a braille-like grid and below a compass cut-out for pointing.',
      flex: 3
    },
    {
      title: 'Potluck',
      content: 'UX design/research for assisting students trying foods and restaurants for the first time.',
      src: '/img/cards/potluck.png',
      link: '/portfolio/potluck',
      alt: 'display of different application screens.',
      flex: 3
    },
    {
      title: 'Ultrasonic Arc Piano',
      content: 'Gesture based musical instrument developed using design and invention principles.',
      src: '/img/cards/piano.png',
      link: '/portfolio/piano',
      alt: 'There are eight sensors positioned along a crescent instrument.',
      flex: 3
    }
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
  },
  cards: (state) => {
    return state.cards
  }
}

/* sychronus */
export const mutations = {
  toggleSidebar (state) {
    state.sidebar = !state.sidebar
  },
  toggleDrawer (state) {
    state.drawer = !state.drawer
  },
  prev (state) {
    var last = state.cards.pop()
    state.cards.splice(0, 0, last)
  },
  next (state) {
    var first = state.cards.shift()
    state.cards.push(first)
  }
}

/* asynchronus */
export const actions = {
  toggleDrawer: (context) => {
    context.commit('toggleDrawer')
  },
  prev: (context) => {
    context.commit('prev')
  },
  next: (context) => {
    context.commit('next')
  }
}
