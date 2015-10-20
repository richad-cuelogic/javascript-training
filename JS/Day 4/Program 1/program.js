
var person = {
    name: "Richa",
    age: 23,
    education : "B.Tech"
};
var employee = {}; 
function objectCopy(source,target) {
 for (var i in source) {  
  		if (typeof source[i] === 'object') {     
  			target[i] = (source[i].constructor === Array)?[]:{};   
  	  		deepCopy(source[i],target[i]);   
  		} 
  	 else target[i] = source[i];
 	} 
  	  	return target; 
}  
  employee = deepCopy(person,employee); 
//  employee.name ="RD Rocks !!!!";
//  employee.education ="CS";
  console.log("Employee",employee);
  console.log("Person",person);
