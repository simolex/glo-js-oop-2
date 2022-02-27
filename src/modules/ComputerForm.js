import { Computer } from "./Computer";

export class ComputerForm {
  constructor() {
    this.pcMemory = document.getElementById("pc-memory");
    this.pcCpu = document.getElementById("pc-cpu");
    this.pcHdd = document.getElementById("pc-hdd");
  }
  show() {
    this.pcMemory.closest(".modal__control").style.display = "";
    this.pcCpu.closest(".modal__control").style.display = "";
    this.pcHdd.closest(".modal__control").style.display = "";
  }
  hide() {
    this.pcMemory.closest(".modal__control").style.display = "none";
    this.pcCpu.closest(".modal__control").style.display = "none";
    this.pcHdd.closest(".modal__control").style.display = "none";
  }
}
