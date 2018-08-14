$(document).ready(function(){
   console.log('ready');

   // Adding

   var add        = $('#add');
   var subtract   = $('#subtract');
   var multiply   = $('#multiply');
   var sum        = 0;
   var numArray = [];
   var clickCount = 0;

   $('.num').click(function(){
      clickCount++;
      if(clickCount >= 1){
         numArray.push($(this).val());
         console.log('num array: ' + numArray);
      }
   })

   $('#equals').click(function(){
      numArray.forEach(function(num){
         sum += parseFloat(num) || 0;
      });
      console.log('sum: ' + sum);
   });





}); // END Document Ready