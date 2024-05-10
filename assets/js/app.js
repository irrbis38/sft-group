const Header = {
    header: document.querySelector('.header'),
    menu: document.querySelector('.header-menu'),
    burger: document.querySelector('.header__burger'),
    isWhite: false,
    isAbsolute: false,
    
    init() {
        this.isWhite = this.header.classList.contains('header_white');
        this.isAbsolute = this.header.classList.contains('header_absolute');

        this.onFix();
        this.bindListeners();
    },
    bindListeners() {
        window.addEventListener('scroll', this.onFix.bind(this));
        this.burger.addEventListener('click', this.onToggleMenu.bind(this));
    },

    onFix() {
        if(window.scrollY > (this.header.offsetHeight * 2)) {
            this.header.classList.add('header_fixed');
            
            if(this.isAbsolute) {
                this.header.classList.remove('header_absolute');
            } else {
                document.body.style.marginTop = this.header.offsetHeight + 'px';
            }

            if(this.isWhite) {
                this.header.classList.remove('header_white');
            }
        } else {
            this.header.classList.remove('header_fixed');

            if(this.isAbsolute) {
                this.header.classList.add('header_absolute');
            } else {
                document.body.style.marginTop = '';
            }
            
            if(this.isWhite) {
                this.header.classList.add('header_white');
            }
        }
    },
    onToggleMenu() {
        this.menu.classList.toggle('show');
        this.burger.classList.toggle('active');

        if(this.menu.classList.contains('show')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        if(this.menu.classList.contains('show') && this.header.classList.contains('header_absolute')) {
            this.header.classList.remove('header_white');
        }

        if(!this.menu.classList.contains('show') && this.header.classList.contains('header_absolute')) {
            this.header.classList.add('header_white');
        }
    }
};

const EventsSlider = {
    container: document.querySelector('.events-slider'),
    options: {
        spaceBetween: 30,
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next'
        },
        breakpoints: {
            1200: {
                spaceBetween: 50,
            }
        }
    },
    swiper: null,

    init() {
        if(this.container) {
            this.swiper = new Swiper(this.container, this.options);
        }
    }
};

const PartnersSlider = { 
    container: document.querySelector('.partners-slider'),
    options: {
        freeMode: true,
        slidesPerView: 'auto',
        mousewheel: true
    },
    swiper: null,

    init() {
        if(this.container) {
            this.swiper = new Swiper(this.container, this.options);
        }
    }
};

const MainAdvantagesSlider = { 
    container: document.querySelector('.main-advantages__slider'),
    options: {
        slidesPerView: 1,
        grid: {
            rows: 2,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        }
    },
    swiper: null,

    init() {
        if(this.container) {
            this.swiper = new Swiper(this.container, this.options);
        }
    }
};

const MainHeroSlider = { 
    container: document.querySelector('.main-hero__slider'),
    options: {
        loop: true,
        autoplay: {
            delay: 5000
        },
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next'
        }
    },
    swiper: null,

    init() {
        if(this.container) {
            this.swiper = new Swiper(this.container, this.options);
        }
    }
};

const NewsSlider = {
    container: document.querySelector('.news-slider'),
    options: {
        slidesPerView: 1,
        spaceBetween: 60,
        grid: {
            fill: 'row',
            rows: 2,
        },
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next'
        },
        breakpoints: {
            1200: {
                spaceBetween: 125,
                slidesPerView: 2
            }
        },
        init: false
    },
    swiper: null,

    init() {
        if(this.container) {
            this.swiper = new Swiper(this.container, this.options);
            this.bindListeners();
            this.swiper.init();
        }
    },

    bindListeners() {
        this.swiper.on('init', swiper => {
            const length = swiper.slides.length;

            swiper.slides.forEach((slide, index) => {
                if(length / 2 > index) {
                    slide.classList.add('first-half');
                } else {
                    slide.classList.add('second-half');
                }
            });
        });
    }
};

const ReviewsSlider = {
    container: document.querySelector('.section-reviews__slider'),
    options: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 8,
        navigation: {
            prevEl: document.querySelector('.section-reviews .swiper-button-prev'),
            nextEl: document.querySelector('.section-reviews .swiper-button-next')
        },
        breakpoints: {
            768: {
                slidesPerView: 'auto',
                slidesPerGroup: 1
            },
            1200: {
                slidesPerView: 2,
                slidesPerGroup: 2
            }
        }
        
    },
    swiper: null,

    init() {
        if(this.container) {
            this.swiper = new Swiper(this.container, this.options);
        }
    }
};

