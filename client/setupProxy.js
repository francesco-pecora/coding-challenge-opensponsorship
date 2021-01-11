const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api/athlete',
    createProxyMiddleware({
      target: 'http://localhost:8090',
      //changeOrigin: true, // NOTE: Not sure if you need this
    })
  );
};