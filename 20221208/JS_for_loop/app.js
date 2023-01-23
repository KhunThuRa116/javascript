//for loop

// 1.Initialize Value
// 2.condition
// 3.Increasement or Decreasement

for (let i=0; i<5; i++){
    console.log(i+'Hello');
}

let num_list = document.getElementById('num-list');
// num_list.innerHTML = '<li>0</li><li>1</li><li>2</li><li>3</li><li>4</li>';
let fruitArr = ['Apple','Orange','Banana','Pineapple','Lemon']
for (let i=0; i<5; i++){
    num_list.innerHTML = num_list.innerHTML + '<li>' + i + '</li>';

}
for (let i=0; i<5; i++){
    num_list.innerHTML = num_list.innerHTML + '<li>' + fruitArr[i] + '</li>' +'<br>';  
} console.log('\n')

for (let i=fruitArr.length-1; i>-1; i--){
    num_list.innerHTML = num_list.innerHTML + '<li>' + fruitArr[i]+ '</li>'+'<br>';
}