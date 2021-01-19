
var audio= document.getElementById("audio");

var frutbutton= document.getElementById("frutbtn");
var sportbtn= document.getElementById("sportbtn");
var animalbtn= document.getElementById("animalbtn");
var category=0;

frutbutton.addEventListener("click",playButtonSound1);
sportbtn.addEventListener("click",playButtonSound2);
animalbtn.addEventListener("click",playButtonSound3);


function playButtonSound1() {

    audio.play();
    
    category=1; /* fruits*/
    goto()

}
function playButtonSound2() {
      
    audio.play();
    
    category=2; /* sport*/
    goto()


}
function playButtonSound3() {
      
    audio.play();
   
    category=3; /* animals*/
    goto()

}
function goto(){
    
    setInterval('window.location ="game.html" ',400)

}
