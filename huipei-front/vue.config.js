
module.exports = {
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    host: "0.0.0.0",
    open: true,
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8081',
        changeOrigin: true,
        secure: false,
        headers:{
         // token: this.$store.state.token
        },
        pathRewrite: {
        }
      },
    },

  },
  assetsDir:'static',
  parallel:false,
  publicPath:'./'
}
