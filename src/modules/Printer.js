import { Equipment } from "./Equipment";

export class Printer extends Equipment {
  constructor({
    unitName,
    unitBrand,
    unitModel,
    unitNumber,
    unitDate,
    unitType,
    printTechnology,
    mediaSize,
    printColor,
  }) {
    super({ unitName, unitBrand, unitModel, unitNumber, unitDate, unitType });
    this._printTechnology = printTechnology || "";
    this._mediaSize = mediaSize || "";
    this._printColor = printColor || "";
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
      unitName: this._unitName,
      unitBrand: this._unitBrand,
      unitModel: this._unitModel,
      unitNumber: this._unitNumber,
      unitDate: this._unitDate,
      unitType: this._unitType,
      printTechnology: this._printTechnology,
      mediaSize: this._mediaSize,
      printColor: this._printColor,
    };
  }
}
