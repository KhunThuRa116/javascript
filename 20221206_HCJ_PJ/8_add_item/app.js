function addItem(){
    let itemListBox = document.getElementById('item-list-id');
    let itemInput = document.getElementById('item-input-id');
    let errorMsg = document.getElementById('error-msg');

    // console.log(itemListBox.innerHTML)

    if(itemInput.value.trim() != ''){
    // itemListBox.innerHTML = itemListBox.innerHTML + `<div class="item"><p> ${itemInput.value} </p></div>`;
    itemListBox.innerHTML =   `<div class="item" onclick="deleteElement(this)"><p> ${itemInput.value} </p></div>` + itemListBox.innerHTML;

        errorMsg.innerText = '';
    }else{
        errorMsg.innerText = "Plz write the item name you want to add";
    }

}

function deleteElement(ele){
    ele.remove();
}