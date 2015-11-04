angular.module('home.service',[])
       .service('homeService',['$q', homeService]);

function homeService($q) {
  var service = {};
     var employees = {
                          'rd@gmail.com' : {
                              'name': 'Richa Dagar',
                              'username': 'rd@gmail.com',
                              'address': 'Bund Garden',
                              'email': 'rd@gmail.com',
                              'age': 23,
                              'gender': 'female',
                              'education': 'B.Tech'

                          },
                          'pratibha@gmail.com' : {
                              'name': 'Pratibha Mishra',
                              'username': 'prati@gmail.com',
                              'address': 'Bund Garden',
                              'email': 'pratibha@gmail.com',
                              'age': 21,
                              'gender': 'female',
                              'education': 'MCA'
                          },
                          'ashwini@gmail.com' : {
                              'name': 'Ashwini Chitnis',
                              'username': 'ash@gmail.com',
                              'address': 'Bund Garden',
                              'email': 'ashwini@gmail.com',
                              'age': 22,
                              'gender': 'female',
                              'education': 'MCA'
                          }
                       };
    function employeeInfo(username) {
    return $q(function(resolve, reject) {
      if(employees[username]!=undefined){
          resolve(employees[username]['name']);
      } else {
        reject('Not registered');
      }

      

    });

  }
  function employeesList() {
    return $q(function(resolve, reject) {
      if(typeof employees == 'object'){
          resolve(employees);
      } else {
        reject('No Employees');
      }   
    });

  }

  service.employeeInfo = employeeInfo;
  service.employeesList = employeesList;
  return service;

};