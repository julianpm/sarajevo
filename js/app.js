
$(document).ready(function() {

	$(document).foundation()

	$('.work-pieces').isotope({
	  // options
	  itemSelector: '.work-pieces-single',
	  layoutMode: 'fitRows'
	});

});