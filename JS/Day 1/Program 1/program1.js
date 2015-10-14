var intType = 1;
var stringType = "My string";
var booleanType = true;
var arrayType = ["its an array"];
var objectType = {
	firstname : "Richa",
	lastname : "Dagar",
	fullname : function(){
		return this.firstname + " " + this.lastname ;
	}
};

$( document ).ready(function() {
	$("#intValue").html(intType);
	$("#stringValue").html(stringType);
	$("#booleanValue").html(booleanType);
	$("#objectValue").html(objectType.fullname());
	$("#arrayValue").html(arrayType);
});