var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cons = require('consolidate');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/transacoes');
var saqueRouter = require('./routes/saque');
var depositoRouter = require('./routes/deposito');

var apisRouter = require('./routes/api');



// MONGO
const mongoose = require('mongoose')
mongoose.connect('mongodb://admin:admin123@ds113853.mlab.com:13853/contas')
const db = mongoose.connection
db.on('error', () => {
  throw new Error('unable to connect to database at ' + config.db)
})


var app = express();




// view engine setuphttp://localhost:3000/palestra/

app.engine('html', cons.swig)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//ROTAS
app.use('/', indexRouter);
app.use('/transacoes', usersRouter);
app.use('/api', apisRouter);
app.use('/saque', saqueRouter);
app.use('/deposito', depositoRouter);




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

module.exports = app;
