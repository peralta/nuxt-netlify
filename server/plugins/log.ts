export default defineNitroPlugin((nitro) => {
  nitro.hooks.hook('request', (event) => {
    console.log(`[${event.method}] ${event.path}`);
  });
});