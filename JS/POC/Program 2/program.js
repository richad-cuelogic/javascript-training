var str = 'My name is Pranay';
String.prototype.stringReplace  = function(str1,str2){
	return this.split(str1).join(str2);
};

str.stringReplace("Pranay","Shamsher");


