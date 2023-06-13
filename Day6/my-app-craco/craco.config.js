const path = require('path');

module.exports = {
    webpack: {
        configure: (webpackConfig, { env, paths }) => {
            paths.appIndexJs = path.join(__dirname, 'src', 'my-index.js');
            webpackConfig.entry = paths.appIndexJs;
            return webpackConfig;
        }
    }
};