// Scope refers to the visibility of variables 
//gobal scope out side the function block

/*
Global Variable this type of varible is define outside of a function and can be 
access in the whole program anywhere
Variable without var kayboard inside a function if treated as global variable but
the function should need to be called.
 */

 var myGlobal = 10;     // global variable

 function fun1() {
      myGlobalWithOutVar = 5;         // global scope variable without var inside a function but function need to be call 
 }
 function fun2() {
     var output = "";
     if (typeof myGlobal != "undefined") {
         output += "myGlobal " + myGlobal + " \n";
     }
     if (typeof myGlobalWithOutVar != "undefined") {                   // this is not accesable 
         output += " myGlobal without var " + myGlobalWithOutVar;
     }
     console.log(output);
 }
 fun1()
 fun2();

 /* 
 Local variable is same as other languages
 variable inside the function and variable in function parameter

 */

 function fun3() {
     var myLocal = 10;
     console.log("myLocal " + myLocal);
 }
 fun3();


 /*
 When there are both local and global variable in the program then 
 local gets more precedence over global variable
 */

var outerWear = "T-Shirt";      // global variable 
function myOutFit() {
    var outerWear = "Kurta"     // local variable has more precedence 
    return outerWear;
}

console.log(myOutFit());        // print the value of local variable
console.log(outerWear);         // print the value of global variable


var changed = 0;
function change (num) {
    return (num+5);
}
changed = change(10);
console.log(changed);


