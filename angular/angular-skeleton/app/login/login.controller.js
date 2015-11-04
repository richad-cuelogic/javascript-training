angular.module('login.controller',['services'])
      .controller('loginCtrl',['$scope','loginService','$location', LoginController])

function LoginController($scope,loginService, $location) {
  $scope.error ="";
  $scope.login = function (){
     loginService.login($scope.username,$scope.password).then(
      function(response) {
         $location.path('/home/'+$scope.username);
      }, function(rejected){
        $scope.error="Invalid username/password";
      } );
    
  };
  
};