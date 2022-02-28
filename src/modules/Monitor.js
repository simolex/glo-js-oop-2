import { Equipment } from "./equipment";

export class Monitor extends Equipment {
  constructor(nameEquip, brandEquip, modelEquip, numberEquip, dateEquip, monitorSize, monitorResolution) {
    super({ nameEquip, brandEquip, modelEquip, numberEquip, dateEquip });
    this.monitorSize = monitorSize;
    this.monitorResolution = monitorResolution;
  }
}
