angular.module('home.controller',['services'])
      .controller('homeCtrl',['$scope','$routeParams','$rootScope','$location','apiLocalStorageService','homeService', HomeController])

function HomeController($scope,$routeParams,$rootScope,$location,apiLocalStorageService,homeService) { 
	$rootScope.employees = [
                           {
                              'name': 'Richa Dagar',
                              'username': 'rd@gmail.com',
                              'address': 'Bund Garden',
                              'email': 'rd@gmail.com',
                              'age': 23,
                              'gender': 'female',
                              'education': 'B.Tech'

                          },
                           {
                              'name': 'Pratibha Mishra',
                              'username': 'pratibha@gmail.com',
                              'address': 'Bund Garden',
                              'email': 'pratibha@gmail.com',
                              'age': 21,
                              'gender': 'female',
                              'education': 'MCA'
                          },
                           {
                              'name': 'Ashwini Chitnis',
                              'username': 'ashwini@gmail.com',
                              'address': 'Bund Garden',
                              'email': 'ashwini@gmail.com',
                              'age': 22,
                              'gender': 'female',
                              'education': 'MCA'
                          },
                          {
                              'name': 'Pranay Dubey',
                              'username': 'pranay@gmail.com',
                              'address': 'Bund Garden',
                              'email': 'pranay@gmail.com',
                              'age': 20,
                              'gender': 'male',
                              'education': 'MCA'
                          }
                       ];
      $scope.isEdit= false;
     if($routeParams.username){
     	$rootScope.username = $routeParams.username;
     	$scope.isEdit= true;
     }
    if (apiLocalStorageService.isSupported()) {
      	 homeService.employeeInfo($routeParams.username).then(
      	      function(response) {
      	         $scope.employee = response;

      	      }, function(rejected){
      	        $scope.error=rejected;
      	      } 
      	 );
    }

     homeService.employeeName($routeParams.username).then(
	      function(response) {
	         $scope.name = response;

	      }, function(rejected){
	        $scope.error=rejected;
	      } 
	 );
      if (apiLocalStorageService.isSupported()) {
         homeService.employeesList().then(
    	      function(response) {
    	         $rootScope.employees = response;

    	      }, function(rejected){
    	        $scope.error=rejected;
    	      } 
    	 );
      }
  	 $scope.updateEmployeeInfo = function (){
       if (apiLocalStorageService.isSupported()) {
        	 homeService.updateEmployeeInfo($scope.employee).then(
      	      function(response) {
      	         $rootScope.employees = response;
      	      	$location.path('/home/'+ $rootScope.username);

      	      }, function(rejected){
      	        $scope.error=rejected;
      	      } 
      	 );
      }
  	};
  	$scope.deleteEmployee = function (username){

  		 homeService.deleteEmployee(username).then(
	      function(response) {
	         $rootScope.employees = response;

	      	$location.path('/home/'+ $rootScope.username);

	      }, function(rejected){
	        $scope.error=rejected;
	      } 
	 	);
    };
  	$scope.addEmployee = function (){
       if (apiLocalStorageService.isSupported()) {
        	 homeService.addEmployeeInfo($scope.employee).then(
      	      function(response) {
      	        $rootScope.employees = response;
      	      	$location.path('/home/'+ $rootScope.username);

      	      }, function(rejected){
      	        $scope.error=rejected;
      	      } 
      	 );
        }
  	};
  	
  $scope.clearLocalStorage = function() {
            apiLocalStorageService.clearAll();
             $location.path('/login');
             apiLocalStorageService.get('tokenid');
  }
  	$scope.predicate = "name";
    $scope.reverse = true;
    $scope.order = function() {
    	$scope.predicate = $scope.sortOption;
        $scope.reverse = ($scope.predicate === $scope.sortOption) ? !$scope.reverse : false;    
    };

};