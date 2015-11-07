angular.module('login.service',[])
			 .service('loginService',['$q', loginService]);

function loginService($q) {
	var service = {};
	
	
	function login(username,password) {
		return $q(function(resolve, reject) {
			var loginValid= false;
			var credentials = { 'rd@gmail.com' : 'rd123' ,'pratibha.mishra@gmail.com' : 'pratu123','shital.agarwal@gmail.com' :'shitala123'} ;
			if(credentials[username]!=undefined  && credentials[username] == password){
					resolve(credentials[username]);
			} else {
				reject(false);
			}

			

    });

	}

	service.login = login;

	return service;

};