angular.module('login.controller',['services'])
      .controller('loginCtrl',['$scope','loginService',LoginController])

function LoginController($scope,loginService) {
  //$scope.login = loginService.get();
  $scope.loginValid= false;
  	$scope.credentials = { 'rd@gmail.com' : 'rd123' ,'pratu@gmail.com' : 'pratu123','shitala@gmail.com' :'shitala123'} ;
        function login() {
          	 $scope.loginValid= false;
            if($scope.credentials[$scope.username] && $scope.credentials[$scope.username]== $scope.password){
            	$scope.loginValid= true;
            }

        };
};