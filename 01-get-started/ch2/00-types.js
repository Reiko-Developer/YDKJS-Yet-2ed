console.log(`

${typeof 42}                  // "number"
${typeof "abc"}               // "string"
${typeof true}                // "boolean"
${typeof undefined}           // "undefined"
${typeof null}                // "object" -- oops, bug!
${typeof { "a": 1 }}          // "object"
${typeof [1,2,3]}             // "object" -- Must be 'array'
${typeof function hello(){}}  // "function"
${typeof (-0)}                 //  "number"
`);

//The var keyword declares a variable to be used in that part of the program, 
//and optionally allows an initial assignment of a value.

if (true) {
    var myName = "Kyle";

    //let allows a more limited access to the variable than var. 
    //This is called "block scoping" as opposed to regular or function scoping.
    let age = 39;
    console.log("Shhh, this is a secret!");
}

console.log('My name: ',myName);// Kyle

// Error!
//console.log(age); 

//const it's like let, but it require a value at the moment it's declared, 
//and yours reference or primitive value cannot be changed
const myBirthday = '27-02-1994';

//error
//myBirthday = 'duda'

console.log('BD: ',myBirthday);


const array = {
    name: 'vitor', age: 26
}

array.name = 'João'; array.age = 20;

console.log(array);

//give a error
//we can change the value within the array but not the reference to it!!!
// array = {
//     cep: '69.920-764', rua: 'ipê roxo'
// }



