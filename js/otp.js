// Initialize Firebase (ADD YOUR OWN DATA)
var firebaseConfig = {
    apiKey: "AIzaSyDJjaaMl9zlzCaTFlzVr7LAVofzOT*****",
    authDomain: "pi-image-*****.firebaseapp.com",
    databaseURL: "https://pi-image-*****.firebaseio.com",
    projectId: "pi-image-store",
    storageBucket: "pi-image-*****.appspot.com",
    messagingSenderId: "20470888****",
    appId: "1:204708884249:web:741c6fb9900c48a98e****"
  };
  // Initialize Firebase
  //firebase.initializeApp(firebaseConfig);
  
  
  var messagesRef = firebase.database().ref('messages');
 
  messagesRef.orderByChild('phone').on("value", function(snapshot) {
    snapshot.forEach((function(child) { 
    	console.log(child.key)
    	var k=child.key
    	var pqr = firebase.database().ref('messages/'+child.key+'/')
    	 pqr.on("value", function(snapshot) {
    	 	 var q=snapshot.val().vreq;
    	 	 console.log('vreq'+q);
    	 	var ans = q.localeCompare("1"); 
    	 	console.log(ans);
    	 	 if(ans==0)
    	 		 {
    	 		 console.log("OK");
    	 		 var otp1=otp();
    	 		console.log(otp1);
    	 		saveotp2(k, otp1);
    	 		//window.location = "index2.html"
    	 		//window.open('mailto:iotcloudsfire@gmail.com?subject=mailtest&body=hello');
    	 		 }
    	 	 else{ console.log("Not OK");}
    	 }, function (error) {
    	    console.log("Error: " + error.code);
    	 });
    	
    })); 
  });
  
  function otp(){
	  var x=Math.floor(Math.random() * 9999) + 1000;
	  x = parseInt(x)
	  if(x>10000)
	  {
		  x="2234"
	  }
	  else{
		  x=x
	  }
	 return x; 
  }
  
  
  function saveotp2(k, otp1){
	  var newMessageRef = messagesRef.child(k);
	  newMessageRef.update({
		
	    otp:otp1,
	    vreq:"0"
	  });
	}
  
  
