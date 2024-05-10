import { Header } from "../../components/header/header";
import { EventsSlider } from "../../components/slider/events/events";
import { PartnersSlider } from "../../components/slider/partners/partners";
import { MainAdvantagesSlider } from "../../components/slider/main-advantages/main-advantages";
import { MainHeroSlider } from "../../components/slider/main-hero/main-hero";
import { NewsSlider } from "../../components/slider/news/news";
import { ReviewsSlider } from "../../components/slider/reviews/reviews";
import { VideoSlider } from "../../components/slider/video/video";
import { InnovationSlider } from "../../components/slider/innovation/innovation";
import { Geography } from "../../components/section/geography/geography";
import { initSelect } from "../../components/form/select/select";
import { initGofroupakovka } from "../../pages/gofroupakovka/gofroupakovka";
import { initCarton } from "../../pages/carton/carton";
import { assortmentLogic } from "../../components/section/assortment/assortment";
import { initBenefitsSlider } from "../../components/section/benefits/benefits";
import { initTeamsSlider } from "../../components/slider/team/team";
import {
    initBranchesAccordion,
    initGeoBtns,
    initPinMap,
} from "../../components/section/branches/branches";
import { initDescription } from "../../components/section/description/description";
import { varietyLogic } from "../../components/section/variety/variety";
import {
    divisionsLogic,
    // divisionsContactsLogic,
} from "../../components/section/divisions/divisions";
import { fleetLogic } from "../../components/section/fleet/fleet";
import { DetailSlider } from "../../components/slider/detail/detail";
import { StrategySlider } from "../../components/slider/strategy/strategy";
import { initRecycling } from "../../pages/recycling/recycling";
import { initCurrentProjects } from "../../components/slider/current-projects/current-projects";
import { initPossibilitiesSlider } from "../../components/slider/possibilities/possibilities";
import { initOurPartners } from "../../components/slider/our-partners/our-partners";
import { initPartnership } from "../../pages/partnership/partnership";
import {
    initAdvantagesAnimation,
    toggleAdvantagesDescriptions,
} from "../../components/section/advantages/advantages";
import { BannerSlider } from "../../components/slider/banner/banner";
import { AboutPartnersSlider } from "../../components/slider/about-partners/about-partners";
import { InputFile } from "../../components/form/file/file";

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
