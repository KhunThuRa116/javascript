let x = document.getElementById('ipNo');
let y = document.getElementById('moth-name-show-id');
let MonthArray = ["January","February","March","April","May","June","July","August","September","October","November","Decmeber"]

function GenerateRnumber(){
    x.value = Math.floor(Math.random()*12)+1;
}

function GenerateRmonth(){
    y.innerText = MonthArray[x.value-1];
}