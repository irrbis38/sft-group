import { smoothScroll } from "../../assets/js/scripts/smooth-scroll";

export var initPartnership = () => {
    var partnership_page = document.querySelector(".partnership-page");

    if (partnership_page) {
        var scrollList = [".page_intro__next", ".invite__link"];

        scrollList.forEach((item) => smoothScroll(item));
    }
};
