class charbutton{
    constructor(char){
 this.id=char;
 this.button=document.createElement("button");
 var div=document.getElementsByTagName('div')[0];
 div.appendChild(this.button);
 this.button.innerHTML=`${this.id}`;
 this.button.id=`${this.id}`;
 this.button.addEventListener('click',this.btnclk);
    }
    styling(){
    this.button.style.position="center";
    this.button.style.width="50px";
    this.button.style.margin="10px";
    this.button.style.display="inline-block";
    this.button.style.backgroundColor='peru';
    this.button.style.fontSize="20px";
    this.button.style.fontFamily="Arial";
    this.button.style.fontWeight="600";
    this.button.style.textAlign="center";
    this.button.style.fontStyle="italic";
    this.button.style.color="rgb(2, 53, 19)";
    this.button.style.borderColor="sandybrown";
    this.button.style.outlineStyle="outset";
    this.button.style.outlineWidth="thick";
    this.button.style.outlineColor="peru";
    }
    btnclk(){
        this.style.backgroundColor="lightsteelblue";
        this.style.outlineColor="lightsteelblue";
        this.style.borderColor="lightsteelblue";
        this.setAttribute('disabled','disabled');
        btn_clk_check(this.id);
    }
}
var arrybtn=[];
var result=[];
function range(start,stop) {
    for (var idx=start.charCodeAt(0),end=stop.charCodeAt(0); idx <=end; ++idx){
      result.push(String.fromCharCode(idx));
    }
return result;
  }
function btngn(){
    for (let i=0;i<26;i++){
        arrybtn[i]=new charbutton(result[i]);
       arrybtn[i].styling(); 
    }   
}
function btn_clk_check(value){
    console.log(value);
}
  range('A','Z').join();
  btngn();
  