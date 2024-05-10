export var varietyLogic = () => {
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
