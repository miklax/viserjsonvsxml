angular.module('mainCtrl', ['getDataService'])

.controller('merenjaController', function(Merenja){
  var vm = this;

  vm.jsonTabela = [];
  vm.xmlTabela = [];

  vm.getJsonMerenja = function(brojObj){

    Merenja.getJson(brojObj)
    .success(function(data, status, headers, config){
        vm.jsonTabela = data;
        console.log(vm.jsonTabela);
        console.log(headers('Velicina'));
    });
  };
});
