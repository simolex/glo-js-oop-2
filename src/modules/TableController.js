class TableController {
  constructor(model, view) {
    this._model = model;
    this._view = view;

    //view.subscribe("listModified", (idx) => this.updateSelected(idx));
    view.subscribe("addButtonClicked", () => this.addItem());
    view.subscribe("delButtonClicked", (idx) => this.delItem(idx));
  }

  addItem() {
    //const item = window.prompt("Add item:", "");
    const row = ModalForm.get();

    if (row) {
      this._model.addItem(row);
    }
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
