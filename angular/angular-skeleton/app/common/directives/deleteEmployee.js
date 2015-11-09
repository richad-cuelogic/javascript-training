angular.module('delete.employee', [])
.directive('deleteEmployee', function() {
  return {
  	restrict: 'E',
    templateUrl: 'delete-employee.html'
  };
});