'use strict';

/* App Module */

var myswasthApp = angular.module('myswasthApp', [
  'ngRoute',
  'myswasthControllers',
  'ui.bootstrap'
]);

myswasthApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/homepage', {
        templateUrl: 'partials/homepage.html',
        controller: 'HomePageCtrl'
      }).
      when('/visit', {
        templateUrl: 'partials/visit.html',
        controller: 'VisitCtrl'
      }).
      when('/visit/record', {
          templateUrl: 'partials/visit-record.html',
          controller: 'VisitRecordCtrl'
        }).
      when('/test', {
        templateUrl: 'partials/test.html',
        controller: 'TestCtrl'
      }).
      when('/test/record', {
          templateUrl: 'partials/test-record.html',
          controller: 'TestRecordCtrl'
        }).
      when('/history', {
        templateUrl: 'partials/history.html',
        controller: 'HistoryCtrl'
      }).
      when('/profile', {
        templateUrl: 'partials/profile.html',
        controller: 'ProfileCtrl'
      }).
      otherwise({
        redirectTo: '/homepage'
      });
  }]);
