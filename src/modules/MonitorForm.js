import { Monitor } from "./Monitor";

export class MonitorForm {
  constructor() {
    this.monitorSize = document.getElementById("monitor-size");
    this.monitorResolution = document.getElementById("monitor-resolution");
  }
  show() {
    this.monitorSize.closest(".modal__control").style.display = "";
    this.monitorResolution.closest(".modal__control").style.display = "";
  }
  hide() {
    this.monitorSize.closest(".modal__control").style.display = "none";
    this.monitorResolution.closest(".modal__control").style.display = "none";
  }
  getObject(parentValue) {
    return new Monitor({
      ...parentValue,
      monitorSize: this.monitorSize.value,
      monitorResolution: this.monitorResolution.value,
    });
  }
}
