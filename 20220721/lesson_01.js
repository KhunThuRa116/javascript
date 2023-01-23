//is not defined error => when variable is not declared

// undefined error => when variable type is not defined

// case sensitive

// variable name should be used camel-case rule/  eg) userName

// variable name should be meaningful

// let numberVar=10;
// console.log(numberVariable);

// let stringVar = '12345';

// let booleanVar = true; // false

// let nullVar = null; // make empty

// let undefinedVar;

// let ObjectVar = document.getElementById('') // HTML Element Object

//Data type
//  1) Number
//  2) String
//  3) Boolean
//  4) Null
//  5) Undefined
//  6) Object

//Comparison Operator Return Boolean Data Type //
// == != < > <= >= //
// let numOne = 10;
// let numTwo = 20;
// let isEqual = (numOne == numTwo);
// console.log(isEqual);

// If Condition //
// if (( numOne > numTwo)){
//     console.log('numOne is Less than numTwo')
// }else if(!(numOne < numTwo)){
//     console.log('numTwo  is Greater than numOne')
// }else{
//     console.log('Blah Blah Blah')
// }
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// let numThree = 9;
// //Even , Odd Number Check;

// if((numThree%2) == 0){
//     console.log('Even Number');
// }else{
//     console.log('Odd Number');
// }
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

//switch case
let rank = 'S'; //value maybe varies
switch (rank) {
    case 'S':
        console.log('Excellent')
        break;

    case 'A':
        console.log('Great')
        break;

    case 'B':
        console.log('Good')
        break;

    case 'C':
        console.log('Normal')
        break;

    case 'D':
        console.log('Bad')
        break;

    case 'E':
        console.log('Worse')
        break;
    
}