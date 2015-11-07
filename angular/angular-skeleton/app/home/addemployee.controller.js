angular.module('addemployee.controller',['services'])
      .controller('addEmployeeCtrl',['$scope','$routeParams','$rootScope','$location','apiLocalStorageService','homeService', addEmployeeController])

function addEmployeeController($scope,$routeParams,$rootScope,$location,apiLocalStorageService,homeService) { 
	 $scope.employees = [];
	 $scope.isEdit= false;
	 
	 $scope.addEmployee = function (){
	 	 if (apiLocalStorageService.isSupported()) {
		  	 homeService.addEmployee($scope.employee).then(
			      function(response) {
			         $scope.employees = response;
			      	$location.path('/home/'+ $rootScope.username);

			      }, function(rejected){
			        $scope.error=rejected;
			      } 
			 );
		}
  	};
};