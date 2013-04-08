// webshims
$.webshims.polyfill();

// mobile menu
$(document).ready(function() {
  	$("#menu-bar").mobileMenu({
    	switchWidth: 768,
    	topOptionText: 'Select a Page',
    	indentString: '&nbsp;&nbsp;'
  	}); 

	// slideless
	$('#features').orbit({
		animation: 'vertical-slide',
		// bullets: true,
		directionalNav: false
	});

	// FAQ
	$('.faq-list').goFaq();

	$('a[href*=#latest-news],a[href*=#features-start], a[href*=#guide-tour], a[href*=#screenshots], a[href*=#pricing], a[href*=#faq]').bind("click", function(e) {
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top
		}, 1000);
		e.preventDefault();
	});
});	

// guide tour
$("#btn-tut").click(function() {
	$("#tut").joyride({
		'autoStart': true,
	  	'tipLocation': 'top'
	});
});