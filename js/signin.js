window.onload = function(){
        
    var signInDugme = document.getElementById("dugmenceeeeee");
    signInDugme.addEventListener("click", proveraSignIn);

}

function proveraSignIn(){
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    var validno = true;

    var regUsername = /^[A-zšđčćž]{3,}(\d)*$/;
    var regPassword = /^([a-zšđčćž](\d)*){6,}$/;

    if(regUsername.test(username.value)){
        document.getElementById("username-error").textContent = "";
        validno = true;
    }else{
        document.getElementById("username-error").textContent = "Wrong username";
        validno = false;
    }

    if(regPassword.test(password.value)){
        document.getElementById("password-error").textContent = "";
        validno = true;
    }else{
        document.getElementById("password-error").textContent = "Wrong password";
        validno = false;
    }

}