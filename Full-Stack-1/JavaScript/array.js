var ourArray = ["stimpson", "j", "cat"];
ourArray.push("helloe");     // push at the last of array
console.log(ourArray);
ourArray.pop();        // pop from last
console.log(ourArray);  
ourArray.unshift("Jayant"); // add element at the front of the array
console.log(ourArray);    
ourArray.shift();  // it does not require any argument delete element from front
console.log(ourArray);

/*
Array of array or nested array or you can say 2-D array
*/
var myList=[["cereal",3],["milk",2],["banana",4]];
console.log(myList);

// function with no argument example 
function ourReusableFunction() {
    console.log("I'm from our Resuable function");
}

// function calling
ourReusableFunction();

/*
 you can use any parameter to the function irrespective of datatype
 you not need to explain the data type in the argument
 function with parameter argument example 
 */
function greetingFunction(name) {
    console.log("Hello Mr. " + name);
}
// function calling
greetingFunction("Sudo");


