// Google MAps API

var map;
var paris = {
	lat: 48.8566969,
	lng: 2.3514616
};
var content = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
      'sandstone rock formation in the southern part of the '+
      'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
      'south west of the nearest large town, Alice Springs; 450&#160;km '+
      '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
      'features of the Uluru - Kata Tjuta National Park. Uluru is '+
      'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
      'Aboriginal people of the area. It has many springs, waterholes, '+
      'rock caves and ancient paintings. Uluru is listed as a World '+
      'Heritage Site.</p>'+
      '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
      'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
      '(last visited June 22, 2009).</p>'+
      '</div>'+
      '</div>';

// initialiser la map
function initMap() {

	map = new google.maps.Map(document.getElementById('contact-map'),

	{
		center: paris,
		zoom: 13
	});

	var marker = new google.maps.Marker({
		position: paris,
		map: map,
		title: 'Uluru (Ayers Rock)'
	});

var infoWindow = new google.maps.InfoWindow({
		content: content
	});


	marker.addListener('click', function() {
    infoWindow.open(map, marker);
  });

}


// lorsque l'arbre DOM sera construit
$(document).ready(function()
{

	// éviter que l'utilisateur ne se retrouve sans menu en redimensionner sur grand écran
	window.onresize = function() {
	    if ( window.innerWidth > 900) {
				if (! $('body').hasClass('with-sidebar')) {
					$('body').removeClass('with-sidebar');
					$('#menu-right').css('transform','translateX(0)');
				}
			}
	}

	// ajouter l'ombre sous le header lors du scroll

	// pour width >= 900px, scroll au niveau de la fenêtre
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

// pour width < 900px; scroll par rapport au contenu
$('.app-content').scroll(function(e){

	if($('.app-content').scrollTop() !== 0){
			if(!header.hasClass('shadow')){
					header.addClass('shadow');
			}
	}else{
			header.removeClass('shadow');
	}
});

// menu hamburger

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

$('input').click(function(e){
	
})

});
