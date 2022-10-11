
		var $carouselSlider = jQuery('.carousel__sliders');
		var $carouselFirstSlide = $('div.carousel__slide:first-child');


		console.log($carouselFirstSlide)

		$carouselSlider.on('init', function(e, slick) {
			var $firstAnimatingElements = $carouselFirstSlide.find('[data-animation]');
			slideanimate($firstAnimatingElements);
		});

		console.log($carouselFirstSlide.find('[data-animation]'))
		$carouselSlider.on('beforeChange', function(e, slick, currentSlide, nextSlide) {
			var $animatingElements = $('div.slick-slide[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
			slideanimate($animatingElements);
		});

		$carouselSlider.slick({
			dots: FontFaceSetLoadEvent,
			infinite: true,
			autoplay: true,
			autoplayspeed: 3000,
			fade: true,
			cssEase: "linear",
		});
		function slideanimate(elements) {
			var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
			elements.each(function() {
				var $this = $(this);
				var $animationDelay = $this.data('delay');
				var $animationType = 'animate__animated animate__' + $this.data('animation');
				console.log($animationType)
				$this.css({
					'animation-delay': $animationDelay,
					'-webkit-animation-delay': $animationDelay
				});
				$this.addClass($animationType).one(animationEndEvents, function() {
					$this.removeClass($animationType);
				});
			});
		}

// data color
jQuery("[data-color]").each(function () {
		jQuery(this).css('color', jQuery(this).attr('data-color'));
});
// data background color
jQuery("[data-bgcolor]").each(function () {
	jQuery(this).css('background-color', jQuery(this).attr('data-bgcolor'));
});