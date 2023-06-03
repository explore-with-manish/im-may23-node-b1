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

module.exports = {
    entry: ["./src/index.js", "./src/home.js"],
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, 'dist'),
        // clean: true
    },
    devtool: 'inline-source-map',
    mode: "development",
    devServer: {
        static: "./dist"
    }
};