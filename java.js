//var a = document.querySelector(".optweek");
//var b = document.querySelector(".optyear");
//
//a.addEventListener('click',function(){
//    var c = document.getElementById("opt1");
//    var d = document.getElementById("opt2"); 
//    c.style.border = "3px solid #A44DF9";
//    d.style.border = "1px solid #A44DF9";
//});
//
//b.addEventListener('click',function(){
//    var c = document.getElementById("opt1");
//    var d = document.getElementById("opt2"); 
//    d.style.border = "3px solid #A44DF9";
//    c.style.border = "1px solid #A44DF9";
//});
//
//
//
//
//
//
//
//function term(){
//    var b = document.getElementById("abouths");
//    b.innerHTML="Use";
//    var c = document.getElementById("aboutp");
//    c.innerHTML="blablabla";
//    var a = document.getElementById("abouth");
//    a.innerHTML="Term of";
//}
//
//
//function policy(){
//    var b = document.getElementById("abouths");
//    b.innerHTML="Policy";
//    var c = document.getElementById("aboutp");
//    c.innerHTML="PolicyPolicyPolicy";
//    var a = document.getElementById("abouth");
//    a.innerHTML="Privacy";
//}
//
//function contact(){
//    var b = document.getElementById("abouths");
//    b.innerHTML="Us";
//    var c = document.getElementById("aboutp");
//    c.innerHTML="ContactContactContactContactContactContactContact";
//    var a = document.getElementById("abouth");
//    a.innerHTML="Contact";
//}


//var c = document.querySelector(".term");
//c.addEventListener('click',function(){
//    var a = document.getElementById("abouth");
//    var b = document.getElementById("abouths");
//    var c = document.getElementById("aboutp");
//    a.innerHTML="term of";
//    b.innerHTML="use";
//    c.innerHTML="blablabla";
//});






//  const firebaseConfig = {
//    apiKey: "AIzaSyDdz8ilFnDpZYmxlNpxywl-4QU2YrsCngA",
//    authDomain: "followerreport-b6795.firebaseapp.com",
//    databaseURL: "https://followerreport-default-rtdb.firebaseio.com",
//    projectId: "followerreport",
//    storageBucket: "followerreport.appspot.com",
//    messagingSenderId: "308391984060",
//    appId: "1:308391984060:web:77473427d2c8cb66b949b9"
//  };
//
//  
//firebase.initializeApp(firebaseConfig);
//
//var usersDB = firebase.database().ref("signupForm");
//
//document.getElementById("signupForm").addEventListener("submit", submitform);
//
//function submitform(e){
//    e.preventDefault();
//    
//    var userID = getElementVal("signup-user");
//    var email = getElementVal("signup-email");
//    var password = getElementVal("signup-password");
//    
//    
//console.log(userID, email, password);
//}
//
//const getElementVal = (id) => {
//    return document.getElementById(id).value;
//};
//



var btn = document.getElementById("menuHome");


if(btn){
btn.addEventListener('click', function () {
    console.log("basladi");
    var a = document.getElementById("menu");
    if(a.style.visibility == "hidden"){
        console.log("if");
        a.style.opacity= "1";
        a.style.visibility= "visible";
    }
    else{
        console.log("else");
        a.style.opacity= "0";
        a.style.visibility= "hidden";   
    }
});
};

var optyear = document.getElementById("optyear");
var optweek = document.getElementById("optweek");


if(optweek){
    optweek.addEventListener('click', function(){    
        optweek.style.border="5px solid #7929EB";
        optyear.style.border="1px solid #7929EB";
    });
};

if(optyear){
    optyear.addEventListener('click', function(){
        optyear.style.border="5px solid #7929EB";
        optweek.style.border="1px solid #7929EB";
    });
};

var term = document.getElementById("term");
var policy = document.getElementById("policy");
var contact = document.getElementById("contact");
var abouth = document.getElementById("abouth");
var abouths = document.getElementById("abouths");
var aboutp = document.getElementById("aboutp");


if(term){
    term.addEventListener('click', function(){
        abouth.innerHTML = "Term of";
        abouths.innerHTML = "Use";
        aboutp.innerHTML = "termtermtermtermtermterm";
    });
};

if(policy){
    policy.addEventListener('click', function(){
        abouth.innerHTML = "Privacy";
        abouths.innerHTML = "Policy";
        aboutp.innerHTML = "policypolicypolicypolicypolicy";
    });
};

if(contact){
    contact.addEventListener('click', function(){
        abouth.innerHTML = "Contact";
        abouths.innerHTML = "Us";
        aboutp.innerHTML = "contactcontactcontactcontact";
    });
};
