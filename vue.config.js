module.exports = {
    publicPath: './', // 设置打包文件相对路径
    devServer: {
        // open: true, //配置自动启动浏览器 
        proxy: {
            '/api': {
                target: 'http://www.heyidangao.com:8089/api/', //对应自己的接口
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}