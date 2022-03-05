// import { MyApp } from "./modules/MyApp";

// const app = new MyApp();

// app.init();

import { TableModel } from "./modules/TableModel";
import { TableView } from "./modules/TableView";
import { TableController } from "./modules/TableController";

const model = new TableModel(),
  view = new TableView(model, {
    tableBody: document.querySelector(".main__table tbody"),
    addButton: document.getElementById("add-equipment"),
    //delButton: document.getElementById("minusBtn"),
  }),
  controller = new TableController(model, view);
view.show();
