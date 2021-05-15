import Swiper from 'swiper/bundle';
new Swiper(".swiper-container",{
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
        eventsTarget: ".works__slider",
    },

    centeredSlides: true,

    breakpoints: {
        768: {
            slidesPerView: 2,
        },

        1200: {
            slidesPerView: 3,
        },
    },
});