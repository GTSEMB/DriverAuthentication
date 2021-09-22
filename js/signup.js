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
    
  document.getElementById('signupForm').addEventListener('submit', submitForm);
  
  
    
  function submitForm(e){
	  e.preventDefault();

	  // Get values
	  var vid = getInputVal('vid');
	  var name = getInputVal('name');
	  var phone = getInputVal('phone');
	  var mail = getInputVal('mail');
	  console.log(name);
	  //var message = getInputVal('message');
	  var vreq="0";
	  var otp="0";
	  // Save message
	  saveMessage(vid, name, phone, mail,vreq, otp);

	  // Clear form
	  //document.getElementById('signupForm').reset();
	  //window.location = "index.html"
	}
  
  function saveMessage(vid, name,phone, mail,vreq,otp){
	  var newMessageRef = messagesRef.child(vid);
	  newMessageRef.update({
		  vid: vid,
		  name: name,
	    phone:phone,
	    mail:mail,
	    vreq:vreq,
	    otp:otp
	  });
	}
  
  
  function getInputVal(id){
	  return document.getElementById(id).value;
	}
  
 
