// const path = require("path");

// module.exports = {
//     entry: "./src/index.js",
//     output: {
//         filename: "code.js",
//         path: path.resolve(__dirname, 'build')
//     }
// };

// ------------------------------

const path = require("path");

let production = process.env.NODE_ENV === "production";

let config = {
    entry: ["./src/index.js", "./src/home.js"],
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, 'dist'),
        // clean: true
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
            }
        ]
    },
    devtool: 'inline-source-map',
    mode: "development",
    devServer: {
        static: "./dist"
    }
};

if (production) {
    config.devtool = 'source-map';
    config.mode = "production";
}

module.exports = config;