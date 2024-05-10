export var fleetLogic = () => {
    var slider_elem = document.querySelector(".fleet__slider");

    if (!slider_elem) return;

    var slider = null;

    var initSlider = () => {
        return new Swiper(slider_elem, {
            slidesPerView: 1.2,
            spaceBetween: 10,
            slidesOffsetAfter: 20,
            slidesOffsetBefore: 20,
            navigation: {
                prevEl: ".fleet__prev",
                nextEl: ".fleet__next",
            },
            breakpoints: {
                576: {
                    slidesPerView: 2,
                    slidesOffsetAfter: 0,
                    slidesOffsetBefore: 0,
                },
                769: {
                    slidesPerView: 3,
                    slidesOffsetAfter: 0,
                    slidesOffsetBefore: 0,
                },
            },
        });
    };

    if (window.innerWidth < 1200) {
        slider = initSlider();
    }

    var mqMin1200 = window.matchMedia("(max-width: 1199px)");

    var handleMQ = (e) => {
        if (e.matches) {
            slider = initSlider();
        } else {
            slider.destroy();
            slider = null;
        }
    };

    mqMin1200.addEventListener("change", handleMQ);
};
