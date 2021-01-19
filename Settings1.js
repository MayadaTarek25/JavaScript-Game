
var audio1= document.getElementById("audio1");
var audio2= document.getElementById("audio2");
var backbutton= document.getElementById("backbtn");
var nextbutton= document.getElementById("nextbtn");
backbutton.addEventListener("click",playButtonSound);
nextbutton.addEventListener("click",playButtonSound1);

function playButtonSound() {

    audio1.play();
    setInterval('window.location ="page2%20start.html" ',400)
    
}
function playButtonSound1() {
      
    audio1.play();
    str="";
    if(textbox.value !== str)
    {

        setInterval('window.location ="page2-play.html" ',400)


    }
}

