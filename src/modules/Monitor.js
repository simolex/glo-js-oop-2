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
    this._monitorSize = monitorSize;
    this._monitorResolution = monitorResolution;
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
      nameEquip: this._nameEquip,
      brandEquip: this._brandEquip,
      modelEquip: this._modelEquip,
      numberEquip: this._numberEquip,
      dateEquip: this._dateEquip,
      unitType: this._unitType,
      unitTypeName: this._unitTypeName,
      monitorSize: this._monitorSize,
      monitorResolution: this._monitorResolution,
    };
  }
}
