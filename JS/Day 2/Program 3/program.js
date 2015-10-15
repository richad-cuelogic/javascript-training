var object = {};
object.var = "Yeah!!! I assigned var to a var";

var reserve =
{
  delete : function(){
  	return "I used delete in my class ,which is not a reserved word";
  }
   //public function continue():void {}
}
$( document ).ready(function() {
	$("#varReserved").html(object.var);
	$("#deleteReserved").html(reserve.delete());
	
});