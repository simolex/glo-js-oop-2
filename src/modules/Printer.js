import { Equipment } from "./equipment";

export class Printer extends Equipment {
  constructor({
    nameEquip,
    brandEquip,
    modelEquip,
    numberEquip,
    dateEquip,
    unitType,
    unitTypeName,
    printTechnology,
    mediaSize,
    printColor,
  }) {
    super({ nameEquip, brandEquip, modelEquip, numberEquip, dateEquip, unitType, unitTypeName });
    this._printTechnology = printTechnology;
    this._mediaSize = mediaSize;
    this._printColor = printColor;
  }
  set printTechnology(printTechnology) {
    this._printTechnology = printTechnology;
  }
  get printTechnology() {
    return this._printTechnology;
  }
  set mediaSize(mediaSize) {
    this._mediaSize = mediaSize;
  }
  get mediaSize() {
    return this._mediaSize;
  }
  set printColor(printColor) {
    this._printColor = printColor;
  }
  get printColor() {
    return this._printColor;
  }
  toJSON() {
    return {
      nameEquip: this._nameEquip,
      brandEquip: this._brandEquip,
      modelEquip: this._modelEquip,
      numberEquip: this._numberEquip,
      dateEquip: this._dateEquip,
      unitType: this._unitType,
      unitTypeName: this._unitTypeName,
      printTechnology: this._printTechnology,
      mediaSize: this._mediaSize,
      printColor: this._printColor,
    };
  }
}
