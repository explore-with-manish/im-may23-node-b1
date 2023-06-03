require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const logger = require('morgan');

const app = express();

const { BASE_URL } = process.env;

app.use(bodyParser.json());
app.use(logger('dev'));

app.get('/getAll', async (req, res, next) => {
    const response = {};
    const result = await axios.get(BASE_URL);
    const {data} = result;
    response['message'] = "From Server";
    response['posts'] = data;
    res.status(200).send(response);
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server Started...');
});