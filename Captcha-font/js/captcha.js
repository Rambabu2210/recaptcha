$(document).ready(function(){

//call captcha
captcha();
//reset Captcha
$('#re_capt').on('click', function(){
  captcha();
  $('.check').css("background-image","none");
});

//captcha generate
  function captcha(){
      var num = Math.floor(Math.random()*90000) + 10000;
      //var messages = ["78j8lw!", "Trsf782", "rl896l", "786Lkhgt", "tre8919"],
   // num = messages[Math.floor(Math.random() * messages.length)];
      $('.number').text(num);
      $('.check').text('');
       $('#cap_value').val('');
      
  }; 
  
 //captcha Check
  $('#cap_value').keyup(function(){
  var org_captcha = $('.number').html();
  var user_enetr = $(this).val();
  if(org_captcha == user_enetr)
    {
		$('.check').css("background-image","url(img/tick.png)");
		$('.check').css("background-position","19px 6px");
    }else{
    	$('.check').css("background-image","url(img/tick.png)");
    	$('.check').css("background-position","-18px 5px");
    }
  });
  
});