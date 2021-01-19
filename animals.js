//GORILLA PART

gorilla1 = document.getElementById("gorilla1");

gorillaIDLE = ["gorilla11(2).png", "gorilla9 (2).png"]

gorillaright = ["gorilla3 (2).png"]

gorillawrong = ["gorilla10 (2).png"]

gorillawin = ["gorilla6 (2).png", "gorilla7 (2).png"]

gorillalose = document.getElementById("gorilla2");

var gi = 0; //gorilla index


/////////// Gorilla Idle Function /////////////////////
function gorillaIdle() {
    if (gi > 1) {gi = 0;}
    gorilla1.src = gorillaIDLE[gi]
    gi++;
}

/////////////// Gorilla Wrong char function //////////////////////////////////

function gorillaRight() {
    clearInterval(gor_idle_pos_id);

    for (let t = 0; t < 250; t++) {
        gorilla1.src = gorillaright[0]
    }

    gor_idle_pos_id = setInterval(gorillaIdle,500);
}

/////////////// Gorilla Right char function //////////////////////////////////

function gorillaWrong() {

    clearInterval(gor_idle_pos_id);

    gorilla1.src = gorillawrong[0]

    gor_idle_pos_id = setInterval(gorillaIdle,500);

}

////////// Gorilla lose Functions: (word is right) ///////////////

function gorillaLose() {
    clearInterval(gor_idle_pos_id);
    gorilla1.style.visibility="hidden"
    gorilla2.style.visibility="visible"
}


////////// Gorilla Win Functions: (word is wrong)///////////////
var gorilla_left=450;
function gorilla_win_interval()
{
    clearInterval(gor_idle_pos_id);
    gor_win_pos_id = setInterval(gorillaWin,500);    
}

function gorillaWin(){    
    console.log(gorilla_left);
    gorilla_left =gorilla_left-50;
    if(gorilla_left < -250)
    {
        clearInterval(gor_win_pos_id);
    }

    gorilla1.style.left = gorilla_left;
    if (gi > 1) {gi = 0;};
    gorilla1.src = gorillawin[gi];
    gi++;
}

//////////Gorilla win functions are done ^^ //////////////

gor_idle_pos_id = setInterval(gorillaIdle,500);

//////////////// Gorilla part is done //////////////////


/////////////// OSTRICH PART /////////////////////

ostrich_1 = document.getElementById("ostrich1");

ostrichIDLE = ["ostrichidle_1.gif", "ostrichidle_2.gif"];

ostrichright = ["ostrich_1.gif", "ostrich_2.gif", "ostrich_3.gif"];

ostrichwrong = ["ostrich_wng_1.gif", "ostrich_wng_2.gif","ostrich_wng_1.gif"];

ostrichwin = ["osrtrich_cel_1.gif", "osrtrich_cel_2.gif" , "osrtrich_cel_3.gif", "osrtrich_cel_4.gif", "osrtrich_cel_5.gif"];

ostrichlose = ["ostrich_aff_1.gif", "ostrich_aff_2.gif","ostrich_aff_3.gif"];

var oi = 0; //ostrich index

/////////// Ostrich Idle Function /////////////////////
function ostrichIdle() {
    if (oi > 1) {oi = 0;}
    ostrich_1.src = ostrichIDLE[oi]
    oi++;
}

/////////////// ostrich right char function //////////////////////////////////

function ostrich_right_start(){
    clearInterval(ost_idle_pos_id);
    oi=0;
    ost_right_pos_id=setInterval(ostrichRight,500)
}
function ostrichRight() {
        ostrich_1.src = ostrichright[oi]
        oi++
        if(oi>2){
            clearInterval(ost_right_pos_id);
            ost_idle_pos_id = setInterval(ostrichIdle,500);
        }
    }

/////////////// ostrich wrong char function //////////////////////////////////
function ostrich_wrong_start(){
    clearInterval(ost_idle_pos_id);
    oi=0;
    ost_wrong_pos_id=setInterval(ostrichWrong,500)
}

function ostrichWrong() {

    ostrich_1.src = ostrichwrong[oi]
    oi++
    if(oi>2){
        clearInterval(ost_wrong_pos_id);
        ost_idle_pos_id = setInterval(ostrichIdle,500);
    }

}

////////// ostrich win Functions:  (word is right) ///////////////

function ostrich_win_start(){
    clearInterval(ost_idle_pos_id);
    ost_win_pos_id=setInterval(ostrich_win_Index,500)
}

function ostrich_win_Index() {    
    oi++;
    if (oi > 4)
        oi = 0;
    ostrichWin(oi);
}