const VideoSlider = {
    container: document.querySelector('.video-slider'),
    options: {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next'
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 8
            },
            1200: {
                slidesPerView: 3
            }
        }
    },
    swiper: null,

    init() {
        if(this.container) {
            this.swiper = new Swiper(this.container, this.options);
        }
    }
};

const InnovationSlider = { 
    container: document.querySelector('.innovation-slider'),
    options: {
        slidesPerView: 'auto',
        spaceBetween: 10,
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next'
        },
        scrollbar: {
            el: ".swiper-scrollbar",
        },
        breakpoints: {
            1200: {
                slidesPerView: 4,
                spaceBetween: 8
            }
        }
    },
    swiper: null,

    init() {
        if(this.container) {
            this.swiper = new Swiper(this.container, this.options);
        }
    }
};

const Geography = {
    container: document.querySelector('.geography'),
    addresses: document.querySelectorAll('.geo-address'),
    planet: document.querySelector('.geography__planet'),
    addressPopup: document.querySelector('.geography__address-popup'),
    mark: document.querySelector('.geography__mark'),

    init() {
        if(this.container) {
            this.createAddressPopup();
            this.bindListeners();
        }
    },
    bindListeners() {
        if(this.addresses.length) {
            this.addresses.forEach(addressEl => {
                addressEl.addEventListener('mouseenter', (evt) => this.showAddressPopup(evt));
                addressEl.addEventListener('click', (evt) => {
                    if(evt.currentTarget.classList.contains('active')) {
                        evt.currentTarget.classList.remove('active');
                    } else {
                        this.addresses.forEach(el => el.classList.remove('active'));
                        evt.currentTarget.classList.toggle('active');
                    }
                    
                    this.setMarkPosition(evt);
                });
            });
        }
    },
    
    showAddressPopup(evt) {
        let container = evt.currentTarget;

        this.addressPopup.innerHTML = container.querySelector('.geo-address__content').innerHTML;
        
        if(this.addressPopup.classList.contains('show')) {
            this.addressPopup.classList.remove('show');

            setTimeout(() => {
                this.addressPopup.classList.add('show');
            }, 500);
        } else {
            this.addressPopup.classList.add('show');
        }

        
    },

    setMarkPosition(evt) {
        let coords = JSON.parse(evt.currentTarget.dataset.markCoords);

        this.mark.style.top = coords.top;
        this.mark.style.left = coords.left;
    },
    createAddressPopup() {
        this.addressPopup = document.createElement('div');
        this.addressPopup.className = 'geography__address-popup';

        this.planet.append(this.addressPopup);
    }
};

var initSelect = () => {
    var selects = Array.from(document.querySelectorAll(".select"));

    if (selects.length < 1) return;

    selects.forEach((el) => {
        var className = `select_item--${el.dataset.color}`;
        var choices = new Choices(el, {
            silent: false,
            shouldSort: false,
            searchEnabled: false,
            itemSelectText: "",
            classNames: {
                containerOuter: `choices select_item ${className}`,
            },
        });

        el.addEventListener("choice", () => {
            el.nextElementSibling.classList.add("selection-completed");
        });
    });
};

// Чтобы использовать функцию smoothScroll:
// 1. В html-файле добавить id элементу, к которому должен произойти скролл.
// 2. Вызывать функцию smoothScroll();
// btnsSelector - селектор кнопок (к примеру, ".assortment__contact"), по клику на которые будет происходить скролл.
var smoothScroll = (btnsSelector) => {
    var btns = Array.from(document.querySelectorAll(btnsSelector));

    if (btns.length < 1) return;

    var scrollHandler = (e) => {
        e.preventDefault();

        var headerHeight = document.querySelector(".header").scrollHeight;
        var gap = 10;

        var target = document.getElementById(
            e.target.getAttribute("href").slice(1)
        );

        if (!target) return;

        var elementPosition =
            target.getBoundingClientRect().top - headerHeight - gap;

        window.scrollBy({
            top: elementPosition,
            behavior: "smooth",
        });
    };

    btns.forEach((btn) => {
        btn.addEventListener("click", scrollHandler);
    });
};

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

