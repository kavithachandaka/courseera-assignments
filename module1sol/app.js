(function () {
'use strict';

angular.module('myFirstApp', []).controller('myFirstController', myFirstController);
myFirstController.$inject=["$scope"];

function myFirstController($scope){
    $scope.itemString = "";
    $scope.nbOfItems = 0;
    $scope.resultString;
         $scope.countdata = function() {
          if($scope.itemString.length > 0) {
        console.log("Items entered: " + $scope.itemString);
        var itemArray = $scope.itemString.split(",");
        console.log("Items as array: " + itemArray);
        $scope.resultString = checkItemCount(itemArray);
          }
      else
      {
        $scope.resultString = "Please enter data first";
        }
    };
  }

  function checkItemCount(items) {
    var itemCount = items.length;
    console.log("Number of items entered: " + itemCount);

    if(itemCount < 4)
      // return { string: "Enjoy!", class: "ok" };
      return "Enjoy!";
    else
      // return { string: "Too much!", class: "notOk" };
      return "Too much!";
  }
})();
