import { Printer } from "./Printer";

export class PrinterForm {
  constructor() {
    this.printTech = document.getElementById("print-tech");
    this.printMedia = document.getElementById("print-media");
    this.printColor = document.getElementById("print-color");
  }
  show() {
    this.printTech.closest(".modal__control").style.display = "";
    this.printMedia.closest(".modal__control").style.display = "";
    this.printColor.closest(".modal__control").style.display = "";
  }
  hide() {
    this.printTech.closest(".modal__control").style.display = "none";
    this.printMedia.closest(".modal__control").style.display = "none";
    this.printColor.closest(".modal__control").style.display = "none";
  }
}
