//Object Literal
var objectType = {
	firstname : "RD",
	lastname : "Literal",
	fullname : function(){
		return this.firstname + " " + this.lastname ;
	}
};
//Constructor method
function objectConstructorType (firstname,lastname){
	this.firstname = firstname;
	this.lastname = lastname;
	this.fullname = function(){
		return this.firstname + " " + this.lastname ;
	};
};
//function type
var objectFunctionType = new function(){
	this.firstname = "RD";
	this.lastname = "Function";
	this.fullname = function(){
		return this.firstname + " " + this.lastname ;
	};
};
$( document ).ready(function() {
$("#objectLiteralValue").html(objectType.fullname());
/**********************************/
 var object1 = new objectConstructorType("RD","Constructor");
 $("#constructorObjectValue").html(object1.fullname());
/**********************************/
$("#functionObjectValue").html(objectFunctionType.fullname());

});