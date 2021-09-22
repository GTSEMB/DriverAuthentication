/* JS comes here */
    (function() {
    	var data1;
        var width = 320; // We will scale the photo width to this
        var height = 0; // This will be computed based on the input stream

        var streaming = false;
        
        var video = null;
        var canvas = null;
        var photo = null;
        var startbutton = null;
        var clearbutton = null;

        function startup() {
            video = document.getElementById('video1');
            canvas = document.getElementById('canvas');
            photo = document.getElementById('photo');
            startbutton = document.getElementById('startbutton');
            upload = document.getElementById('signupForm');
            clearbutton = document.getElementById('clearbutton');
            navigator.mediaDevices.getUserMedia({
                    video: true,
                    audio: false
                })
                .then(function(stream) {
                    video.srcObject = stream;
                    video.play();
                })
                .catch(function(err) {
                    console.log("An error occurred: " + err);
                });

            video.addEventListener('canplay', function(ev) {
                if (!streaming) {
                    height = video.videoHeight / (video.videoWidth / width);

                    if (isNaN(height)) {
                        height = width / (4 / 3);
                    }

                    video.setAttribute('width', width);
                    video.setAttribute('height', height);
                    canvas.setAttribute('width', width);
                    canvas.setAttribute('height', height);
                    streaming = true;
                }
            }, false);

            startbutton.addEventListener('click', function(ev) {
                takepicture();
                ev.preventDefault();
            }, false);
            
            upload.addEventListener('submit', function(ev) {
            	//takepicture();
                uploadpicture();
                ev.preventDefault();
            }, false);
            
            clearbutton.addEventListener('click', function(ev) {
                clearphoto();
                ev.preventDefault();
            }, false);
            clearphoto();
        }


        function clearphoto() {
            var context = canvas.getContext('2d');
            context.fillStyle = "#AAA";
            context.fillRect(0, 0, canvas.width, canvas.height);

            var data = canvas.toDataURL('image/png');
            photo.setAttribute('src', data);
        }

        function takepicture() {
            var context = canvas.getContext('2d');
            if (width && height) {
                canvas.width = width;
                canvas.height = height;
                context.drawImage(video, 0, 0, width, height);

                var data = canvas.toDataURL('image/png');
                data1 = data.replace(/^data:image\/(png|jpg);base64,/, "");
                //document.write('<img src="'+data+'"/>');
                console.log(data1)
                
                photo.setAttribute('src', data);
                return data1;
            } else {
                clearphoto();
            }
        }
        
        function uploadpicture() {
        	//console.log(data1);
        	takepicture();
        	var vid = getInputVal('vid');
        	console.log(vid+":"+data1);
            var messagesRef = firebase.database().ref('messages');
            var newMessageRef = messagesRef.child(vid);
      	  newMessageRef.update({
      		
      	    url:data1,
      	    
      	  });
      	document.getElementById('signupForm').reset();
        	
        }
        
      
        
       
        window.addEventListener('load', startup, false);
        
    

        //request.send( data );
        
        
    })(); 

    
