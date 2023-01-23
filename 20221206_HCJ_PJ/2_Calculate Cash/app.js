function calculateCash(){
    // console.log("I'am Here");
    let amountinput = document.getElementById('amount-id');
    let taxinput = document.getElementById('tax-id');

    // console.log(amountinput.value);
    // console.log(taxinput.value);
    
    let taxamount= amountinput.value * (taxinput.value/100);
    let total_Amount = Number(amountinput.value) + Number(taxamount);

    let totalAmountShow = document.getElementById('total-result')

    totalAmountShow.innerText =  total_Amount;

}

