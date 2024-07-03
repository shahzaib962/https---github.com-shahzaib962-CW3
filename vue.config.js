const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    name: "EliLessons",
    short_name: "EliLessons",
    workboxPluginMode: "GenerateSW",
    skipWaiting: true,
    workboxOptions: {
      runtimeCaching: [
        {
          // Routing via a matchCallback function:
          urlPattern: ({ request }) => request.destination === "image",
          handler: 'StaleWhileRevalidate'
        },
        {
          urlPattern: ({ url }) => url.origin === 'http://localhost:3000' && url.pathname === '/lessons',
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'api-cache'
          }
        }
      ]
    }
  }
});
