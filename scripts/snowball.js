var snowball = angular.module('Snowball', ['firebase']);

snowball.factory('', function() {
  var service = {};
  var running = true;

  service.warmer = function() {
    return running && tutorialQueue.length > 0
  };
  service.cooler = function() {
    return running && tutorialQueue.length > 0
  };

  return service;
});

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
