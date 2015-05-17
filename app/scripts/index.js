$(document).ready(function(){
    window.onscroll = function(){ 
    var t = document.documentElement.scrollTop || document.body.scrollTop;  
    if( t >= 160 ) {
        $('#sorts-container').addClass('is-sticky');
        $('#sorts-container').css({'position': 'fixed','top': '58px'});
        $('#nav-wrap.can-scrolled').addClass('scrolled');
    } else { 
        $('#sorts-container').removeClass('is-sticky');
        $('#sorts-container').removeAttr('style');
        $('#nav-wrap.can-scrolled').removeClass('scrolled');
    } 
    };
    
    $('.discover-sprite').click(function (){
        $(this).children('.popup').toggleClass('shown');
    });
});