var object = {};
object.var = "Yeah!!! I assigned var to a var";

var reserve =
{
  delete : function(){
  	return "I used delete in my class ,which is not a reserved word";
  }
}

console.log(object.var);
console.log(reserve.delete());