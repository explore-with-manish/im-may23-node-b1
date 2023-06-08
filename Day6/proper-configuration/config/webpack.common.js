const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = function () {
    // Webpack Common Configuration Object
    return {
        entry: {
            index: "./src/index.js", 
            home: "./src/home.js"
        },

        resolve: {
            extensions: [".js"]
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
                {
                    test: /\.html$/,
                    use: "html-loader",
                },
                {
                    test: /\.txt$/,
                    type: "asset/source",
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: "asset",
                    parser: {
                        dataUrlCondition: {
                            maxSize: 50 * 1024,
                        },
                    },
                    generator: {
                        filename: "images/[hash][name][ext]",
                    },
                },
                {
                    test: /\.css$/,
                    use: [
                        process.env.NODE_ENV === "production" ? MiniCssExtractPlugin.loader : "style-loader",
                        "css-loader",
                        {
                            loader: "postcss-loader",
                            options: {
                                postcssOptions: {
                                    plugins: [
                                        ["postcss-preset-env", {}]
                                    ]
                                }
                            }
                        }
                    ]
                }
            ]
        },

        plugins: [
            new HtmlWebpackPlugin({
                template: "./index.html",   // Input FileName
                filename: "./index.html",    // Output FileName
                favicon: "./src/images/js-favicon.png"
            })
        ],

        optimization: {
            splitChunks: {
                chunks: 'all'
            }
        }
    };
};