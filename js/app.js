
$(document).ready(function() {

	// // FOUNDATION
	$(document).foundation()

	// // ISOTOPE PLUGIN
    var $container = $('.work-pieces');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false,
        }
    });
  
    $('.work-nav a').click(function(){
      var selector = $(this).attr('data-filter');
      $container.isotope({ 
          filter: selector,
          animationOptions: {
              duration: 750,
              easing: 'linear',
              queue: false, 
          }
      });
    return false;
  });

});

// GOOGLE MAPS API
var map;
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 43.6309599, lng: -79.3580098},
      zoom: 16,
      scrollwheel:false
    });
  }
