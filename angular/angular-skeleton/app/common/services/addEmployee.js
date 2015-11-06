angular.module('addEmployee.service',[])
       .service('addEmployeeService',['$q', addEmployeeService]);

function addEmployeeService($q) {
  var service = {};
  
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

   service.addEmployee = addEmployee;
  return service;

};