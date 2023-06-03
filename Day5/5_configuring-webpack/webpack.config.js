// const path = require("path");

// module.exports = {
//     entry: "./src/index.js",
//     output: {
//         filename: "code.js",
//         path: path.resolve(__dirname, 'build')
//     }
// };

// // ------------------------------

// const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// let production = process.env.NODE_ENV === "production";

// let config = {
//     entry: ["./src/index.js", "./src/home.js"],
//     output: {
//         filename: "main.js",
//         path: path.resolve(__dirname, 'dist'),
//         clean: true
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.js$/,
//                 exclude: /node_modules/,
//                 use: {
//                     loader: "babel-loader",
//                     options: {
//                         presets: ["@babel/preset-env"]
//                     }
//                 }
//             },
//             {
//                 test: /\.css$/,
//                 use: [
//                     production ? MiniCssExtractPlugin.loader : "style-loader",
//                     "css-loader",
//                     {
//                         loader: "postcss-loader",
//                         options: {
//                             postcssOptions: {
//                                 plugins: [
//                                     ["postcss-preset-env", {}]
//                                 ]
//                             }
//                         }
//                     }
//                 ]
//             }
//         ]
//     },
//     plugins: [
//         new HtmlWebpackPlugin({
//             template: "./index.html",       // Input Filename
//             filename: "index.html"          // Output Filename
//         }),
//         new MiniCssExtractPlugin()
//     ],
//     devtool: 'inline-source-map',
//     mode: "development",
//     devServer: {
//         watchFiles: ["src/**/*", "index.html"],
//         static: "./dist"
//     }
// };

// if (production) {
//     config.devtool = 'source-map';
//     config.mode = "production";
// }

// module.exports = config;

// ----------------------------------- Multi Output Bundles

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",       // Input Filename
            filename: "index.html"          // Output Filename
        }),
        new MiniCssExtractPlugin()
    ],
    devtool: 'inline-source-map',
    mode: "development",
    devServer: {
        watchFiles: ["src/**/*", "index.html"],
        static: "./dist"
    }
};

if (production) {
    config.devtool = 'source-map';
    config.mode = "production";
}

module.exports = config;