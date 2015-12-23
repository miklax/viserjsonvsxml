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
var apiRoute = require('./app/routes/api')(app, express);
app.use('/api', apiRoute);

//default ruta - index
app.get('*', function(req, res){
  res.sendFile(path.join(__dirname + '/public/app/views/index.html'));
});

//pokretanje servera na portu 3000
app.listen(3000);
console.log('server pokrenut na portu 3000');
