
module.exports = {
  allowedHosts:[
      'www.huipeiw.com'
  ],
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    host: "0.0.0.0",
    open: true,
    port: 8082,
    proxy: {
      '/api': {
        target: process.env.VUE_APP_BASE_API,
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
