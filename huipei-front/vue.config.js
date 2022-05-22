
module.exports = {
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    host: "localhost",
    open: true,
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8081',
        changeOrigin: true,
        secure: false,
        /*headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        },*/
        pathRewrite: {
        }
      },
    },

  }
}
