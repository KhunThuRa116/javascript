// Rnumber()
// MaxNo()
// MinNo()
// SameNo()
let Num = document.getElementsByClassName("numInput");
let Result = document.getElementsByClassName("showresult")

function Rnumber(){
    for(i=0;i<Num.length;i++){
    Num[i].value = (Math.floor(Math.random()*100)+1); 
    }
    // console.log("a")
}

function MaxNo(){
    Result[0].innerText = Math.max(Num[0].value,Num[1].value,Num[2].value);
}

function MinNo(){
    Result[1].innerText = Math.min(Num[0].value,Num[1].value,Num[2].value);
}

function SameNo(){
    if(Num[0].value==Num[1].value || Num[0]==Num[2]){
        Result[2].innerText = Num[0].value;
    }else if(Num[1].value==Num[2].value){
        Result[2].innerText = Num[1].value;
    }else{
        Result[2].innerText = "There is NO Same Number";
    }
}