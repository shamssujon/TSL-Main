("use strict");

// body padding top of fixed header
(function () {
    const header = document.querySelector(".navbar");
    const headerHeight = header.offsetHeight;
    const htmlBody = document.querySelector("html, body");
    if (header.classList.contains("fixed-top")) {
        htmlBody.style.paddingTop = headerHeight + "px";
        htmlBody.style.scrollPaddingTop = headerHeight + "px";
    }
})();

// Header show/hide on scroll
(function () {
    var headroom = new Headroom(document.querySelector(".navbar"), {
        tolerance: 5,
        offset: 205,
    });
    headroom.init();
})();

// Animate on Scroll
(function () {
    AOS.init({
        once: true,
        easing: "ease-in-out-quad",
        delay: 100,
        offset: 50,
    });
})();

(function () {
    // Search form toggle
    const searchTogglerBtn = document.getElementById("search-toggler-btn");
    const searchForm = document.getElementById("navbar-search-form");
    const searchInput = document.getElementById("search-input")

    searchTogglerBtn.addEventListener("click", function () {
        searchForm.classList.toggle("open");

        setTimeout(function () {
            searchInput.focus();
        }, 50);
    });

    // Hide search form on click outside
    document.addEventListener("click", (e) => {
        let el = e.target.closest("#search-toggler-btn");
        let el2 = e.target.closest("#navbar-search-form");
        if (el2 == null && el == null) {
            searchForm.classList.remove("open");
        }
    });

    // Hide search form on press ESC key
    document.onkeyup = function (e) {
        if (e.keyCode == 27) {
            searchInput.classList.remove("open");
        }
    };
})();

// Blog carousel
(function () {
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
})();

// Featured post carousel
(function () {
    const featuredCarousel = new Swiper(".featured-post-carousel", {
        slidesPerView: 1.1,
        spaceBetween: 30,
        speed: 600,
        watchOverflow: true,
        centeredSlides: true,
        pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true,
        },
        breakpoints: {
            320: {
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 1.1,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 1.1,
                spaceBetween: 30,
                centeredSlides: true,
            },
        },
    });
})();

// Enabling Bootstrap Tooltip
(function () {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(
        (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
    );
})();

// Counter Up
(function () {
    const counterUp = window.counterUp.default;

    const callback = (entries) => {
        entries.forEach((entry) => {
            const el = entry.target;
            if (entry.isIntersecting && !el.classList.contains("is-visible")) {
                counterUp(el, {
                    duration: 1000,
                    delay: 45,
                });
                el.classList.add("is-visible");
            }
        });
    };

    const IO = new IntersectionObserver(callback, { threshold: 1 });
    const el = document.querySelectorAll(".counter");

    el.forEach((el) => {
        IO.observe(el);
    });
})();

// Venobox - popup image
(function () {
    new VenoBox({
        selector: ".image-popup",
        numeration: false,
        share: false,
        spinner: "rotating-plane",
    });
})();

// Venobox - popup gallery
(function () {
    new VenoBox({
        selector: ".gallery-item",
        numeration: true,
        infinigall: true,
        share: false,
        spinner: "rotating-plane",
    });
})();

// Testimonial carousel
(function () {
    const testimonialCarousel = new Swiper(".testimonial-carousel", {
        slidesPerView: 1.05,
        spaceBetween: 20,
        speed: 600,
        watchOverflow: true,
        pagination: {
            el: ".testimonial-carousel-container .swiper-pagination",
            type: "bullets",
            clickable: true,
        },
        navigation: {
            nextEl: ".testimonial-carousel-container .swiper-button-next",
            prevEl: ".testimonial-carousel-container .swiper-button-prev",
        },
        breakpoints: {
            320: {
                slidesPerView: 1.05,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
    });
})();
