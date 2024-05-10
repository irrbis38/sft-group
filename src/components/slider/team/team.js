export var initTeamsSlider = () => {
    var slider_el = document.querySelector(".team__slider");

    if (!slider_el) return;

    var slider = new Swiper(".team__slider", {
        slidesPerView: 1.81,
        spaceBetween: 10,
        slidesOffsetAfter: 20,
        slidesOffsetBefore: 20,
        navigation: {
            prevEl: ".team__prev",
            nextEl: ".team__next",
        },
        breakpoints: {
            576: {
                slidesPerView: 3,
                slidesOffsetAfter: 0,
                slidesOffsetBefore: 0,
            },
        },
    });
};
