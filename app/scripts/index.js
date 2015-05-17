$(document).ready(function(){
    window.onscroll = function(){ 
    var t = document.documentElement.scrollTop || document.body.scrollTop;  
    if( t >= 160 ) {
        $('#sorts-container').toggleClass('is-sticky');
        $('#sorts-container').css({'position': 'fixed','top': '58px'});
        $('#nav-wrap.can-scrolled').toggleClass('scrolled');
    } else { 
        $('#sorts-container').toggleClass('is-sticky');
        $('#sorts-container').removeAttr('style');
        $('#nav-wrap.can-scrolled').toggleClass('scrolled');
    } 
    };
    
    $('.discover-sprite').click(function (){
        if($(this).children('.popup').hasClass('shown')) {
            $(this).children('.popup').removeClass('shown');
        } else {
            $('.discover-sprite').children('.popup').removeClass('shown');
            $(this).children('.popup').addClass('shown');
        }

    });
    
//    $('a.form-button-follow').click(function (){
//        $('.user-follow').removeClass('follow');
//        $('.user-follow').removeClass('unfollow');
//        $('.user-follow').addClass('following');
//    });
    
//    $('a.form-button-following').mouseover(function (){
//        $('.user-follow').addClass('unfollow');
//        $('.user-follow').removeClass('following');
//        $('.user-follow').removeClass('follow');
//    });
//    $('a.form-button-unfollow').mouseout(function (){
//        $('.user-follow').addClass('following');
//        $('.user-follow').removeClass('unfollow');
//        $('.user-follow').removeClass('follow');
//
//    });
//    $('a.form-button-unfollow').click(function (){
//        $('.user-follow').removeClass('unfollow');
//        $('.user-follow').removeClass('following');
//        $('.user-follow').addClass('follow');
//    });
});