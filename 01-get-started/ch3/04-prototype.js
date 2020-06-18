//The homework object only has a single property on it
//However, its default prototype linkage connects to the 
//Object.prototype object, which has common built-in methods on it like 
//toString() and valueOf(), among others.
var homework = {
    topic: "JS"
};

console.log(homework.toString());
console.log(homework.valueOf());

console.log('=======================');

var otherHomework = Object.create(homework);

console.log(otherHomework.topic);// "JS"
console.log(homework.topic); // "JS"


otherHomework.topic = "Math";

console.log();

console.log(otherHomework.topic);// "Math"
console.log(homework.topic); // "JS"

/*  creates an object that is not prototype linked anywhere, so it's purely just a 
*   standalone object; in some circumstances, that may be preferable.
*/
let test = Object.create(null);

test.toString()//giva an error!