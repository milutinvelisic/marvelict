window.onload = function(){
    var signInDugme = document.getElementById("dugmenceeeeee");
    signInDugme.addEventListener("click", proveracontinue);

    var signInDugme2 = document.getElementById("povratak");
    signInDugme2.addEventListener("click", proveracontinue1);
}
window.addEventListener("load", selectMonth);
window.addEventListener("load", selectDay);
window.addEventListener("load", selectYear);
window.addEventListener("load", proveracontinue);
// window.addEventListener("load", proveracontinue1);


function selectMonth(){
    var niz = [
        "Month",
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ]

    var ubacivanje = document.getElementById("selectMonth");
    var ispis = "<select id='selektMesec' class='regselect'>";
    for(var i = 0; i < niz.length; i++){
        ispis += "<option value='"+ i +"'>"+ niz[i] +"</option>";
    }
    ispis+= "</select>";
    ubacivanje.innerHTML += ispis;
}

function selectDay(){

    var ubacivanje = document.getElementById("selectDay");
    var ispis = "<select id='selektDan' class='regselect'>";
    ispis+= "<option value='0'>Day</option>"
    for(var i = 1; i < 32; i++){
        ispis += "<option value='"+ i +"'>"+ i +"</option>";
    }
    ispis+= "</select>";
    ubacivanje.innerHTML += ispis;
}

function selectYear(){

    var ubacivanje = document.getElementById("selectYear");
    var ispis = "<select id='selektyear' class='regselect'>";
    ispis+= "<option value='0'>Year</option>"
    for(var i = 2018; i >= 1918; i--){
        ispis += "<option value='"+ i +"'>"+ i +"</option>";
    }
    ispis+= "</select>";
    ubacivanje.innerHTML += ispis;
}
var datum = new Date();
var danas = datum.getFullYear();


var proveraGreske = 0;

function proveracontinue(){

    var godinaeror = document.getElementById("registerYear-error");
    var meseceror = document.getElementById("registerMonth-error");
    var daneror = document.getElementById("registerDay-error");
    var sakriti = document.getElementById("sakriti");
    var prikazati = document.getElementById("prikazati");
    var konacnaForma = document.getElementById("pravaForma");

    if((danas-selektyear.options[selektyear.selectedIndex].value)<18){
        sakriti.style.display = "none";
        prikazati.style.display = "block";
    }
    else if (selektyear.value == 0){
        godinaeror.textContent = "Year has not been filled in.";
        selektyear.style.outline = "2px solid #eb2328";
    }
    else{
        godinaeror.textContent = "";
        selektyear.style.outline = "0px solid #000";
        sakriti.style.display = "none";
        konacnaForma.style.display = "block";
    }
    ////////////////////////////////////////////////////////////
    if(selektMesec.value == 0){
        meseceror.textContent = "Month has not been filled in.";
        selektMesec.style.outline = "2px solid #eb2328";
    }else{
        meseceror.textContent = "";
        selektMesec.style.outline = "0px solid #000";
    }
    //////////////////////////////////////////////////////
    if(selektDan.value == 0){
        daneror.textContent = "Day has not been filled in.";
        selektDan.style.outline = "2px solid #eb2328";
    }else{
        daneror.textContent = "";
        selektDan.style.outline = "0px solid #000";
    }
    ///////////////////////////////////////////////////////
    
}
function proveracontinue1(){
    // alert("alrt");

    var fname = document.getElementById("fname").value.trim();
    var lname = document.getElementById("lname").value.trim();
    var user = document.getElementById("username").value.trim();
    var email = document.getElementById("email").value.trim();
    var pass = document.getElementById("password").value.trim();
    var repass = document.getElementById("repassword").value.trim();
    
    var fname1 = document.getElementById("fname");
    var lname1 = document.getElementById("lname");
    var user1 = document.getElementById("username");
    var email1 = document.getElementById("email");
    var pass1 = document.getElementById("password");
    var repass1 = document.getElementById("repassword");
    var validno = 0;
    var proveralozinke = repass.search(pass);

    
    var regFname = /^[A-Z][a-z]{2,12}$/;
    var regLname = /^([A-Z][a-z]{2,12})+$/;
    var regUser = /^[A-z][a-z]{2,}/;
    var regEmail = /^(([A-z]{4,})|([a-z]{2,11}\.[a-z]{2,13}\.[1-9][0-9]*[0-9]*\.[1-9][0-9]))\@(ict.edu.rs|gmail.com|yahoo.com|hotmail.com|eunet.rs)$/;
    var regPass = /^\d{5,12}$/;

    if(!regFname.test(fname)){
        fname1.style.border= "2px solid #eb2328";
        validno = 1;
    }
    else if(fname == ""){
        fname1.style.border= "2px solid #eb2328";
        validno = 1;
    }
    else{
        fname1.style.border= "none";
        validno = 0;
    }

    if(!regLname.test(lname)){
        lname1.style.border= "2px solid #eb2328";
        validno = 1;
    }
    else if(lname == ""){
        lname1.style.border= "2px solid #eb2328";
        validno = 1;
    }
    else{
        lname1.style.border= "None";
        validno = 0;
    }

    if(!regUser.test(user)){
        user1.style.border= "2px solid #eb2328";
        validno = 1;
    }
    else if(user == ""){
        user1.style.border= "2px solid #eb2328";
        validno = 1;
        
    }
    else{
        user1.style.border= "none";
        validno = 0;
    }

    if(!regEmail.test(email)){
        email1.style.border= "2px solid #eb2328";
        validno = 1;
    }
    else if(email == ""){
        email1.style.border= "2px solid #eb2328";
        validno = 1;
        
    }
    else{
        email1.style.border= "none";
        validno = 0;
    }

    if(!regPass.test(pass)){
        pass1.style.border= "2px solid #eb2328";
        validno = 1;
    }
    else if(pass == ""){
        pass1.style.border= "2px solid #eb2328";
        validno = 1;
        
    }
    else{
        pass1.style.border= "none";
        validno = 0;
    }

    if(!regPass.test(repass)){
        repass1.style.border= "2px solid #eb2328";
        validno = 1;
    }
    else if(repass == ""){
        repass1.style.border= "2px solid #eb2328";
        validno = 1;
    }
    else{
        repass1.style.border= "none";
        validno = 0;
    }

    if((proveralozinke<0)&&(proveralozinke!=1)){
        repass1.style.border= "2px solid #eb2328";
        validno = 1;
    }
    else{
        repass1.style.border= "none";
        validno = 0;
    }
}