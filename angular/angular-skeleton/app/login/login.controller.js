angular.module('login.controller',['services'])
      .controller('loginCtrl',['$scope','loginService','$rootScope','$location', LoginController])

function LoginController($scope,loginService,$rootScope, $location) {
  $scope.error ="";
  $scope.login = function (){
     loginService.login($scope.username,$scope.password).then(
      function(response) {
         $location.path('/home/');
         $rootScope.username = $scope.username;
      }, function(rejected){
        $scope.error="Invalid username/password";
      } );
    
  };
  
};