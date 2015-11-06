angular.module('home.controller',['services'])
      .controller('homeCtrl',['$scope','$routeParams','$rootScope','$location','$filter','homeService', HomeController])

function HomeController($scope,$routeParams,$rootScope,$location,$filter,homeService) { 
	$scope.employees = {
                          'rd@gmail.com' : {
                              'name': 'Richa Dagar',
                              'username': 'rd@gmail.com',
                              'address': 'Bund Garden',
                              'email': 'rd@gmail.com',
                              'age': 23,
                              'gender': 'female',
                              'education': 'B.Tech'

                          },
                          'pratibha@gmail.com' : {
                              'name': 'Pratibha Mishra',
                              'username': 'pratibha@gmail.com',
                              'address': 'Bund Garden',
                              'email': 'pratibha@gmail.com',
                              'age': 21,
                              'gender': 'female',
                              'education': 'MCA'
                          },
                          'ashwini@gmail.com' : {
                              'name': 'Ashwini Chitnis',
                              'username': 'ashwini@gmail.com',
                              'address': 'Bund Garden',
                              'email': 'ashwini@gmail.com',
                              'age': 22,
                              'gender': 'female',
                              'education': 'MCA'
                          }
                       };
    $rootScope.username = $routeParams.username;
	 homeService.employeeInfo($routeParams.username).then(
	      function(response) {
	         $scope.employee = response;

	      }, function(rejected){
	        $scope.error=rejected;
	      } 
	 );
     homeService.employeeName($routeParams.username).then(
	      function(response) {
	         $scope.name = response;

	      }, function(rejected){
	        $scope.error=rejected;
	      } 
	 );
     homeService.employeesList().then(
	      function(response) {
	         $scope.employees = response;

	      }, function(rejected){
	        $scope.error=rejected;
	      } 
	 );
  	 $scope.updateEmployeeInfo = function (){
  	 homeService.updateEmployeeInfo($scope.employee).then(
	      function(response) {
	         $scope.employees = response;
	      	$location.path('/home/'+ $rootScope.username);

	      }, function(rejected){
	        $scope.error=rejected;
	      } 
	 );
  	};
  	$scope.deleteEmployee = function (){
  		 homeService.deleteEmployee($scope.employee.username).then(
	      function(response) {
	         $scope.employees = response;
	      	$location.path('/home/'+ $rootScope.username);

	      }, function(rejected){
	        $scope.error=rejected;
	      } 
	 	);
    };
  
  	
  	$scope.predicate = 'name';
    $scope.reverse = true;
     var orderBy = $filter('orderBy');
    $scope.order = function() {
    	$scope.predicate = $scope.sortOption;
        $scope.reverse = ($scope.predicate === $scope.sortOption) ? !$scope.reverse : false;   
        $scope.employees =  orderBy($scope.employees, $scope.predicate, $scope.reverse );

    };

};