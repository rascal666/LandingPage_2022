import Swiper, { Navigation } from 'swiper';


const swiper = new Swiper(".slider-r", {
    // Optional parameters
    modules: [Navigation],
    direction: "horizontal",
    slidesPerView: 1,
    spaceBetween: 20,
    // effect: "coverflow",
    // centeredSlides: true,
    // autoHeight: true,
    // autoplay: {
    //     delay: 3000,
    // },
    // centerSlides: true,

    // Navigation arrows
    navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
        disabledClass: 'button-disabled',
    },

    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1.5,
            spaceBetween: 20,
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
    },
});


