angular.module('login.controller',['services'])
      .controller('loginCtrl',['$scope','apiLocalStorageService','loginService','$rootScope','$location', LoginController])

function LoginController($scope,apiLocalStorageService,loginService,$rootScope, $location) {
  $scope.error ="";
  $scope.login = function (){
         loginService.login($scope.username,$scope.password)
         .then(function(response) {          
             if (apiLocalStorageService.isSupported()) {                       
                  apiLocalStorageService.set('tokenid', $scope.username);       
                  $location.path('/home/');
                  $rootScope.username = $scope.username;               
             }else{
                  $scope.error="Please update your browser version.";
             }
          }, function(rejected){
                  $scope.error="Invalid username/password";
          })
          console.log("Token value : ",apiLocalStorageService.get('tokenid'));
  };

  $scope.validateLogin = function (){
        loginService.validateLogin()
         .then(function(response){          
                 if (apiLocalStorageService.isSupported()) {                       
                      apiLocalStorageService.set('tokenid', $scope.username);       
                      $location.path('/home/');
                      $rootScope.username = $scope.username;               
                 }else{
                      $scope.error="Please update your browser version.";
                 }
          },function(rejected){
                 $scope.login();
          });
  };
  
  
};