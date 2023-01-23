function greeting(){
    //process
    console.log('This is Void function');
}
greeting();
///////////////////////////////////////////////

function greetingWithName(name){
    console.log('Welcome '+ name)
}
greetingWithName('Khun Thu Ra Min Oo');
/////////////////////////////////////////////////

function selfIntroduction(name,age){
    console.log('My Name is '+ name + ' & I am ' + age +' years old')
}
selfIntroduction('ThuraNaung',29)
////////////////////////////////////////////////////////////////////////////

function findMax(a,b){
    if(a>b){
        return a;
    }else{
        return b;
    }
}
maxResult = 'MaxResult is '+findMax(2,5);
console.log(maxResult)
////////////////////////////////////////////////////////////////////

function findMin(a,b){
    if(a<b){
        return a;
    }else{
        return b;
    }
}
let minResult = 'MinResult is '+findMin(2,5);
console.log(minResult)

///////////////////////////////////////////////////////////////////////

function findMax1(a,b,c){
    if(a>b && a>c){
        return a;
    }else if(b>c){
        return b;
    }else{
        return c;
    }
}
maxResult = 'Max is '+findMax1(3,6,9);
console.log(maxResult)
///////////////////////////////////////////////////////////////////////////

function findMax2(a,b,c,d){
    if(a>b && a>c && a>d){
        return a;
    }else if(b>c && b>d){
        return b;
    }else if(c>d){
        return c;
    }else{
        return d;
    }
}
maxResult = "Max No is " + findMax2(51,72,71,73)
console.log(maxResult);
////////////////////////////////////////////////////////////////////////////

function findMidumNo(a,b,c){
    if((a>b && a<c) || (a<b && a>c)){
        return a;
    }else if((b>a && b<c) || (b<a && b>c)){
        return b;
    }else{
        return c;
    }
}
// (8,7,9)
// (7,8,9)
// (7,9,8)

MidumNo1 = 'Midum No is ' + findMidumNo(2,1,3)
MidumNo2 = 'Midum No is ' + findMidumNo(1,2,3)
MidumNo3 = 'Midum No is ' + findMidumNo(1,3,2)

console.log(MidumNo1);
console.log(MidumNo2);
console.log(MidumNo3);

////////////////////////////////////////////////////

function changeTime(time){
    if(time<12){
        let AM= 'this time is '+ time + 'AM'
        return AM;
    }else if(time>=12 && time<=23) {
        let PM= 'this time is '+(time-12) + 'PM'
        return PM;
    }else if(time==24){
        let AMM= 'this time is '+(time-24) + 'AM'
        return AMM;
    }
}
timeResult = changeTime(24);
console.log(timeResult);

/////////////////////////////////////////////////////////

function changeTime1(t){
    if(t<12){
        return t + 'AM';
    }else if (t==12){
        return t + 'PM';
    }else if(t==24){
        return '0 PM';
    }
    else if(t>12){
        return (t-12) + 'PM';
    }
}

console.log(changeTime1(4));
console.log(changeTime1(11));
console.log(changeTime1(12));
console.log(changeTime1(24));

////////////////////////////////////////////////////
function findDuplicate(h,i,j){
    if(h==i || h==j){
        return h;
    }else if (i==j){
        return i;
    }else{
        return NaN;
    }
}
let SameNum = 'Same number of h,i,j is ';
console.log( SameNum + findDuplicate(1,1,2));
console.log( SameNum + findDuplicate(1,2,1));
console.log( SameNum + findDuplicate(2,1,1));
console.log( SameNum + findDuplicate(1,2,3));
/////////////////////////////////////////////////

function CheckEvenOdd(num){
    if(num%2==0){
        let result = num + ' is Even Number';
        return result;
    }else{
        let result = num + ' is Odd Number';
        return result;
    }
}
console.log(CheckEvenOdd(4));
console.log(CheckEvenOdd(3));
///////////////////////////////////////////////////////

function CheckDifference(a,b){
    if(a>b){
        let result= 'difference is '+ (a-b); 
        return result;
    }else if(b>a){
        let result = 'difference is ' + (b-a);
        return result;
    }else{
        let result = 'there is no difference';
        return result;
    }
}
console.log(CheckDifference(4,7));
console.log(CheckDifference(5,6));
console.log(CheckDifference(6,6));
//////////////////////////////////////////////////

function SumEvenNumber(a,b,c,d){

    let sum = 0;

    if (a%2==0){  
        sum += a; 
    }if (b%2==0){
        sum += b;
    }if (c%2==0){
        sum +=c;
    }if (d%2==0){
        sum += d;
    }
    return sum;
}
console.log(SumEvenNumber(1,2,3,4));

//////////////////////////////////////////

function calTax(money,state){
    if(state==true){
        let takeoutTaxPay = ((0.08*money)+money);
        return takeoutTaxPay;
    }else{
        let tennaiTaxPay = ((0.1*money)+money);
        return tennaiTaxPay;
    }
}
console.log(calTax(200,true));
console.log(calTax(200,false));

////////////////////////////////////////////////


















