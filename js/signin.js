window.onload = function(){
        
    let signInDugme = document.getElementById("dugmenceeeeee");
    signInDugme.addEventListener("click", proveraSignIn);

}

function proveraSignIn(){
    let username = document.getElementById("username");
    let password = document.getElementById("password");
    let validnoUser = true;
    let validnoPass = true;

    let regUsername = /^[A-zšđčćž]{3,}(\d)*$/;
    let regPassword = /^([a-zšđčćž](\d)*){6,}$/;

    if(regUsername.test(username.value)){
        document.getElementById("username-error").textContent = "";
        validnoUser = true;
        localStorage.setItem("username", username.value);
    }else{
        document.getElementById("username-error").textContent = "Wrong username";
        validnoUser = false;
    }

    if(regPassword.test(password.value)){
        document.getElementById("password-error").textContent = "";
        validnoPass = true;
    }else{
        document.getElementById("password-error").textContent = "Wrong password";
        validnoPass = false;
    }

    if(validnoUser && validnoPass){
        window.location.href = "index.html";
        // alert("pera")
    }else{
        return false;
    }

    console.log(localStorage.getItem("username"));
}