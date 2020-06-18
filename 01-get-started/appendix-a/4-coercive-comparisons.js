/**
 * Expressions needi to perform coercion-oriented comparisons to make their decisions.
 * if and ? :-ternary statements, the test clauses in while and for loops 
 * perform an implicit value comparison "strict" or "coercive" sort type!
 */
var x = 1;

// will run! And we understand, it's because the coercive conversion for comparison
if (x) console.log('x=1, x is true');

x = "hello";

/*  The Boolean() function always returns a value of type boolean, this way
 *  the == and === operators both will do the same thing. 
 *  But note, pre-comparison, a coercion occurs, from whatever type x currently is, to boolean. 
 */
if (Boolean(x) === true) console.log('x=\'hello\', x is true');


