import { EquipmentForm } from "./EquipmentForm";

export class Modal {
  constructor() {
    this.content = document.getElementById("modal-form");
    this.buttonClose = this.content.querySelector(".modal-close");
    this.form = new EquipmentForm();
    this.form.init(this);
    this.content.addEventListener("click", (e) => {
      if (!e.target.closest(".modal") && e.target.classList.contains("overlay")) {
        this.hide();
      }
    });
    this.buttonClose.addEventListener("click", () => {
      this.hide();
    });
  }
  show(onSave, onError) {
    this._onSave = onSave;
    this._onError = onError;
    console.log(onSave, onError);

    this.content.style.display = "flex";
  }
  hide() {
    this.content.style.display = "";
  }
}
