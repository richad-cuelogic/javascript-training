var myArray = [1,2,3,4];
Array.prototype.customPush  = function (element){
	this[this.length] = element;
	return this;
};

Array.prototype.customPop  =  function (){
	return this.slice(0,-1);
};

myArray.customPush(15);
myArray.customPush(17);
myArray.customPop();




