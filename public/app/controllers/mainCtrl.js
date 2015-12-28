angular.module('mainCtrl', ['getDataService'])

.controller('merenjaController', function(Merenja){
  var vm = this;

  var  jsonTabela = [];
  var  xmlTabela = [];

  Merenja.getJson(brojObj)
    .success(function(data){
      jsonTabela = data;
      console.log(jsonTabela);
    });
});
