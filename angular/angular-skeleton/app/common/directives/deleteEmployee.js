angular.module('delete.employee', ['home.service'])
.directive('deleteEmployee', function(homeService) {
  return {
  	restrict: 'E',
    templateUrl: 'app/home/views/delete-employee.html',
    link : function($scope, $element, attr) {
    $element.on("click",function(){
    	console.log(attr.username);
    	alert("on click");
     	homeService.deleteEmployee(attr.username);
     	
     });
    }

  };
});