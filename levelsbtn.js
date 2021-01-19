var audio= document.getElementById("audio");
var easybutton= document.getElementById("easy");
var medtbtn= document.getElementById("medium");
var hardbtn= document.getElementById("hard");
easybutton.addEventListener("click",playButtonSound1);
medtbtn.addEventListener("click",playButtonSound2);
hardbtn.addEventListener("click",playButtonSound3);
var level1 =0;
var textbox3=localStorage.getItem("textbox2")
localStorage.setItem("textbox3",`${textbox3}`)
var category2=localStorage.getItem("category1");
localStorage.setItem("category2",`${category2}`);
console.log(category2);
function playButtonSound1() {


    audio.play();
    localStorage.setItem("level1",1);
    goto()

   
}
function playButtonSound2() {
      
    audio.play();
    
    localStorage.setItem("level1", 2);
     goto()
    
}
function playButtonSound3() {
      
    audio.play();
    localStorage.setItem("level1", 3);
    goto()
}





function goto(){
    
    setInterval('window.location ="play-page-4.html" ',400)

}


