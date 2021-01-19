function progress() {

var prg = document.getElementById("progress");
var percent = document.getElementById("percentcount");
var text = document.getElementById("text");
var load = document.getElementById("load");
var counter = 5;
var progress = 25;
var id = setInterval(frame, 80);
function frame (){

if(progress == 500 && counter == 100) {
    clearInterval(id);
    load.style.display="none";
   
    text.style.display= "block";

}else{

    progress += 5;
    counter += 1;
    prg.style.width = progress + "px";
    percent.innerHTML = counter + "%";

}

    
}

}
progress();


setInterval('window.location ="page2%20start.html" ',11500)


