angular.module('login.service',[])
       .service('loginService',[loginService]);



function loginService() {

  var service = {};
  service.login = login;
  return service;

  $scope.credentials = { 'rd@gmail.com' : 'rd123' ,'pratu@gmail.com' : 'pratu123','shitala@gmail.com' :'shitala123'} ;


  function login() {
   $scope.loginValid= false;
    if($scope.credentials[$scope.username] && $scope.credentials[$scope.username]== $scope.password){
        $scope.loginValid= true;
    }
    return $scope.loginValid;
  };
  
        
  return true;
};