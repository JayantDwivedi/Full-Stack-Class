function nextInLine(arr, item) {
    arr.push(item)
    return arr.shift();                          // adding shift now it work as queue array implementation
}


var testArray = [1,2,3,4,5];
console.log("Before " + JSON.stringify(testArray));     // JSON.stringify() work as same Arrays.toString() in java.
nextInLine(testArray,6);
console.log("Before " + JSON.stringify(testArray));


// 3 === '3'   this gave a false value because string is not equal to number
// 3 == '3'    this return true because number converted to string then compare to the string 
// 3 != 4      this is not equality sign
// 3 !== '3'   this is strict inequality sign check for data type along with value.  

if (3 == '3') {
    console.log("num to string conversion then compare");
}

if (3 === '3') {      // this is strict equality
    console.log("Data type is also same along with datavalue");
}
else {
    console.log("Data type or value not equal ")
}