var initGofroupakovka = () => {
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

var initCarton = () => {
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

var assortmentLogic = () => {
    var assortment_nav = document.querySelector(".assortment-nav");

    if (!assortment_nav) return;

    initAssortment();
    initAssortmentSliderToggling(assortment_nav);
    initAssortmentSliders();
};

var initBenefitsSlider = () => {
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

var initTeamsSlider = () => {
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

var initBranchesAccordion = () => {
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

var initGeoBtns = () => {
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

var initPinMap = () => {
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

var initDescription = () => {
    var radio_btns = Array.from(
        document.querySelectorAll(".description__radio")
    );
    var inners = Array.from(
        document.querySelectorAll(".description__content_inner")
    );

    if (radio_btns.length < 1 || inners.length < 1) return;

    radio_btns.forEach((btn) => {
        btn.addEventListener("input", () => {
            inners.forEach((inner) =>
                inner.dataset.value === btn.value
                    ? inner.classList.add("active")
                    : inner.classList.remove("active")
            );
        });
    });
};

var varietyLogic = () => {
    var btn = document.querySelector(".variety__more");

    if (!btn) return;

    var items = Array.from(document.querySelectorAll(".variety__item"));

    var startIndex = 5;
    var endIndex = 9;

    btn.addEventListener("click", () => {
        items.forEach((item, idx) => {
            if (idx >= startIndex && idx <= endIndex) {
                item.style.display = "flex";
            }
        });

        startIndex += 5;
        endIndex += 9;

        if (endIndex >= items.length) {
            btn.style.display = "none";
        }
    });
};

var divisionsLogic = () => {
    var btns = Array.from(document.querySelectorAll(".divisions__cinput"));
    var fieldsets = Array.from(document.querySelectorAll(".divisions__groups"));

    if (btns.length < 1 || fieldsets.length < 1) return;

    var innerButtons = fieldsets
        .filter((f) => f.classList.contains("active"))[0]
        .querySelectorAll(".divisions__oinput");

    var innerButtonsHandler = (e) => {
        innerButtons.forEach((b) =>
            b.parentElement.parentElement.classList.remove("active")
        );
        e.target.parentElement.parentElement.classList.add("active");
    };

    innerButtons.length > 0 &&
        innerButtons.forEach((btn) => {
            btn.addEventListener("input", innerButtonsHandler);
        });

    btns.forEach((btn) => {
        btn.addEventListener("input", () => {
            innerButtons.length > 0 &&
                innerButtons.forEach((btn) => {
                    btn.removeEventListener("input", innerButtonsHandler);
                });

            fieldsets.forEach((fieldset) => {
                if (btn.value === fieldset.dataset.value) {
                    fieldset.classList.add("active");

                    innerButtons = Array.from(
                        fieldset.querySelectorAll(".divisions__oinput")
                    );

                    innerButtons.length > 0 &&
                        innerButtons.forEach((btn) => {
                            btn.addEventListener("input", innerButtonsHandler);
                        });
                } else {
                    fieldset.classList.remove("active");
                }
            });
        });
    });
};

// export var divisionsContactsLogic = () => {
//     var btns = Array.from(document.querySelectorAll(".divisions__oinput"));

//     if (btns.length < 1) return;

//     btns.forEach((btn) => {
//         btn.addEventListener("input", () => {
//             btns.forEach((b) =>
//                 b.parentElement.parentElement.classList.remove("active")
//             );
//             btn.parentElement.parentElement.classList.add("active");
//         });
//     });
// };

var fleetLogic = () => {
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

const DetailSlider = {
    container: document.querySelector('.detail-slider__main'),
    thumbsContainer: document.querySelector('.detail-slider__thumbs'),

    swiper: null,
    thumbsSwiper: null,

    init() {
        if(this.thumbsContainer) {
            this.thumbsSwiper = new Swiper(this.thumbsContainer, {
                slidesPerView: 4
            });
        }

        this.swiper = new Swiper(this.container, {
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            thumbs: {
                swiper: this.thumbsSwiper
            }
        });
    }
};

const StrategySlider = {
    container: document.querySelector('.section-strategy__slider'),
    
    options: {
        slidesPerView: 'auto',
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        }
    },
    swiper: null,

    init() {
        if(this.container) {
            this.swiper = new Swiper(this.container, this.options);
        }
    }
};

var initRecycling = () => {
    var recycling_page = document.querySelector(".recycling-page");

    if (recycling_page) {
        var scrollList = [".variety__handover"];

        scrollList.forEach((item) => smoothScroll(item));
    }
};

var initCurrentProjects = () => {
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

var initPossibilitiesSlider = () => {
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

var initOurPartners = () => {
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

var initPartnership = () => {
    var partnership_page = document.querySelector(".partnership-page");

    if (partnership_page) {
        var scrollList = [".page_intro__next", ".invite__link"];

        scrollList.forEach((item) => smoothScroll(item));
    }
};

var initAdvantagesAnimation = () => {
    var advantages = document.querySelector(".advantages");

    if (!advantages) return;

    gsap.registerPlugin(ScrollTrigger);

    // var box = document.querySelector(".advantages__box");
    // var roll = document.querySelector(".advantages__roll");
    // var ball = document.querySelector(".advantages_ball");
    // var slogan = document.querySelector(".advantages__slogan");
    // var title = document.querySelector(".advantages__title");
    // var wrapper = document.querySelector(".advantages__wrapper");
    // var bg = document.querySelector(".advantages__bg");
    // var items = Array.from(document.querySelectorAll(".advantages__item"));

    // var elements = [box, roll, ball, slogan, title, wrapper, bg, ...items];

    var createDesktopAnimation = () => {
        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".advantages",
                pin: true,
                start: "top top",
                end: "+=500%",
                scrub: 1,
                invalidateOnRefresh: true,
            },
        });

        tl.set([".advantages__roll", ".advantages_ball"], {
            filter: "blur(80px)",
            autoAlpha: 0,
            scale: 0.8,
        })
            .set(".advantages__bg", { x: "-50%" })
            .set(".advantages__slogan", { autoAlpha: 0, scale: 0.5 })
            .to(".advantages__box", { scale: 0.8, duration: 4 })
            .to({}, { duration: 4 })
            .to(".advantages__item", {
                autoAlpha: 1,
                duration: 2,
                stagger: 0.2,
            })
            .to({}, { duration: 5 })
            .to(".advantages__box", {
                filter: "blur(50px)",
                scale: 0.6,
                autoAlpha: 0,
                duration: 3,
            })
            .to(
                ".advantages__roll",
                {
                    filter: "blur(0px)",
                    autoAlpha: 1,
                    scale: 1,
                    duration: 3,
                },
                "<"
            )
            .to({}, { duration: 5 })
            .to(".advantages__roll", {
                filter: "blur(50px)",
                scale: 0.6,
                autoAlpha: 0,
                duration: 3,
            })
            .to(
                ".advantages_ball",
                {
                    filter: "blur(0px)",
                    autoAlpha: 1,
                    scale: 1,
                    duration: 3,
                },
                "<"
            )
            .to({}, { duration: 4 })
            .to(".advantages__item", {
                autoAlpha: 0,
                duration: 2,
                stagger: 0.2,
            })
            .to(
                [".advantages__title", ".advantages_ball"],
                {
                    filter: "blur(50px)",
                    scale: 0.6,
                    autoAlpha: 0,
                    duration: 2,
                },
                "-=0.5"
            )
            .to(".advantages__wrapper", { opacity: 0, duration: 3 }, "<")
            .to(
                ".advantages__slogan",
                {
                    autoAlpha: 1,
                    scale: 1,
                    duration: 3,
                },
                "<"
            )
            .to({}, { duration: 5 });

        return () => tl.revert();
        // return () => resetProps(elements);
    };

    var createTabletAnimation = () => {
        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".advantages",
                pin: true,
                start: "-=90 top",
                end: "+=500%",
                scrub: 1,
                invalidateOnRefresh: true,
            },
        });

        tl.set([".advantages__roll", ".advantages_ball"], {
            filter: "blur(80px)",
            autoAlpha: 0,
            scale: 0.95,
        })
            .set(".advantages__bg", { x: "-50%" })
            .set(".advantages__slogan", { autoAlpha: 0, scale: 0.5 })
            .to(".advantages__bg", { x: "-20%", duration: 4 })
            .to(".advantages__box", { scale: 0.8, duration: 4 }, "<")
            .to({}, { duration: 4 })
            .to(".advantages__item", {
                autoAlpha: 1,
                duration: 2,
                stagger: 0.2,
            })
            .to({}, { duration: 5 })
            .to(".advantages__box", {
                filter: "blur(50px)",
                scale: 0.6,
                autoAlpha: 0,
                duration: 3,
            })
            .to(
                ".advantages__roll",
                {
                    filter: "blur(0px)",
                    autoAlpha: 1,
                    scale: 1,
                    duration: 3,
                },
                "<"
            )
            .to({}, { duration: 5 })
            .to(".advantages__roll", {
                filter: "blur(50px)",
                scale: 0.6,
                autoAlpha: 0,
                duration: 3,
            })
            .to(
                ".advantages_ball",
                {
                    filter: "blur(0px)",
                    autoAlpha: 1,
                    scale: 1,
                    duration: 3,
                },
                "<"
            )
            .to({}, { duration: 4 })
            .to(".advantages__item", {
                autoAlpha: 0,
                duration: 2,
                stagger: 0.2,
            })
            .to(
                [".advantages__title", ".advantages_ball"],
                {
                    filter: "blur(50px)",
                    scale: 0.6,
                    autoAlpha: 0,
                    duration: 2,
                },
                "-=0.5"
            )
            .to(".advantages__wrapper", { opacity: 0, duration: 3 }, "<")
            .to(
                ".advantages__slogan",
                {
                    autoAlpha: 1,
                    scale: 1,
                    duration: 3,
                },
                "<"
            )
            .to({}, { duration: 5 });

        return () => tl.revert();
        // return () => resetProps(elements);
    };

    var createMobileAnimation = () => {
        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".advantages",
                pin: true,
                start: "-=90 top",
                end: "+=350%",
                scrub: 1,
                invalidateOnRefresh: true,
            },
        });

        tl.set(".advantages__slogan", { autoAlpha: 0, scale: 0.5 })
            .set(".advantages__bg", { x: "-50%" })
            .to(".advantages__bg", {
                scale: 0.8,
                filter: "blur(40px)",
                autoAlpha: 0,
                duration: 4,
            })
            .to(".advantages__item", {
                autoAlpha: 1,
                duration: 2,
                stagger: 0.2,
            })
            .to({}, { duration: 5 })
            .to(".advantages__item", {
                autoAlpha: 0,
                duration: 2,
                stagger: 0.2,
            })
            .to(
                ".advantages__title",
                {
                    filter: "blur(50px)",
                    scale: 0.6,
                    autoAlpha: 0,
                    duration: 2,
                },
                "-=0.5"
            )
            .to(".advantages__wrapper", { opacity: 0, duration: 3 }, "<")
            .to(
                ".advantages__slogan",
                {
                    autoAlpha: 1,
                    scale: 1,
                    duration: 3,
                },
                "<"
            )
            .to({}, { duration: 5 });

        return () => tl.revert();
        // return () => resetProps(elements);
    };

    var mm = gsap.matchMedia();

    mm.add("(min-width: 1200px)", createDesktopAnimation);
    mm.add("(min-width: 768px) and (max-width: 1199px)", createTabletAnimation);
    mm.add("(max-width: 767px)", createMobileAnimation);
};

var toggleAdvantagesDescriptions = () => {
    var advantages_headers = Array.from(
        document.querySelectorAll(".advantages__header")
    );

    if (advantages_headers.length < 1) return;

    advantages_headers.forEach((header) => {
        header.addEventListener("click", () => {
            var item = header.parentElement;
            var isActive = item.classList.contains("active");
            if (!isActive) {
                advantages_headers.forEach((h) => {
                    h.parentElement.classList.remove("active");
                });
                item.classList.add("active");
            } else {
                item.classList.remove("active");
            }
        });
    });
};

const BannerSlider = {
    container: document.querySelectorAll('.banner-slider'),

    options: {
        slidesPerView: 1,
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next'
        }
    },

    init() {
        if(this.container.length) {
            this.container.forEach(el => {
                new Swiper(el, this.options);
            });
        }
    }
};

