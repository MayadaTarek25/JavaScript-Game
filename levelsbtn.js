



var audio= document.getElementById("audio");
var easybutton= document.getElementById("easy");
var medtbtn= document.getElementById("medium");
var hardbtn= document.getElementById("hard")
easybutton.addEventListener("click",playButtonSound1);
medtbtn.addEventListener("click",playButtonSound2);
hardbtn.addEventListener("click",playButtonSound3);
var level =0;

function playButtonSound1() {


    audio.play();
    level=1; /* easy */ 
    goto()

   
}
function playButtonSound2() {
      
    audio.play();
    
     level=2;    /* medium */
     goto()
    
}
function playButtonSound3() {
      
    audio.play();
    level=3;     /* hard */
    goto()
    
   
  
}





function goto(){
    
    setInterval('window.location ="play-page-4.html" ',400)

}


