export class Equipment {
  constructor({ nameEquip, brandEquip, modelEquip, numberEquip, dateEquip, unitType, unitTypeName }) {
    this._nameEquip = nameEquip;
    this._brandEquip = brandEquip;
    this._modelEquip = modelEquip;
    this._numberEquip = numberEquip;
    this._dateEquip = dateEquip;
    this._unitType = unitType;
    this._unitTypeName = unitTypeName;
  }
  set nameEquip(nameEquip) {
    this._nameEquip = nameEquip;
  }
  get nameEquip() {
    return this._nameEquip;
  }
  set brandEquip(brandEquip) {
    this._brandEquip = brandEquip;
  }
  get brandEquip() {
    return this._brandEquip;
  }
  set modelEquip(modelEquip) {
    this._modelEquip = modelEquip;
  }
  get modelEquip() {
    return this._modelEquip;
  }
  set numberEquip(numberEquip) {
    this._numberEquip = numberEquip;
  }
  get numberEquip() {
    return this._numberEquip;
  }
  set dateEquip(dateEquip) {
    this._dateEquip = dateEquip;
  }
  get dateEquip() {
    return this._dateEquip;
  }
  set unitType(unitType) {
    this._unitType = unitType;
  }
  get unitType() {
    return this._unitType;
  }
  set unitTypeName(unitTypeName) {
    this._unitTypeName = unitTypeName;
  }
  get unitTypeName() {
    return this._unitTypeName;
  }
}
