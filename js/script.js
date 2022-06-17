$(document).ready(function(){

//*hide function start

  $('.btn1').click(function(){
    $('.hide').hide();

  });
//*show function start

  $('#btn2').dblclick(function(){

    $('.h2').show();
  });

 //* mouse over
 $('.m_h').mouseover(function(){

  $('.m_o').show();
 });

 //*mouseenter start
 $('.m_e').mouseenter(function(){
  alert("Hello Freelancer!");

 });

//*mouseleave

$('.m_f').mouseleave(function(){
  alert("mouseleave function");
});

//*mousedown start
$('.m_d').mouseup(function(){

alert('mouseup');

});
//*toggle start
$('.toggle').click(function(){
  $('.t1').toggle();
});
//*fade start
 $('#fade').click(function(){
  $('.image').fadeToggle();
  $('.i2').fadeToggle("slow");
 });

//*slide start

$('.sl').click(function(){
  $('.p12').slideToggle();

});
//*stop slide
$('.asstop').click(function(){
  $('.astop').slideDown(5000);

});
$('.stop1').click(function(){
  $('.astop').stop();
});


});
