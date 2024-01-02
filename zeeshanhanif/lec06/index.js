// && Logical operator ( Aik b value false ho gy to result fasle)
console.log("And && operator");
console.log(true & true); //true 1
console.log(false & true); // false 0
console.log(true & false); //false 0 
console.log(false& false); // false 0

var a = 60;
var b = a > 50 && a < 70;
console.log(b); //return true 
document.write(b);


var c = 80;
var d = c > 50 && c < 70;
console.log(d); // return false

var e = 5
var f = 6

var g = e < f && f > e && e == 5;
console.log(g);

console.log("OR || operator");
// OR || operator ( Aik b value true ho gy to result true ho ga)
console.log(true || true); //true 1
console.log(false || true); // false 0
console.log(true || false); //false 0 
console.log(false || false); // false 0

console.log("example || ");
var h = 60;
var i =  h < 50 || h > 70;
console.log(i);

var j = 80;
var k =  j > 50 || j > 70;
console.log(k);



// Not ! operator (Negation or negate operator ) 
//( True ko false or False ko ture kr day ga)
console.log( "Not ! operator (negation method");

console.log(! true); //false
console.log(! false); //true 

console.log("m = 60 m > 50")
var m = 60;
var n = !(m > 50);
console.log(n);
console.log("o = 80 o < 50")

var o = 80;
var p = !(o < 50);
var q = !p

console.log("O = " + o);
console.log("P = !O < 50 = " + p);
console.log("Q = " + q);

