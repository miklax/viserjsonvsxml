angular.module('mainCtrl', ['getDataService'])

.controller('merenjaController', function(Merenja){
  var vm = this;

  vm.jsonTabela = [
    {velicina: 0, odziv: 0},
    {velicina: 0, odziv: 0},
    {velicina: 0, odziv: 0},
    {velicina: 0, odziv: 0},
  ];
  vm.xmlTabela = [];

  vm.jsonPodaci = [];
  vm.xmlPodaci = [];

  vm.getJsonMerenja = function(brojObj){

    Merenja.getJson(brojObj)
    .success(function(data, status, headers, config){
        vm.jsonPodaci = data;
        console.log(vm.jsonPodaci);
        console.log(headers('Velicina'));
        vm.jsonTabela[0].velicina = headers('Velicina');
    });
  };
});
