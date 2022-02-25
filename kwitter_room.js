var firebaseConfig = {
  apiKey: "AIzaSyCrY8TBwVKsvDTf839Ke0zNdZ9uAMlVWH8",
  authDomain: "tic-tac-toe-5fabd.firebaseapp.com",
  databaseURL: "https://tic-tac-toe-5fabd-default-rtdb.firebaseio.com",
  projectId: "tic-tac-toe-5fabd",
  storageBucket: "tic-tac-toe-5fabd.appspot.com",
  messagingSenderId: "994149236222",
  appId: "1:994149236222:web:76c4c6acbebf9fb23c54af"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
username=localStorage.getItem("User_name");
document.getElementById("username").innerHTML="welcome "+username+"!";
function addroom(){
  room_name=document.getElementById("room_name").value;
 firebase.database().ref("/").child(room_name).update({
    purpose : "adding user"
});
localStorage.setItem("room_name",room_name); 
window.location="kwitter_page.html";
}







function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row="<div class='room_name' id="+Room_names+"onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
