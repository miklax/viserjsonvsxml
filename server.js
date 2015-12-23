/*
/ VISER
/ Mihail Miklasevskij
*/

var express = require('express');
var app     = express();
var morgan  = require('morgan');
var path    = require('path');

//logovanje u konzolu
app.use(morgan('dev'));

//staticka lokacija
app.use(express.static(__dirname + '/public'));

//instanca rutera
var apiRoute = express.Router();

apiRoute.post('/json/:param', function(req, res){
  //TODO frati fajl - uzmi parametar o velicini
});

apiRoute.get('/xml', function(req, res){
  //vrati xml
});

app.use('/api', apiRoute);

app.get('*', function(req, res){
  res.sendFile(path.join(__dirname + '/public/app/views/index.html'));
});
