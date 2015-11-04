angular.module('home.controller',['services'])
      .controller('homeCtrl',['$scope','$routeParams','homeService', HomeController])

function HomeController($scope,$routeParams,homeService) { 

	 homeService.employeeInfo($routeParams.username).then(
	      function(response) {
	         $scope.name = response;

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
  	
  	 homeService.employeeEdit().then(
	      function(response) {
	         $scope.editEmployee = response;

	      }, function(rejected){
	        $scope.error=rejected;
	      } 
	 );

  
};