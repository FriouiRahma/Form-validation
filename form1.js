let btn = document.querySelector('.btn-send')
let btnres=document.querySelector('.btn-res')

var nam=document.forms["RegForm"]["nom"];
var prenom=document.forms["RegForm"]["prenom"];
var adress=document.forms["RegForm"]["adress"];
var email=document.forms["RegForm"]["email"];
var password=document.forms["RegForm"]["password"];
var comment=document.forms ["RegForm"]["comment"];

btn.addEventListener('click',function  GETINPUT(){

   

    if(prenom.value == "") {
        window.alert("Please enter your prenom."); 
        // prenom.focus(); 
        return false;
    }
    if(nam.value== ""){
        window.alert("Please enter your name.");
        nam.focus();
        return false;
    }
    if(adress.value==""){
        window.alert("Please enter your adress!");
        adress.focus();
        return false;
    }
    if(email.value==""){
        window.alert("Please enter your email!");
        email.focus();
        return false;
    }
    if (password.value ==""){
    window.alert("Please enter your password!");
    password.focus();
    return false;
    }
    if(comment.value==""){
        window.alert("Please enter your comment!");
        comment.focus();
        return false;
    }
    // regexp
    var reg=/^(?=.*[a-zA-Z0-9]).{7,}$/; 
    var resultat = reg.test(password.value);
    alert(resultat);



// var reg = new RegExp("/^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/");
var regg = new RegExp(".+\@.+\..+");
var resultat = regg.test(email.value);

if (resultat==false){
    window.alert("please enter a valid email!");
    // alert(resultat)
}

})
// btnreset
btnres.addEventListener('click',function(){
    
    nam.value==""
    prenom.value==""
    adress.value==""
    email.value==""
    password.value==""
    comment.value==""

})
