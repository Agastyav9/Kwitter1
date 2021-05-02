function logout2    ()  
{
  
    localStorage.removeItem("user_name")
    localStorage.removeItem("room_name")
    window.location = "index.html";
}



var firebaseConfig = {
    apiKey: "AIzaSyC9mk5F-DPtAKQJhIkIFzekZN0QA11LqPc",
    authDomain: "kwitter-project-6eb9a.firebaseapp.com",
    projectId: "kwitter-project-6eb9a",
    storageBucket: "kwitter-project-6eb9a.appspot.com",
    messagingSenderId: "750207796747",
    appId: "1:750207796747:web:ed11b2f0cb671fe700a90e",
    measurementId: "G-YDC1YMF3R6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //  firebase.analytics();

  

  function addRoom()
{
   room_name = document.getElementById("room_name").value 
   
   firebase.database().ref("/").child(room_name).update({

   });

   localStorage.setItem("room_name" , room_name);
   
   window.location = "kwitter_page.html"
}


function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
          document.getElementById("output").innerHTML = "";
          snapshot.forEach(function(childSnapshot) {
                childKey  = childSnapshot.key;
                Room_names = childKey;
    //Start code
    console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;
    //End code
    });
});}
getData();


function getName()
{
    var x = localStorage.getItem("user_name");
    var y = "Welcome!"
    name1 = "<h4> "+ y+ x +"<img class='user_tick' src='tick.png'></h4>";
    document.getElementById("name2").innerHTML += name1;
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html"; 
}
