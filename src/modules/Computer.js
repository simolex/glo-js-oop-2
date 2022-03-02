import { Equipment } from "./Equipment";

export class Computer extends Equipment {
  constructor({
    nameEquip,
    brandEquip,
    modelEquip,
    numberEquip,
    dateEquip,
    unitType,
    unitTypeName,
    pcMemory,
    pcCpu,
    pcHdd,
  }) {
    super({ nameEquip, brandEquip, modelEquip, numberEquip, dateEquip, unitType, unitTypeName });
    this.pcMemory = pcMemory;
    this.pcCpu = pcCpu;
    this.pcHdd = pcHdd;
  }
}
