angular.module('employee.select', ['home.service'])
.directive('employeeSelect',function() {
  return {
  	restrict: 'A',
    link : function($scope, $element, attr) {
    $element.on("click",function(){
    	if($element.hasClass('bg-green')){
    		$element.removeClass('bg-green');
    	}else{
    		$element.addClass('bg-green');
    	}
     	
     });
    }

  };
});