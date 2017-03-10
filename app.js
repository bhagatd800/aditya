var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var formidable = require('formidable');
var fs = require('fs');

var index = require('./routes/index');
var users = require('./routes/users');
var gatepass = require('./routes/gatepass');
var appraisal = require('./routes/appraisal');
var appraisalform=require('./routes/appraisalform');


var session = require('client-sessions');
var app = express();


//data base
var monk = require('monk');
var database = require('./db');
var db=monk(database.db);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//session

app.use(session({
  cookieName: 'session',
  secret: 'eg[isfd-8yF9-7w2315df{}+Ijsli;;to8',
  duration: 120 * 60 * 1000,
  httpOnly: true,
  secure: true,
  ephemeral: true
}));


// Make our db accessible to our router
app.use(function(req,res,next){
    req.db = db;
    next();
});
app.use('/', index);
app.use('/appraisal', appraisal);
app.use('/users', users);
<<<<<<< HEAD
app.use('/gatepass', gatepass);
=======
>>>>>>> 345c6492e86dfaea09cb270cc52b7970b2c40778
app.use('/appraisalform', appraisalform);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
