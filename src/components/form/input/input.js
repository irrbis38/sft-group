export var initInputs = () => {
  // init mask inputs
  var initMaskaInput = () => {
    const { MaskInput } = Maska;
    const maskIinput = new MaskInput("[data-maska]");
  };

  var maskedInput = document.querySelectorAll("[data-maska]");

  maskedInput && initMaskaInput();

  var search_blocks = Array.from(document.querySelectorAll(".input_item__search"));

  if (search_blocks.length > 0) {
    search_blocks.forEach((el) => {
      var input = el.querySelector("input");

      input.addEventListener("input", (e) => {
        input.value.length > 0 ? el.classList.add("non-empty") : el.classList.remove("non-empty");
      });
    });

    var clearBtns = document.querySelectorAll(".input_item__clear");

    clearBtns.forEach((btn) =>
      btn.addEventListener("click", () => {
        var input = btn.previousElementSibling;
        var block = btn.parentElement;

        input.value = "";
        block.classList.remove("non-empty");
      })
    );
  }

  // input date

  var dateInputs = Array.from(document.querySelectorAll(".input_item__date input"));

  if (dateInputs.length > 0) {
    var datePickers = dateInputs.map((dInput) => new AirDatepicker(dInput));
  }
};
