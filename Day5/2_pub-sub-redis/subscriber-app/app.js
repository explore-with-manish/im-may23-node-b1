require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const { subscribe } = require('./caching');

const app = express();

app.use(bodyParser.json());
app.use(logger('dev'));

subscribe('messages');

app.listen(process.env.PORT || 3001, () => {
    console.log('Subscriber Started...');
});