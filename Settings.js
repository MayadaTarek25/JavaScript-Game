setTimeout(() => {
    document.getElementById('audio2').play();
  }, 500)
  
var audio1= document.getElementById("audio1");
var audio2= document.getElementById("audio2");
var audioplay1= document.getElementById("audioplay1");
var audioplay2= document.getElementById("audioplay2");
audioplay2.addEventListener("click",playPauseMusic)
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