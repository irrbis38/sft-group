import { smoothScroll } from "../../assets/js/scripts/smooth-scroll";
export var initRecycling = () => {
    var recycling_page = document.querySelector(".recycling-page");

    if (recycling_page) {
        var scrollList = [".variety__handover"];

        scrollList.forEach((item) => smoothScroll(item));
    }
};
