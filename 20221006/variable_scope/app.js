/**
 * 
 * Variable Declaration
 * 
 * const    =>  can't change value
 * let      =>  can't redeclare // local scope (block scope variable)
 * var      =>  can redeclare   //global scope
 * 
 */

// let a = 10;
// let a = 20;
// console.log(a);

var b = 10;
var b = 20;
console.log(b);

let a = 10;
let test = 'Hello ';

if(true){
    let local = 'Nice to meet You';
    var globalVar = 'Hi Global Var'
    var b = 30;
    let a = 20;

    console.log('Global variable access to local is => ' + test);

    console.log('Inner Block local  ' +local);

    console.log('Inner Block a is ' + a)

}

console.log('If Block outside a is ' + a)
console.log(b);
console.log(globalVar);// var in block scope can be use cause (var is global scope variable)
console.log(local); // error can cause because local is in block and (let is local scope variable)