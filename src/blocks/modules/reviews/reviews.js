import Swiper from 'swiper/bundle';
new Swiper(".reviews__swiper",{
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    pagination: {
        el: ".swiper-pagination",
            clickable: true,
    },

    // loop: true,

    initialSlide: 2,

        grabCursor: true,

        slideToClickedSlide: true,

        hashNavigation: {
        watchState: true,
    },

    keyboard: {
        enabled: true,
            pageUpDown: true,
    },

    mousewheel: {
        sensitivity: 1,
            eventsTarget: ".reviews__swiper",
    },

    centeredSlides: true,

    // loop: true,

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
