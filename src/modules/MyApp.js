import { Modal } from "./Modal";
export class MyApp {
  constructor() {
    this.equipments = {};
    this._nextId = 1;
    this.addButton = {};
  }
  get nextId() {
    this._nextId++;
    return this._nextId;
  }
  set nextId(id) {
    this._nextId = id;
  }
  init() {
    this.nextId = 1;
    this.addButton = document.getElementById("add-equipment");
    this.addButton.addEventListener("click", () => {
      this.addEquipment();
    });

    // window.addEventListener("updatetable", (e) => {
    //   console.log("update", e);
    // });
  }
  _getModal() {
    if (!this.modal) {
      this.modal = new Modal();
    }
    return this.modal;
  }
  addEquipment() {
    this._getModal().show();
  }
}
