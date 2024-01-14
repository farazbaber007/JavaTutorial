document.write("Task Prime Number (Project) !<br><br><br><br>" );

// var num = parseInt(prompt("Enter Number for checking prime Number" ));

/*for (var i = 2; i < num; i++){
    document.write( i + " <br> " );
    var result = num % i;
    if (result == 0){
        document.write("Number is not Prime =  " + result + " = "+ num+" /"+ i  +"<br>");
        break;

    }
}
*/
// 2nd step
/* 
var num = parseInt(prompt("Enter Number for checking prime Number" ));

for (var i = 2; i < num; i++){
    document.write(" <br> The value of i = "+i + " <br> " );
    var result = num % i;
    if (result == 0){
        document.write("Number is not Prime =  " + result + " = "+ num+" /"+ i  +"<br>");
        break;

     } //command will run every time aur batay ga k code divisible ni ha aur prime ha
         else {
         document.write("Number is Prime =  " +num + " i  = " + i+ "<br>");
    
     } 
}

 //3rd test ( else portion ko outside the loop kr dain gay becuase condition false honay ki surat main wo else ko run kr rha ha)

     var num = parseInt(prompt("Enter Number for checking prime Number" ));

for (var i = 2; i < num; i++){
    document.write(" <br> The value of i = "+i + " <br> " );
    var result = num % i;
    if (result == 0){
        document.write("Number is not Prime =  " + result + " = "+ num+" /"+ i  +"<br>");
        break;

     }
    /* else {
         document.write("Number is Prime =  " +num + " i  = " + i+ "<br>");
    
     }

}
// Statement kisi loop sy bahir ha to har bar run ho gy chahay number prime  ho ya na ho
// is main b problem aa gye
     document.write("Number is Prime =  " +num + " i  = " + i+ "<br>");*/

// Last step ( iss main boolean add kr day gay takay last statement jo outside ha ko condition lag dain.)

var num = parseInt(prompt("Enter Number for checking prime Number" ));
var isPrime= true;
for (var i = 2; i < num; i++){
    document.write(" <br> The value of i = "+i + " <br> " );
    var result = num % i;
    if (result == 0){
        document.write("Number is not Prime =  " + result + " = "+ num+" /"+ i  +"<br>");
        isPrime = false;
        break;

     }
}
// Statement kisi loop sy bahir ha to har bar run ho gy chahay boolean ho ya na ho
    
    // if(isPrime==true){
    if(isPrime){
     document.write("Number is Prime =  " +num + " i  = " + i+ "<br>"); 
    }