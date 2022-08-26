$(document).ready(function(){
  $('.menu').click(function(){
    $('.menu').toggleClass('on');
    $('.menu_list').toggleClass('open');
  });

  $('.survice span').click(function(){
    $(this).toggleClass('on');
  });
});