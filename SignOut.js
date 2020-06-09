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