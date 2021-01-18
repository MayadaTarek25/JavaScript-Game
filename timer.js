/*
function timer_start () {

var timer = document.getElementById("my_timer").innerHTML;
var arr = timer.split (":");
var min = arr[0];
var sec = arr[1];
if (sec==0){
    if (min==0){
alert("time out");
window.location.reload();
return;


    }
    min--;
    if (min < 10) min= "0" + min;
    sec = 59;
}
else sec--;
if (sec < 10) sec= "0" + sec;
document.getElementById("my_timer").innerHTML= min + ":" + sec;
setTimeout(start_timer,1000);

}


var counter=0;
function setup(){

    noCanvas();
    var timer = select ('#timer');
    timer.html('0');


    function timeIt() {
counter++;
timer.html(counter);

    }
    setInterval(timeIt,1000);
}

const startingMinutes = 10;
let time = startingMinutes*60;
const countdownEl = document.getElementById("countdown");


setInterval(updateCountdown,1000);

function ubdateCountdown(){
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    countdownEl.innerHTML = '$(minutes) : $(seconds)';

    time--;


}

var s =60;
var m = 4 ;
var time = setInterval (function() {timer}, 1000);
function timer (){

s--;
if(s==-1){

    m--;
    s=59;

    if(m==-1){
m=0;
s=0;

clearInterval(time);
aleart("noooooo");

    }

}
document.getElementById("m").innerHTML=m;
document.getElementById("s").innerHTML=s;

}



var counter=0;
function setup(){

    noCanvas();
    var timer = select ('#timer');
    timer.html('0');


    function timeIt() {
counter++;
timer.html(counter);

    }
    setInterval(timeIt,1000);
}

    */

const startingMinutes = 5;
let time = startingMinutes * 60;
const countdownEl = document.getElementById('countdown');
var winner =0;
var timer = setInterval(ubdateCountdown, 1000);

function makeTwoDigit(num) {


   if(num<10)
      return "0" + num;
}

function ubdateCountdown(){
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    console.log(seconds); 
    if(seconds===0)
    {
        seconds="00";
    
    }
    else if (seconds<10)
    seconds="0"+seconds;

    countdownEl.innerHTML = makeTwoDigit(minutes) + " : " + (seconds) + " "; 
   
    if (time === 0 || winner===1){
       
        clearInterval(timer);
       
    }

    time--;


    }
            





