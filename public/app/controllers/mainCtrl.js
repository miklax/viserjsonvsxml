angular.module('mainCtrl', ['getDataService'])

.controller('merenjaController', function(Merenja){
  var vm = this;

  vm.jsonTabela = [];
  vm.xmlTabela = [];

  vm.jsonPodaci = [];
  vm.xmlPodaci = [];

  function objMerenja(){
    this.odziv = 0;
    this.velicina = 0;
  }

  vm.jsonTabela[0] = new objMerenja(); //2000 obj
  vm.jsonTabela[1] = new objMerenja(); //4000 obj
  vm.jsonTabela[2] = new objMerenja(); //6000 obj
  vm.jsonTabela[3] = new objMerenja(); //8000 obj
  vm.jsonTabela[4] = new objMerenja(); //10000 obj

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
