var music= document.getElementById("audio3");

var musictbtn = document.getElementById ("musicbtn");
var flagmusic=0;
musictbtn.addEventListener("click",musicheck);

function playMusic() {
    if(flagmusic===1)
    music.play();
    else if(flagmusic===0)
    music.pause();
}
function musicheck(){
     if (flagmusic===0)
        flagmusic=1;
     else if (flagmusic===1)
        flagmusic=0;
     playMusic();
}
