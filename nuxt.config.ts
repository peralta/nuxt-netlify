// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/image'],
  routeRules: {
    '/hello-prerender': {
      headers: {
        'x-hello': 'world',
      },
      prerender: true,
    },
    '/hello': {
      headers: {
        'x-hello': 'world',
      },
    },
    '/hello-isw': {
      isr: 38400,
    },
  },
})