const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const paths = require('./paths');

module.exports = merge(commonConfig(), {
    mode: 'production',

    devtool: 'source-map',

    output: {
        path: paths.appBuildPath,
        publicPath: './',
        filename: `${paths.outputJSPath}[name].[fullhash].js`,
        chunkFilename: `${paths.outputJSPath}[id].[chunkhash].chunk.js`,
        clean: true
    },

    plugins: [
        new MiniCssExtractPlugin()
    ],

    optimization: {
        minimizer: [
            `...`,
            new CssMinimizerPlugin(),
        ]
    }
});