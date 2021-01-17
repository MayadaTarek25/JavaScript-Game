//GORILLA PART
gorilla1 = document.getElementById("gorilla1");

gorillaIDLE = ["gorilla1 (2).png", "gorilla9 (2).png"]

gorillaright = ["gorilla3 (2).png"]

gorillawrong = ["gorilla10 (2).png"]

gorillawin = ["gorilla6 (2).png", "gorilla7 (2).png"]

gorillalose = ["gorilla4_2_37.png"]

var gi = 0; //gorilla index

function gorillaIdle(gi) {
    gorilla1.src = gorillaIDLE[gi]
}


function gorillaRight() {
    for (let t = 0; t < 50; t++) {
        gorilla1.src = gorillaright[0]
    }
}

function gorillaWrong(gi) {
    for (let t = 0; t < 50; t++) {
        gorilla1.src = gorillawrong[0]
    }
}
var end = "notreached"
function gorillaWin() {
    gi=0;
    
    for(let gorilla_left=450; gorilla_left!=500 ; gorilla_left--)
    {
        gorilla1.style.left=gorilla_left+"px";
        if(gi>1) gi=0;
        gorilla1.src = gorillawin[gi]
        gi++;
        for(let a = 100 ; a>0 ;a--){}
    }
    /*let t = 0;
    gi=0
    gorillaRight()
    while (end != "reached") {
        gorilla1.src = gorillawin[gi]
        t++
        gi++
        if (gi > 1)
        {gi=0}
        if(t === 50)
        {end = "reached"}
    }*/
}
function gorillaLose() {
    
    gorilla1.src = gorillalose[0];
    
    for(let a = 1000 ; a>0 ;a--){ };
    
}

function gorilla_idle_Index() {
    gi++;
    if (gi > 1)
        gi = 0;
    gorillaIdle(gi);
}

function gorilla_win_Index() {
    gi++;
    if (gi > 1)
        gi = 0;
    gorillaWin(gi);
}

function gorilla_lose_Index() {
    gi++;
    if (gi > 3)
        gi = 0;
    gorillaLose(gi);
}

//setInterval(gorilla_idle_Index, 550)
//setInterval(gorilla_right_Index,450);
//setInterval(gorilla_win_Index,450);
setInterval(gorillaWin,450);

//MONKEY PART
monkey_1 = document.getElementById("monkey1");

monkeyIDLE = ["monkey_idle_1(3).png", "monkey_idle_2.png"];

monkeyright = ["monkey_5.png", "monkey_2.png", "monkey_8.png"];

monkeywrong = ["monkey_9.png", "monkey_2_9.png"];

monkeywin = ["monkey_9.png", "monkey_2_9.png"];

monkeylose = ["monker_aff (2).png","monkey_3(2).png", "monkey_4(2).png"];

var mi = 0; //monkey index

function monkeyIdle(mi) {
    monkey_1.src = monkeyIDLE[mi]
}


function monkeyRight(mi) {
    monkey_1.src = monkeyright[mi]
}

function monkeyWrong(mi) {
    monkey_1.src = monkeywrong[mi]
}

function monkeyWin(mi) {
    monkey_1.src = monkeywin[mi]
}

function monkeyLose(mi) {
    monkey_1.src = monkeylose[mi]
}



function monkey_idle_Index() {
    mi++;
    if (mi > 1)
        mi = 0;
    monkeyIdle(mi);

}

function monkey_right_Index() {
    mi++;
    if (mi > 2)
        mi = 0;
    monkeyRight(mi);
}

function monkey_wrong_Index() {
    mi++;
    if (mi > 2)
        mi = 0;
    monkeyWrong(mi);
}

function monkey_win_Index() {
    mi++;
    if (mi > 2)
        mi = 0;
    monkeyWin(mi);
}

function monkey_lose_Index() {
    mi++;
    if (mi > 2)
        mi = 0;
    monkeyLose(mi);
}





setInterval(monkey_idle_Index, 450)
//setInterval(monkey_right_Index,450)
//setInterval(monkey_lose_Index, 450)


//OSTRICH PART
ostrich_1 = document.getElementById("ostrich1");

ostrichIDLE = ["ostrichidle_1.gif", "ostrichidle_2.gif"];

ostrichright = ["ostrich_1.gif", "ostrich_2.gif", "ostrich_3.gif"];

ostrichwrong = ["ostrich_wng_1.gif", "ostrich_wng_2.gif","ostrich_wng_1.gif"];

ostrichwin = ["osrtrich_cel_1.gif", "osrtrich_cel_2.gif" , "osrtrich_cel_3.gif", "osrtrich_cel_4.gif", "osrtrich_cel_5.gif"];

ostrichlose = ["ostrich_aff_1.gif", "ostrich_aff_2.gif","ostrich_aff_3.gif"];

var oi = 0; //ostrich index

function ostrichIdle(oi) {
    ostrich_1.src = ostrichIDLE[oi]
}


function ostrichRight() {
    oi=0;
    for (let t = 0; t < 50; t++) {
        if(oi>2){oi=0}
        ostrich_1.src = ostrichright[oi]
        oi++
    }
    
}

function ostrichWrong(oi) {
    ostrich_1.src = ostrichwrong[oi]
}

function ostrichWin(oi) {
    ostrich_1.src = ostrichwin[oi]
}

function ostrichLose(oi) {
    ostrich_1.src = ostrichlose[oi]
}


function ostrich_idle_Index() {
    oi++;
    if (oi > 1)
        oi = 0;
    ostrichIdle(oi);

}

function ostrich_right_Index() {
    oi++;
    if (oi > 2)
        oi = 0;
    ostrichRight(oi);


}

function ostrich_wrong_Index() {
    oi++;
    if (oi > 2)
        oi = 0;
    ostrichWrong(oi);

}

function ostrich_win_Index() {
    oi++;
    if (oi > 4)
        oi = 0;
    ostrichWin(oi);

}

function ostrich_lose_Index() {
    oi++;
    if (oi > 2)
        oi = 0;
    ostrichLose(oi);

}

//setInterval(ostrich_idle_Index,450)
//setInterval(ostrich_right_Index, 450)
//setInterval(ostrich_wrong_Index, 450)
//setInterval(ostrich_win_Index, 350)
//setInterval(ostrich_lose_Index, 350)

//ACTIONS:

function char_right() {
    gorillaWrong()
    ostrichRight()

}

function char_wrong() {
    gorillaRight()
}

function word_wrong() {
    gorillaWin()
}

function word_right() {
    gorillaLose()
}
