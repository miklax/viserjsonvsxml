module.exports = function(app, express){

  var apiRouter = express.Router();

  apiRouter.get('/', function(req, res){
    res.json({message: 'Dobrodosli na API!'});
  });

  apiRouter.get('/json/:uzorak', function(req, res){
    res.sendFile(__dirname + '/DB/json' + req.params.uzorak + '.json');
  });

  apiRouter.get('/xml/:uzorak', function(req, res){
    res.sendFile(__dirname + '../DB/xml' + req.params.uzorak + '.xml');
  });

  return apiRouter;
};
