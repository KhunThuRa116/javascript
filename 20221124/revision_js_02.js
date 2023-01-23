let a = 10;
let b = 'Toyota';
let c = true;
let d = [];//empty array

console.log(a);
console.log(b);
console.log(c);
console.log(d);

a = a+2;
console.log(a);

d.push(123);
d.unshift(90);
console.log(d);

d.unshift(50);
console.log(d);
d[0]=10;
console.log(d);

let numArr=[90];
console.log('Before update '+numArr);
numArr[0]=12;
console.log('After update '+numArr);

numArr1 = [1,2,3,4,5,6];
console.log(numArr1);

let removeLastElement = numArr1.pop();
console.log('RemoveLast > '+removeLastElement);

console.log(numArr1);

let removeFirstElement = numArr1.shift();
console.log('RemoveFirst > '+removeFirstElement);

console.log(numArr1);
////////////////////////////////////////////////////

function sumArrData(arr){
    let a=arr[0];
    let b=arr[1];
    let sum = a+b;
    return sum;
}
res=sumArrData([1,2]);
console.log(res);

res=sumArrData([3,5]);
console.log(res);

res=sumArrData([13,5]);
console.log(res);

console.log('\n');
/////////////////////////////////////////

function sumArrData1(arr){
    let a=arr[0];
    let b=arr[1];
    let c=arr[2];
    let sum = a+b+c;
    return sum;
}
res=sumArrData1([1,11,21]);
console.log(res);

res=sumArrData1([2,12,22]);
console.log(res);

res=sumArrData1([13,5,25]);
console.log(res);
console.log('\n');
///////////////////////////////////////

function findMax(arr){
    let a = arr[0];
    let b = arr[1];
    if(a>b){
        return a;
    }else{
        return b;
    }
}
res = findMax([1,11]);
console.log("Max Num > "+res);

res = findMax([21,0]);
console.log("Max Num > "+res);

console.log('\n');
////////////////////////////////////////////

function findMaxFirstAndLast(arr){
    let firstArr = arr[0];
    let lastArr = arr[arr.length-1];
    if(firstArr>lastArr){
        return firstArr;
    }else if(arr.length==1){
        return arr[0];
    }else if(arr.length==0){
        return 0;
    }else{
        return lastArr;
    }
};

 res = findMaxFirstAndLast([1,2]);
 console.log(res);

 res = findMaxFirstAndLast([11,0,3]);
 console.log(res);

 res = findMaxFirstAndLast([9,10,8,4,1]);
 console.log(res);

 res = findMaxFirstAndLast([4,9,7,1,5]);
 console.log(res);

 res = findMaxFirstAndLast([3]);
 console.log(res);

 res = findMaxFirstAndLast([]);
 console.log(res);

 console.log('\n');

 //////////////////////////////////////////////////

 function findSameAndDoubleIt(arr){
    let a = arr[0]
    let b = arr[arr.length-1]
    if(a==b){
        return (a+b)*2;
    }else{
        return a+b;
    }
 }

 res = findSameAndDoubleIt([1,2,3,1]);
 console.log(res);

 res = findSameAndDoubleIt([1,2,4]);
 console.log(res);

 res = findSameAndDoubleIt([4,3,4]);
 console.log(res);

 