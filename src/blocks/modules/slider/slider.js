import SwiperCore, { Swiper, Keyboard, Pagination} from 'swiper/core';

// Install modules
SwiperCore.use([Pagination, Keyboard]);

new Swiper(".js-works-slider",{
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    initialSlide: 2,

    grabCursor: true,

    loop: true,

    keyboard: {
        enabled: true,
        pageUpDown: true,
    },

    centeredSlides: true,

    breakpoints: {
        768: {
            slidesPerView: 2,
        },

        1024: {
            slidesPerView: 3,
        },

        1440: {
            slidesPerView: 4,
        },

        1920: {
            slidesPerView: 5,
        },
    },
});

new Swiper(".js-reviews-slider",{
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    grabCursor: true,

    slideToClickedSlide: true,

    keyboard: {
        enabled: true,
        pageUpDown: true,
    },

    breakpoints: {

        768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },

        1024: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
    },
});
