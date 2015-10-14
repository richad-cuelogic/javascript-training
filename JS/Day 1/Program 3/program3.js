var intType = 1;
var stringType = "My string";
var booleanType1 = true;
var booleanType2 = false;
var arrayType = []; 
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

$( document ).ready(function() {
	$("#arrayValue").html(arrayType.toString());
	arrayType.splice(1,1);
	$("#deleteArrayValue").html(arrayType.toString());

});