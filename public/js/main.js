let app = {
	width: screen.width
}


window.addEventListener('resize', function(event){
  app.width = screen.width
});

Vue.component('card-catalog', {
	props: {
		image: String,
		title: String,
		link: String,
		price: String,
		tile: Boolean,
		mods: Object
	},
	methods: {
		mod: function (cls) {
			let result = [];

			for (var key in this.mods) {
			  if(this.mods[key] == true) {
			  	result.push(cls + '_' +key);
			  }
			}

			return result;
		}
	},
	template: `
	<div class='c-catalog' :class="mod('c-catalog')">
		<header class="c-catalog__header" :class="mod('c-catalog__header')">
			<a :href="link">
				<img class="c-catalog__pr image-responsive" :class="mod('c-catalog__pr')" :src="image" :alt="title"/>
			</a>
		</header>
		<div class="c-catalog__body" :class="mod('c-catalog__body')">
			<div class="c-catalog__title" :class="mod('c-catalog__title')">
				<a :href="link" class="c-catalog__title-inner" :class="mod('c-catalog__title-inner')">
					{{ title }}
				</a>
			</div>
			<div class="c-catalog__chars" :class="mod('c-catalog__chars')">
				<div class="c-catalog__chars-inner" :class="mod('c-catalog__chars-inner')">
					<slot></slot>
				</div>
			</div>
		</div>

		<footer class="c-catalog__foo" :class="mod('c-catalog__foo')">
			<div class="c-catalog__price" :class="mod('c-catalog__price')">{{price}}</div>
			<button class="button button_type_button button_size_md button_theme_yellow w-160 button_round_5 c-catalog__button" :class="mod('c-catalog__button')">
				<svg class="button__icon icon" width="16" height="16">
					<use xlink:href="#busket"></use>
				</svg>
				<span class="button__text">В корзину</span> 
			</button>							
		</footer>
	</div>

	`
});

let vm = new Vue({
	el: '#app',
	data: {
		app: app,
		topMenuCatalog: 0,
		asideMenuCatalog: false,
		tabs: {
			chars: (screen.width < 768) ? 0 : 1,
		}
	},
	computed: {
		asideCardCatalogMods: function () {
			return {
				'tile': (this.width <= 992)
			}
		}
	},
	methods: {
		hasActiveTab: function(name, id) {
			return this.tabs[name] == id
		},
		toActiveTab: function(name, id) {
			this.tabs[name] = id
		}
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

$('.slider-card').each(function() {
	let $container = $(this);

	let pr = new Swiper(this.querySelector('.slider-card__prs'), {
		slidesPerView: 1,
		allowTouchMove: false,
		slideClass: 'slider-card__pr'
	});

	let nav = new Swiper(this.querySelector('.slider-card__thumbs'), {
		slidesPerView: 3,
		spaceBetween: 20,
		slideClass: 'slider-card__thumb'
	});

	$(this).find('.slider-card__thumb').click(function() {
		let index = $container.find('.slider-card__thumb').index(this)
		console.log(index)
		$(this).parent().find('.slider-card__thumb_active').removeClass('slider-card__thumb_active');
		$(this).addClass('slider-card__thumb_active');

		pr.slideTo(index);
	})
});

$('.spoiler__header').click(function() {
	$(this).next().toggleClass('hidden');
});
