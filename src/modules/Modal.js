import { Form } from "./Form";
export class Modal {
  constructor() {
    this.content = document.getElementById("modal-form");
    this.buttonClose = this.content.querySelector(".modal-close");
    this.form = new Form();
    this.content.addEventListener("click", (e) => {
      if (!e.target.closest(".modal") && e.target.classList.contains("overlay")) {
        this.hide();
      }
    });
    this.buttonClose.addEventListener("click", () => {
      this.hide();
    });
  }
  show() {
    this.content.style.display = "flex";
  }
  hide() {
    this.content.style.display = "";
  }
}
