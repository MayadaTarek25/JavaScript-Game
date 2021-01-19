class charbutton {
    constructor(char) {
        this.id = char;
        this.button = document.createElement("button");
        var div = document.getElementsByTagName('div')[3];
        div.appendChild(this.button);
        this.button.innerHTML = `${this.id}`;
        this.button.id = `${this.id}`;
        this.button.addEventListener('click', this.btnclk);
    }
    styling() {
        this.button.style.position = "center";
        this.button.style.width = "50px";
        this.button.style.margin = "10px";
        this.button.style.display = "inline-block";
        this.button.style.backgroundColor = 'peru';
        this.button.style.fontSize = "20px";
        this.button.style.fontFamily = "Arial";
        this.button.style.fontWeight = "600";
        this.button.style.textAlign = "center";
        this.button.style.fontStyle = "italic";
        this.button.style.color = "rgb(2, 53, 19)";
        this.button.style.borderColor = "sandybrown";
        this.button.style.outlineStyle = "outset";
        this.button.style.outlineWidth = "thick";
        this.button.style.outlineColor = "peru";
    }
    btnclk() {
        this.style.backgroundColor = "lightsteelblue";
        this.style.outlineColor = "lightsteelblue";
        this.style.borderColor = "lightsteelblue";
        this.setAttribute('disabled', 'disabled');
        btn_clk_check(this.id);
    }
}
class Category {
    constructor() { };
    /*This function take length of words array and array of numbers that was chosen before
    it return random and not repeated number
    */
    selectRandomWord(numOfWords, usednumbers) {
        let randomnum = Math.floor(Math.random() * numOfWords);
        let i = 0;
        while (i < usednumbers.length) {
            if (randomnum === usednumbers[i]) {
                i = 0
                randomnum = Math.floor(Math.random() * numOfWords);
            }
            else
                i++;
        }
        usednumbers[usednumbers.length] = randomnum;
        return randomnum;
    }
    /*This function take the random number and array of words and return 
    empty(dash) string represent the word that was chosen
    */
    countCharacters(selectednumber, words) {
        let string = words[selectednumber];
        let dashstring = "";
        for (let i = 0; i < string.length; i++) {
            dashstring = dashstring + "_";
            dashstring = dashstring + "    ";
        }
        return dashstring;
    }
    /*This functin take countCharacters output and display the empty/dash word*/
    displayDashWord(dashword) {
        let WordPosition = document.getElementsByClassName("WordPosition")[0];
        WordPosition.innerHTML = `${dashword}`
        WordPosition.style.color = "rgb(2,53,19)";
    }
    /*This functin hide the empty/dash word*/
    hiddeDashWord() {
        let WordPosition = document.getElementsByClassName("WordPosition")[0];
        WordPosition.innerHTML = ''
    }
    /*This function take the random number and the array of words and return array of 
    characters for the chosen word*/
    answer(selectednumber, words) {
        let string = words[selectednumber];
        let characters = [];
        for (let i = 0; i < string.length; i++) {
            characters[i] = string[i];
        }
        return characters;
    }
    /*This function take answer function output and the pressed character 
    to display it if it exist in the word*/
    addCharacter(answer, char, dashstring) {
        var arrayofdashstring = dashstring.split("    ");
        dashstring = "";
        var flag=0;
        for (let i = 0; i < answer.length; i++) {
            if (char.toLowerCase() === answer[i].toLowerCase()) {
                if (i === 0) {
                    char = char.toUpperCase()
                }
                else {
                    char = char.toLowerCase()
                }
                arrayofdashstring[i] = char;
                flag=1;
                counterchar++;
                if (counterchar !== answer.length) {
                    char_right();
                   
                }
                else {
                    word_right();
                }
            }

        }
        if(flag===0)
        {
            char_wrong();
            livetrails--;
            tries(livetrails);
        }
        for (let i = 0; i < (arrayofdashstring.length - 1); i++) {
            dashstring = dashstring + arrayofdashstring[i];
            dashstring = dashstring + "    ";
        }

        return dashstring;
    }
    /*This function take the random number and descriptions array to display 
    the description of the word*/
    displayDescription(selectednumber, descriptions) {
        let description = descriptions[selectednumber];
        let DescriptionPosition = document.getElementsByClassName("DescriptionPosition")[0];
        DescriptionPosition.innerHTML = `${description}`;
        DescriptionPosition.style.color = "rgb(2,53,19)";
        DescriptionPosition.style.display = "inline-block";
    }
    /*This function hide description of the word*/
    hiddenDescription() {
        let DescriptionPosition = document.getElementsByClassName("DescriptionPosition")[0];
        DescriptionPosition.innerHTML = ``;
        DescriptionPosition.style.display = "none";
    }
}
//Animals, Sports and Fruits inhert from Category Class//
class Animals extends Category {
    constructor() {
        super();
        this.words = ["Lion", "Dog", "Cat", "Mouse", "Rabbit"];
        this.descriptions = ["king of forest", "characterized by loyalty", "it loves milk",
            "it loves cheese", "it is fast"]
        this.usednumbers = [];
    };
}
class Sports extends Category {
    constructor() {
        super();
        this.words = ["Archery","Badminton", "Cricket", "Bowling", "Boxing", "Curling","Tennis","Skateboarding", "Surfing", "Hockey", 
            "Figure", "skating", "Yoga","Fencing","Karate","Volleyball","Basketball","Rugby","Cycling","Running","Golf"]
        this.descriptions = ["Using a bow to shoot arrows","Using racquets to hit a shuttlecock across a net",
             "Bat-and-ball game","Player rolls a ball toward pins", "Players wear protective gloves", "Players slide stones on a sheet of ice",
             "Racket sport“, “Use a skateboard", "Surface water pastime", "Use a hockey stick", "Performing on figure skates on ice", "Group of physical mental and spiritual practices","Fighting sport", "Japanese martial art","Team sport", "six players each team ","Team sport","five players each team" ,"Use an oval-shaped ball","Use of bicycles for transport","Move rapidly on foot",
             "Club-and-ball sport"]
        this.usednumbers = [];
    };
}
class Fruits extends Category {
    constructor() {
        super();
        this.words = ["Apple", "Breadfruit", "Cantaloupe", "Mango", "Kumquat"]
        this.descriptions = ["it is red", "it is yellow", "it is green",
            "it is yellow", "it is green"]
        this.usednumbers = [];
    }
}
//create buttons of charcters using charbutton class//////
var arrybtn = [];
var result = [];
function range(start, stop) {
    for (var idx = start.charCodeAt(0), end = stop.charCodeAt(0); idx <= end; ++idx) {
        result.push(String.fromCharCode(idx));
    }
    return result;
}
function btngn() {
    for (let i = 0; i < 26; i++) {
        arrybtn[i] = new charbutton(result[i]);
        arrybtn[i].styling();
    }
}
range('A', 'Z').join();
btngn();///why it is a function!!!!!!!!!!!!!!!!1/////
////////////
//check category which user chosen//
category = "Sports"
if (category === "Fruits") {
    object1 = new Fruits();
}
else if (category === "Animals") {
    object1 = new Animals();
}
else {
    object1 = new Sports();
}
//check level which user chosen//
level = 0;
if (level === 1) {

}
else if (level === 2) {

}
else {

}
///////////////////////////////////////////
//choose random
var counterchar = 0;
var livetrails=6;
randomnum = object1.selectRandomWord(object1.words.length, object1.usednumbers);
console.log(randomnum);
dashword = object1.countCharacters(randomnum, object1.words);
console.log(dashword);
display = object1.displayDashWord(dashword);
arrayofanswer = object1.answer(randomnum, object1.words);
console.log(arrayofanswer);
function btn_clk_check(value) {
    dashword = object1.addCharacter(arrayofanswer, value, dashword);
    object1.displayDashWord(dashword);
}

//Add event on help button//
var helplamp = document.getElementById("helplamp");
helplamp.addEventListener("mousemove", showDescription)
helplamp.addEventListener("mouseleave", hideDescription)
function showDescription() {
    object1.displayDescription(randomnum, object1.descriptions)

}
function hideDescription() {
    object1.hiddenDescription(randomnum, object1.descriptions)
}
