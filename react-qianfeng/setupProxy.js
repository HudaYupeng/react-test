/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/ajax',  // /api/list /api/detail /api/center /api/cart
    createProxyMiddleware({
      target: 'https://i.maoyan.com',
      changeOrigin: true
    })
  )
}