class Category {
    constructor(){};
    /*This function take length of words array and array of numbers that was chosen before
    it return random and not repeated number
    */
    selectRandomWord(numOfWords,usednumbers){
        let randomnum= Math.floor(Math.random() * numOfWords);
        let i=0;
        while(i<usednumbers.length)
            {if(randomnum === usednumbers[i]){
                i=0
                randomnum= Math.floor(Math.random() * numOfWords);
            }
            else
            i++;
        }
        usednumbers[usednumbers.length]=randomnum;
        return randomnum;
    }
    /*This function take the random number and array of words and return 
    empty(dash) string represent the word that was chosen
    */
    countCharacters(selectednumber,words){
        let string=words[selectednumber];
        let dashstring="";
        for(let i=0 ; i<string.length ; i++)
        {
            dashstring=dashstring+"_";
            dashstring=dashstring+"    ";
        }
        return dashstring;
    }
    /*This functin take countCharacters output and display the empty/dash word*/
    displayDashWord(dashword){
        let WordPosition=document.getElementsByClassName("WordPosition")[0];
        WordPosition.innerHTML =`${dashword}`
        WordPosition.style.color="brown";
    }
    /*This functin hide the empty/dash word*/
    hiddeDashWord(){
        let WordPosition=document.getElementsByClassName("WordPosition")[0];
        WordPosition.innerHTML =``
    }
    /*This function take the random number and the array of words and return array of 
    characters for the chosen word*/
    answer(selectednumber,words){
        let string=words[selectednumber];
        let characters=[];
        for(let i=0 ; i<string.length ; i++)
            {
                characters[i]=string[i];
            }
            return characters;
    }
    /*This function take answer function output and the pressed character 
    to display it if it exist in the word*/
    addCharacter(answer,char,dashstring){
        var arrayofdashstring = dashstring.split("    ");
        dashstring="";
        for(let i=0 ; i<answer.length ; i++)
        { if(char.toLowerCase() === answer[i].toLowerCase())
            {if (i===0){char=char.toUpperCase()}
            arrayofdashstring[i]=char;
            }
        }
        for(let i=0 ; i<(arrayofdashstring.length-1) ; i++) 
            {
                dashstring=dashstring+arrayofdashstring[i];
                dashstring=dashstring+"    ";
            } 
        
        return dashstring;
    }
    /*This function take the random number and descriptions array to display 
    the description of the word*/
    displayDescription(selectednumber,descriptions){
        let description=descriptions[selectednumber];
        let DescriptionPosition=document.getElementsByClassName("DescriptionPosition")[0];
        DescriptionPosition.innerHTML =`${description}`;
        DescriptionPosition.style.color="brown";
    }
    /*This function hide description of the word*/
    hiddenDescription(){
        let DescriptionPosition=document.getElementsByClassName("DescriptionPosition")[0];
        DescriptionPosition.innerHTML =``;
    }
}
//Animals, Sports and Fruits inhert from Category Class//
class Animals extends Category {
    constructor(){
        super();
        this.words=["Lion","Dog","Cat","Mouse","Rabbit"];
        this.descriptions=["king of forest","characterized by loyalty","it loves milk",
        "it loves cheese","it is fast"]
        this.usednumbers=[];
    };
}
class Sports extends Category {
    constructor(){
        super();
        this.words=["basketball","baseball","soccer","golf","football"]
        this.descriptions=["Individual sport","Individual sport","Individual sport",
        "Individual sport","Individual sport"]
        this.usednumbers=[];
    };
}
class Fruits extends Category {
    constructor(){
        super();
        this.words=["Apple","Breadfruit","Cantaloupe","Mango","Kumquat"]
        this.descriptions=["it is red","it is yellow","it is green",
        "it is yellow","it is green"]
        this.usednumbers=[];
    }
}
//check category which user chosen//
category="Animals"
if(category === "Fruits")
{
    object1=new Fruits();
}
else if (category === "Animals")
{
    object1=new Animals();
}
else
{
    object1=new Sports();
}
////////////test/////////////
//choose random
randomnum=object1.selectRandomWord(object1.words.length,object1.usednumbers);
console.log(randomnum);
dashword=object1.countCharacters(randomnum,object1.words);
console.log(dashword);
display=object1.displayDashWord(dashword);
arrayofanswer= object1.answer(randomnum,object1.words);
console.log(arrayofanswer);
function btn_clk_check(value){
    object1.addCharacter(arrayofanswer,value,dashword);
}

//Add event on help button//
var helplamp= document.getElementById("helplamp");
helplamp.addEventListener("mousemove",showDescription)
helplamp.addEventListener("mouseleave",hideDescription)
function showDescription() {
    object1.displayDescription(randomnum,object1.descriptions)
}
function hideDescription() {
    object1.hiddenDescription(randomnum,object1.descriptions)
}