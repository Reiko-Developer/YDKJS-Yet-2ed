//function declaration statement
function fazAlgo(){
    return 'algo top'
}

// let awesomeFunction = ..
// const awesomeFunction = ..
let awesomeFunction = function(coolThings) {
    // ..
    return 'amazingStuff';
};

//Since functions are values, they can be assigned as properties on objects:
let whatToSay = {
    greeting() {
        console.log("Hello!");
    },
    question() {
        console.log("What's your name?");
    },
    answer() {
        console.log("My name is Kyle.");
    }
};

whatToSay.greeting()
console.log(whatToSay);
