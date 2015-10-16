function student (firstname,lastname,batch){
	this.firstname = firstname;
	this.lastname = lastname;
	this.batch = batch;
	this.fullname = function(){
		return this.firstname + "" +this.lastname;
	};
	this.profile = function(){
		return "Student Name :" + this.firstname + "" +this.lastname +"is in Class  :" + this.batch ;
	};
};
student.prototype.printName = function(){
		return  this.firstname + " " +this.lastname ;
};
var student1 = new student("Richa","Dagar","2012");
var student2 = new student("Shital","Agarwal","2011");
var student3 = new student("Pratibha","Mishra","2013");

student.prototype.education = function(){
		return "b.Tech";
	};

var student4 = new student("Ashwini","Chitnis","2015");
console.log("Student 1", student1.printName());
console.log("Student 2", student2.printName());
console.log("Student 3", student3.printName());
console.log("Student 4", student4.printName());
