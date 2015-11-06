angular.module('home.service',[])
       .service('homeService',['$q', homeService]);

function homeService($q) {
  var service = {};
     var employees = [
                           {
                              'name': 'Richa Dagar',
                              'username': 'rd@gmail.com',
                              'address': 'Viman Nagar',
                              'email': 'rd@gmail.com',
                              'age': 23,
                              'gender': 'female',
                              'education': 'B.Tech'

                          },
                          {
                              'name': 'Pratibha Mishra',
                              'username': 'pratibha@gmail.com',
                              'address': 'Magarpatta',
                              'email': 'pratibha@gmail.com',
                              'age': 21,
                              'gender': 'female',
                              'education': 'BCA'
                          },
                           {
                              'name': 'Ashwini Chitnis',
                              'username': 'ashwini@gmail.com',
                              'address': 'Ashok Nagar',
                              'email': 'ashwini@gmail.com',
                              'age': 22,
                              'gender': 'female',
                              'education': 'MCA'
                          },
                          {
                              'name': 'Pranay Dubey',
                              'username': 'pranay@gmail.com',
                              'address': 'Bund Garden',
                              'email': 'pranay@gmail.com',
                              'age': 20,
                              'gender': 'male',
                              'education': 'MCA'
                          }
                       ];
    function employeeName(username) {
      return $q(function(resolve, reject) {
        for(var i=0;i<=employees.length;i++)
        { 
           if(employees[i]["username"]==username){
                resolve(employees[i]["name"]);
                break;
            } else {
              reject('Not registered');
            }
        }
      });

  }
  function employeeInfo(username) {
      return $q(function(resolve, reject) {
        for(var i=0;i<=employees.length;i++)
        { 
           if(employees[i]["username"]==username){
                resolve(employees[i]);
                break;
            } else {
              reject('Not registered');
            }
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

  function updateEmployeeInfo(objParams) {
    employees.push(objParams);
    return $q(function(resolve, reject) {   
      if(typeof employees == 'object'){
          resolve(employees);
      } else {
        reject('Cannot update');
      }   
    });

  }
   function deleteEmployee(username) {  
    return $q(function(resolve, reject) {
     for(var i=0;i<=employees.length;i++)
        { 
           if(employees[i]["username"]==username){
                 delete employees[i];
                resolve(employees);
                break;
            } 
        }      
    });

  }

  function addEmployee(objParams) {
    employees.push(objParams);
    return $q(function(resolve, reject) {   
      if(typeof employees == 'object'){
          resolve(employees);
      } else {
        reject('Cannot add');
      }   
    });

  }

  service.employeeName = employeeName;
  service.employeeInfo = employeeInfo;
  service.employeesList = employeesList;
  service.updateEmployeeInfo = updateEmployeeInfo;
  service.deleteEmployee = deleteEmployee;
  service.addEmployee = addEmployee;
  return service;

};