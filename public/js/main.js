$('.gallery-slider').each(function() {
	let pr = new Swiper(this.querySelector('.gallery-slider__pr .swiper-container'), {
		slidesPerView: 1,
		spaceBetween: 20,
		allowTouchMove: false
	});

	let nav = new Swiper(this.querySelector('.gallery-slider__thumbs .swiper-container'), {
			slidesPerView: 3,
			spaceBetween: 10,
			touchRatio: 0.2,
			allowTouchMove: false,
			navigation: {
				prevEl: this.querySelector('.swiper-button-prev'),
				nextEl: this.querySelector('.swiper-button-next')
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