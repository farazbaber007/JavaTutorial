/* alert("Test Lec 02");


document.write("Lecture Two 'data type' ")

var age = 56;
var count=56;
count = 66;

var sum = 5+6;

var a = 3;
var b = 5;
var c = a + b ;
console.log(c);

var isFeepaid = true;


alert(isFeepaid);
console.log(isFeepaid);
document.write(isFeepaid);

//undefined special data type
var abc;
var age;
alert(abc);
alert(age);
var name = "Faraz";
alert(name);
checking = undefined;
alert(checking);

// Null is also a special data type

var xyz = null  ;
alert(xyz);


// Dynamic Data Type (We can change variable string to any kind of variable type)
// string to numeric and numeric to boolean
document.write("Here is document.write function starts")
var age = 100;
console.log(age);
alert(typeof age);
console.log(typeof age);
document.write(typeof age);


var age = "hello";
console.log(age);
alert(typeof age);
console.log(typeof age);
document.write(typeof age);
var age = true;
console.log(age);
alert(typeof age);
console.log(typeof age);
document.write(typeof age);


//typeof operator shows the data type of variable used above

typeof age;
*/

// artithmatic operations

var a = 10;
var b = 4;
var c = a + b;
var d = a - b;
var e = a * b;
var f = a / b;
var g = a % b;
var h = a ** b; // power 10 power 4
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(h);

// asignment operations equal sign is assignment operator
var a = 10; 
a = a + 8;
console.log(a);

//same as above
var a = 10;
a += 8;
console.log(a);

// BODMAS (Bracket Orders (Division and Multiplication Left to right) Addition and substraction (left to right) )

var a =5 + 2 * ( 3 - 2 )/ 2 ; // result 6
console.log(a);

var a2= 3 + 5 * 2 ; // result 13
console.log(a2);
 var b = 8 / 2 - 1; // result 3
 console.log(b);

 var c = 3 % 2 // result 1
 console.log(c);

 var d = 3 % 2 + 4 - 1 // result 4
 console.log(d);

 var e = a2 + 5 * d - b / (3 + b); // 32.5
 console.log(a2);
 console.log(e);


 // increment and decrement operator (uniary operators    )

 var a = 6;
 a++;
 console.log(a);
 var a = 6;
 ++a;
 console.log(a);
  a++;
 console.log(a);
  --a;
 console.log(a);
 a--;
 console.log(a);


 var a = 6;
 var b = 3;
 var c = ++a - --b + --a;
 console.log(a);
 console.log(b);
 console.log(c);

 //postfix increment
 var age = 12;
 var newAge = age++;
 console.log(age);
 console.log(newAge);

 var x=4;
 var y=2;
 var z = x++ - y;
 console.log(x);
 console.log(y);
 console.log(z);

 var x=4;
 var y=2;
 var z = ++x - y;
 console.log(x);
 console.log(y);
 console.log(z);

 // concatenate strings and numbers

 var a = "6" + 2;
 var b = "Hello" + 2;
 var c = "Hello " + 3+4; 
 var d = "Hello " + (3+4);

 console.log(a);
 console.log(b);
 console.log(c);
 console.log(d);