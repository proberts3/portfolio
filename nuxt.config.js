module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Phillip Isaac Roberts',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },
  /*
  ** Modules
  */
  modules: ['@nuxtjs/sitemap'],
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://proberts.us',
    cacheTime: 1000 * 60 * 15,
    generate: true, // Enable me when using nuxt generate
    routes: [
      {
        path: '/',
        name: 'index',
        changefreq: 'daily',
        priority: 1,
        lastmodISO: '2017-06-30T13:30:00.000Z'
      },
      {
        path: '/vr',
        name: 'vr',
        changefreq: 'daily',
        priority: 1,
        lastmodISO: '2017-06-30T13:30:00.000Z'
      },
      {
        path: '/portfolio',
        name: 'portfolio',
        changefreq: 'daily',
        priority: 1,
        lastmodISO: '2017-06-30T13:30:00.000Z'
      },
      {
        path: '/accessibility',
        name: 'accessibility',
        changefreq: 'daily',
        priority: 1,
        lastmodISO: '2017-06-30T13:30:00.000Z'
      },
      {
        path: '/resume',
        name: 'resume',
        changefreq: 'daily',
        priority: 1,
        lastmodISO: '2017-06-30T13:30:00.000Z'
      },
      {
        path: '/vr/ogw',
        name: 'vr-ogw',
        changefreq: 'daily',
        priority: 1,
        lastmodISO: '2017-06-30T13:30:00.000Z'
      },
      {
        path: '/vr/sonic',
        name: 'vr-sonic',
        changefreq: 'daily',
        priority: 1,
        lastmodISO: '2017-06-30T13:30:00.000Z'
      },
      {
        path: '/portfolio/potluck',
        name: 'portfolio-potluck',
        changefreq: 'daily',
        priority: 1,
        lastmodISO: '2017-06-30T13:30:00.000Z'
      },
      {
        path: '/portfolio/gpat',
        name: 'portfolio-gpat',
        changefreq: 'daily',
        priority: 1,
        lastmodISO: '2017-06-30T13:30:00.000Z'
      },
      {
        path: '/portfolio/piano',
        name: 'portfolio-piano',
        changefreq: 'daily',
        priority: 1,
        lastmodISO: '2017-06-30T13:30:00.000Z'
      },
      {
        path: '/portfolio/swan',
        name: 'portfolio-swan',
        changefreq: 'daily',
        priority: 1,
        lastmodISO: '2017-06-30T13:30:00.000Z'
      },
      {
        path: '/portfolio/va',
        name: 'portfolio-va',
        changefreq: 'daily',
        priority: 1,
        lastmodISO: '2017-06-30T13:30:00.000Z'
      }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  plugins: [
    '~plugins/vuetify.js',
    '~plugins/vueSmoothScroll.js'
  ],
  css: ['~assets/app.styl'],
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    vendor: [
      'vuetify',
      'vue-smooth-scroll'
    ],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
