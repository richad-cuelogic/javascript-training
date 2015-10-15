
var calculator = {
	sum : 0,
	errorMsg :  "",
	addition : function(){
		if(arguments.length>=2){
			for(var i=0;i<arguments.length;i++){
				if(typeof arguments[i] == "number"){
					calculator.sum+=arguments[i];
				}
				else{
					calculator.errorMsg="Passed argument not a number";
				}
			}
		}else{
			calculator.errorMsg="Minimum 2 arguments need to be passed for calculation";
		}		
		if(calculator.errorMsg==""){
			return calculator.sum;
		}
		else{
			return calculator.errorMsg;
		}
	},
	subtraction: function(){
		calculator.errorMsg="";
		if(arguments.length>=2){
			for(var i=0;i<arguments.length;i++){
				if(typeof arguments[i] == "number"){
					calculator.sum=arguments[i]-calculator.sum;
				}
				else{
					calculator.errorMsg="Passed argument not a number";
				}
			}
		}else{
			calculator.errorMsg="Minimum 2 arguments need to be passed for calculation";
		}
		
		if(calculator.errorMsg==""){
			return calculator.sum;
		}
		else{
			return calculator.errorMsg;
		}
	},
	division : function(){
		calculator.errorMsg="";
		if(arguments.length>=2){
			for(var i=0;i<arguments.length;i++){
				if(typeof arguments[i] == "number"){
					if(i==0){
						calculator.sum=arguments[i];
					}
					else{
						calculator.sum=calculator.sum/arguments[i];
					}
				}
				else{
					calculator.errorMsg="Passed argument not a number";
				}
			}
		}else{
			calculator.errorMsg="Minimum 2 arguments need to be passed for calculation";
		}
		
		if(calculator.errorMsg==""){
			return calculator.sum;
		}
		else{
			return calculator.errorMsg;
		}
	},
	multiplication: function(){
		calculator.errorMsg="";
		if(arguments.length>=2){
			for(var i=0;i<arguments.length;i++){
				if(typeof arguments[i] == "number"){
					if(i==0){
						calculator.sum=arguments[i];
					}
					else{
						calculator.sum=calculator.sum*arguments[i];
					}
				}
				else{
					calculator.errorMsg="Passed argument not a number";
				}
			}
		}else{
			calculator.errorMsg="Minimum 2 arguments need to be passed for calculation";
		}
		if(calculator.errorMsg==""){
			return calculator.sum;
		}
		else{
			return calculator.errorMsg;
		}
	}

};

$( document ).ready(function() {
	var addObj= calculator.addition(100,200,30,3);//33
	$("#addValue").html(addObj);
	var subtractObj= calculator.subtraction(100,10,"t");//70
	$("#subtractValue").html(subtractObj);
	var divideObj= calculator.division(100,2,2,5);//5
	$("#divideValue").html(divideObj);
	var multiplyObj= calculator.multiplication(10,2,3,8,100);//480
	$("#multiplyValue").html(multiplyObj);
});