/**
 * 
 * Logical operator
 * 
 * OR operator  -> ||
 * AND operator -> &&
 * NOT operator -> !
 * 
 */

//  Boolean     ||      Boolean
//      T       ||          T       =   T
//      T       ||          F       =   T
//      F       ||          T       =   T
//      F       ||          F       =   F

console.log('OR Operator = ' + (true || true));
console.log('OR Operator = ' + (true || false));
console.log('OR Operator = ' + (false || true));
console.log('OR Operator = ' + (false || false));


//  Boolean     &&      Boolean
//      T       &&          T       =   T
//      T       &&          F       =   F
//      F       &&          T       =   F
//      F       &&          F       =   F

console.log('AND Operator = ' + (true && true));
console.log('AND Operator = ' + (true && false));
console.log('AND Operator = ' + (false && true));
console.log('AND Operator = ' + (false && false));

//  !Boolean
//  !true   = false
//  !false  = true
console.log('Not Operator = '+ (!true));
console.log('Not Operator = '+ (!false));

