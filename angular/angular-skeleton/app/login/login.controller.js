angular.module('login.controller',['services'])
      .controller('loginCtrl',['$scope','loginService',LoginController])

function LoginController($scope,loginService) {
  $scope.login = loginService.login();
  if($scope.login){
    window.location = ('#/users');
  }
};