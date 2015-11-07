angular.module('interceptor.service', [])
    .service('interceptorService', ['apiLocalStorageService', interceptorService]);

function interceptorService(apiLocalStorageService) {
    var setInjector = {
        request: function(config) {
            if (apiLocalStorageService.isSupported()) {
                config.headers['authorization'] = apiLocalStorageService.get('tokenid');
            }
            return config;
        }
    };
    return setInjector;
};
