const path = require('path');

module.exports = {
    entry: './bin/www.js',

    resolve: {
        extensions: [".js"]
    },

    target: 'node',

    output: {
        path: path.resolve("server-build"),
        filename: 'index.js',
        clean: true
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            },
        ]
    }
};