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

    var vremeStart = Date.now();

    Merenja.getJson(brojObj)
    .success(function(data, status, headers, config){
        vm.jsonPodaci = data;
        console.log(vm.jsonPodaci);
        console.log(headers('Velicina'));

        var vremeStop = Date.now();
        var odziv = vremeStop - vremeStart;

        switch (brojObj) {
          case 2000:
            vm.jsonTabela[0].velicina = headers('Velicina');
            vm.jsonTabela[0].odziv = odziv;
            break;
          case 4000:
            vm.jsonTabela[1].velicina = headers('Velicina');
            vm.jsonTabela[1].odziv = odziv;
            break;
          case 6000:
            vm.jsonTabela[2].velicina = headers('Velicina');
            vm.jsonTabela[2].odziv = odziv;
            break;
          case 8000:
            vm.jsonTabela[3].velicina = headers('Velicina');
            vm.jsonTabela[3].odziv = odziv;
            break;
          case 10000:
            vm.jsonTabela[4].velicina = headers('Velicina');
            vm.jsonTabela[4].odziv = odziv;
            break;
          default:
            console.log('Pogresni parametri');
        }
    });
  };
});
