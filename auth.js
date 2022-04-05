const firebaseConfig = {
    apiKey: "AIzaSyDdz8ilFnDpZYmxlNpxywl-4QU2YrsCngA",
    authDomain: "followerreport-b6795.firebaseapp.com",
    databaseURL: "https://followerreport-default-rtdb.firebaseio.com",
    projectId: "followerreport",
    storageBucket: "followerreport.appspot.com",
    messagingSenderId: "308391984060",
    appId: "1:308391984060:web:77473427d2c8cb66b949b9"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const database = firebase.database();

function register(){
username = document.getElementById('signName').value;
email = document.getElementById('signEmail').value;
password = document.getElementById('signPassword').value;

auth.createUserWithEmailAndPassword(email, password).then(function () {
var user = auth.currentUser

// add this user to firebase Database
var database_ref = database.ref()

// create user data
var user_data = {
name: username,
email: email,
password: password,
last_login: Date.now()
}

database_ref.child('users/' + user.uid).set(user_data)



alert('User Created!!')

})

.catch(function (error) {
var error_code = error.code
var error_message = error.message

alert(error_message)    
})

}
















// const auth = firebase.auth();
// const database = firebase.database();

// function register() {
//     username = document.getElementById('signName').Value
//     email = document.getElementById('signEmail').Value
//     password = document.getElementById('signPassword').Value

// }

// auth.createUserWithEmailAndPassword(email, password).then(function () {

//         var user = auth.currentUser

//         var database_ref = database.ref()

//         var user_data = {
//             name: username,
//             email: email,
//             password: password,
//             last_login: Date.now()
//         }

//         database_ref.child('users/' + user.uid).set(user_data)



//         alert('User Created!!')

//     })
//     .catch(function (error) {
//         var error_code = error.code
//         var error_message = error.message

//         alert(error_message)
//     })




//function validate_email(email){
//    expression = 
//}









//var userDB = firebase.database().ref(signUp);
//
//document.getElementById("signUp").addEventListener("submit", submit);
//
//function submit(e){
//    e.preventDefault();  
//    
//    var name = getElementVal('signName');
//    var email = getElementVal('signEmail');
//    var password = getElementVal('signPassword');
//    
//    saveMessages(name, email, password);
//}
//
//
//    const saveMessages(name, email, password) => {
//        var newSignForm = userDB.push();
//        
//        newSignForm.set({
//            name: name,
//            email: email,
//            password: password,
//                
//        });
//    };
//
//
//const getElementVal = (id) => {
//    return document.getElementById(id).value;
//};
//
//









//const signupForm = document.querySelector('#signUp');
//signupForm.addEventListener('submit', (e) => {
//    e.preventDefault();
//    
//    // get user info
//    const name = signupForm['signName'].value;
//    const email = signupForm['signEmail'].value;
//    const password = signupForm['signPassword'].value;
//    
//    console.log(name, email, password);
//    
//    firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){
//        var user = firebase.auth.currentUser
//        
//        
//        var database_ref = database.ref()
//        
//        var user_data = {
//        name: name,
//        email: email,
//        password: password,
//        last_login: Date.now()
//        }
//        
//        database_ref.child('users/' user.uid).set(user_data);
//        
//        alert('User Created!')
//    })
//}
//    
//    .catch(function(error){
//           var error_code = error.code
//           var error_message = error.message
//           
//           alert(error_message)
//           })

//    
//    firebase.auth().signInWithEmailAndPassword(email,password).catch(function(error){
//       var errorCode = error.code;
//        var errorMessage = error.message;
//        
//        window.alert("Error :" + errorMessage);
//        
//    });
//    
//});
