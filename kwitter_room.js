const firebaseConfig = {
      apiKey: "AIzaSyC3XtEGtAdmFmx6xevhF_aS4V-fv4Z0iWQ",
      authDomain: "kwitter-106f0.firebaseapp.com",
      databaseURL: "https://kwitter-106f0-default-rtdb.firebaseio.com",
      projectId: "kwitter-106f0",
      storageBucket: "kwitter-106f0.appspot.com",
      messagingSenderId: "849069531918",
      appId: "1:849069531918:web:faa8e015a4952b7df56d5f",
      measurementId: "G-BWPYQC005S"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
