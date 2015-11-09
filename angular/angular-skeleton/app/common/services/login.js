angular.module('login.service',[])
			 .service('loginService',['$q','apiLocalStorageService',loginService]);

function loginService($q,apiLocalStorageService) {
	var service = {};
	var credentials = { 'rd@gmail.com' : 'rd123' ,'pratibha.mishra@gmail.com' : 'pratu123','shital.agarwal@gmail.com' :'shitala123'} ;

	
	function login(username,password) {
		return $q(function(resolve, reject) {
				var loginValid= false;
				if(credentials[username]!=undefined  && credentials[username] == password){
						resolve(credentials[username]);
				} else {
					reject(false);
				}			

    		});
	}

	function validateLogin() {
		return $q(function(resolve, reject) {
			var localTokenId = apiLocalStorageService.get('tokenid');         
	            if (localTokenId!=undefined) {
	                	resolve(true);
	             }else{
	            		reject(false);
	            }         
            });     
	}

	service.login = login;
	service.validateLogin = validateLogin;
	return service;

};