/**
 * 
 * method = function
 * 
 * Learns about string's default method
 * 
 * 
 */

//////////////////////////\\\\\\\\\\\\\\\\\\\\\\

let str = "Hello World 123"

// length Method
console.log(str.length);
///////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\

// slice Method ==> start and end(end pt not included)
console.log(str.slice(0,5));
console.log(str.slice(6,11));

let str1 = "Apple, Banana, Kiwi, Orange"

console.log(str1.slice(0,5));
console.log(str1.slice(7,13));
console.log(str1.slice(15,19));
console.log(str1.slice(21,27));
console.log(str1.slice(0,13));
console.log(str1.slice(7,19));
console.log(str1.slice(15,27));
console.log(str1.slice(15,str1.length));//str.length==27
console.log(str1.slice(15,str1.length-1));
console.log(str1.slice(15,str1.length-2)); 

//concat process
console.log(str1.slice(0,5) + ' ' + str1.slice(7,13) );

//only start point==> end point is till the end.
console.log(str1.slice(0));
console.log(str1.slice(-6));

//////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\

//substring() Method ==> same to slice but (- values will be 0 index)(ex==> -1 gonna be 0) (-1,3)==(0,3)

let str3="Apple, Banana, Kiwi";

console.log(str3.substring(0,5));
console.log(str3.substring(-3,5));//it's gonna be like (0,5)
console.log(str3.substring(-1,5));//it's gonna be like (0,5)
console.log(str3.substring(-1));

