import { Modal } from "./Modal";
const modal = new Modal();
export class MyApp {
  constructor() {
    this.equipments = {};
    this.nextId = 1;
    this.addButton = {};
  }
  //   get nextId() {
  //     this.nextId++;
  //     return this.nextId;
  //   }
  //   set nextId(id) {
  //     this.nextId = id;
  //  }
  init() {
    this.addButton = document.getElementById("add-equipment");
    this.addButton.addEventListener("click", () => {
      this.addEquipment();
    });
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
