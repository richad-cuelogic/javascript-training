$( document ).ready(function() {
var intType = 1;
var stringType = "My string";
var booleanType1 = true;
var booleanType2 = false;
var arrayType = [];
/******************************************/
//object literal 
var objectType = {
	firstname : "Richa",
	lastname : "Dagar",
	fullname : function(){
		return this.firstname + " " + this.lastname ;
	}
};

arrayType.push(intType);
arrayType.push(stringType);
arrayType.push(booleanType1);
arrayType.push(objectType); 
console.log(arrayType.toString());
$("#arrayValue").html(arrayType.toString());
arrayType.splice(1,1);
console.log(arrayType.toString());
$("#deleteArrayValue").html(arrayType.toString());
console.log("Before toggle booleanType1 ->"+booleanType1 + "booleanType2"+ booleanType2);
if(booleanType1){
	booleanType2=booleanType1;
	booleanType1=!booleanType2;
}
console.log("After toggle booleanType1 ->"+booleanType1 + "booleanType2"+ booleanType2);

/***********************************/
// constructor method
function objectConstructorType (firstname,lastname){
	this.firstname = firstname;
	this.lastname = lastname;
	this.fullname = function(){
		return this.firstname + " " + this.lastname ;
	};
};
 var object1 = new objectConstructorType("R","D");
 console.log( object1.fullname());
 $("#constructorObjectValue").html(object1.fullname());
/**********************************/
//function type
var objectFunctionType = new function(){
	this.firstname = "Richa";
	this.lastname = "Dagar";
	this.fullname = function(){
		return this.firstname + " " + this.lastname ;
	};
};
 console.log(objectFunctionType.firstname);
$("#functionObjectValue").html(objectFunctionType.firstname);

});