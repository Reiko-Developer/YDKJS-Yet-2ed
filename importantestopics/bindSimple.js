let person = {
    name: 'John Doe',
    getName: function() {
        console.log(this.name);
    }
};

//returns undefined
setTimeout(person.getName, 500);

// lost person context
let f = person.getName;
setTimeout(f,500); 

//To fixing the problem
//wrap the call to the person.getName method in an anonymous function:
setTimeout(function () {
    person.getName();
}, 500);

//using .bind()
//
let g = person.getName.bind(person);
setTimeout(g, 500);

