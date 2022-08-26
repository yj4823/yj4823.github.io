$(document).ready(function(){
  $('.menu').click(function(){
    $('.menu').toggleClass('on');
    $('.menu_list').toggleClass('open');
  });

  $('.thumnail a').click(function(){
    var img = $(this).attr('href');
    var imgTag = '<img src='+img+'>';
    $('.big_img img').before(imgTag);
    $('.big_img img:last').fadeOut(800,function(){
      $(this).remove();
    });
    return false;
  });
});