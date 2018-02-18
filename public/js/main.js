let vm = new Vue({
	el: '#app',
	data: {
		topMenuCatalog: 0,
		asideMenuCatalog: false
	}
});

$('.gallery-slider').each(function() {
	let pr = new Swiper(this.querySelector('.gallery-slider__pr .swiper-container'), {
		slidesPerView: 1,
		spaceBetween: 20,
		// hashNavigation: {
		// 	watchState: true
		// },
		allowTouchMove: false
	});

	let nav = new Swiper(this.querySelector('.gallery-slider__thumbs .swiper-container'), {
			slidesPerView: 3,
			spaceBetween: 10,
			touchRatio: 0.2,
			allowTouchMove: false,
			navigation: {
				prevEl: this.querySelector('.gallery-slider__prev'),
				nextEl: this.querySelector('.gallery-slider__next'),
				disabledClass: 'slider-button_disabled'
			},
			breakpoints: {
				480: {
					slidesPerView: 2,
					spaceBetween: 5
				}
			}
		});

		$('.gallery-slider__thumbs .swiper-slide').click(function() {
			let index = $('.gallery-slider__thumbs .swiper-slide').index(this);

			if(pr.activeIndex == index) return false;

			$('.gallery-slider__thumbs .swiper-slide.active').removeClass('active');
			$(this).addClass('active');
			pr.slideTo(index);
		});
});

$('.spoiler__header').click(function() {
	$(this).next().toggleClass('hidden');
});
