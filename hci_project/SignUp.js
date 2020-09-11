  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAd5SlRlQygznY3NzYtxdi52kdRCKbcN2o",
    authDomain: "hci-dp4-teamsumi.firebaseapp.com",
    databaseURL: "https://hci-dp4-teamsumi.firebaseio.com",
    projectId: "hci-dp4-teamsumi",
    storageBucket: "hci-dp4-teamsumi.appspot.com",
    messagingSenderId: "457957426218",
    appId: "1:457957426218:web:2be9d5bac4d8394b386f53"
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
          const user1 = firebase.auth().currentUser;
          user1.updateProfile({
            displayName: name
          })
          location.href="MainPage-Logged.html";
      }).catch(function(error){
        let message = error.message;
        alert(message);
      })
    }
  } 

  function goBack(){
    window.history.back();
  }
  
  