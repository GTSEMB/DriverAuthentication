// Initialize Firebase (ADD YOUR OWN DATA)
var firebaseConfig = {
   apiKey: "AIzaSyDJjaaMl9zlzCaTFlzVr7LAVofzOTRAOss",
  authDomain: "pi-image-store.firebaseapp.com",
  databaseURL: "https://pi-image-store.firebaseio.com",
  projectId: "pi-image-store",
  storageBucket: "pi-image-store.appspot.com",
  messagingSenderId: "204708884249",
  appId: "1:204708884249:web:741c6fb9900c48a98e1f88"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  
  var messagesRef = firebase.database().ref('messages');
 
  
  document.getElementById('loginForm').addEventListener('submit', submitForm);
   
  function submitForm(e){
	  e.preventDefault();

	  // Get values
	  var Username = getInputVal('Username');
	  var Password = getInputVal('Password');
	  var xyz = firebase.database().ref('Manager/')
	  
	  
	//Read Data
	  xyz.on("value", function(snapshot) {
	 	 var q=snapshot.val().Password;
	 	 console.log(q);
	 	var ans = q.localeCompare(Password); 
	 	console.log(ans);
	 	 if(ans==0)
	 		 {
	 		 console.log("OK");
	 		window.location = "index2.html"
	 		
	 		 }
	 	 else{ console.log("Not OK");}
	 }, function (error) {
	    console.log("Error: " + error.code);
	 });
	  

  // Clear form
	  document.getElementById('loginForm').reset();	  
  }
  
  
    
  function getInputVal(id){
	  return document.getElementById(id).value;
	}
  
 
