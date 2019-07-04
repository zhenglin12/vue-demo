const path = require("path");
const resolve = dir => path.resolve(__dirname, dir);

module.exports = {

    devServer: {

        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
        // Various Dev Server settings
        host: '0.0.0.0', // can be overwritten by process.env.HOST
        port: 8090, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined

    },


    configureWebpack: {
    resolve: {
      // 设置别名
      alias: {
        "src@": resolve("src") // 这样配置后 @ 可以指向 src 目录
      }
    }
  }
};
