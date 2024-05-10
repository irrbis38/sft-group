// Чтобы использовать функцию smoothScroll:
// 1. В html-файле добавить id элементу, к которому должен произойти скролл.
// 2. Вызывать функцию smoothScroll();
// btnsSelector - селектор кнопок (к примеру, ".assortment__contact"), по клику на которые будет происходить скролл.
export var smoothScroll = (btnsSelector) => {
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
