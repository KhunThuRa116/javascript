let arr = [1, 2, 3, 4];

//length
console.log(arr.length);

//array to string
console.log(arr.toString());
console.log(arr);//original array does not change;

console.log(arr.join(":"));
console.log(arr);

//adding data from rightside with push() Method  ===> change original array
arr.push(5,6,7);
console.log(arr)
arr.push(8);
console.log(arr);

//adding data from leftside with unshift() Method ===> change original array
arr.unshift(10);
console.log(arr);


//remove data from rightside ==>delete one by one data
console.log(arr.pop());
console.log(arr.pop());
console.log(arr.pop());
console.log(arr.pop());

console.log(arr);

//remove data from leftside ==>
arr.shift()
console.log(arr);

let cars=['BMW', 'Toyota', 'Volvo', 'Jaguar', 'Nissan'];
cars.push('Honda','Suzuki');
console.log(cars);

cars.pop();
console.log(cars);

cars.shift();
console.log(cars);

cars.unshift('BMW','MMM');
console.log(cars);
console.log('\n');

/////////////////////////////////////////////////

//splice
animals = ['cat', 'cow', 'dog','monkey'];

result1 = animals.splice(1,0,'fish');
console.log(animals);
console.log(result1);//==>add 1 element & show 0 delete element

result2 = animals.splice(2,2,'tiger');
console.log(animals);
console.log(result2);//==>add 2 element & show 2 delete element

/////////////////////////////////////

let numbers = [1,2,3,4];
numbers.shift()
numbers.push(5);
console.log(numbers);





