'use strict';


/* Controllers */

var myswasthControllers = angular.module('myswasthControllers', []);

myswasthControllers.controller('HomePageCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('data/homeicons.json').success(function(data) {
      $scope.homeicons = data;
    });
}]);
	
myswasthControllers.controller('VisitCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('data/homeicons.json').success(function(data) {
      $scope.homeicons = data;
    });
}]);

myswasthControllers.controller('VisitRecordCtrl', ['$scope',
 function ($scope) {
 	$scope.VisitRecordForm = {};
	$scope.VisitRecordForm.vdate = "";
    $scope.VisitRecordForm.name  = "Please enter the full name";
    $scope.VisitRecordForm.prescription  = "Prescription";
    $scope.VisitRecordForm.chiefComplaints = [
              { id : "cc1", name: "cc1" }
             ,{ id : "cc2", name: "cc2" }
             ,{ id : "cc3", name: "cc3" }
             ,{ id : "cc4", name: "cc4" }
             ,{ id : "cc5", name: "cc5" }
             ];
    $scope.VisitRecordForm.selected = undefined;
    $scope.VisitRecordForm.states = ['cc1', 'cc2', 'cc3', 'cc4', 'cc5', 'cc6', 'cc7', 'cc8', 'cc9'];
}]);

myswasthControllers.controller('TestCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('data/homeicons.json').success(function(data) {
      $scope.homeicons = data;
    });
}]);

myswasthControllers.controller('HistoryCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('data/homeicons.json').success(function(data) {
      $scope.homeicons = data;
    });
}]);

myswasthControllers.controller('ProfileCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('data/homeicons.json').success(function(data) {
      $scope.homeicons = data;
    });
}]);

