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
    $http.get('data/visits.json').success(function(data) {
      $scope.visits = data;
    });
    $scope.orderProp = 'date';
}]);

myswasthControllers.controller('VisitDetailCtrl', ['$scope', '$routeParams', '$http',
   function ($scope, $routeParams, $http ) {
	$http.get('data/visits.json').success(function(data) {
	      $scope.visits = data;
	      $scope.visit = $scope.visits[$routeParams.visitId];
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
    $http.get('data/history.json').success(function(data) {
      $scope.historyData = data;
    });

    $http.get('data/history-case.json').success(function(data) {
      $scope.chart = data;
    });
    /*
    var chart1 = {};
    chart1.type = "ColumnChart";
    chart1.data = {"cols": [
        {id: "month", label: "Month", type: "string"},
        {id: "laptop-id", label: "Laptop", type: "number"},
        {id: "desktop-id", label: "Desktop", type: "number"},
        {id: "server-id", label: "Server", type: "number"},
        {id: "cost-id", label: "Shipping", type: "number"}
    ], "rows": [
        {c: [
            {v: "January"},
            {v: 19, f: "42 items"},
            {v: 12, f: "Ony 12 items"},
            {v: 7, f: "7 servers"},
            {v: 4}
        ]},
        {c: [
            {v: "February"},
            {v: 13},
            {v: 1, f: "1 unit (Out of stock this month)"},
            {v: 12},
            {v: 2}
        ]},
        {c: [
            {v: "March"},
            {v: 24},
            {v: 0},
            {v: 11},
            {v: 6}

        ]}
    ]};

    chart1.options = {
        "title": "Sales per month",
        "isStacked": "false",
        "fill": 20,
        "displayExactValues": true,
        "vAxis": {
            "title": "Sales unit", "gridlines": {"count": 6}
        },
        "hAxis": {
            "title": "Date"
        },
        "seriesType": "bars",
        "series": {3: {type: "line"}}
    };

    chart1.formatters = {};

    $scope.chart = chart1;*/


}]);

myswasthControllers.controller('ProfileCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('data/homeicons.json').success(function(data) {
      $scope.homeicons = data;
    });
}]);

