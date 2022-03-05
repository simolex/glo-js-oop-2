export class Equipment {
  constructor({ unitName, unitBrand, unitModel, unitNumber, unitDate, unitType }) {
    this._unitName = unitName;
    this._unitBrand = unitBrand;
    this._unitModel = unitModel;
    this._unitNumber = unitNumber;
    this._unitDate = unitDate;
    this._unitType = unitType;
  }
  set unitName(unitName) {
    this._unitName = unitName;
  }
  get unitName() {
    return this._unitName;
  }
  set unitBrand(unitBrand) {
    this._unitBrand = unitBrand;
  }
  get unitBrand() {
    return this._unitBrand;
  }
  set unitModel(unitModel) {
    this._unitModel = unitModel;
  }
  get unitModel() {
    return this._unitModel;
  }
  set unitNumber(unitNumber) {
    this._unitNumber = unitNumber;
  }
  get unitNumber() {
    return this._unitNumber;
  }
  set unitDate(unitDate) {
    this._unitDate = unitDate;
  }
  get unitDate() {
    return this._unitDate;
  }
  set unitType(unitType) {
    this._unitType = unitType;
  }
  get unitType() {
    return this._unitType;
  }

  toJSON() {
    return {
      nameEquip: this._nameEquip,
      brandEquip: this._brandEquip,
      modelEquip: this._modelEquip,
      numberEquip: this._numberEquip,
      dateEquip: this._dateEquip,
      unitType: this._unitType,
    };
  }
}
