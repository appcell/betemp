$(document).ready(function(){
    window.onscroll = function(){ 
    var t = document.documentElement.scrollTop || document.body.scrollTop;  
	var a = document.documentElement.scrollTop==0? document.body.clientHeight : document.documentElement.clientHeight;
	var b = document.documentElement.scrollTop==0? document.body.scrollTop : document.documentElement.scrollTop;
	var c = document.documentElement.scrollTop==0? document.body.scrollHeight : document.documentElement.scrollHeight;

	if(a+b==c){
		// showmore();
	}

    if( t >= 160 ) {
        $('#sorts-container').toggleClass('is-sticky');
        $('#sorts-container').css({'position': 'fixed','top': '58px'});
        $('#nav-wrap').toggleClass('scrolled');
    } else { 
        $('#sorts-container').toggleClass('is-sticky');
        $('#sorts-container').removeAttr('style');
        $('#nav-wrap').toggleClass('scrolled');
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
});