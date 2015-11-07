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
    .run(['$rootScope', '$location', 'apiLocalStorageService',
        function($rootScope, $location, apiLocalStorageService) {
            if ($location.search().tokenid) {
                apiLocalStorageService.set('tokenid', $location.search().tokenid);
                $location.search('tokenid', null);
            }
        }
    ]);

