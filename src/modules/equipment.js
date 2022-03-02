export class Equipment {
  constructor({
    nameEquip,
    brandEquip,
    modelEquip,
    numberEquip,
    dateEquip,
    unitType,
    unitTypeName,
  }) {
    this.subcribers = [];
    this.nameEquip = nameEquip;
    this.brandEquip = brandEquip;
    this.modelEquip = modelEquip;
    this.numberEquip = numberEquip;
    this.dateEquip = dateEquip;
    this.unitType = unitType;
    this.unitTypeName = unitTypeName;
  }
  addSubscriber(view) {
    this.subcribers.push(view);
  }
  update() {
    this.subcribers.forEach((subscriber) => {
      subscriber.update(this._getData());
    });
  }

  _getData() {
    return {
      nameEquip: this.nameEquip,
      brandEquip: this.brandEquip,
      modelEquip: this.modelEquip,
      numberEquip: this.numberEquip,
      dateEquip: this.dateEquip,
      unitType: this.unitType,
      unitTypeName: this.unitTypeName,
    };
  }
}
