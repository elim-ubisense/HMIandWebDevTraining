module.exports = {
    configureWebpack: {
    devServer: {
    headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'If-Modified-Since, If-None-Match',
    'Access-Control-Expose-Headers': 'ETag, Last-Modified'
    },
    disableHostCheck: true
    }
    },
    publicPath: ''
    };
    