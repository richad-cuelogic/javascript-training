var arrayObject = {
	array : [] ,
	initialiseArray : function (){
		for( var i = 1; i<=100 ;i++){
			arrayObject.array.push(i);
		}
	},
	printArrayWithJoin : function(){
		console.log(arrayObject.array.join("\n"));
	}
}

arrayObject.initialiseArray();
arrayObject.printArrayWithJoin();
