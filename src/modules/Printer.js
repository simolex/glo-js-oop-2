import { Equipment } from "./equipment";

export class Printer extends Equipment {
  constructor({ nameEquip, brandEquip, modelEquip, numberEquip, dateEquip, printTechnology, mediaSize, printColor }) {
    super({ nameEquip, brandEquip, modelEquip, numberEquip, dateEquip });
    this.printTechnology = printTechnology;
    this.mediaSize = mediaSize;
    this.printColor = printColor;
  }
}
