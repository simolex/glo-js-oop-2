import { EventEmitter } from "./EventEmitter";
//import { Equipment } from "./Equipment";
import { Computer } from "./Computer";
import { Printer } from "./Printer";
import { Monitor } from "./Monitor";

export class TableModel extends EventEmitter {
  constructor(rows) {
    super();
    this._rowList = rows || [];
    if (localStorage.getItem("equipments")) {
      JSON.parse(localStorage.getItem("equipments")).forEach((item) => {
        this.addRow(item);
      });
    }
    //this._selectedIndex = -1;
  }
  getRows() {
    return this._rowList.slice();
  }
  addRow(rowObj) {
    let row;
    switch (rowObj.unitType) {
      case "type_computer":
        row = new Computer(rowObj);
        break;
      case "type_monitor":
        row = new Monitor(rowObj);
        break;
      case "type_printer":
        row = new Printer(rowObj);
        break;
      default:
        row = {};
        break;
    }

    this._rowList.push(row);
    localStorage.setItem("equipments", JSON.stringify(this._rowList));
    this.emit("rowAdded", row);
  }

  removeRow(id) {
    const row = this._rowList.splice(id, 1)[0];
    localStorage.setItem("equipments", JSON.stringify(this._rowList));
    this.emit("rowRemoved", row);

    // if (index === this._selectedIndex) {
    //   this.selectedIndex = -1;
    // }
  }
  //constructor() {
  //this._rowList = localStorage.getItem("equipments") ? JSON.parse(localStorage.getItem("equipments")) : [];
  //this._tableView = document.querySelector(".main__table tbody");
  // this._tableView.addEventListener("click", (e) => {
  //   if (e.target.closest(".table__row")) {
  //     const id = e.target.closest(".table__row").id;
  //     if (e.target.closest(".table__button.remove")) {
  //       this._remove(id);
  //     }
  //   }
  // });

  //this._show();
  //}
  // append(row) {
  //   this._rowList.push(row);
  //   localStorage.setItem("equipments", JSON.stringify(this._rowList));
  //   this._show();
  // }
  // _remove(index) {
  //   this._rowList.splice(index, 1);
  //   localStorage.setItem("equipments", JSON.stringify(this._rowList));
  //   this._show();
  // }
}

// class ListModel extends EventEmitter {

//   get selectedIndex() {
//     return this._selectedIndex;
//   }

//   set selectedIndex(index) {
//     const previousIndex = this._selectedIndex;
//     this._selectedIndex = index;
//     this.emit("selectedIndexChanged", previousIndex);
//   }
// }

//export const instanceTable = new MainTable();
