var snowball = angular.module('Snowball', ['firebase']);

snowball.controller("TemperatureController", function($scope, $firebase) {
  var ref = new Firebase("https://popping-fire-4005.firebaseio.com/data");
  var sync = $firebase(ref);

  var syncObject = sync.$asObject();
  syncObject.$bindTo($scope, "data");

  $scope.warm = function() {
    $scope.data.temp++;
  };
  $scope.cool = function() {
    $scope.data.temp--;
  };

  console.log($scope);

})
