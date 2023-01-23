let FromInput = document.getElementById('from-input');
let YenInput = document.getElementById('yen-id');
let RupeInput = document.getElementById('rupe-id');
let KyatInput = document.getElementById('kyat-id');
let BahtInput = document.getElementById('baht-id');
let PoundInput = document.getElementById('lb-id');

function calculateCurrency(){
    
    YenInput.value = FromInput.value * 135.39
    RupeInput.value = FromInput.value * 132.18
    KyatInput.value = FromInput.value * 2099.64
    BahtInput.value = FromInput.value * 34.61
    PoundInput.value = FromInput.value * 0.81
}