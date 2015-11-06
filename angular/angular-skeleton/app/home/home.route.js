angular.module('home.route', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'app/home/views/home.html',
     controller: 'homeCtrl'
  });
  $routeProvider.when('/home/addEmployee', {
    templateUrl: 'app/home/views/editEmployee.html',
     controller: 'addEmployeeCtrl'
  });
  $routeProvider.when('/home/employeeEdit/:username', {
    templateUrl: 'app/home/views/editEmployee.html',
     controller: 'homeCtrl'
  });
}]);