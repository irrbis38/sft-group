export var initCurrentProjects = () => {
    var slider_el = document.querySelector(".current-projects__slider");

    if (!slider_el) return;

    var slider = new Swiper(".current-projects__slider", {
        slidesPerView: 1,
        spaceBetween: 10,
        grid: {
            rows: 2,
        },
        navigation: {
            prevEl: ".current-projects__prev",
            nextEl: ".current-projects__next",
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                },
            },
        },
    });
};
