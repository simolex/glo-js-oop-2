class ListController {
  constructor(model, view) {
    this._model = model;
    this._view = view;

    view.subscribe("listModified", (idx) => this.updateSelected(idx));
    view.subscribe("addButtonClicked", () => this.addItem());
    view.subscribe("delButtonClicked", () => this.delItem());
  }

  addItem() {
    const item = window.prompt("Add item:", "");
    if (item) {
      this._model.addItem(item);
    }
  }

  delItem() {
    const index = this._model.selectedIndex;
    if (index !== -1) {
      this._model.removeItemAt(index);
    }
  }

  updateSelected(index) {
    this._model.selectedIndex = index;
  }
}
