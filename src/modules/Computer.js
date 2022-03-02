import { Equipment } from "./equipment";

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
    this._pcMemory = pcMemory;
    this._pcCpu = pcCpu;
    this._pcHdd = pcHdd;
  }
  set pcMemory(pcMemory) {
    this._pcMemory = pcMemory;
  }
  get pcMemory() {
    return this._pcMemory;
  }
  set pcCpu(pcCpu) {
    this._pcCpu = pcCpu;
  }
  get pcCpu() {
    return this._pcCpu;
  }
  set pcHdd(pcHdd) {
    this._pcHdd = pcHdd;
  }
  get pcHdd() {
    return this._pcHdd;
  }
}
