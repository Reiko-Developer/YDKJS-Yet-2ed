//we must be aware of the nuanced differences between an equality 
//comparison and an equivalence comparison.
console.log('The == (x2 \'=\') operator');

console.log(42 == '42');              //true
console.log('' == false);             //true
console.log(0 == false);              //true
console.log(0 == '');                 //true
console.log(-0 == 0);

console.log('\n');

console.log('The === (x3 \'=\') operator');
//The so-called "triple-equals" === operator, also described as the "strict equality" operator 
//is not exactly "strict".
//Most values participating in an === equality comparison will fit with that, see:
console.log(3 === 3.0)              // true
console.log("yes" === "yes")        // true
console.log(null === null)          // true
console.log(false === false)        // true

console.log(42 === "42")            // false
console.log("hello" === "Hello")    // false
console.log(true === 1)             // false
console.log(0 === null)             // false
console.log("" === null)            // false
console.log(null === undefined)     // false

//==='s equality comparison is often described like "checking both the value and the type".
//All value comparisons in JS consider the type of the values being compared
//==='s disallows any sort of type conversion (aka, "coercion") in its comparison, 
//where other JS comparisons do allow coercion.
//The === operator is designed to lie in two cases of special values: NaN and -0. Consider:
console.log('NaN === NaN', NaN === NaN);          // false
console.log('0 === -0', 0 === -0);               //false

//O Not-A-Number (NaN) é retornado quando uma operação matemática falha
//For NaN comparisons, use the Number.isNaN(..)
console.log('\n');

console.log('============================================================');

let a = parseInt("blabla");
console.log('Type: ' + typeof (a) + ' value: ' + a);
console.log('Is NaN? ' + isNaN(a));

let b = 2 / 0;
console.log('Type: ' + typeof (b) + ' value: ' + b);
console.log('Is NaN? ' + isNaN(b));

let c = 0 / 0;
console.log('Type: ' + typeof (c) + ' value: ' + c);
console.log('Is NaN? ' + isNaN(c));



console.log('==========================');
console.log('Using Object.is the "quadruple-equals" the really-really-strict comparison! ');
let d = Math.sqrt(-1)
let e = 0 / 0
console.log('d é igual a e?', Object.is(d, e));

//JS does not define === as structural equality for object values
// ==='s uses identity equality for object values.
//object values are held by reference, are assigned and passed by reference-copy
// and are compared by reference (identity) equality.
let f = { name: 'nome' }
let g = { name: 'nome' }

console.log('f===g? ', f === g);

f = g

console.log('f===g?', f === g);


console.log("\n=============================================");

console.log('For a perfect comparison u must use a function inside the objects to compare each other!');

class Teste {
    constructor() {
        this.name = 'name';
    }

    equals(param) {
        console.log(this.name + ' == ' + param.name + '?');

        return Object.is(this.name, param.name) === true ? true : false;
    }
}

let t = new Teste();
let t2 = new Teste();

console.log('Implementing .equals() method in a class: ' + t.equals(t2));

t.name = 'Marcos'

console.log('Implementing .equals() method in a class: ' + t.equals(t2));

var x = [ 1, 2, 3 ];

// assignment is by reference-copy, so
// y references the *same* array as x,
// not another copy of it.
var y = x;

y === x;              // true
y === [ 1, 2, 3 ];    // false
x === [ 1, 2, 3 ];    // false
