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

myswasthControllers.controller('VisitRecordCtrl', ['$scope','$http',
 function ($scope,$http) {
 	$scope.VisitRecordForm = {};
	$scope.VisitRecordForm.vdate = "";
    $scope.VisitRecordForm.name  = "";
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

    $scope.VisitRecordForm.submitTheForm = function(item, event) {
    	
    		console.log("--> Submitting form");
        var dataObject = {
           date : $scope.VisitRecordForm.vdate,
           name  : $scope.VisitRecordForm.name,
           chiefcomplaints  : $scope.VisitRecordForm.chiefComplaints
        };

        alert(dataObject);
        
        var responsePromise = $http.post("/MySwasth/app/data/json-test-data.json", dataObject, {});
        responsePromise.success(function(dataFromServer, status, headers, config) {
           console.log(dataFromServer.title);
        });
         responsePromise.error(function(data, status, headers, config) {
           alert("Submitting form failed!");
        });
      }

}]);

myswasthControllers.controller('TestCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('data/homeicons.json').success(function(data) {
      $scope.homeicons = data;
    });
}]);

myswasthControllers.controller('TestRecordCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('data/test-form.json').success(function(data) {
      $scope.testForm = data;
      $scope.selectedOption = data[0];
    });
    
    $http.get('data/tests.json').success(function(data) {
        $scope.testForm2 = data;
      });
    $scope.getValues = function(id) {
        return $scope.testForm[id];
      }
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

