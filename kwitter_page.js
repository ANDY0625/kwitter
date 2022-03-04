//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyC1JfK2ut3f6jHsC9QU6zDQexF2k5LgOPE",
      authDomain: "mycity-glgo.firebaseapp.com",
      databaseURL: "https://mycity-glgo-default-rtdb.firebaseio.com",
      projectId: "mycity-glgo",
      storageBucket: "mycity-glgo.appspot.com",
      messagingSenderId: "208983517146",
      appId: "1:208983517146:web:c0877b50f4556a803682e3"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    //ADD YOUR FIREBASE LINKS HERE
    username=localStorage.getItem("User_name");
room_name=localStorage.getItem("room_name");
function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:username,
            message:msg,like:0
      });
      document.getElementById("msg").value="";
}























function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
