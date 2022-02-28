import { Equipment } from "./equipment";

export class Computer extends Equipment {
  constructor(nameEquip, brandEquip, modelEquip, numberEquip, dateEquip, pcMemory, pcCpu, pcHdd) {
    super({ nameEquip, brandEquip, modelEquip, numberEquip, dateEquip });
    this.pcMemory = pcMemory;
    this.pcCpu = pcCpu;
    this.pcHdd = pcHdd;
  }
}
