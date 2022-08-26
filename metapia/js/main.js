$(document).ready(function(){
  $(window).scroll(function(){
    TOP=$(window).scrollTop();
    var serTitleOffset=$('.sec1_text1').offset().top;
    serTitleOffset=Number(serTitleOffset)-700;
    if(TOP>serTitleOffset){
      $('.sec1_text1').addClass('on');
      $('.sec1_img1').addClass('on');
    }

    var serTitleOffset=$('.sec1_text2').offset().top;
    serTitleOffset=Number(serTitleOffset)-700;
    if(TOP>serTitleOffset){
      $('.sec1_text2').addClass('on');
      $('.sec1_img2').addClass('on');
    }

    var serTitleOffset=$('.sec2').offset().top;
    serTitleOffset=Number(serTitleOffset)-700;
    if(TOP>serTitleOffset){
      $('.sec2 .img_wrap ul li a img').addClass('on');
    }
  });
  $('.menu').click(function(){
    $('.menu').toggleClass('on');
    $('.menu_list').toggleClass('open');
  });
});