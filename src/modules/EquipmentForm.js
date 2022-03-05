//import { instanceTable } from "./MainTable";
import { ComputerForm } from "./ComputerForm";
import { MonitorForm } from "./MonitorForm";
import { PrinterForm } from "./PrinterForm";

const selectList = {
  "type-computer": ComputerForm,
  "type-monitor": MonitorForm,
  "type-printer": PrinterForm,
};

export class EquipmentForm {
  constructor() {
    this.nameEquip = document.getElementById("unit-name");
    this.brandEquip = document.getElementById("unit-brand");
    this.modelEquip = document.getElementById("unit-model");
    this.numberEquip = document.getElementById("unit-number");
    this.dateEquip = document.getElementById("unit-date");

    this._secondForms = {};
    this._formControl = document.getElementById("equipment-form");
    this._showSecondForm(this.unitType.value);

    this.unitType.addEventListener("change", (e) => {
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

  init(parent) {}

  getObject() {
    return this._secondForms[this.unitType.value].getObject({
      nameEquip: this.nameEquip.value,
      brandEquip: this.brandEquip.value,
      modelEquip: this.modelEquip.value,
      numberEquip: this.numberEquip.value,
      dateEquip: this.dateEquip.value,
      unitType: this.unitType.value,
      unitTypeName: this.unitType.options[this.unitType.selectedIndex].text + "",
    });
  }
}