const AboutPartnersSlider = {
    container: document.querySelector('.about-partners__slider'),

    options: {
        slidesPerView: 1,
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next'
        },
        breakpoints: {
            768: {
                slidesPerView: 3
            }
        }
    },

    swiper: false,

    init() {
        if(this.container) {
            this.swiper = new Swiper(this.container, this.options);
        }
    }
};

const InputFile = {
    selector: document.querySelectorAll('.file-upload'),

    init() {
        if(this.selector.length) {
            this.selector.forEach(item => fileUploder(item).init());
        }
    }
};

const fileUploder = (selector) => {
    let object = {
        container: selector,
        input: selector.querySelector('.file-upload__input'),
        preview: null,

        init() {
            this.bindListeners();
        },

        bindListeners() {
            this.input.addEventListener('input', (evt) => this.renderFilePreview(evt.target.files[0]));
        },

        renderFilePreview(file) {

            if(!file && this.preview) {
                this.preview.remove();
                this.preview = null;
                return
            }

            if(!this.preview) {
                let div = document.createElement('div');
                div.className = 'file-upload__preview';

                let span = document.createElement('span');
                    span.className = 'file-upload__preview-text';
                    span.innerText = file.name;

                let button = document.createElement('button');
                    button.className = 'file-upload__preview-remove';
                    button.setAttribute('type', 'button');
                    button.addEventListener('click', () => this.removeFile());

                div.append(span);
                div.append(button);

                this.preview = div;
                this.container.append(this.preview);
            }

            this.preview.querySelector('span').innerText = file.name;
        },
        removeFile () {
            this.input.value = '';
            this.input.dispatchEvent(new Event('input'));
        }
    };

    return object
};

