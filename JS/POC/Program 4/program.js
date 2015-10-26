/*Write a program that will sum up elements of an array 'WITHOUT' using loop,map */
var myArray = [1,2,3,4,5,6,7,8,9];
var arraySum = myArray.reduce(function(prev, current) {
  return prev + current;
});
console.log("My Array :  \n" , myArray.join("\n") , " \n Sum is : " , arraySum);


