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
  }
}
