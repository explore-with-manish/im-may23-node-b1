import express from 'express';
import morgan from 'morgan';
import indexRouter from './routes/index.js';

const app = express();

app.use(morgan('dev'));

app.use('/', indexRouter);

export default app;