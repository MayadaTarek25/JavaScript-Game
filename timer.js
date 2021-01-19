var startingMinutes = 0;
level3=localStorage.getItem("level2"); 
console.log(level3)
if(level3==="1")
{
    startingMinutes=4;
}
else if (level3==="2")
{
    startingMinutes=2;
}
else if (level3==="3")
{
    startingMinutes=1;
}
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
    //console.log(seconds); 
    if(seconds===0)
    {
        seconds="00";
    
    }
    else if (seconds<10)
    seconds="0"+seconds;

    countdownEl.innerHTML = makeTwoDigit(minutes) + " : " + (seconds) + " "; 
   
    if (time === 0 ){
       
        clearInterval(timer);
        word_wrong();
        textbox7=localStorage.getItem("textbox4");
        var endmessage = document.getElementById("endmessage");
        endmessage.innerHTML = `${textbox6} YOU LOST! <br> Try Again`;
        endmessage.style.display = "inline"
        setInterval('window.location ="Game.html" ', 10000)
        
    }

    time--;


    }
            





