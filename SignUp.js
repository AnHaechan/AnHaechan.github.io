  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCrtTewJF_Zp1A5UHjzYO5S-1ohVxV7U68",
    authDomain: "dp4-test.firebaseapp.com",
    databaseURL: "https://dp4-test.firebaseio.com",
    projectId: "dp4-test",
    storageBucket: "dp4-test.appspot.com",
    messagingSenderId: "343541650289",
    appId: "1:343541650289:web:6910846b2cd28d773c9cd0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //function for enter press in input
  function myClickButton(){
    const name = document.getElementById("SignUpName").value;
    const email = document.getElementById("SignUpEmail").value;
    const password = document.getElementById("SignUpPassword").value;
    const confirm = document.getElementById("SignUpConfirm").value;
    if(event.keyCode==13 && name!=""&& email!=""&& password!=""&& confirm!="") {mySignUp(); return false;}
    else if(event.keyCode==13 ){
      alert("Fill in all items!");
    }
  }

  //SignUp with firebase
  function mySignUp(){
    const name = document.getElementById("SignUpName").value;
    const email = document.getElementById("SignUpEmail").value;
    const password = document.getElementById("SignUpPassword").value;
    const confirm = document.getElementById("SignUpConfirm").value;

    if(0!=password.localeCompare(confirm)){
      alert("Password is not same!");
      document.getElementById("SignUpPassword").value="";
      document.getElementById("SignUpConfirm").value="";
    }else{
      firebase.auth().createUserWithEmailAndPassword(email, password).then(function(user){
          user.updateProfile({
            displayName: name
          })
          location.href="MainPage-Logged.html";
      }).catch(function(error){
        let message = error.message;
        alert(message);
      })
    }
  } 