
// literal array style (Most commonly used)
//var food = ["Apple", "orange", "Mango"];
// Array with new keyword
// var foods2 = new array ("Burger", "pizza", "sandwich");

// var a = food[0];
// var b = food[1];
// var c = food[2];
// // alert(a);
//document.write(food);
// document.write(a +"<br>");
// document.write(b +"<br>");
// document.write(c +"<br>");
// document.write(food[2] +"<br>");

// if value is not in array will show undefined
//document.write(food[3] + "<br>");




// add/update element using index
var arrayElement = []
console.log(arrayElement);
arrayElement[0] = "element1";
arrayElement[1] = "element2";
arrayElement[2] = "element3";
console.log(arrayElement);
console.log(arrayElement[2]);
document.write(arrayElement);
document.write(arrayElement[0] + "<br>");
//arrayElement[7] = "element7";
//document.write(arrayElement[5]);

arrayElement[1] = "sandwich";
document.write(arrayElement);

//length property (To find the element in array) index will be -1 from length 
document.write(" <br> The length of an array is: "+arrayElement.length);

// every element add in sequance
//pop will remove and return deleted item
arrayElement.push("pizza");
document.write("<br>"+arrayElement);
document.write("<br>"+arrayElement.length);
var a1 = arrayElement.pop();
document.write("<br>"+arrayElement.length);
document.write("<br>"+arrayElement);
document.write("<br>"+ a1);
// nested Loops (if outer loop will run 2 times and inner loop will 5 times )
// it means every iteration of outer loop runs inner loop iteration 5 times of each iteration of outer loop )

 for (var i = 0; i < 3; i++ ){
    for (var j=0; j<2; j++){
    console.log("I = " + i + " j= " +j);
    }
    console.log("Ist Iteration complete")
}
 


//https://medium.com/@andrei_diaconu/it-beginner-series-javascript-if-else-exercises-cfc5d65b6f94

/* Exercise #1 — Determine If a Number Is Positive
Scenario: Write a program that determines whether a given number is positive or not.
 */

var a = 5;
if (a > 0){
    document.write("<br> this number is positive");
}
else {
    document.write("<br> This number is negative" );
}

/* Exercise #2 — Check Even or Odd
Scenario: Write a program that checks if a number is even or odd. */

var a = 7;
if(a % 2 === 0){
    document.write("<br> This number is Even");
}
else {
    document.write("<br> This number is odd");
}

/* Exercise #3 — Determine the Greater Number
Scenario: Write a program to determine the greater of two numbers. */

var num1 = 105;
var num2 = 106;

if (num1 > num2 ){
    document.write("<br> num1 is greater number");
}
else {
    document.write("<br> num2 is greater ");
}

/* 
Exercise #4 — Grade Calculator
Scenario: Write a program that assigns a letter grade based on a numerical grade. */

var score = 85;
var grade;
if(score >= 90) {
    grade = "A";
}else if (score >= 80) {
    grade = "B";

}else if (score >= 70) {
    grade = "C";
} else if (score >= 60){
    grade = "D";
}else {
    grade = "fail";
}

document.write(" <br> Grade:  " +grade);


/* Exercise #5 — Ticket Pricing
Scenario: Write a program that calculates the ticket price based on age. */

var age = 25;
var ticketprice;

if (age < 12){
    ticketprice = 5;
} else if (age >= 12 && age < 18) {
    ticketprice = 10;
} else if(age >= 18 && age < 60 ) {
    ticketprice = 20;
} else {
    ticketprice = 15;
}
document.write("Value of Ticket Price" + ticketprice);


// simple example

 //var number = prompt("Enter Number:" , "number");
var number = 25;
if ( number >= 0 ){
          if (number>0){
                document.write(" <br> This Statement is Positive: " +number );
         } else  {
            document.write("<br> This statement is Zero" + number);
} 

}else {
    document.write("<br> This statement is Negative" + number);
} 





/* Exercise #6 — Determine Leap Year
Scenario: Write a program that determines if a year is a leap year. */

var year = 2024;
if ( year % 4===0 && (year % 100  !==0 || year %400 === 0)) {
    document.write("<br> " + year + " is leap year");
}else {
    document.write("<br>"   + year + " is not a leap year");
}

//var year = prompt("Enter No: " );
 

document.write  ("leap year or not step by step https://www.youtube.com/watch?v=vR10Xd06wLo&t=624s");
//var year = prompt("Enter a year:");
var year = 2020;
if (year % 4 === 0 ) {
    if (year % 100 === 0 ) {
        if ( year % 400 === 0){
            document.write("is a leep year");
        } else {
            document.write(year+ "is not a leap year");
            }
        }else {
        document.write( year + " is  a leap year");
    }
}else{
    document.write(year+ " is not a leap year");
}


// leap year https://www.youtube.com/watch?v=xGC5DaY_TSE

function isLeapYear (year){
    if(year % 4 === 0){
        if( year % 100 ===0){
            if ( year % 400 ===0){
                return"Leap Year";
        } 
        else {
            return"not a leap year";
        }
            
        }
        else{
            return"Leap Year";
        }
    }
        else{
            return"Not a Leap year";
        }
}

var abc = isLeapYear(203);

/* Exercise #7 — Shopping Discount
Scenario: Write a program that calculates a discount based on the purchase amount.
 */
  /* Solution:   */
/* 
var purchaseAmount = 120;
var discount;

if (purchaseAmount >= 100) {
  discount = 20;
} else if (purchaseAmount >= 50) {
  discount = 10;
} else {
  discount = 0;
}
console.log("Discount: " + discount + "%");
 */

var purchaseAmount = 120;
var discount;

if ( purchaseAmount >= 100){
    discount = 20;
} else if ( purchaseAmount >=50){
    discount = 10;
} else {
    discount = 0;
}
console.log("Discount: " + discount +"%");
document.write("Discount: " + discount + "%");


/* Exercise #8 — Time of Day Greeting
Scenario: Write a program that greets the user based on the time of day.

Solution:
 */
var currentTime = new Date();
var currentHour = currentTime.getHours();
var greeting;

if (currentHour < 12) {
  greeting = "Good morning!";
} else if (currentHour < 18) {
  greeting = "Good afternoon!";
} else {
  greeting = "Good evening!";
}
console.log(greeting);


/* Exercise #9 — BMI Calculator
Scenario: Write a program that calculates the Body Mass Index (BMI) and categorizes it.

Solution: */

var weight = 70; // in kilograms
var height = 1.75; // in meters
var bmi = weight / (height * height);
var category;

if (bmi < 18.5) {
  category = "Underweight";
} else if (bmi < 24.9) {
  category = "Normal weight";
} else if (bmi < 29.9) {
  category = "Overweight";
} else {
  category = "Obese";
}
console.log("BMI: " + bmi.toFixed(2)); // .toFixed(2) limits the number of decimals to 2
console.log("Category: " + category);


/* Exercise #10 — Number Guessing Game
Scenario: Write a simple number guessing game.

Solution: */

var secretNumber = 7;
var guess = 5; // The player's guess, change this to see that different code lines are executed based on the conditions
if (guess === secretNumber) {
  console.log("Congratulations! You guessed the correct number.");
} else if (guess < secretNumber) {
  console.log("Try a higher number.");
} else {
  console.log("Try a lower number.");
}
