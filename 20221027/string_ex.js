function CheckFirstLetterA(str){

    if(str.slice(0,1)=="a" ){
        return "Yes,it is started with character 'a' "
    }else if(str.slice(0,1)=="A"){
        return "Yes,it is started with character 'A' " 
    }return "No,Not Correct"
}

result=CheckFirstLetterA("apple");
console.log(result);

result=CheckFirstLetterA("Apple");
console.log(result);

result=CheckFirstLetterA("Ball");
console.log(result);

function CheckFirstLetterA_B(str){

    if(str.slice(0,1)=="a" ){
        return "Yes,it is started with character 'a' "
    }else if(str.slice(0,1)=="A"){
        return "Yes,it is started with character 'A' " 
    }else if(str.slice(0,1)=="b"){
        return "start with 'b' "
    }else if(str.slice(0,1)=="B"){
        return "start with 'B' "
    }
    return "No,Not Correct"
}

result=CheckFirstLetterA_B("another");
console.log(result);

result=CheckFirstLetterA_B("Acronu");
console.log(result);

result=CheckFirstLetterA_B("bathing");
console.log(result);

result=CheckFirstLetterA_B("Bus");
console.log(result);

result=CheckFirstLetterA_B("Car");
console.log(result);

result=CheckFirstLetterA_B("Valley");
console.log(result);

///////////////////////////////////////////////////////

function CheckFirstLetterA_B_short(str){
    let firstCharacter=str.slice(0,1);
    if(firstCharacter=="a" || firstCharacter=="A" || firstCharacter=="b" || firstCharacter=="B"){
        return 'Start with ' + firstCharacter;
    }return "Not Correct"
}

result=CheckFirstLetterA_B_short("another");
console.log(result);

result=CheckFirstLetterA_B_short("Acronu");
console.log(result);

result=CheckFirstLetterA_B_short("bathing");
console.log(result);

result=CheckFirstLetterA_B_short("Bus");
console.log(result);

result=CheckFirstLetterA_B_short("Car");
console.log(result);

result=CheckFirstLetterA_B_short("Valley");
console.log(result);
/////////////////////////////////////////////////////////

function checkEndWithLetter_E(str){
    let endletter = str.slice(-1);
    if(endletter=="e" || endletter=="E"){
        return "End with " + endletter;
    }return "Not Correct";
}

result=checkEndWithLetter_E("polite");
console.log(result);

result=checkEndWithLetter_E("animal");
console.log(result);

result=checkEndWithLetter_E("PLEASE");
console.log(result);

/////////////////////////////////////////////////////

function returnLast3Letter(str){
    if(str.length<=3){
        return str;
    }else if(str.length>3){
        return str.substr(-3);
    }
}

result = returnLast3Letter('a');
console.log(result);

result = returnLast3Letter('ab');
console.log(result);

result = returnLast3Letter('abc');
console.log(result);

result = returnLast3Letter('abcd');
console.log(result);

result = returnLast3Letter('abcde');
console.log(result);

result = returnLast3Letter('abcdef');
console.log(result);

/////////////////////////////////////////////////

function returnFirst3Letter(str){
    if(str.length<=3){
        return str;
    }else if(str.length>3){
        return str.substr(0,3);
    }
}

result = returnFirst3Letter('a');
console.log(result);

result = returnFirst3Letter('ab');
console.log(result);

result = returnFirst3Letter('abs');
console.log(result);

result = returnFirst3Letter('pink');
console.log(result);

result = returnFirst3Letter('white');
console.log(result);

result = returnFirst3Letter('olderman');
console.log(result);

////////////////////////////////////////////////

function returnMidletter(str){
    if (str.length%2!=0){
        let n = (str.length-1)/2;
        return str.slice(n,n+1);
    }
    let m= (str.length/2);
    return str.slice(m-1,m+1);
}
result = returnMidletter('arperle');
console.log(result);

result = returnMidletter('ballerer');
console.log(result);

///////////////////////////////////////////////////////

//find mid letter using substr in Odd LEtter

function findMidLetter(str){
    let n = (str.length-1)/2;
    return str.substr(n,1)
}
result = findMidLetter('EGG');
console.log(result);

result = findMidLetter('ORANG');
console.log(result);

//fing mid letter using substr in Even Letter

function findMidletterOfEven(str){
    let n= (str.length/2)-1;
    return str.substr(n,2);
}
result = findMidletterOfEven('book')
console.log(result);
result = findMidletterOfEven('amazon')
console.log(result);
result = findMidletterOfEven('facebook')
console.log(result);

//Combine Programm EVEN & ODD using substr

function findMidLetterOfEO(str){
    if(str.length%2==0){
        let n= (str.length/2)-1;
        return str.substr(n,2);
    }else{
        let n = (str.length-1)/2;
        return str.substr(n,1)
    }
    
}
result = findMidLetterOfEO('EGE');
console.log(result);
result = findMidLetterOfEO('AMAZON');
console.log(result);

///////////////////////////////////////////////////




