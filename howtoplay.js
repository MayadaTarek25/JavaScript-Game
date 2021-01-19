var audio= document.getElementById("audio");

var backbutton= document.getElementById("backbtn");

backbutton.addEventListener("click",playButtonSound);

function playButtonSound() {

    audio.play();
    setInterval('window.location ="page2%20start.html" ',400)
    
}




