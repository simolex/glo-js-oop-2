import { Equipment } from "./Equipment";

export class Computer extends Equipment {
  constructor({ unitName, unitBrand, unitModel, unitNumber, unitDate, unitType, pcMemory, pcCpu, pcHdd }) {
    super({ unitName, unitBrand, unitModel, unitNumber, unitDate, unitType });
    this._pcMemory = pcMemory || "";
    this._pcCpu = pcCpu || "";
    this._pcHdd = pcHdd || "";
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
  toJSON() {
    return {
      unitName: this._unitName,
      unitBrand: this._unitBrand,
      unitModel: this._unitModel,
      unitNumber: this._unitNumber,
      unitDate: this._unitDate,
      unitType: this._unitType,
      pcMemory: this._pcMemory,
      pcCpu: this._pcCpu,
      pcHdd: this._pcHdd,
    };
  }
}
