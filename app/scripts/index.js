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
    $('a.form-button-following').hide();
    $('a.form-button-unfollow').hide();
    
    $('a.form-button-follow').click(function (){
        $('a.form-button-following').show();
        $('a.form-button-follow').hide();
    });
    $('a.form-button-following').mouseover(function (){
        $('a.form-button-unfollow').show();
        $('a.form-button-following').hide();
    });
    $('a.form-button-unfollow').mouseout(function (){
        $('a.form-button-unfollow').hide();
        $('a.form-button-following').show();
    });
    $('a.form-button-unfollow').click(function (){
        $('a.form-button-unfollow').hide();
        $('a.form-button-following').hide();
        $('a.form-button-follow').show();
    });
});