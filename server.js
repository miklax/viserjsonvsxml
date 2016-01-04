/*
/ VISER
/ Mihail Miklasevskij
*/

var express = require('express');
var app     = express();
var morgan  = require('morgan');
var path    = require('path');

//CORS
app.use(function(req, res, next){
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Velicina");
  next();
});

//logovanje u konzolu
app.use(morgan('dev'));

//staticka lokacija
app.use(express.static(__dirname + '/public'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));


//instanca rutera
var apiRoute = require('./app/routes/api')(app, express);
app.use('/api', apiRoute);

//default ruta - index
app.get('*', function(req, res){
  res.sendFile(path.join(__dirname + '/public/app/views/index.html'));
});

//pokretanje servera na portu 3000
app.listen(3000);
console.log('server pokrenut na portu 3000');
