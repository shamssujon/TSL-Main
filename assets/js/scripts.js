("use strict");

// Header show/hide on scroll
(function () {
	var headroom = new Headroom(document.querySelector(".navbar"), {
		tolerance: 5,
		offset: 205,
	});
	headroom.init();
})();

// Animate on Scroll
AOS.init({
	once: true,
	easing: "ease-in-out-quad",
	delay: 100,
	offset: 50,
});

// Search form toggle
const searchBtn = document.querySelector(".search-btn");
const searchInput = document.querySelector(".search-input");

searchBtn.addEventListener("click", function () {
	searchInput.classList.toggle("open");

	setTimeout(function () {
		searchInput.focus();
	}, 50);
});

// Hide search form on click outside
document.addEventListener("click", (e) => {
	let el = e.target.closest(".search-btn");
	let el2 = e.target.closest(".search-input");
	if (el2 == null && el == null) {
		searchInput.classList.remove("open");
	}
});

// Hide search form on press ESC key
document.onkeyup = function (e) {
	if (e.keyCode == 27) {
		searchInput.classList.remove("open");
	}
};

// Blog carousel
const blogCarousel = new Swiper(".articles-carousel", {
	slidesPerView: 3,
	spaceBetween: 40,
	speed: 600,
	watchOverflow: true,
	centeredSlides: false,
	simulateTouch: false,
	breakpoints: {
		320: {
			slidesPerView: 1.1,
			spaceBetween: 20,
			centeredSlides: true,
		},
		768: {
			slidesPerView: 2.05,
			spaceBetween: 30,
			centeredSlides: false,
		},
		1024: {
			slidesPerView: 3,
			spaceBetween: 40,
			centeredSlides: false,
		},
	},
});