function ostrichWin(oi) {
    ostrich_1.src = ostrichwin[oi]
}

////////// ostrich lose Functions:  (word is wrong)///////////////
var ostrich_left=-250;
function ostrich_lose_interval()
{
    clearInterval(ost_idle_pos_id);
    ost_lose_pos_id = setInterval(ostrichLose,500);    
}

function ostrichLose(){    
    console.log(ostrich_left);
    ostrich_left =ostrich_left-30;
    if(ostrich_left < -750)
    {
        clearInterval(ost_lose_pos_id);
    }

    ostrich_1.style.left = ostrich_left;
    if (oi > 2) {oi = 0;};
    ostrich_1.src = ostrichlose[oi];
    oi++;
}

//////////ostrich lose functions are done ^^ //////////////

ost_idle_pos_id = setInterval(ostrichIdle,500);

//////////////// ostrich part is done //////////////////



/////////////// MONKEY PART /////////////////////

monkey_1 = document.getElementById("monkey1");

monkeyIDLE = ["monkey_idle_1(3).png", "monkey_idle_2.png"];

monkeyright = document.getElementById("monkey2");

monkeywrong = ["monker_aff (2).png"];

monkeywin = ["monkey_3.png", "monkey_3(2).png"];

monkeylose = ["monker_aff (2).png","monkey_3(2).png", "monkey_4(2).png"];



var mi = 0; //monkey index

/////////// monkey Idle Function /////////////////////
function monkeyIdle() {
    monkey_1.style.visibility="visible"

    if (mi > 1) {mi = 0;}
    monkey_1.src = monkeyIDLE[mi]
    mi++;

    monkeyright.style.visibility="hidden"

}

/////////////// monkey right char function //////////////////////////////////

    function monkeyRight() {
        clearInterval(mon_idle_pos_id);
        monkey_1.style.visibility="hidden"
        monkeyright.style.visibility="visible"
       mon_idle_pos_id = setInterval(monkeyIdle,500);
    }

/////////////// monkey wrong char function //////////////////////////////////

function monkeyWrong() {
    clearInterval(mon_idle_pos_id);

    for (let t = 0; t < 250; t++) {
        monkey1.src = monkeywrong[0]
    }

    mon_idle_pos_id = setInterval(monkeyIdle,500);
}

////////// monkey win Functions:  (word is right) ///////////////

function monkey_win_start(){
    clearInterval(mon_idle_pos_id);
    mon_win_pos_id=setInterval(monkey_win_Index,500)
}

function monkey_win_Index() {    
    mi++;
    if (mi > 1)
        mi = 0;
        monkeyWin(mi);
}

function monkeyWin(mi) {
    monkey_1.src = monkeywin[mi]
}

////////// monkey lose Functions:  (word is wrong)///////////////
var monkey_left=-50;
function monkey_lose_interval()
{
    mi=0
    clearInterval(mon_idle_pos_id);
    mon_lose_pos_id = setInterval(monkeyLose,500);    
}

function monkeyLose(){    
    console.log(monkey_left);
    monkey_left =monkey_left-50;
    if(monkey_left < -750)
    {
        clearInterval(mon_lose_pos_id);
    }

    monkey_1.style.left = monkey_left;
    if (mi > 2) {mi = 0;};
    monkey_1.src = monkeylose[mi];
    mi++;
}

//////////monkey lose functions are done ^^ //////////////

mon_idle_pos_id = setInterval(monkeyIdle,500);

//////////////// monkey part is done //////////////////


////////////////// Character chosen /////////////////
var character;
//character=0; //monkey character
character=1; //ostrich character


if(character===0)
{
    ostrich_1.style.display="none"
}

else if (character===1)
{
    monkey_1.style.display="none"
}

//ACTIONS:

function char_right() {
    if(character===0)
{
    monkeyRight()
}
else if (character===1)
{
    ostrich_right_start()
}

    gorillaWrong() 
}

function char_wrong() {
    gorillaRight()
    if(character===0)
    {
        monkeyWrong()
    }
    else if (character===1)
    {
        ostrich_wrong_start()
    }
    
    
}

function word_right() {
    gorillaLose()
    if(character===0)
    {
        monkey_win_start()
    }
    else if (character===1)
    {
        ostrich_win_start()
    }
}

function word_wrong() {
    gorilla_win_interval()
    if(character===0)
    {
        monkey_lose_interval()
    }
    else if (character===1)
    {
        ostrich_lose_interval()
    }
    
    
}