let body = document.querySelector("body");

let btnGpt = document.createElement("button")
btnGpt.setAttribute("id", "btnGpt");



btnGpt.addEventListener("click", doSomething);
body.appendChild(btnGpt);


let speechRecognition = new webkitSpeechRecognition();
speechRecognition.continuous = true;
speechRecognition.interimResult = true;
speechRecognition.lang = "en-in";


speechRecognition.onresult = (event) => {
    let transcript = event.results[event.resultIndex][0].transcript = ""
    for(let i = 0; i < event.results.length; i++){
        transcript += event.results[i][0].transcript;
    }
    }

function doSomething(){
if(btnGpt.hasAttribute("listening") === false){
    btnGpt.setAttribute("listening","true");
    speechRecognition.start();
}else {
    btnGpt.removeAttribute("listening");
    
    speechRecognition.stop();
    console.log("this is what you said = " + transcript);
  
}
}