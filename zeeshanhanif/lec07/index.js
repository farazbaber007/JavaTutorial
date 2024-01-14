// console.log("Conditional Sate");

// for ( var i = 0; i < 3; i++){
//     document.write(i);
//     console.write(i);
// }

//var table = pars5eInt(prompt("table of : " , "write any table here"));
for ( var i = 1; i <=10; i++){

    document.write(table+ " x " +i+" = " +(table*i));
    console.log(table+ " x " +i+ " = " + table*i);
}


var table = prompt("table of : " , "write any table here");
for ( var i = 1; i <=10; i++){
    if (i==5) {
        break;
    }
    document.write(table+ " x " +i+" = " +(table*i));
    console.log(table+ " x " +i+ " = " + table*i);
}





var table = prompt("table of : " , "write any table here");
for ( var i = 1; i <=10; i++){
    if (i==5) {
        continue;
    }
    document.write(table+ " x " +i+" = " +(table*i));
    console.log(table+ " x " +i+ " = " + table*i);
}


//Task Prime Number
console.log("Prime Number")
var  num = 12;
for (var i = 2; i < num; i++){
    var result = num % 1
    if (result ==0){
        console.log("Number is not Prime" + num);
        break; 
    }


}
