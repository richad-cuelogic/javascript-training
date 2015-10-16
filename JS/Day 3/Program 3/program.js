
function stringMethods(str1,str2){
	var strObj = {};
	if(str1.indexOf(str2)>=0){
		var getStrCounts = str1.split(str2).length-1 ;
		strObj.strCount = "Second string occurs " + getStrCounts + " times.";
		strObj.lastIndex = "Last occurence of the sub string " + str1.lastIndexOf(str2) + " position.";
		return strObj;
	}
	else{
		return -1;
	}
	
}
stringMethods("Richa Dagar Richa Dagar Richa Dagar Richa Dagar Richa Dagar","test");