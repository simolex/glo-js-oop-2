class MainTable {
  constructor() {
    this._rowList = localStorage.getItem("equipments") ? JSON.parse(localStorage.getItem("equipments")) : [];
    this._tableView = document.querySelector(".main__table tbody");
    this._tableView.addEventListener("click", (e) => {
      if (e.target.closest(".table__row")) {
        const id = e.target.closest(".table__row").id;
        if (e.target.closest(".table__button.remove")) {
          this._remove(id);
        }
      }
    });

    this._show();
  }
  append(row) {
    this._rowList.push(row);
    localStorage.setItem("equipments", JSON.stringify(this._rowList));
    this._show();
  }
  _remove(index) {
    this._rowList.splice(index, 1);
    localStorage.setItem("equipments", JSON.stringify(this._rowList));
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
                <th class="table__title">
                  <div class="table__button remove">
                    <img class="table__img" src="img/trash-can.svg" alt="" />
                  </div>
               </th>
      `;
      // <div class="table__button edit">
      //   <img class="table__img" src="img/pen-to-square.svg" alt="" />
      // </div>
      this._tableView.append(tr);
    });
  }
}

export const instanceTable = new MainTable();
