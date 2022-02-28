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
    this.printTechnology = printTechnology;
    this.mediaSize = mediaSize;
    this.printColor = printColor;
  }
}
