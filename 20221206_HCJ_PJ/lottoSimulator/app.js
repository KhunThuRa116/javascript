let x = document.getElementsByClassName('Number');

function shuffle(){
    for(i=0;i<x.length;i++){
        x[i].innerText = (Math.floor(Math.random()*43)+1);
        if(x[i].value==x[i].value){
        x[i].innerText = (Math.floor(Math.random()*43)+1);
        }
    }
}