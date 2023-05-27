require('dotenv').config();
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const favicon = require('serve-favicon');

const mongoose = require('mongoose');

const passport = require('passport');
const session = require('express-session');
const flash = require('connect-flash');

require('./config/passport-config')(passport);

const indexRouter = require('./routes/index');
const employeesRouter = require('./routes/employees');
const accountRouter = require('./routes/account')(passport);

mongoose.connect(process.env.mongoUri);

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.png')));

app.use(session({ secret: process.env.sessionKey, resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use('/', indexRouter);
app.use('/account', accountRouter);
app.use('/employees', employeesRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${process.env.mongoUri}`);
});

mongoose.connection.on('error', (err) => {
  console.log(`Mongoose connection error: ${err}`);
});

mongoose.connection.on('disconnected', () => {
  console.log(`Mongoose disconnected from ${process.env.mongoUri}`);
});

module.exports = app;
