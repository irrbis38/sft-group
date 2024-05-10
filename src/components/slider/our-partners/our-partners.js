export var initOurPartners = () => {
    var slider_el = document.querySelector(".our_partners__slider");

    if (!slider_el) return;

    var slider = new Swiper(".our_partners__slider", {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        navigation: {
            prevEl: ".our_partners__prev",
            nextEl: ".our_partners__next",
        },
        breakpoints: {
            360: {
                slidesPerView: 1.57,
            },
            576: {
                slidesPerView: 2,
            },
            769: {
                slidesPerView: 3,
            },
            1201: {
                slidesPerView: 4,
            },
        },
        pagination: {
            el: ".our_partners__progressbar",
            type: "progressbar",
        },
    });
};
