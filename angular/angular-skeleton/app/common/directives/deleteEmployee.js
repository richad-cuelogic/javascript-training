angular.module('delete.employee', [])
.directive('deleteEmployee', function() {
  return {
  	restrict: 'E',
    templateUrl: 'app/home/views/delete-employee.html',
     controller: 'homeCtrl'
    //link : //$('.employee-list').append();
  };
});