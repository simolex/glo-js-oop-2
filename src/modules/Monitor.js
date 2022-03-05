import { Equipment } from "./Equipment";

export class Monitor extends Equipment {
  constructor({ unitName, unitBrand, unitModel, unitNumber, unitDate, unitType, monitorSize, monitorResolution }) {
    super({ unitName, unitBrand, unitModel, unitNumber, unitDate, unitType });
    this._monitorSize = monitorSize || "";
    this._monitorResolution = monitorResolution || "";
  }

  set monitorSize(monitorSize) {
    this._monitorSize = monitorSize;
  }
  get monitorSize() {
    return this._monitorSize;
  }
  set monitorResolution(monitorResolution) {
    this._monitorResolution = monitorResolution;
  }
  get monitorResolution() {
    return this._monitorResolution;
  }

  toJSON() {
    return {
      unitName: this._unitName,
      unitBrand: this._unitBrand,
      unitModel: this._unitModel,
      unitNumber: this._unitNumber,
      unitDate: this._unitDate,
      unitType: this._unitType,
      monitorSize: this._monitorSize,
      monitorResolution: this._monitorResolution,
    };
  }
}
