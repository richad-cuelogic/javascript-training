var arrayObject = {
	array : [] ,
	initialiseArray : function (){
		for( var i = 1; i<=100 ;i++){
			arrayObject.array.push(i);
		}
	},
	printArrayWithToString : function(){
		console.log(arrayObject.array.toString());
	},
	printArrayWithValueOf : function(){
		console.log(arrayObject.array.valueOf());
	},
	printArrayWithJoin : function(){
		console.log(arrayObject.array.join());
	}
}

arrayObject.initialiseArray();
arrayObject.printArrayWithValueOf();
arrayObject.printArrayWithJoin();
