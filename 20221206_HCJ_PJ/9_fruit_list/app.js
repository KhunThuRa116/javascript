let title = document.getElementById('title-id');
title.innerHTML = '<h1>My Shop</h1>';

let fruitContainer = document.getElementById('fruit-container-id');

let fruitImgArr = ['img/apple.jpg','img/orange.jpg','img/kiwi.jpg','img/pineapple.jpg'];
let fruitNameArr = ['Apple','Orange','Kiwi','Pineapple'];

for (let i=0; i<fruitNameArr.length; i++){
    fruitContainer.innerHTML = fruitContainer.innerHTML +
    `<div class="fruit">
        <div class="fruit-img">
            <img src="${fruitImgArr[i]}" alt="">
        </div>
        <div class="fruit-name">
            ${fruitNameArr[i]}
        </div>
    </div>`
}
let countryContainer = document.getElementById('select-container')
let countryArr = ['Myanmar','Nepal','Japan','American','Korea',
                  'Indonesia','Malaysia','Singapore','Philipine','Laos',
                  'Cambodia', 'Vietnam','Thailand','Brunai','China',
                  'UAE','Saudi Arabia','Turkey','England','France','Spain',
                    
                ]

for (i=0;i<countryArr.length;i++){
countryContainer.innerHTML = countryContainer.innerHTML + `<option value="">${countryArr[i]}</option>`;

}