$(function(){
	
	"use strict";

	// Stick Menu
	/*var stickyOffset = $('.sticky').offset().top;
	$(window).scroll(function(){
	  var sticky = $('.sticky'),
		  scroll = $(window).scrollTop();
	  if (scroll >= stickyOffset) sticky.addClass('sticky-fixed');
	  else sticky.removeClass('sticky-fixed');
	});*/

	// isotop
	$('.grid').imagesLoaded( function() {
		// init Isotope
		var $grid = $('.grid').isotope({
		  itemSelector: '.grid-item',
		  percentPosition: true,
		  masonry: {
			// use outer width of grid-sizer for columnWidth
			columnWidth: '.grid-item',
		  }
		});
	});
	

	
	
	// owlCarousel
	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:0,
		items:1,
		navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		nav:true,
		dots:false,
		responsive:{
			0:{
				items:1
			},
			767:{
				items:3
			},
			992:{
				items:5
			}
		}
	});
	
	//İmage Popup
	$('.image-popup-vertical-fit').magnificPopup({
	  type: 'image'
	  // other options
	});
	
	/* magnificPopup video view */
	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
	   disableOn: 700,
	   type: 'iframe',
	   mainClass: 'mfp-fade',
	   removalDelay: 160,
	   preloader: false,
	   fixedContentPos: false
	});
	
	

	
	// scrollToTop
	$.scrollUp({
		scrollName: 'scrollUp', // Element ID
		topDistance: '300', // Distance from top before showing element (px)
		topSpeed: 300, // Speed back to top (ms)
		animation: 'fade', // Fade, slide, none
		animationInSpeed: 200, // Animation in speed (ms)
		animationOutSpeed: 200, // Animation out speed (ms)
		scrollText: '<i class="fa-solid fa-chevron-up"></i>', // Text for element
		activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	});
	
	$('.flexslider').flexslider({
                    animation: "slide",
                    animationLoop:true,
                    itemWidth: 210,
                    itemMargin: 5,
                    pausePlay:false,
                    start: function(slider){
                         $('body').removeClass('loading');
                    }
   });
	

	var wow = new WOW().init();
	
	 wow = new WOW(
		{
		  animateClass: 'animated',
		  offset:       100,
		  mobile:       true,
		  live:         true,
		  callback:     function(box) {
			console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
		  }
		}
	);
	
	

});