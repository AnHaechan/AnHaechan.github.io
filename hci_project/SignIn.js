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

const auth = firebase.auth();
const db = firebase.firestore();


  //function for enter press in input
  function myClickButton(){
    const email = document.getElementById("SignInEmail").value;
    const password = document.getElementById("SignInPassword").value;
    if(event.keyCode==13 && email!=""&& password!="") {mySignIn(); return false;}
    else if(event.keyCode==13){
      alert("Fill in all items!");
    }
  }


  //SignIn with firebase
  function mySignIn(){
    const email = document.getElementById("SignInEmail").value;
    const password = document.getElementById("SignInPassword").value;
    
    auth.signInWithEmailAndPassword(email, password).then(()=>{
      location.href="MainPage-Logged.html";
      if(document.getElementById("remember-me-checkbox").checked){
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
      }
      else{
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
      }
    }).catch(function(error){
      alert(error.message);
    })
  }

  function goBack(){
    window.history.back();
  }
  
  