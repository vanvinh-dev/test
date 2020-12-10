var express = require('express');
var path = require('path');
var app = express()
var router = express.Router();
var tes = require('./route/test')
app.use('/', tes)
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.listen('7000',function(){
    console.log('running port 7000')
})
module.exports = app;