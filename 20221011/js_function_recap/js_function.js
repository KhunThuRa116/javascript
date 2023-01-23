/**
 * 
 * JS function ==> void && return
 * 
 */

function voidfunction(param1){
    console.log('This is void function '+param1)
}
 voidfunction(123);

 function findMax(x,y){
    // return 0;
    // console.log('Hello')

    if(x>y){
        return x;
    }else{
        return y;
    }
 }
 let maxNum = findMax(2,4);
 console.log('Max number of 2,4 is '+ maxNum);

 maxNum = findMax(58,12);
 console.log('Max number of 58,12 is '+ maxNum);

 ///////////////////////////////////////////////////

 function findMax1(a,b,c){
    if(a>b && a>c){
        return a;
    }else if(b>a && b>c){
        return b;
    }else{
        return c;
    }
 }
 let maxNum1 = findMax1(14,5,3);
 console.log('Max number of a,b,c is '+ maxNum1);
 /////////////////////////////////////////////////

 function findMax2(a,b,c,d){
    if(a>b && a>c && a>d){
        return a;
    }else if(b>a && b>c && b>d){
        return b;
    }else if(c>a && c>b && c>d){
        return c;
    }else{
        return d;
    }
 }
 let maxNum2 = findMax2(144,500,30,812);
 console.log('Max number of a,b,6 is '+ maxNum2);

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
 let SameNum2 = findDuplicate(4,2,4);
 console.log('Same number of h,i,j is '+ SameNum2);
 ////////////////////////////////////////////////////

 function checkEvenOrOdd(num){
    if(num%2==0){
        let String=console.log(num + ' is EvenNumber')
        return String;
    }else{
        let String1=console.log(num + ' is OddNumber')
        return String1;

    }
 }
 checkEvenOrOdd(5);
 checkEvenOrOdd(6);
 checkEvenOrOdd(11);
 checkEvenOrOdd(24);

 /////////////////////////////////////////////////////////

