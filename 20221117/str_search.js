let s1 = 'my name is kyaw kyaw';
result = s1.split(" ");
console.log(result);

let s2 = '1,2,3,4,5';
result1 = s2.split(',');
console.log(result1);

let s3 = 'I:am:thura:naung';
result2 = s3.split(":");
console.log(result2);

let s4 = 'coding';
result3 = s4.split('');
console.log(result3);

///////////////////////////////////

let str = "Please locate where 'locate' occur";

//indexOf ==> return posidtion of index(Number)
let pos = str.indexOf('locate');
console.log(pos);

//includes==> return boolean 
let isInclude = str.includes('locate');
console.log(isInclude);

//match ==>
let text = "I love cats. Cats are very easy to love. Cats are very popular."
MatchWords = text.match('Cats');




