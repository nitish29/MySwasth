'use strict';

/* App Module */

var myswasthApp = angular.module('myswasthApp', [
  'ngRoute',
  'myswasthControllers',
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
      when('/test', {
        templateUrl: 'partials/test.html',
        controller: 'TestCtrl'
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
