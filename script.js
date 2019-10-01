$(function(){

    $('#btMenu').click(function(){
        $('#menu').addClass('menuAberto');
    });
    $('#btFechar a').click(function(){
        $('#menu').removeClass('menuAberto');
    });
});