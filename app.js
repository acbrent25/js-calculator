$(document).ready(function(){
   console.log('ready');

   // Adding

   var equals     = $('#equals');
   var add        = $('#add');
   var subtract   = $('subtract');
   var multiply   = $('#multiply');
   var sum        = 0;
   var numbOne    = 0;
   var numbTwo    = 0;
   var clickCount = 0;

   $('.num').click(function(){
      clickCount++;

      if(clickCount === 1){
         numbOne = $(this).val();
         console.log(numbOne);
      }
      if(clickCount === 2){
         numbTwo = $(this).val();
         console.log(numbTwo);
      }

      console.log(clickCount);

      switch(sum){
         case add:
         sum = numbOne + numTwo;
         console.log('sum: ' + sum);
      }



   })





}); // END Document Ready