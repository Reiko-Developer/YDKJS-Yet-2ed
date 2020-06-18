//values parsing
console.log('Values parsing!');

var myName = "Kyle";
var yourName = myName;

myName = "Frank";

console.log(myName);// Frank
console.log(yourName);// Kyle

//References parsing
console.log("References parsing");

var myAddress = {
    street: "123 JS Blvd",
    city: "Austin",
    state: "TX"
};

var yourAddress = myAddress;
myAddress.street = "456 TS Ave";

console.log(yourAddress.street);// 456 TS Ave