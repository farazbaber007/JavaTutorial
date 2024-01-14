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
    
        


