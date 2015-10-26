var myArray = [1,2,3,4];
Array.prototype.customPush  = function (element){
	myArray[myArray.length] = element;
	return myArray;
};

Array.prototype.customPop  =  function (){
	return myArray.slice(0,-1);
};

myArray.customPush(15);
myArray.customPush(17);
myArray.customPop();



