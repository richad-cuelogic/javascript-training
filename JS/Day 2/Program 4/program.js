var loopFunctions = {
	startFrom : 1 ,
	endTo : 100 ,
	msg : "",
	forLoop : function(){
		loopFunctions.msg = "";
		if(typeof loopFunctions.startFrom == "number" && typeof loopFunctions.endTo == "number"){
			for(var i=loopFunctions.startFrom;i<=loopFunctions.endTo;i++){
				loopFunctions.msg = loopFunctions.msg +i+ "\n";
			}
		}else{
			loopFunctions.msg = "Range defined is not a number";
		}
		return loopFunctions.msg;
		
	},
	whileLoop : function(){
		loopFunctions.msg = "";
		if(typeof loopFunctions.startFrom == "number" && typeof loopFunctions.endTo == "number"){
			var i=loopFunctions.startFrom;
			while(i<=loopFunctions.endTo){
				loopFunctions.msg = loopFunctions.msg +i+ "\n";
				i++;
			}
		}else{
			loopFunctions.msg = "Range defined is not a number";
		}
		return loopFunctions.msg;
	},
	doWhileLoop : function(){
		loopFunctions.msg = "";
		if(typeof loopFunctions.startFrom == "number" && typeof loopFunctions.endTo == "number"){
			var i=loopFunctions.startFrom;
			do{
				loopFunctions.msg = loopFunctions.msg +i+ "\n";
				i++
			}while(i<=loopFunctions.endTo);
		}else{
			loopFunctions.msg = "Range defined is not a number";
		}
		return loopFunctions.msg;
	}

}



	console.log("For Loop : ",loopFunctions.forLoop());
	console.log("While Loop : ",loopFunctions.whileLoop());
	console.log("Do while Loop : ",loopFunctions.doWhileLoop());
