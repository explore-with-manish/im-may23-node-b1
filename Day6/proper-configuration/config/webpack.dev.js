const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

module.exports = merge(commonConfig(), {
    mode: 'development',

    devtool: 'inline-source-map',

    output: {
        publicPath: 'http://localhost:3000',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },

    devServer: {
        port: 3000,
        historyApiFallback: true,
        client: {
            logging: "none"
        },
        devMiddleware: {
            stats: 'minimal'
        },
        open: {
            app: {
                name: 'Chrome'
            }
        },
        hot: true,
        watchFiles: ["src/**/*", "index.html"],
    },
});