
let plus_order = document.getElementById('count-order');
let count_price = document.getElementById('count-price');
function plusOrder(){
    plus_order.innerText = Number(plus_order.innerText)+1;
    count_price.innerText = plus_order.innerText * 750;
     
}

function minusOrder(){
    if(plus_order.innerText>0){
        plus_order.innerText = Number(plus_order.innerText)-1;
        count_price.innerText = count_price.innerText - 750;
    }
     
}