require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const logger = require('morgan');
const { getCache, setCache } = require('./caching');

const app = express();

const { BASE_URL } = process.env;
const cacheKey = `getAll/posts`;

app.use(bodyParser.json());
app.use(logger('dev'));

app.get('/getAll', async (req, res, next) => {
    try {
        const response = {};
        const cacheData = await getCache(cacheKey);

        if (cacheData) {
            response['message'] = "From Cache";
            response['posts'] = JSON.parse(cacheData);
        } else {
            const result = await axios.get(BASE_URL);
            const { data } = result;
            response['message'] = "From Server";
            response['posts'] = data;
            setCache(cacheKey, data);
        }

        res.status(200).send(response);
    } catch (err) {
        res.status(400).send(err);
    }
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server Started...');
});