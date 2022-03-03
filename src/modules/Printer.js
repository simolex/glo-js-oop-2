import { Equipment } from "./Equipment";

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
}
