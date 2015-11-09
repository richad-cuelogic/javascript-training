'use strict';

// Declare app level module which depends on views, and components
angular.module('myapp', [
  'ngRoute',
  'LocalStorageModule',
  'user',
  'login',
  'home'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/login'});
}])
 .config(['localStorageServiceProvider', '$httpProvider',
        function(localStorageServiceProvider, $httpProvider) {
                localStorageServiceProvider
                    .setPrefix('authtoken')
                    .setStorageType('localStorage')
                    .setNotify(true, true);
             
            $httpProvider.interceptors.push('interceptorService');
        }
    ])
    .run(['$rootScope', '$location', 'apiLocalStorageService','loginService',
        function($rootScope, $location, apiLocalStorageService,loginService) {     
        $rootScope.$on('$routeChangeSuccess',function(){
             if (apiLocalStorageService.get('tokenid')==null || apiLocalStorageService.get('tokenid')==undefined) {                
                $location.path('/login');
             }
         })
        }
    ]);

