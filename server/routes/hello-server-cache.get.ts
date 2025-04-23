export default defineCachedEventHandler((event) => {
  return new Response('Hello, world!');
}, { maxAge: 60 * 60 /* 1 hour */ })
