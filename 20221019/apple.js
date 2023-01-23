function buyApple(money,nanko) {
    if (money >= 200) {
        if (money == 200) {
            return "Enjoy Your Apple";
        } else {
            let app = "Enjoy Your Apple! " + "Here Your Changes " + (money - 200) + "Yen"
            return app;
        }
    } return "Not Enough Money to Buy " + nanko +"Apple & U Need More " + (200 - money) + "Yen to Buy Apple";

}
let a = buyApple(400,2)
console.log(a)


function buyOrange( money) {
    if (money >= 50) {
        if (money == 50) {
            return "Enjoy Your Orange";
        } else {
            let app = "Enjoy Your Orange! " + "Here Your Changes " + (money - 50) + "Yen"
            return app;
        }
    } return "Not Enough Money to Buy Orange & U Need More " + (50 - money) + "Yen to Buy Orange";

}

function buyPineapple(pineapple, money) {
    if (pineapple == true && money >= 500) {
        if (money == 500) {
            return "Enjoy Your Pineapple";
        } else {
            let app = "Enjoy Your Pineapple! " + "Here Your Changes " + (money - 500) + "Yen"
            return app;
        }
    } return "Not Enough Money to Buy Pineapple & U Need More " + (500 - money) + "Yen to Buy Pineapple";

}

function buyWatermelon(watermelon, money) {
    if (watermelon == true && money >= 1000) {
        if (money == 1000) {
            return "Enjoy Your Watermelon";
        } else {
            let app = "Enjoy Your Watermelon! " + "Here Your Changes " + (money - 1000) + "Yen"
            return app;
        }
    } return "Not Enough Money to Buy Watermelon & U Need More " + (1000 - money) + "Yen to Buy Watermelon";

}

// function VendingMachine(fruit, money,nanko) {
//     switch (fruit) {
//         case 'apple':
//             return buyApple(money,nanko);
//         case 'orange':
//             return buyOrange(money);
//         case 'pineapple':
//             return buyPineapple(money);

//     }
// }

// let a = VendingMachine("apple", 1000);
// let b = VendingMachine("orange", 1000);
// console.log(a);
// console.log(b);

////////////////////////////////////////////////////

function buyFruits(fruit,money,nanko){
    if (fruit=="apple"){
        if(money<200){
            return "Need Enough "+(200-money)+ "Yen"
        }else if(money>=(200*nanko)){
            return "Here Your"+ nanko + "Apple" 
        }
    }
}