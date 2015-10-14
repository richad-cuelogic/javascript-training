var booleanType1 = true;
var booleanType2 = false;
$( document ).ready(function() {
	$("#initialValue").html("Before toggle booleanType1 = "+booleanType1 + " booleanType2 ="+ booleanType2);
	if(booleanType1){
		booleanType2=booleanType1;
		booleanType1=!booleanType2;
	}
	$("#toggleValue").html("After toggle booleanType1 = "+booleanType1 + " booleanType2 ="+ booleanType2);

});