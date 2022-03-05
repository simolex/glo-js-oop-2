import { EventEmitter } from "./EventEmitter";

export class TableView extends EventEmitter {
  constructor(model, elements) {
    super();
    this._model = model;
    this._elements = elements;

    // attach model listeners
    model
      .subscribe("itemAdded", () => this.rebuildTable())
      .subscribe("itemRemoved", () => this.rebuildTable());

    // attach listeners to HTML controls
    elements.tableBody.addEventListener("click", (e) => {
      if (e.target.closest(".table__row")) {
        const id = e.target.closest(".table__row").id;
        if (e.target.closest(".table__button.remove")) {
          this.emit("delButtonClicked", id);
        }
      }
    });

    //old
    // elements.list.addEventListener("change", (e) => this.emit("listModified", e.target.selectedIndex));
    elements.addButton.addEventListener("click", () => this.emit("addButtonClicked"));
    // elements.delButton.addEventListener("click", () => this.emit("delButtonClicked"));
  }

  show() {
    this.rebuildTable();
  }

  rebuildTable() {
    this._elements.tableBody.innerHTML = "";
    this._model.getRows().forEach((row, index) => {
      const tr = document.createElement("tr");
      tr.classList.add("table__row");
      tr.id = index;
      tr.innerHTML = `
                <td class="table__cell">${row.nameEquip}</td>
                <td class="table__cell">${row.brandEquip}</td>
                <td class="table__cell">${row.modelEquip}</td>
                <td class="table__cell">${row.numberEquip}</td>
                <td class="table__cell">${row.dateEquip}</td>
                <td class="table__cell">${row.unitTypeName}</td>
                <th class="table__title">
                  <div class="table__button remove">
                    <img class="table__img" src="img/trash-can.svg" alt="" />
                  </div>
               </th>
      `;
      // <div class="table__button edit">
      //   <img class="table__img" src="img/pen-to-square.svg" alt="" />
      // </div>
      this._elements.tableBody.append(tr);
    });
  }
}
