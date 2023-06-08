const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());

const resolvePath = function(relativePath) {
    return path.resolve(appDirectory, relativePath);
}

module.exports = {
    appRootPath: appDirectory,
    appBuildPath: resolvePath('dist'),
    outputJSPath: 'static/js/'
};