var SpeechRecognition = window.webkitSpeechRecognition;
var selfie1;
var selfie2;
var selfie3;
var recognition = new SpeechRecognition();

function start(){
    recognition.start();
}

recognition.onresult = function(event) {
    console.log(event);
    var Contant = event.results[0][0].transcript;
    console.log(Contant);
if(Contant == "selfie"){
    console.log("taking selfie in 5,4,3,2,1");
    speak();
}
}
function speak() {
    var synth=window.speechSynthesis;
    Webcam.attach(camera);
    setTimeout(function(){
       img_id = "selfie1";
        take_snapshot();
        speak_data = "TAKING YOUR NEXT SELFIE IN 5 SECONDS";
        var utterthis = new SpeechSynthesisisUtterance(speak_data);
        synth.speak(utterthis);
    }, 5000);
    setTimeout(function(){
        img_id = "selfie2";
         take_snapshot();
         speak_data = "TAKING YOUR NEXT SELFIE IN 5 SECONDS";
         var utterthis = new SpeechSynthesisisUtterance(speak_data);
         synth.speak(utterthis);
     }, 10000);
     setTimeout(function(){
        img_id = "selfie3";
         take_snapshot();
     }, 15000);
}
Webcam.set(
    {
        width : 360,
        height : 250,
        image_format : 'png',
        png_quality : 100
    }
);
camera = document.getElementById("camera");
function take_snapshot(){
    console.log(img_id);
    Webcam.snap(function(data_url) {
        if(img_id=="selfie1"){
            document.getElementById("result1").innerHTML = '<img id="selfie1" src="'+data_url+'"/>';
        }
        if(img_id=="selfie2"){
            document.getElementById("result2").innerHTML = '<img id="selfie2" src="'+data_url+'"/>';
        }
        if(img_id=="selfie3"){
            document.getElementById("result3").innerHTML = '<img id="selfie3" src="'+data_url+'"/>';
        }
    });
}