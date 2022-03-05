import { TableModel } from "./modules/TableModel";
import { TableView } from "./modules/TableView";
import { TableController } from "./modules/TableController";

const model = new TableModel(),
  view = new TableView(model, {
    typeEquipments: document.getElementById("unit-type"),
    tableBody: document.querySelector(".main__table tbody"),
    addButton: document.getElementById("add-equipment"),
  }),
  controller = new TableController(model, view);
view.show();
