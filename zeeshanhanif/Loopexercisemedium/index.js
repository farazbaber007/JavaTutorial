
/*  Comments 
        Alt + Shift + A   (paragraph comments)
        Ctrl+ /  (line comment)
*/

// https://medium.com/@andrei_diaconu/javascript-for-loop-exercises-4c6cbf570411

var num = 18 ;
var isPrime = true;
for(var i = 2; i < num; i++){
    //document.write(i + "<br> ");
    var result = num % i;
    //document.write(result + "<br>");
    if(result == 0){
        document.write("This Number is not Prime <br> " + num + "/" +i);
        isPrime = false;
        break;
    }
   /*  else{
        document.write("This Numbe is prime " + num + "<br>" + i +"<br>");
    }
 */
};

/* if (isPrime = true){
    document.write("This Numbe is prime <br>" + num + "/ " + i +"<br>");    
}; */
if (isPrime){
    document.write(" This Numbe is prime <br>" + num + "/ " + i +"<br> <br>" ) ;    
};


document.write(" <br> 1 — Print the numbers from 0 to 15 <br> <br>");
+"<br>";
for(var i =0; i <= 15; i++){
    document.write("Value of i is: = " + i +"<br>" );
    
};

document.write(" <br> 2 — Print the numbers from 12 to 24" +"<br> <br>");


for(var i = 12; i <= 24; i++){
    document.write("Value of i is: = " + i +"<br>" );
};


document.write(" <br> #3 — Print the ODD numbers from 7 to 31" +"<br> <br>");
for(var i = 7; i <= 31; i++){
    if(i % 2 != 0){
    document.write("Value of i is: = " + i +"<br>" );
    }
};


document.write(" <br> #4 — Print the EVEN numbers from 10 to -20" +"<br> <br>");
for(var i = 10; i <= 20; i++){
    if(i % 2 == 0){
    document.write("Value of i is: = " + i +"<br>" );
    }
};

num = 3;
document.write(" <br> # — Table of 3" +"<br> <br>");
for(var i = 1; i <= 10; i++){
    result = num * i;
    document.write(num + " x " +i +" = "   + result +"<br>" );
    };

    
    
    /* #5 — Iterate through all numbers from 1 to 45. Print the following:
    For multiples of 3 print “Fizz”
    For multiples of 5 print “Buzz”
    For multiples of 3 and 5 print “FizzBuzz”
    
     */

document.write(" <br> #5 — Iterate through all numbers from 1 to 45" +"<br> <br>");
for(var i = 1; i <= 45; i++){
    if(i % 3 == 0 && i % 5 == 0){
        document.write("Fizz Buzz " + i + "<br>" );
    }
    else if ( i % 3 == 0 )
        document.write("Fizz " + i + "<br>");
    else if( i % 5 == 0)
        document.write("Buzz " + i + "<br>");
};



document.write(" <br> #6 — Print all the elements of the following array " +"<br> <br>");

var thisIsArray = ["element1", "element2", "element3", "element4"];

    for(i = 0; i < thisIsArray.length; i++ ){
        document.write(thisIsArray[i] + "<br>");
    };



    document.write(" <br> #7 — Calculate the sum of all the numbers in the following array " +"<br> <br>");

    var numbersArray = [1,12,22,123,49];
        var sum = 0;
        for(i = 0; i < numbersArray.length; i++ ){
            sum = sum + numbersArray[i]; 
            document.write( " The sum is:  " + sum + "<br>");
        };
    
        





/* Alt + Shift + A
https://www.freecodecamp.org/news/javascript-for-loops/
How to Display Text Multiple Times
Let’s start by displaying some text several times until our condition is met. 
*/
document.write(" <br> codeCamp " +"<br> <br>");
for( var i = 0; i < 3; i++){
    var Name1 = "Faraz";
    document.write("<br> Hi, My Name is "+ Name1);
}


/* How to Display a Sequence of Numbers with a For Loop
This time around, let’s display a sequence of numbers by displaying the iteration value.
 */
for (let i = 2; i <= 5; i++) {
    console.log(i);  // printing the value of i
    document.write(i);
}


/* How to Display a Sequence of Even Numbers
Let’s now display a sequence of even numbers only by displaying the iteration value:
 */
for (let i = 2; i <= 10; i+=2) {
    console.log(i);  // printing the value of i
    document.write(i);
}

for (let i = 1; i <= 10; i+=2) {
    console.log(i);  // printing the value of i
}

/* How to Break a For Loop Operation
So far, we have seen how to create a for loop, but it’s also important to mention that we can break out of a loop using break. The break statement is used to terminate the loop immediately when it is encountered.

 */

for (let i = 1; i <= 10; i++) {    
    if (i == 5) {
        break;
    }
    console.log(i);
    document.write(i);
}

/* How to Display the Sum of Natural Numbers
Let’s now loop from 1-10 and then add these numbers together as the iteration is increased: */

var sum = 0;

for (let i = 1; i <= 10; i++) {
    sum += i;  // This is same as: sum = sum + i
}

console.log('<br> The sum of 1 to 10 is: ', sum); // "The sum of 1 to 10 is:  55"
document.write('<br> The sum of 1 to 10 is: ', sum); // "The sum of 1 to 10 is:  55"
/* Note: We are adding console.log(…) outside the loop, so it only gives us the final output when the loop is terminated.

We can also decide to use variables to set the max number of our condition this way:
 */
var sum1 = 0;
var n = 10;

for (let i = 1; i <= n; i++) {
    sum1 += i;  // this is same as: sum = sum + i
}

console.log('The sum of 1 to 10 is: ', sum1); // "The sum of 1 to 10 is:  55"
document.write('The sum of 1 to 10 is: ', sum1); // "The sum of 1 to 10 is:  55"


/* How to Perform Infinite Loops with a For Loop
This can hang your system, because it continues to run until the memory is full, since the condition always evaluates as true.
 */
/* for(let i = 1; i > 0; i++) {
    break;
    console.log(i);
    // block of code  
        
}*/

/* How to Loop Through an Array to Check for Odd and Even Numbers
Most times you will be working with arrays, so let’s see how we can loop through an array of numbers to output all odd and even numbers:
 */
var numbers = [1, 4, 44, 64, 55, 24, 32, 55, 19, 17, 74, 22, 23];
var evenNumbers = [];
var oddNumbers = [];

for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 != 1) {
        evenNumbers.push(numbers[i]);
    } else {
        oddNumbers.push(numbers[i]);
    }
}

console.log("The even numbers are: " + evenNumbers); // "The even numbers are: 4,44,64,24,32,74,22"
console.log("The odd numbers are: " + oddNumbers); // "The odd numbers are: 1,55,55,19,17,23"

document.write("The even numbers are: " + evenNumbers); // "The even numbers are: 4,44,64,24,32,74,22"
document.write("The odd numbers are: " + oddNumbers); // "The odd numbers are: 1,55,55,19,17,23"


/* How to Loop Through an Array of Numbers to Get the Maximum and Minimum Number
Finally, before we round up this article, let’s see how to get the maximum and minimum number from an array with for loop:

Maximum:
 */
var numbers = [1, 4, 44, 64, 55, 24, 32, 55, 19, 17, 74, 22, 23];
var max = 0;

for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}

console.log(max); // 74


/* Minimum: */

var numbers = [4, 44, 64, 55, 24, 32, 55, 19, 17, 74, 22, 23];
var min = numbers[0];

for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] < min) {
        min = numbers[i];
    }
}

console.log(min); // 4
