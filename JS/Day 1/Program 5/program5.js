var string1 = "Hey Richa !!";
var string2 = "Welcome , to JS training";

$( document ).ready(function() {
	$("#string1").html(string1);
	$("#string2").html(string2);
	$("#concatString").html(string1+" " +string2 );
});