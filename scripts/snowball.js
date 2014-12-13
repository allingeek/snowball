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

  $scope.$watch('data.temp', function(newValue, oldValue) {
    if (newValue > 100) {
      $scope.data.losses++;
      $scope.data.temp = 50;
    }
    if (newValue < 0) {
      $scope.data.wins++;
      $scope.data.temp = 50;
    }
    $scope.scalar = Math.ceil(newValue / 10);
  });

  console.log($scope);

})
