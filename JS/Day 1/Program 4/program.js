var booleanType1 = true;
var booleanType2 = false;
console.log("Before toggle booleanType1 = "+booleanType1 + " booleanType2 ="+ booleanType2);
if(booleanType1){
		booleanType2=booleanType1;
		booleanType1=!booleanType2;
}
console.log("After toggle booleanType1 = "+booleanType1 + " booleanType2 ="+ booleanType2);
