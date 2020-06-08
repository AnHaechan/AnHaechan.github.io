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

const auth = firebase.auth();
const db = firebase.firestore();

// Read each users' data from database
function myReadFunction(){
  firebase.database().ref('users/'+firebase.auth().currentUser.uid+'/like').once('value').then(function(snapshot){
    alert(snapshot.val());
  });
}

// Update each users' data from database
function myUpdateFunction(){
  const id = firebase.auth().currentUser.uid;
  firebase.database().ref('users/'+id).set({
    like:["AAA"],
    dislike:["BBB"],
    interested:["CCC"]
  })
}

//SignOut user with firebase
function mySignOut(){
    auth.signOut().then(()=>{
        location.href="MainPage.html";
    })
}