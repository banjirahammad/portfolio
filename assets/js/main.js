/*******************************************************
    Template Name    : Banjir - Personal Portfolio Landing Page Template
    Author           : Banjir Ahammad https://www.banjir-ahammad.com
    Version          : 1.0
    Created          : 2021
    File Description : Main Js file of the template
*******************************************************/



(function($) {
	"use strict";

  new WOW().init();

	// Navbar Menu Reduce
	$(window).trigger('scroll');
	$(window).on('scroll', function() {
		var pixels = 100;
		var top = 1200;
		if($(window).scrollTop() > pixels) {
			$('.navbar-expand-lg').addClass('navbar-bg-dark');
			// $('.navbar-expand-md').removeClass('navbar-trans');
		} else {
			// $('.navbar-expand-md').addClass('navbar-trans');
			$('.navbar-expand-lg').removeClass('navbar-bg-dark');
		}
	});

  // START PRELOADED
  $(window).on('load', function () {
		$('.loader').delay(300).fadeOut('slow');
	});


  // project isotope and filter
	$(window).on('load', function() {
		var projectIsotope = $('.project-container').isotope({
			itemSelector: '.project-single'
		});
		$('#project-filters li').on('click', function() {
			$("#project-filters li").removeClass('active');
			$(this).addClass('active');
			projectIsotope.isotope({
				filter: $(this).data('filter')
			});
		});
	});

  //  MagnificPopup
	var magnifPopup = function() {
		$('.popup-img').magnificPopup({
			type: 'image',
			removalDelay: 300,
			mainClass: 'mfp-with-zoom',
			gallery: {
				enabled: true
			},
			zoom: {
				enabled: true, // By default it's false, so don't forget to enable it
				duration: 300, // duration of the effect, in milliseconds
				easing: 'ease-in-out', // CSS transition easing function
				// The "opener" function should return the element from which popup will be zoomed in
				// and to which popup will be scaled down
				// By defailt it looks for an image tag:
				opener: function(openerElement) {
					// openerElement is the element on which popup was initialized, in this case its <a> tag
					// you don't need to add "opener" option if this code matches your needs, it's defailt one.
					return openerElement.is('img') ? openerElement : openerElement.find('img');
				}
			}
		});
	};
	// Call the functions
	magnifPopup();



	// Testimonials owl
	$('#review-slide').owlCarousel({
		margin: 15,
		autoplay: true,
		autoplayTimeout: 4000,
		nav: false,
		smartSpeed: 1000,
		dots: true,
		autoplayHoverPause: true,
		loop: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 1
			}
		}
	});
	$('#project-slide').owlCarousel({
		margin: 15,
		autoplay: true,
		autoplayTimeout: 4000,
		nav: false,
		smartSpeed: 1000,
		dots: true,
		autoplayHoverPause: true,
		loop: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 1
			}
		}
	});







	// Back to top button
	var toptoBottom = 300;
	$(window).on("scroll", function () {
		var scroll = $(window).scrollTop();

		// top to bottom button

		if (scroll >= toptoBottom) {
			$("#up_btn").show();
		} else {
			$("#up_btn").hide();
		}
	});

	$("#up_btn").on("click", function () {
		$("html,body").animate({
				scrollTop: 0,
			},
			500
		);
	});
})(jQuery);



$(document).ready(function(){
  const site_url = 'https://www.banjir-ahammad.com/portfolio/';
  // const site_url = 'http://127.0.0.1/portfolio/';
  $('#submit').click(function(e){
    if ($('#contact-form')[0].checkValidity()) {
      e.preventDefault();

      let name = $('#name').val();
      let email = $('#email').val();
      let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      let sub = $('#sub').val();
      let message = $('#message').val().trim().length;
      if (name===''||email===''||sub===''||message<1) {
        alert('all field is required');
      }else if(regex.test(email)){
        $.ajax({
          url : site_url+'email.php',
          method :  'post',
          data : $('#contact-form').serialize()+'&action=msg',
          success: function(response){
            if (response=='no') {
              alert('all field is required');
            }else {
              alert('Message Sent Successfully!');
            }
          }
        });
      }else {
        alert('Email field is required');
      }

    }
  });
});
