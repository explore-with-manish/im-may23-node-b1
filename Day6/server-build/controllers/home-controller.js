import path from 'path';

const index = function (req, res, next) {
    res.sendFile(path.resolve('./views/index.html'));
}

export { index };