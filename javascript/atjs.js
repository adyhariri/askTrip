alert('hello and welcome to ask trip site ')
function askingTrip() {
   var x = prompt('if you want to ask trip now please inter 1 , if not please inter 0');
   while (x != 0 && x != 1) {
      x = prompt('if you want to ask trip now please inter 1 , if not please inter 0');
   }
   var numOfPeople = prompt('every car can git 4 people in 1 trip , tell us please how much people will go with you on this trip ?');
   
   if (x == 1) 
   {
      //  var y = prompt('What is the distance between your location and the city center in kilometers ?');
      for (i = 0; i <= numOfPeople; i+4)
      {
         
        
       
         var image = document.gitElementById ("image") ;
         numOfCar=numOfCar+'<img src = "images/images.png">';
         document.write('<p>'+numOfCar+'<p>');
         /*  if (i <= 4) {
         
             
           }*/
      }
      /* if (y <= 3) {
          alert('captin muhammed ahmad will git you by his mercedes car through 5 min please press on ask trip button to confirm');
       }
       else if (y > 3 && y <= 6)
          alert('captin omar walid will git you by his bmw car through 10 min please press on ask trip button to confirm');
       else alert('we abologize there is no car close of your place'); */
   }
   else {
      alert('welcome and have fun in our site');
   }

}
askingTrip();