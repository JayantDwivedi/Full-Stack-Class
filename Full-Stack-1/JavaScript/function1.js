// 29-10-2020 
// declaration and defination 
function myfun() {
    console.log("This is a Function");
}

// function calling 
// myfun();
// myfun();
// function follow all the naming convention as variable 

// with argument
function myfun(fname, lname) {
    console.log("My name is " + fname + " " + lname);
}

// myfun("Jayant", "Dwivedi", "");   // in that case function pick only first two arguments 


// argument object function used for all terms 
function fun() {
    var sum = 0;
    for (i = 0; i < arguments.length; i++) {
        sum += arguments[i];

    }
    return sum;
}

var a = fun(10, -2);
var b = fun(10, -2, 6, 12);
var c = fun(10, -2, 6, 12, 56);

console.log(a + " " + b + " " + c + " ");

// anonymous function which doesn't have name
// this is function expression have semi colon
var z = function (x) {
    return (x * x);
}; // semicolon
console.log(z(7));


// function defination does not have semicolon
function multiply(x) {
    return (x * x);
}

// arrow function 
var z = (x) => {
    return (x * x);
};
console.log(z(7));

// Self Called Function 
(function () {
    console.log("Jayant")
});