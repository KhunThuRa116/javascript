// function Grade(x){
//     if(x>=91 && x<=100){
//         return 'Rank S';
//     }else if(x>=81 && x<=90){
//         return 'Rank A';
//     }else if(x>=71 && x<=80){
//         return 'Rank B';
//     }else if(x>=61 && x<=70){
//         return 'Rank C';
//     }return 'Rank D';
// }

// result = Grade(100);
// console.log(result);

// function Grade1(a){
//     switch(true){
//         case(a>=91 && a<=100):
//         // console.log('Rank S') ;
//         return 'Rank S'
//             break;
//         case(a>=81 && a<=90):
//         // console.log('Rank A') ;
//         return 'Rank A'
//             break;
//         case(a>=71 && a<=80):
//         // console.log('Rank B') ;
//         return 'Rank B'
//             break;
//         case(a>=61 && a<=70):
//         // console.log('Rank C') ;
//         return 'Rank C'
//             break;
//         default:
//         // console.log('Rank D');
//         return 'Rank D'
//             break;  
//     }
// }

// result = Grade1(90);
// console.log(result);

//////////////////////////////////////////////////

//apple = 200 , orange =50 , pineaplle= 500 , watermelon = 1000

//if u want to buy apple make parameter ("apple",500)=> "here your apple and change 300"
//u want to buy apple but okane tarinai ("apple",150)=> "Not enough money to buy apple" or 'u need more 50'

//////////////////////////////////////////////////

//solve the following function find min mid max and make ascending order (a,b,c)=>(4,7,3)=>(3,4,7)
function orderThreeNumber(a,b,c){
    let min, mid, max;
}

function minNum(a,b,c){
    if(a<b && a<c){
        return a;
    }else if(b<c){
        return b;
    }else {
        return c;
    }
}

function midNum(a,b,c){
    if((a>b && a<c) || (a<b && a>c)){
        return a;
    }else if((b>a && b<c) || (b<a && b>c)){
        return b;
    }else{
        return c;
    }
}

// function maxNum(a,b,c){
//     if
// }

function AscendingOrder(a,b,c){
    let min = minNum(a,b,c);
    let mid = midNum(a,b,c);
    return min + " " + mid + " " + max
}

///////////////////////////////////////////////////