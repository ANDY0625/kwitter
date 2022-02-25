
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyAWOKNVHsF1TaGgVUtHfEOzCyz3X8VOQJw",
    authDomain: "turtleman-ioll.firebaseapp.com",
    databaseURL: "https://turtleman-ioll-default-rtdb.firebaseio.com",
    projectId: "turtleman-ioll",
    storageBucket: "turtleman-ioll.appspot.com",
    messagingSenderId: "768890067079",
    appId: "1:768890067079:web:0db449aff0a17bf039c022"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function AddUser()
{
    user_name = document.getElementById("username").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}
