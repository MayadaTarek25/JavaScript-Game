function tries(live)
{

   var arr_of_imgs = document.getElementsByTagName("img");

   if(live===6)
   {
    arr_of_imgs[0].src="monkey.png";
    arr_of_imgs[1].src="monkey.png";
    arr_of_imgs[2].src="monkey.png";
    arr_of_imgs[3].src="monkey.png";
    arr_of_imgs[4].src="monkey.png";
    arr_of_imgs[5].src="monkey.png";



   }



   if(live===5)
   {
   
    document.getElementById("six").style.display="none";



   }



  if(live===4)
   {
      
    document.getElementById("five").style.display="none";
    document.getElementById("six").style.display="none";


   }

   if(live===3)
   {
      document.getElementById("four").style.display="none";
      document.getElementById("five").style.display="none";
      document.getElementById("six").style.display="none";

    
   }


   if(live===2)
   {
      document.getElementById("three").style.display="none";
      document.getElementById("four").style.display="none";
      document.getElementById("five").style.display="none";
      document.getElementById("six").style.display="none";


    
   }



   if(live===1)
   {
      document.getElementById("two").style.display="none";
      document.getElementById("three").style.display="none";
      document.getElementById("four").style.display="none";
      document.getElementById("five").style.display="none";
      document.getElementById("six").style.display="none";

    
   }

if(live===0)
{
    document.getElementById("one").style.display="none";
    document.getElementById("two").style.display="none";
    document.getElementById("three").style.display="none";
    document.getElementById("four").style.display="none";
    document.getElementById("five").style.display="none";
    document.getElementById("six").style.display="none";

}
  
}

