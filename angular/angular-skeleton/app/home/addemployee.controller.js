angular.module('addemployee.controller',['services'])
      .controller('addEmployeeCtrl',['$scope','$routeParams','$rootScope','$location','homeService', addEmployeeController])

function addEmployeeController($scope,$routeParams,$rootScope,$location,homeService) { 
	 $scope.employees = [];
	 $scope.isEdit= false;
	 
	 $scope.addEmployee = function (){
  	 homeService.addEmployee($scope.employee).then(
	      function(response) {
	         $scope.employees = response;
	      	$location.path('/home/'+ $rootScope.username);

	      }, function(rejected){
	        $scope.error=rejected;
	      } 
	 );
  	};
};