const Tabs = {
    selector: document.querySelectorAll("[data-tabs]"),

    init() {
        for (const [i, tabs] of [...this.selector].entries()) {
            tabs.setAttribute("id", `data-tabs-${i}`);
            new Tabby(`#data-tabs-${i}`);
        }
    },
};

const Modal = {
    trigger: document.querySelectorAll("[data-modal]"),

    init() {
        if (this.trigger.length) {
            this.trigger.forEach((button) => {
                button.addEventListener("click", function (evt) {
                    evt.preventDefault();

                    let src = this.getAttribute("href") || this.dataset.modal;

                    new Fancybox(
                        [
                            {
                                src,
                                type: this.dataset.type || "inline",
                            },
                        ],
                        {
                            mainClass: "fancybox__modal",
                            tpl: {
                                closeButton: `
                                <button data-fancybox-close class="fancybox__modal-close btn_round btn_close_white" title="{{CLOSE}}"></button>
                            `,
                            },
                        }
                    );
                });
            });
        }
    },
};

const ModalVideo = {
    trigger: document.querySelectorAll("[data-video]"),

    init() {
        if (this.trigger.length) {
            this.trigger.forEach((button) => {
                button.addEventListener("click", function (evt) {
                    evt.preventDefault();

                    let src = this.getAttribute("href") || this.dataset.video;

                    new Fancybox(
                        [
                            {
                                src,
                                type: this.dataset.type,
                            },
                        ],
                        {
                            mainClass: "fancybox__modal fancybox__modal_video",
                            tpl: {
                                closeButton: `
                                <button data-fancybox-close class="fancybox__modal-close btn_round btn_close_white" title="{{CLOSE}}"></button>
                            `,
                            },
                        }
                    );
                });
            });
        }
    },
};

