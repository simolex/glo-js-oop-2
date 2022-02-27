import { ComputerForm } from "./ComputerForm";
import { MonitorForm } from "./MonitorForm";

const selectList = {
  "type-computer": ComputerForm,
  "type-printer": Object,
  "type-monitor": MonitorForm,
  "type-scanner": Object,
};
export class Form {
  constructor() {
    this._formControl = document.getElementById("equipment-form");
    this._secondForms = {};
    this.inputControls = document.querySelectorAll(".modal__control>input[type=text]");
    this.dateControl = document.querySelector(".modal__control>input[type=date]");
    this.selectControl = document.querySelector(".modal__control>select");
    this._showSecondForm(this.selectControl.value);

    this.selectControl.addEventListener("change", (e) => {
      if (e.target.value) {
        this._showSecondForm(e.target.value);
      }
    });
    this._formControl.addEventListener("submit", (e) => {
      e.preventDefault();
      console.log("submit");
    });

    // this.inputControls[0].addEventListener("click", () => {
    //   const a = new Event("updatetable");
    //   window.dispatchEvent(a);
    // });
  }
  _showSecondForm(type) {
    for (let typeForm in this._secondForms) {
      this._secondForms[typeForm].hide();
    }

    if (!this._secondForms[type]) {
      this._secondForms[type] = new selectList[type]();
    }
    this._secondForms[type].show();
  }
}
