export var initBranchesAccordion = () => {
    var items = Array.from(document.querySelectorAll(".branches__item"));

    if (items.length < 1) return;

    var btns = Array.from(document.querySelectorAll(".branches__btn"));

    items.forEach((item) => {
        // init setup
        if (item.classList.contains("active")) {
            item.children[1].style.maxHeight =
                item.children[1].scrollHeight + "px";
        } else {
            item.children[1].style.maxHeight = null;
        }

        item.addEventListener("click", (e) => {
            var isActive = item.classList.contains("active");

            if (!isActive) {
                // hide all
                items.forEach((i) => {
                    i.classList.remove("active");
                    i.children[1].style.maxHeight = null;
                });

                // changs btns on the map
                btns.forEach((b) => {
                    if (b.dataset.place === item.dataset.place) {
                        b.classList.add("active");
                    } else {
                        b.classList.remove("active");
                    }
                });

                // show active
                item.classList.add("active");
                var descr = item.children[1];
                descr.style.maxHeight = descr.scrollHeight + "px";
            }
        });

        window.addEventListener("resize", () => {
            if (item.classList.contains("active")) {
                item.children[1].style.maxHeight =
                    item.children[1].scrollHeight + "px";
            }
        });
    });
};

export var initGeoBtns = () => {
    var btns = Array.from(document.querySelectorAll(".branches__btn"));
    var items = Array.from(document.querySelectorAll(".branches__item"));

    if (btns.length < 1) return;

    btns.forEach((btn) => {
        btn.addEventListener("click", () => {
            var isActive = btn.classList.contains("active");

            if (isActive) return;

            var currPlace = btn.dataset.place;

            // change items in the '.branches__nav'
            items.forEach((i) => {
                if (i.dataset.place == currPlace) {
                    i.classList.add("active");
                    var descr = i.children[1];
                    descr.style.maxHeight = descr.scrollHeight + "px";
                } else {
                    i.classList.remove("active");
                    i.children[1].style.maxHeight = null;
                }
            });

            btns.forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");
        });
    });
};

export var initPinMap = () => {
    var branches_inner = document.querySelector(".branches__inner");

    if (!branches_inner) return;

    ScrollTrigger.matchMedia({
        "(min-width: 768px)": function () {
            ScrollTrigger.create({
                trigger: ".branches",
                start: "-=90 top",
                endTrigger: ".branches",
                end: "bottom bottom",
                pin: ".branches__inner",
                pinSpacing: false,
            });
        },
    });
};
