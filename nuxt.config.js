

export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css'},
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/fontawesome.css'},
      { rel: 'javascript', href: 'https://cdn.jsdelivr.net/npm/js-cookie@2/src/js.cookie.min.js'},
     // { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-beta.3/css/bootstrap.min.css' },
    ],
  },

  env: {
    githubToken: '42cdf9fd55abf41d24f34c0f8a4d9ada5f9e9b93'
  },
  
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'bulma-helpers/css/bulma-helpers.min.css',
    'bulma-calendar/dist/css/bulma-calendar.min.css',
  
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    //'~/plugins/axios',
    //'~/plugins/vuex-persist',
    //'~/plugins/persisted.js'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
    '@nuxtjs/font-awesome',
    '@nuxtjs/axios',
    
  ],
  axios: {
    baseURL: 'https://599ae110.ngrok.io/api'
  },
  /* auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url:'/login',
            method:'post',
            propertyName:'id'},
          user: {
            url: '/confirm', 
            method:'get',
            propertyName:'data'},
          logout:false,
        },
      },
    }
  }, *\

  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}



