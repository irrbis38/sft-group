var initAssortment = () => {
    var assortment_nav = Array.from(
        document.querySelectorAll(".assortment-nav")
    );

    assortment_nav.forEach((nav) => {
        var current_btn = nav.querySelector(".assortment-current");

        current_btn.addEventListener("click", () => {
            nav.classList.toggle("active");
        });
    });

    window.addEventListener("click", (e) => {
        var isAssortmentNav = Boolean(e.target.closest(".assortment-nav"));

        if (isAssortmentNav) return;

        assortment_nav.forEach((nav) => {
            nav.classList.remove("active");
        });
    });
};

var initAssortmentSliderToggling = () => {
    var containers = Array.from(
        document.querySelectorAll(".assortment-products")
    );

    if (containers.length < 1) return;

    containers.forEach((container) => {
        var labels = Array.from(
            container.querySelectorAll(".assortment__label")
        );
        var assortment_nav = container.querySelector(".assortment-nav");
        var assortment_current = container.querySelector(".assortment-current");
        var blocks = Array.from(
            container.querySelectorAll(".assortment__slider_block")
        );

        if (labels.length < 1) return;

        labels.forEach((l) => {
            l.addEventListener("click", () => {
                var isActive = l.children[0].checked;

                if (isActive) return;

                assortment_current.dataset.value = l.dataset.value;
                assortment_current.textContent = l.children[1].textContent;

                assortment_nav.classList.remove("active");

                blocks.forEach((b) => {
                    if (b.dataset.value == l.dataset.value) {
                        b.classList.add("active");
                    } else {
                        b.classList.remove("active");
                    }
                });
            });
        });
    });
};

var initAssortmentSliders = () => {
    var sliders_elements = Array.from(
        document.querySelectorAll(".assortment__slider")
    );

    if (sliders_elements.length < 1) return;

    sliders_elements.forEach((el) => {
        var prev = el.querySelector(".assortment__prev");
        var next = el.querySelector(".assortment__next");

        var slider = new Swiper(el, {
            slidesPerView: 1,
            spaceBetween: 20,
            // effect: "fade",
            // loop: true,
        });

        prev.addEventListener("click", () => slider.slidePrev());
        next.addEventListener("click", () => slider.slideNext());
    });
};

export var assortmentLogic = () => {
    var assortment_nav = document.querySelector(".assortment-nav");

    if (!assortment_nav) return;

    initAssortment();
    initAssortmentSliderToggling(assortment_nav);
    initAssortmentSliders();
};
