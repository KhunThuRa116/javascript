function calculateCurrency(){
    
    let DollarInput = document.getElementById('input-dollar');
    // console.log(DollarInput.value)
    let yenShow = document.getElementById('yen-show');

     yenShow.value = DollarInput.value * (137.71);
     
}