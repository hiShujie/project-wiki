export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  build: {
    extend(config, ctx) {} // blah blah
  },
  router: {
    base: '/tsinghua-tfl/'
  },
  server: {
    port: 8000,
    host: "0.0.0.0"
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Tsinghua TFL - iGEM 2023',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: 'https://static.igem.wiki/teams/4772/wiki/website-material/team-logo-version-2.ico' }],
  },

  // loading: '~/components/Loading.vue',
  
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['assets/scss/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/vue-scrollto.js",
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxt/postcss8',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["vue-chartjs"],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
}
