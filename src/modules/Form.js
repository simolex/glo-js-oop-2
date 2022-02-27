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
    this._secondForms = {};
    this.inputControls = document.querySelectorAll(".modal__control>input[type=text]");
    this.dateControl = document.querySelector(".modal__control>input[type=date]");
    this.selectControl = document.querySelector(".modal__control>select");

    this.selectControl.addEventListener("change", (e) => {
      if (e.target.value) {
        this._showSecondForm(e.target.value);
      }
    });
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
