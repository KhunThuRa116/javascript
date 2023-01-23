/**
 * Comparison Operators
 * 
 * is equal                     -> a == b
 * not equal                    -> a != b
 * 
 * is greater than              -> a > b
 * is less than                 -> a < b
 * is less than or equal        -> a <= b
 * is greather than or equal    -> a >= b
 * 
 * 
 * strict [equality]            -> a === b 
 * strict [not equality]        -> a !== b         
 * 
 */

let a = 10;
let b = 20;

let IsEqual = (a == b); // Is a Equal b ?
console.log('Is Equal Operator = ' + IsEqual)

let IsNotEqual = (a != b); // Is a Not Equal b ?
console.log('Is Not Equal Operator = ' + IsNotEqual)

let x = 10;
let y = '10';

let normalEqual = (x == y); // Is x Equal y ? // ==(double equal) check only data value 
console.log('Normal Equal = ' + normalEqual);

let normalNotEqual = (x != y); // Is x Equal y ? // !=(not equal) check only data value 
console.log('Normal Equal = ' + normalNotEqual);

let strictEqual = (x === y); // Is x Equal y ? // ===(triple equal) check data value and data type
console.log('strict Equal = ' + strictEqual);

let strictNotEqual = (x !== y); // Is x Equal y ? // !==(triple not equal) check data value and data type
console.log('strict Equal = ' + strictNotEqual);



