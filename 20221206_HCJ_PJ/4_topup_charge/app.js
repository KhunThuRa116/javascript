let chargeAmount = document.getElementById('charge-amount-id');

function plusCharge(amount){
    chargeAmount.value = Number(chargeAmount.value) + amount;  

}

function minusCharge(amount){
    if(chargeAmount.value>=amount){
        chargeAmount.value = chargeAmount.value - amount; 
        }
}

// Plus Charge
// function plus500(){
//     chargeAmount.value = Number(chargeAmount.value) + 500;  
//     // console.log(chargeAmount.value);
// }

// function plus1000(){
//     chargeAmount.value = Number(chargeAmount.value) + 1000;  
// }

// function plus5000(){
//     chargeAmount.value = Number(chargeAmount.value) + 5000;    
// }

// function plus10000(){
//     chargeAmount.value = Number(chargeAmount.value) + 10000;
// }

// function minus500(){
//     if(chargeAmount.value>=500){
//         chargeAmount.value = chargeAmount.value - 500; 
//         }
// }

// Minus charge
// function minus1000(){
//     if(chargeAmount.value>=1000){
//         chargeAmount.value = chargeAmount.value - 1000; 
//         }  
// }

// function minus5000(){
//     if(chargeAmount.value>=5000){
//         chargeAmount.value = chargeAmount.value - 5000; 
//         } 
// }

// function minus10000(){
//     if(chargeAmount.value>=10000){
//     chargeAmount.value = chargeAmount.value - 10000; 
//     }
// }