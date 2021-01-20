 
var audio1= document.getElementById("audio");


var playbutton= document.getElementById("back-to-main");

playbutton.addEventListener("click",playButtonSound1);



function playButtonSound1() {

    audio.play();
    setInterval('window.location ="page2%20start.html" ',400)
    
}



