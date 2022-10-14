
		var $carouselSlider = jQuery('.carousel__sliders');
		var $carouselFirstSlide = $('div.carousel__slide:first-child');


		//console.log($carouselFirstSlide)

		$carouselSlider.on('init', function(e, slick) {
			var $firstAnimatingElements = $carouselFirstSlide.find('[data-animation]');
			slideanimate($firstAnimatingElements);
		});

		//console.log($carouselFirstSlide.find('[data-animation]'))
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
				//console.log($animationType)
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



// switch theme
// const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
// console.log(toggleSwitch)
// const currentTheme = localStorage.getItem('theme');
// console.log(currentTheme)

// if (currentTheme) {
//     document.documentElement.setAttribute('data-theme', currentTheme);
  
//     if (currentTheme === 'dark') {
//         toggleSwitch.checked = true;
//     }
// }
// console.log(document.documentElement)

// function switchTheme(e) {
//     if (e.target.checked) {
//         document.documentElement.setAttribute('data-theme', 'dark');
//         localStorage.setItem('theme', 'dark');
//     }
//     else {        document.documentElement.setAttribute('data-theme', 'light');
//           localStorage.setItem('theme', 'light');
//     }    
// }

// toggleSwitch.addEventListener('change', switchTheme, false);
// console.log(currentTheme)


document.getElementById("switchButton").onclick = function () {
	//khi button được click thì tìm đến thẻ body có id là myBody
	// dùng classlist để gọi thuộc tính class của thẻ body
	//Sử dụng toggle() để thêm hoặc xóa 1 class của thẻ html. Nếu thẻ body không có class dark thì toggle sẽ thêm class dark vào body. Ngược lại, nếu thẻ body đang có class dark thì toogle sẽ xóa class dark đi.
	console.log(document.getElementById('myBody').classList)
	document.getElementById("myBody").classList.toggle("dark");
  };
  