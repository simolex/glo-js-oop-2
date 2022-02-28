class MainTable {
  constructor() {
    this._rowList = [];
    this._tableView = document.querySelector(".main__table tbody");
    this._show();
  }
  append(row) {
    this._rowList.push();
    this._show();
  }
  _show() {
    this._tableView.innerHTML = "";
    this._rowList.forEach((row, index) => {
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
                <td class="table__cell">
                  <div class="table__button">
                    <img class="table__img" src="img/trash-can.svg" alt="" />
                  </div>
                  <div class="table__button">
                    <img class="table__img" src="img/pen-to-square.svg" alt="" />
                  </div>
                </td>
         `;
    });
  }
}

export const instanceTable = new MainTable();
