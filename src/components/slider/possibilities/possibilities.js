export var initPossibilitiesSlider = () => {
    var slider = document.querySelector(".possibilities__slider");

    if (!slider) return;

    new Swiper(slider, {
        slidesPerView: 1,
        spaceBetween: 8,
        // loop: true,
        navigation: {
            prevEl: ".possibilities__prev",
            nextEl: ".possibilities__next",
        },
        breakpoints: {
            769: {
                slidesPerView: 2,
            },
            1201: {
                slidesPerView: 3,
            },
        },
        pagination: {
            el: ".possibilities__progressbar",
            type: "progressbar",
        },
    });
};
