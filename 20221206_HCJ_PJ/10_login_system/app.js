let pwd = document.getElementById('pw-id');
let confirm_pwd = document.getElementById('confirm-pw-id');
let msgBox = document.getElementById('error-msg-box')
let userName = document.getElementById('user-name-id');

function loginAction(){
    
    //username can't be space or empty
    // so,we need to check user name // trim () method cut space name
    if(userName.value.trim()==""){
        msgBox.innerText = "Please Enter Username"  
    }else if(pwd.value.trim() =='' || confirm_pwd.value.trim()==''){
        msgBox.innerText = "Please Enter Password"
    }else if(pwd.value == confirm_pwd.value){
        // save storage
        // console.log(username.value)
        localStorage.setItem('user-name',userName.value);

        //go to welcome page
        window.location.href = 'welcome.html';
    }else{
        msgBox.innerText = "Password Doesn't Match"
    }
}