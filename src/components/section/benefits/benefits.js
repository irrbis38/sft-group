export var initBenefitsSlider = () => {
    var slider = document.querySelector(".benefits__slider");

    if (!slider) return;

    var partnership_page = document.querySelector(".partnership-page");

    if (partnership_page) {
        new Swiper(".benefits__slider", {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            navigation: {
                prevEl: ".benefits__prev",
                nextEl: ".benefits__next",
            },
            breakpoints: {
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
        });
    } else {
        new Swiper(".benefits__slider", {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            navigation: {
                prevEl: ".benefits__prev",
                nextEl: ".benefits__next",
            },
            breakpoints: {
                769: {
                    slidesPerView: 2,
                },
                1201: {
                    slidesPerView: 3,
                },
            },
        });
    }
};
