import SwiperCore, { Swiper, Keyboard, Pagination} from 'swiper/core';

// Install modules
SwiperCore.use([Pagination, Keyboard]);

new Swiper(".reviews__swiper",{
    pagination: {
        el: ".swiper-pagination",
            clickable: true,
    },

    initialSlide: 2,

    grabCursor: true,

    slideToClickedSlide: true,

    centeredSlides: true,

    keyboard: {
        enabled: true,
            pageUpDown: true,
    },

    breakpoints: {

        768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            centeredSlides: false,
        },

        1200: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            centeredSlides: false,
        },
    },
});
