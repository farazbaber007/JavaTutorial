var question = "What is your Name?";
var defaultAnswer ="Zeeshan"; 
var name1 = prompt(question, defaultAnswer);
console.log("Name = " + name1);


var question = "what is your age?";
var age = prompt(question); 
var newage = age+5;
console.log("what will be New Age = " + newage);

// default action pass in prompt Like Enter student Name: 

// var stdName = prompt("Enter Student Name", "Enter Name here");
// console.log(stdName);


// convert String to integer (parseint and parseFloat)


var a = 6;
var b = "5";
var c = a + b; //checking
console.log("Test function Answer willbe  65 = " + c);
var c = a + parseInt(b); //checking
console.log("Test function answer will be 11 = " + c) ;



var age = prompt("what is your age parseint");  // enter 25
var num = 40
var sum = age + num; // it will not add just concatenate
console.log("simple = " + sum); //  answer of sum will be 2540

var sum = parseInt(age) + num;  //parseint
console.log("parseInt =" + sum); 



var sum = parseFloat(age) + num;  //parsefloat
console.log("parseFloat =" + sum); 


// Convert string to Number 
var ageNumber = prompt("here is string to Number (Number function)"); // 20
var num1 = 20;
var sum1 = Number(ageNumber) + num1;
console.log(" Here is Number function = " + sum1);

var a = Number(true);
var b = Number(false);
var c = Number("999");
var d = Number("99 99 99");
var e = Number("Hello");

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
