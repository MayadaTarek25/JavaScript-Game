
var audio1= document.getElementById("audio");

var playbutton= document.getElementById("playtbtn");
var settingbtn= document.getElementById("settbtn");
var howtoplay= document.getElementById("hotoplaybtn");
var credit= document.getElementById("creditbtn");
playbutton.addEventListener("click",playButtonSound1);
settingbtn.addEventListener("click",playButtonSound2);
howtoplay.addEventListener("click",playButtonSound3);
credit.addEventListener("click",playButtonSound4);

function playButtonSound1() {
    
   
    audio.play();
    setInterval('window.location ="play-page1.html" ',400)
    
}
function playButtonSound2() {
    
    audio.play();
    setInterval('window.location ="Settings.html" ',400)

}
function playButtonSound3() {
      
    audio.play();
    setInterval('window.location ="howtoplay.html" ',400)

}
function playButtonSound4() {
      
    audio.play();
    setInterval('window.location ="credits.html" ',400)

}




