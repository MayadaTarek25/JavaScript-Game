
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
            





