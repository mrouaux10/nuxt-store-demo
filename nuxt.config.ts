export default defineNuxtConfig({
  modules: [ '@nuxtjs/tailwindcss' ],
  app: {
    head: {
      title: 'Principal',
      meta: [
        { name: 'description', content: 'This is an example.' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
      ]
    }
  },
  ssr: true
})
