var Classroom = {
    welcome() { console.log("Welcome, students!"); }
};

//mathClass object is linked via its prototype to a Classroom object.
//Through this linkage, the function call mathClass.welcome() is delegated 
//to the method defined on Classroom.
var mathClass = Object.create(Classroom);

mathClass.welcome(); // Welcome, students!

console.log('================================');

//Predecessor to the elegance of the ES6 class system
function SomeClass() {
}

//This is not the function's prototype, but rather the prototype object 
//to link to when other objects are created by calling the function with new.
SomeClass.prototype.welcome = function hello() {
    console.log("Welcome, students!");
};

var mathClass = new SomeClass();

mathClass.welcome() // Welcome, students!


//This "prototypal class" pattern is now strongly discouraged, 
//in favor of using ES6's class mechanism
class ClassX {
    constructor() { }

    welcomeX() { console.log("Welcome, students!"); }
}

var mathClass = new Classroom();

mathClass.welcomeX();// Welcome, students!