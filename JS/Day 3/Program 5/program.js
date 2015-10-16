var array1D = ['00','01','11','10','11','00'] ;
var array1 = [];
var array2 = [];
for(var i=0; i<array1D.length;i++){
 	array1.push(array1D[i].slice(0,1));
 	array2.push(array1D[i].slice(1,2));
}
var array2D= [array1,array2];
console.log(array2D);