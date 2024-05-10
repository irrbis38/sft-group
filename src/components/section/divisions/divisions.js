export var divisionsLogic = () => {
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
