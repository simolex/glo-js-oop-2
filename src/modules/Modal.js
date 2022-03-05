export class Modal {
  constructor(typeId = "type-computer") {
    this._content = document.getElementById("modal-form");
    this._formControl = document.getElementById("equipment-form");
    this._unitType = document.getElementById("unit-type");
    this._allSecondForms = document.querySelectorAll(".modal__subtype");

    this._content.addEventListener("click", (e) => {
      if (!e.target.closest(".modal") && e.target.classList.contains("overlay")) {
        this.hide();
      } else if (e.target.closest(".modal-close")) {
        this.hide();
      }
    });

    this._unitType.addEventListener("change", (e) => {
      this._showSecondForm(e.target.value);
    });
    this._showSecondForm(typeId);

    this._formControl.addEventListener("submit", (e) => {
      e.preventDefault();
      new FormData(this._formControl);
      this.hide();
    });

    this._formControl.addEventListener("formdata", (e) => {
      this._onSave(e.formData);
    });
  }

  _showSecondForm(typeId) {
    this._allSecondForms.forEach((subform) => {
      if (typeId === subform.id) {
        subform.style.display = "";
      } else {
        subform.style.display = "none";
      }
    });
  }

  show(onSave, onError) {
    this._onSave = onSave;
    this._onError = onError;

    this._content.style.display = "flex";
  }

  hide() {
    this._onSave(false);
    this._content.style.display = "";
  }
}
