/**
 * Closure is when a function remembers and continues to access variables from 
 * outside its scope, even when the function is executed in a different scope.
 * 
 * 1. Closure is part of the nature of a function. Objects don't get closures, functions do. 
 * 
 * 2. To observe a closure, you must execute a function in a different scope than where that function was originally defined.
 *
 */

function who(msg) {
    return function who(name) {
        console.log(`${msg}, ${name}!`);
    };
}

var hello = who("Hello");
var howdy = who("Howdy");
var ola = who("Olá")
hello("Kyle"); // Hello, Kyle!

ola('Lucas');

hello("Sarah"); // Hello, Sarah!

howdy("Grant"); // Howdy, Grant!
console.log();

function counter(step = 1) {
    var count = 0;
    return function increaseCount() {
        count = count + step;
        return count;
    };
}

var incBy1 = counter(1);
var incBy3 = counter(3);

console.log(incBy1());// 1
console.log(incBy1());// 2

incBy3();       // 3
incBy3();       // 6
console.log(incBy3());// 9


//
//testes
//
function soma(num) {
    return function who(num2) {
        console.log(`${num + num2}!`);
    };
}
console.log();

let a = soma(3)
a(2);
a(4);

//
//
function count(step = 1) {
    var count = 0;
    return function increaseCount() {
        count = count + step;
        return count;
    };
}

console.log('\n================');

var maisTres = count(3);
var menosDois = count(-2);
var setaParaUm = count();//reseta para 1 o valor

console.log(maisTres());// 3
console.log(maisTres());// 6

console.log(menosDois());// -2
console.log(menosDois());// -4
console.log(setaParaUm());// 1
console.log(setaParaUm());// 2


console.log('==================================================');

function who(name='Lucas', initial = 0) {
    return function age(aux, nameTemp = name) {
        initial += aux;
        name = nameTemp;
        console.log(`${name} has ${initial} years old!`);
    };
}

let reiko = who('Reiko');

reiko(3);
reiko(2);
reiko(10, 'José Jonas');
reiko(-10);

//Do not function - yet!
function getSomeData(url) {
    ajax(url,function onResponse(resp){
        console.log(
            `Response (from ${ url }): ${ resp }`
        );
    });
}

getSomeData("https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/get-started/ch3.md");

