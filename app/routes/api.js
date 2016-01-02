var fs = require('fs');

module.exports = function(app, express){

  var apiRouter = express.Router();

  apiRouter.get('/', function(req, res){
    res.json({message: 'Dobrodosli na API!'});
  });

  //JSON endpoint
  apiRouter.get('/json/:uzorak', function(req, res){

    var filename = __dirname + '/DB/json' + req.params.uzorak + '.json';
    var velicina = getFilesizeInBytes(filename);

    //U header od responsa poslati velicinu fajla
    res.set('Velicina', velicina);
    //slanje json datoteke
    res.sendFile(filename);
  });

  //XML endpoint
  apiRouter.get('/xml/:uzorak', function(req, res){

    var filename = __dirname + '/DB/xml' + req.params.uzorak + '.xml';
    var velicina = getFilesizeInBytes(filename);

    //U header od responsa poslati velicinu fajla
    res.set('Velicina', velicina);
    //slanje xml datoteke
    res.sendFile(filename);
  });

function getFilesizeInBytes(filename) {
  var stats = fs.statSync(filename);
  var fileSizeInBytes = stats.size;
  return fileSizeInBytes;
}

  return apiRouter;
};
