/**
 *  padStart() & padEnd() preenchem a string alvo com outra 
 *  string até a string resultante alcançar o comprimento 
 *  estipulado. 
 */
var x = '';

console.log('abc'.padStart(10));         // "       abc"
console.log('abc'.padStart(10, "foo"));  // "foofoofabc"
console.log('abc'.padStart(6,"123465")); // "123abc"
console.log('abc'.padStart(8, "0"));     // "00000abc"
console.log('abc'.padStart(1));          //"abc"

console.log('=============================');


console.log('abc'.padEnd(10));         // "       abc"
console.log('abc'.padEnd(10, "foo"));  // "foofoofabc"
console.log('abc'.padEnd(6,"123465")); // "123abc"
console.log('abc'.padEnd(8, "0"));     // "00000abc"
console.log('abc'.padEnd(1));          //"abc"

 