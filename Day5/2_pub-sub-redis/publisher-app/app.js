require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const { publish } = require('./caching');

const app = express();

app.use(bodyParser.json());
app.use(logger('dev'));

app.get('/pub', async (req, res, next) => {
    try {
        await publish("messages", "Hello World!");
        res.status(200).send("Message Published!");
    } catch (err) {
        res.status(400).send(err);
    }
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Publisher Started...');
});