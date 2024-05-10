export var initSelect = () => {
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
