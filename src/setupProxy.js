const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    '/api ',
    createProxyMiddleware({
      target: 'http://api-factory.simbirsoft1.com',
      changeOrigin: true,
      crossdomain: true,
      secure: false,
    })
  );
};
