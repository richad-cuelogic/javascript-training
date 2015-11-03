'use strict';

// Declare app level module which depends on views, and components
angular.module('myapp', [
  'ngRoute',
  'user',
  'login'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/login'});
}]);
