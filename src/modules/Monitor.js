import { Equipment } from "./equipment";

export class Monitor extends Equipment {
  constructor({
    nameEquip,
    brandEquip,
    modelEquip,
    numberEquip,
    dateEquip,
    unitType,
    unitTypeName,
    monitorSize,
    monitorResolution,
  }) {
    super({ nameEquip, brandEquip, modelEquip, numberEquip, dateEquip, unitType, unitTypeName });
    this.monitorSize = monitorSize;
    this.monitorResolution = monitorResolution;
  }
}