const App = {
    init() {
        Header.init();
        MainHeroSlider.init();
        MainAdvantagesSlider.init();
        NewsSlider.init();
        EventsSlider.init();
        ReviewsSlider.init();
        PartnersSlider.init();
        VideoSlider.init();
        InnovationSlider.init();
        Geography.init();
        DetailSlider.init();
        StrategySlider.init();
        BannerSlider.init();
        AboutPartnersSlider.init();

        Tabs.init();
        Modal.init();
        ModalVideo.init();
        InputFile.init();

        const accordions = Array.from(
            document.querySelectorAll(".accordion-container")
        );

        if (accordions.length) {
            new Accordion(accordions);
        }

        initSelect();
        initGofroupakovka();
        initCarton();
        assortmentLogic();
        initBranchesAccordion();
        initGeoBtns();
        initPinMap();
        initBenefitsSlider();
        initTeamsSlider();
        initDescription();
        varietyLogic();
        divisionsLogic();
        // divisionsContactsLogic();
        fleetLogic();
        initRecycling();
        initCurrentProjects();
        initPossibilitiesSlider();
        initOurPartners();
        initPartnership();
        initAdvantagesAnimation();
        toggleAdvantagesDescriptions();
    },
};

document.addEventListener("DOMContentLoaded", App.init);

//# sourceMappingURL=app.js.map
