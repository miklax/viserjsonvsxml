angular.module('mainCtrl', ['getDataService'])

.controller('merenjaController', function(Merenja){
  var vm = this;

  vm.jsonTabela = [];
  vm.xmlTabela = [];

  vm.getJsonMerenja = function(brojObj){

    Merenja.getJson(brojObj)
    .success(function(data){
        vm.jsonTabela = data;
        console.log(vm.jsonTabela);
    });
  };
});
