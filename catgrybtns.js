
var audio= document.getElementById("audio");
var textbox2=localStorage.getItem("name");
console.log("hi",textbox2);
localStorage.setItem("textbox2",`${textbox2}`)
var frutbutton= document.getElementById("frutbtn");
var sportbtn= document.getElementById("sportbtn");
var animalbtn= document.getElementById("animalbtn");
var category1=0;

frutbutton.addEventListener("click",playButtonSound1);
sportbtn.addEventListener("click",playButtonSound2);
animalbtn.addEventListener("click",playButtonSound3);


function playButtonSound1() {

    audio.play();
    localStorage.setItem("category1", 1);
    //category=1; /* fruits*/
    goto()

}
function playButtonSound2() {
      
    audio.play();
    localStorage.setItem("category1", 2);
    //category=2; /* sport*/
    goto()


}
function playButtonSound3() {
      
    audio.play();
    localStorage.setItem("category1", 3);
    category=3; /* animals*/
    goto()

}
function goto(){
    
    setInterval('window.location ="game.html" ',400)

}
