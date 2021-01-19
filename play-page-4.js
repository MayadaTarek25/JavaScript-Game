var audio1= document.getElementById("audio");


var monkeybutton= document.getElementById("monkeychoose");

var ostrichbutton= document.getElementById("ostrichchoose");

monkeybutton.addEventListener("click",playButtonSound1);
ostrichbutton.addEventListener("click",playButtonSound1);

function playButtonSound1() {
    audio.play();
}
