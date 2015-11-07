angular.module('login.controller',['services'])
      .controller('loginCtrl',['$scope','apiLocalStorageService','loginService','$rootScope','$location', LoginController])

function LoginController($scope,apiLocalStorageService,loginService,$rootScope, $location) {
  $scope.error ="";
  $scope.login = function (){
         loginService.login($scope.username,$scope.password)
         .then(function(response) {
             $location.path('/home/');
             $rootScope.username = $scope.username;
             if (apiLocalStorageService.isSupported()) {                       
                            apiLocalStorageService.set('tokenid', response);                      
             }
          }, function(rejected){
            $scope.error="Invalid username/password";
          })
          console.log("Token value : ",apiLocalStorageService.get('tokenid'));
  };
  
  
};