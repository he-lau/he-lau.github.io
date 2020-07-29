$(document).ready(function()
{
	console.log('js loaded');
	console.log($('#menu-right').css('transform'));

	var header = $('.header');

	$(window).scroll(function(e){
    if(header.offset().top !== 0){
        if(!header.hasClass('shadow')){
            header.addClass('shadow');
        }
    }else{
        header.removeClass('shadow');
    }
});

$('.menu-toggle').mousedown(function(e){

	e.preventDefault();

	$('body').toggleClass('with-sidebar');

	if ($('body').hasClass('with-sidebar')) {
		$('#menu-right').css('transform','translateX(0)');
		$('#menu-right').css('transition-duration','500ms');
	}
	else {
		$('#menu-right').css('transform','translateX(100%)');
	}

});




});
