//Before Update
let title = document.getElementById("title-id"); // get h1 Element by using its id
console.log(title); //h1 Element
console.log(title.innerText); // Content(innerText) of h1 Element

//Update
// title.innerText = 'Testing Update';
// console.log(title.innerText);

//..................................................................................

//Do this function when onclick + Button
function Increasement(){
    // console.log('This is Increasement');
    let countText = document.getElementById('count-num-id');
    countText.innerText=Number(countText.innerText)+1;
}

//Do this function when onclick - Button
function Decreasement(){
    // console.log('This is Decreasement');
    let countText = document.getElementById('count-num-id');
    countText.innerText=Number(countText.innerText)-1;
}

function reset(){
    let countText = document.getElementById('count-num-id');
    countText.innerText=0;
}
