function montries(live)
{
   
   var arr_of_imgs = document.getElementsByTagName("img");

   /*if(live===6)
   {
    arr_of_imgs[0].src="monkey.png";
    arr_of_imgs[1].src="monkey.png";
    arr_of_imgs[2].src="monkey.png";
    arr_of_imgs[3].src="monkey.png";
    arr_of_imgs[4].src="monkey.png";
    arr_of_imgs[5].src="monkey.png";



   }*/
   if(live===5)
   {
   
    document.getElementById("monkeysix").style.display="none";

   }



  if(live===4)
   {  
    document.getElementById("monkeyfive").style.display="none";
    document.getElementById("monkeysix").style.display="none";
   }

   if(live===3)
   {
      document.getElementById("monkeyfour").style.display="none";
      document.getElementById("monkeyfive").style.display="none";
      document.getElementById("monkeysix").style.display="none";
   }


   if(live===2)
   {
      document.getElementById("monkeythree").style.display="none";
      document.getElementById("monkeyfour").style.display="none";
      document.getElementById("monkeyfive").style.display="none";
      document.getElementById("monkeysix").style.display="none"; 
   }



   if(live===1)
   {
      document.getElementById("monkeytwo").style.display="none";
      document.getElementById("monkeythree").style.display="none";
      document.getElementById("monkeyfour").style.display="none";
      document.getElementById("monkeyfive").style.display="none";
      document.getElementById("monkeysix").style.display="none";

    
   }

if(live===0)
{
    document.getElementById("monkeyone").style.display="none";
    document.getElementById("monkeytwo").style.display="none";
    document.getElementById("monkeythree").style.display="none";
    document.getElementById("monkeyfour").style.display="none";
    document.getElementById("monkeyfive").style.display="none";
    document.getElementById("monkeysix").style.display="none";
    word_wrong();

}
  
}

