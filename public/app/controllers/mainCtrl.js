angular.module('mainCtrl', ['getDataService', 'chart.js'])

.controller('merenjaController', function($scope, Merenja){
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

  vm.xmlTabela[0] = new objMerenja(); //2000
  vm.xmlTabela[1] = new objMerenja(); //4000
  vm.xmlTabela[2] = new objMerenja(); //6000
  vm.xmlTabela[3] = new objMerenja(); //8000
  vm.xmlTabela[4] = new objMerenja(); //10000


  // GRAFIK
  vm.grafik = function(nizJson, nizXml){
    // var nizXml = [1, 2, 3, 4, 5];
    console.log(nizJson);
    console.log(nizXml);

    $scope.labels = ["2000", "4000", "6000", "8000", "10000"];
    $scope.series = ['JSON merenja', 'XML merenja'];
    $scope.data = [nizJson, nizXml];
    $scope.onClick = function (points, evt) {
      console.log(points, evt);
    };
  };

  var izdvojOdziv = function(niz){
      return niz.map(function(noviNiz){ return noviNiz.odziv; });
  };

  vm.grafik(izdvojOdziv(vm.jsonTabela), izdvojOdziv(vm.xmlTabela));

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
        vm.grafik(izdvojOdziv(vm.jsonTabela), izdvojOdziv(vm.xmlTabela));
    });
  };

  vm.getXmlMerenja = function(brojObj){

    var vremeStart = Date.now();
    var x2js = new X2JS();
    // var xmlText = "<MyRoot><test>Success</test><test2><item>val1</item><item>val2</item></test2></MyRoot>";
    // var jsonObj = x2js.xml_str2json( xmlText );


    Merenja.getXml(brojObj)
    .success(function(data, status, headers, config){
        vm.xmlPodaci = x2js.xml_str2json(data);
        console.log(vm.xmlPodaci);

        var vremeStop = Date.now();
        var odziv = vremeStop - vremeStart;

        switch (brojObj) {
          case 2000:
            vm.xmlTabela[0].velicina = headers('Velicina');
            vm.xmlTabela[0].odziv = odziv;
            break;
          case 4000:
            vm.xmlTabela[1].velicina = headers('Velicina');
            vm.xmlTabela[1].odziv = odziv;
            break;
          case 6000:
            vm.xmlTabela[2].velicina = headers('Velicina');
            vm.xmlTabela[2].odziv = odziv;
            break;
          case 8000:
            vm.xmlTabela[3].velicina = headers('Velicina');
            vm.xmlTabela[3].odziv = odziv;
            break;
          case 10000:
            vm.xmlTabela[4].velicina = headers('Velicina');
            vm.xmlTabela[4].odziv = odziv;
            break;
          default:
            console.log('Pogresni parametri');
        }
        vm.grafik(izdvojOdziv(vm.jsonTabela), izdvojOdziv(vm.xmlTabela));

    });

  };
});
