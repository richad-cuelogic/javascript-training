var array1D = ['00','01','11','10','11','00'] ;
var array2D = [ [] ,[] ] ;
for(var i=0; i<array1D.length;i++){
		array2D[0].push(array1D[i].slice(0,1));
		array2D[1].push(array1D[i].slice(1,2));
}
console.log(array2D);