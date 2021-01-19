
var audio1= document.getElementById("audio1");
var audio2= document.getElementById("audio2");
var audioplay1= document.getElementById("audioplay1");
var audioplay2= document.getElementById("audioplay2");
var backbutton= document.getElementById("clickme");
backbutton.addEventListener("click",playButtonSound)
backbutton.addEventListener("click",goBack)
audioplay1.addEventListener("click",playPauseSound)
audioplay2.addEventListener("click",playPauseMusic)

function playPauseSound() {
    if(audioplay1.checked)
    {
        backbutton.addEventListener("click",playButtonSound);
    }
  
    else
    {
        
        backbutton.removeEventListener("click",playButtonSound);
    }
  
}
function playButtonSound() {


    audio1.play();
   
}
function goBack() {

    setInterval('window.location ="page2%20start.html" ',200)
   
}

function playPauseMusic() {
    if(audioplay2.checked)
    {
        audio2.play();
    }
    else
    {
        audio2.pause();
    }
}

