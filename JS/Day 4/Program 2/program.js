var person = {
    name: "Richa",
    age: 23,
    education : "B.Tech"
};
var employee = {
	name: "Dagar",
	technology:"JS",
	designation:"SSE"
}; 
var mergeObject ={};

function mergeObjects(objectA,objectB){
	var  merge ={};
	 for (var i in objectA) { 
	   	if (typeof objectA[i] === 'object') {     
  			merge[i] = (objectA[i].constructor === Array)?[]:{};   
  	  		mergeObjects(objectA[i],merge[i]);   
  		} 
  	 	else merge[i] = objectA[i];
 	} 
 	for (var j in objectB) { 
	  		if (typeof objectB[j] === 'object') {     
	  			merge[j] = (objectB[j].constructor === Array)?[]:{};   
	  	  		mergeObjects(objectB[j],merge[j]);   
	  		} else if(!objectA.hasOwnProperty(j)){
	  			 merge[j] = objectB[j]; 
	  		}
 	} 
  	  	return merge; 
}
console.log("Object 1 : ",person);
console.log("Object 2 : ",employee);
mergeObject = mergeObjects(person,employee);
console.log("Merged Object : ",mergeObject);

