function osttries(live)
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
    document.getElementById("ostrishsix").style.display="none";
   }
  if(live===4)
   {
      
    document.getElementById("ostrishfive").style.display="none";
    document.getElementById("ostrishsix").style.display="none";


   }

   if(live===3)
   {
      document.getElementById("ostrishfour").style.display="none";
      document.getElementById("ostrishfive").style.display="none";
      document.getElementById("ostrishsix").style.display="none";

    
   }


   if(live===2)
   {
      document.getElementById("ostrishthree").style.display="none";
      document.getElementById("ostrishfour").style.display="none";
      document.getElementById("ostrishfive").style.display="none";
      document.getElementById("ostrishsix").style.display="none";


    
   }



   if(live===1)
   {
      document.getElementById("ostrishtwo").style.display="none";
      document.getElementById("ostrishthree").style.display="none";
      document.getElementById("ostrishfour").style.display="none";
      document.getElementById("ostrishfive").style.display="none";
      document.getElementById("ostrishsix").style.display="none";
   }

if(live===0)
{
    document.getElementById("ostrishone").style.display="none";
    document.getElementById("ostrishtwo").style.display="none";
    document.getElementById("ostrishthree").style.display="none";
    document.getElementById("ostrishfour").style.display="none";
    document.getElementById("ostrishfive").style.display="none";
    document.getElementById("ostrishsix").style.display="none";
    word_wrong();
}
  
}

