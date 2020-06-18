//Functions!
console.log("Functions ;D");

//someName is directly associated with the function expression at compile time
//the association with the identifier awesomeFunction still doesn't happen until 
//runtime at the time of that statement.
console.log("This is an anonymous function expression");
var awesomeFunction = function () {
    console.log("Name of the anonymous function: " + awesomeFunction.name);
};

awesomeFunction();

console.log('\nBelow we have a named function expression');
var aF2 = function someName() {
    return amazingStuff;
};

console.log("Name of the function aF2: ", aF2.name);// "someName"
