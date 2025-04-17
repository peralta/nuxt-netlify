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
    '/hello-cache': {
      cache: {
        maxAge: 38400,
        
      },
    },
    '/hello-cache-headers': {
      headers: {
        'Cache-Control': 'public, max-age=3600, must-revalidate',
        'Netlify-CDN-Cache-Control': 'public, max-age=38400, stale-while-revalidate=60, durable',
      },
    },
  },
  nitro: {
    minify: false,

  }
})