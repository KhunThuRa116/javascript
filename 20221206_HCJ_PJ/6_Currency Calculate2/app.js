let From_Input = document.getElementById('from-input');
let To_Input = document.getElementById('to-input');


function calculateCurrency(key){
    
    switch (key){
        case('yen'):
            To_Input.value = From_Input.value * (137.71);
            break;
        case('rupee'):
            To_Input.value = From_Input.value * (131.94);
            break;
        case('kyat'):
            To_Input.value = From_Input.value * (2098.74);
            break;

    }
}

