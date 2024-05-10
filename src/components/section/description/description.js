export var initDescription = () => {
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
