import { smoothScroll } from "../../assets/js/scripts/smooth-scroll";

var initGains = () => {
    var slider_element = document.querySelector(".gains__container");

    if (!slider_element) return;

    var slider = null;

    var initSlider = () => {
        return new Swiper(slider_element, {
            slidesPerView: 1,
            spaceBetween: 10,
            pagination: {
                el: ".gains__pagination",
                type: "bullets",
            },
        });
    };

    if (window.innerWidth < 768) {
        slider = initSlider();
    }

    var mqMin767 = window.matchMedia("(max-width: 767px)");

    var handleMQ = (e) => {
        if (e.matches) {
            slider = initSlider();
        } else {
            slider.destroy();
            slider = null;
        }
    };

    mqMin767.addEventListener("change", handleMQ);
};

export var initCarton = () => {
    var carton_page = document.querySelector(".carton-page");

    if (carton_page) {
        initGains();
        var scrollList = [
            ".assortment__contact",
            ".page_intro__next",
            ".page_intro__link",
        ];

        scrollList.forEach((item) => smoothScroll(item));
    }
};
