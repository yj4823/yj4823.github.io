$(function(){

    $('.navi_bar a').click(function(){
        $('.navi').css('right','0');
    });
    $('.menu_close').click(function(){
        $('.navi').css('right','-100%')
    });
});