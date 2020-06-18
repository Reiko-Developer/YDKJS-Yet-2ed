// spread an iterator into an array,
// with each iterated value occupying
// an array element position.
let it = [1, 2, 3]
let vals = [...it];
console.log('1:', vals);
console.log('\n');


vals = [6, 7, 8]
vals = [...it, ...vals]
console.log('2:', vals);
console.log('\n');

function mySum(n1, n2, n3, n4) {
    console.log('3:', (n1 + n2 + n3 + n4));
    console.log();

}

let params = [1, 3, 2, 5];
mySum(...params)

function sumXValues(...params) {
    console.log(
        params.reduce(function (acc, currValue) {
            return acc + currValue;
        })
    )

}

sumXValues(2, 4);
sumXValues(4, 9, 8);
sumXValues(3, 4, 2, 5);

var greeting = "Hello world!";
var chars = [...greeting];

console.log(chars);