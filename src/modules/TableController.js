import { Modal } from "./Modal";

export class TableController {
  constructor(model, view) {
    this._model = model;
    this._view = view;

    //view.subscribe("listModified", (idx) => this.updateSelected(idx));
    view.subscribe("addButtonClicked", () => this.addItem());
    view.subscribe("delButtonClicked", (idx) => this.delItem(idx));
  }
  _requestCreateItem() {}
  addItem() {
    //const item = window.prompt("Add item:", "");

    // const row = ModalForm.get();

    // if (row) {
    //   this._model.addItem(row);
    // }
    const modal = new Modal();
    const modalRun = Promise(modal.show);
  }

  delItem() {
    const index = this._model.selectedIndex;
    if (index !== -1) {
      this._model.removeItemAt(index);
    }
  }

  // updateSelected(index) {
  //   this._model.selectedIndex = index;
  // }
}
