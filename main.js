var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();
document.getElementById("textbox").innerHTML = "";// this was indide start 
function start()
{
    textbox.innerHTML=""; // added this line
    recognition.start();
}

recognition.onresult = function run (event) {


    console.log(event);


    var Content = event.results[0][0].transcript;
    textbox.innerHTML=Content; // added this link
    console.log(Content);
    if(Content =="take my selfie") // added this whole if block
      {
        console.log("taking selfie --- ");
        speak();
      }

   // document.getElementById("textbox").innerHTML = Content;  (this is not neccessory)
}