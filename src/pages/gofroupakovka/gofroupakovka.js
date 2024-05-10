import { smoothScroll } from "../../assets/js/scripts/smooth-scroll";

var initActivitySlider = () => {
    var slider = document.querySelector(".activity__slider");

    if (!slider) return;

    new Swiper(slider, {
        slidesPerView: 1,
        spaceBetween: 8,
        // loop: true,
        navigation: {
            prevEl: ".activity__prev",
            nextEl: ".activity__next",
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
            el: ".activity__progressbar",
            type: "progressbar",
        },
    });
};

var moveStagesProgressbar = (len, idx = 0) => {
    var line = document.querySelector(".stages__line");
    var card = document.querySelector(".stages__label");

    if (!line) return;

    var width = Number(
        parseFloat(
            window.getComputedStyle(card, null).getPropertyValue("width")
        ).toFixed(2)
    );

    var gap = 8;

    var start = width / 2;

    var step = width + gap;

    if (idx === 0) {
        line.style.transform = `translateX(${start}px)`;
    } else if (idx > 0 && idx < len - 1) {
        console.log("non-full");
        line.style.transform = `translateX(${start + step * idx}px)`;
    } else {
        console.log("full");
        line.style.transform = `translateX(100%)`;
    }
};

var initStagesLogic = () => {
    var items = Array.from(document.querySelectorAll(".stages__item"));
    var labels = Array.from(document.querySelectorAll(".stages__label"));

    if (items.length < 1 || labels.length < 1) return;

    var index = 0;

    var len = items.length;

    moveStagesProgressbar();

    labels.forEach((l) => {
        var input = l.children[0];
        input.addEventListener("click", () => {
            items.forEach((i, idx) => {
                if (i.dataset.value == l.dataset.value) {
                    i.classList.add("active");

                    index = idx;

                    moveStagesProgressbar(len, index);
                } else {
                    i.classList.remove("active");
                }
            });
        });
    });

    window.addEventListener("resize", () => moveStagesProgressbar(index));
};

export var initGofroupakovka = () => {
    var gofroupakovka_page = document.querySelector(".gofroupakovka-page");

    if (gofroupakovka_page) {
        initActivitySlider();
        initStagesLogic();

        var scrollList = [
            ".assortment__contact",
            ".page_intro__next",
            ".page_intro__link",
            ".stages__contact_us",
        ];

        scrollList.forEach((item) => smoothScroll(item));
    }
};
