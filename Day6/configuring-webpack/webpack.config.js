const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
// const CopyPlugin = require("copy-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const HelloPlugin = require('./custom/hw-plugin');

let production = process.env.NODE_ENV === "production";

let config = {
    entry: {
        index: "./src/index.js",
        home: "./src/home.js"
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, 'dist'),
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
            // {
            //     test: /\.js$/,
            //     exclude: /node_modules/,
            //     use: [{
            //         loader: "babel-loader",
            //         options: {
            //             presets: ["@babel/preset-env"]
            //         }
            //     }, path.resolve("./custom/clg-loader.js")]
            // },
            {
                test: /\.css$/,
                use: [
                    production ? MiniCssExtractPlugin.loader : "style-loader",
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
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                use: "html-loader"
            },
            {
                test: /\.txt$/,
                type: "asset/source"
            },
            // {
            //     test: /\.(png|svg|jpg|jpeg|gif)$/i,
            //     type: "asset/resource",
            //     generator: {
            //         filename: "images/[hash][name][ext]"
            //     }
            // }
            // {
            //     test: /\.(png|svg|jpg|jpeg|gif)$/i,
            //     type: "asset/inline"
            // }
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        maxSize: 50 * 1024
                    }
                },
                generator: {
                    filename: "images/[hash][name][ext]"
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",       // Input Filename
            filename: "index.html"          // Output Filename
        }),
        // new CopyPlugin({ patterns: [{ from: "./src/images", to: "images" }] }),
        new MiniCssExtractPlugin(),
        // new BundleAnalyzerPlugin()
        new HelloPlugin()
    ],
    devtool: 'inline-source-map',
    mode: "development",
    devServer: {
        watchFiles: ["src/**/*", "index.html"],
        static: "./dist"
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
};

if (production) {
    config.devtool = 'source-map';
    config.mode = "production";
    config.optimization = {
        minimizer: [
            `...`,
            new CssMinimizerPlugin()
        ]
    }
}

module.exports = config;