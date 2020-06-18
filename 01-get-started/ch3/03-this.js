function classroom(teacher) {
    return function study() {
        console.log(
            `${ teacher } says to study ${ this.topic }`
        );
    };
}
var assignment = classroom("Kyle"); 

assignment();//give a undefined for this.topic

var homework = {
    topic: "JS",
    property: assignment
};

// now the this-aware function is working with a execution context not the default one!
homework.property(); 

//A third way to invoke a function is with the call(..) method, which takes an object 
//(otherHomework here) to use for setting the this reference for the function call. 
//The property reference this.topic resolves to "Math".
let otherHomework = {
    topic: "Math"
};

assignment.call(otherHomework);


//The same context-aware function invoked three different ways, 
//gives different answers each time for what object this will reference.
