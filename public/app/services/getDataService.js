angular.module('getDataService', [])

.factory('Merenja', function($http){

  var merenjaFactory = {};

  merenjaFactory.getJson = function(brojObj){
    return $http.get('/api/json/' + brojObj);
  };

  merenjaFactory.getXml = function(brojObj){
    return $http.get('/api/xml/' + brojObj);
  };

  return merenjaFactory;

});
