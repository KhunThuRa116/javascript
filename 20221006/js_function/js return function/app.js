/**
 * 
 * return 
 * 
 */

function greeting() {

    console.log('You enter here...')
    return 12;
}

let msg = greeting();
console.log(typeof msg + ' = ' + msg);

//////////////////////////////////////////////////////////

function addTwoNumber(numOne, numTwo){
    return numOne + numTwo;
}

let sum = addTwoNumber(1,2);
console.log(' >> '+sum);

sum = addTwoNumber(20,30);
console.log(' >>> ' + sum);

////////////////////////////////////////////////////////////

function greetingMsgWithName(name){
    let msg1 = 'Hello ' + name;
    return msg1;
}

let msg1 = greetingMsgWithName('Khun Thu Ra Min OO');
console.log(msg1);

///////////////////////////////////////////////////////////////

function greetingMsgWithName2(name){
    return name;
}
let msg2 = 'Hello master '+ greetingMsgWithName2('KHUN');
console.log(msg2);

/////////////////////////////////////////////////////////////////