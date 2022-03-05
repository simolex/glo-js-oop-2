/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_TableModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/TableModel */ \"./modules/TableModel.js\");\n/* harmony import */ var _modules_TableView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/TableView */ \"./modules/TableView.js\");\n/* harmony import */ var _modules_TableController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/TableController */ \"./modules/TableController.js\");\n// import { MyApp } from \"./modules/MyApp\";\r\n\r\n// const app = new MyApp();\r\n\r\n// app.init();\r\n\r\n\r\n\r\n\r\n\r\nconst model = new _modules_TableModel__WEBPACK_IMPORTED_MODULE_0__.TableModel(),\r\n  view = new _modules_TableView__WEBPACK_IMPORTED_MODULE_1__.TableView(model, {\r\n    tableBody: document.querySelector(\".main__table tbody\"),\r\n    addButton: document.getElementById(\"add-equipment\"),\r\n    //delButton: document.getElementById(\"minusBtn\"),\r\n  }),\r\n  controller = new _modules_TableController__WEBPACK_IMPORTED_MODULE_2__.TableController(model, view);\r\nview.show();\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/EventEmitter.js":
/*!*********************************!*\
  !*** ./modules/EventEmitter.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"EventEmitter\": () => (/* binding */ EventEmitter)\n/* harmony export */ });\nclass EventEmitter {\r\n  constructor() {\r\n    this._events = {};\r\n  }\r\n  subscribe(e, listener) {\r\n    (this._events[e] || (this._events[e] = [])).push(listener);\r\n    return this;\r\n  }\r\n  emit(e, prop) {\r\n    (this._events[e] || []).slice().forEach((lsn) => lsn(prop));\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./modules/EventEmitter.js?");

/***/ }),

/***/ "./modules/Modal.js":
/*!**************************!*\
  !*** ./modules/Modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Modal\": () => (/* binding */ Modal)\n/* harmony export */ });\nclass Modal {\r\n  constructor(typeId = \"type-computer\") {\r\n    this._content = document.getElementById(\"modal-form\");\r\n    this._formControl = document.getElementById(\"equipment-form\");\r\n    this._unitType = document.getElementById(\"unit-type\");\r\n    this._allSecondForms = document.querySelectorAll(\".modal__subtype\");\r\n\r\n    this._content.addEventListener(\"click\", (e) => {\r\n      if (!e.target.closest(\".modal\") && e.target.classList.contains(\"overlay\")) {\r\n        this.hide();\r\n      } else if (e.target.closest(\".modal-close\")) {\r\n        this.hide();\r\n      }\r\n    });\r\n\r\n    this._unitType.addEventListener(\"change\", (e) => {\r\n      this._showSecondForm(e.target.value);\r\n    });\r\n    this._showSecondForm(typeId);\r\n\r\n    this._formControl.addEventListener(\"submit\", (e) => {\r\n      e.preventDefault();\r\n      new FormData(this._formControl);\r\n      this.hide();\r\n    });\r\n\r\n    this._formControl.addEventListener(\"formdata\", (e) => {\r\n      this._onSave(e.formData);\r\n    });\r\n  }\r\n\r\n  _showSecondForm(typeId) {\r\n    this._allSecondForms.forEach((subform) => {\r\n      if (typeId === subform.id) {\r\n        subform.style.display = \"\";\r\n      } else {\r\n        subform.style.display = \"none\";\r\n      }\r\n    });\r\n  }\r\n\r\n  show(onSave, onError) {\r\n    this._onSave = onSave;\r\n    this._onError = onError;\r\n\r\n    this._content.style.display = \"flex\";\r\n  }\r\n\r\n  hide() {\r\n    this._onSave(false);\r\n    this._content.style.display = \"\";\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./modules/Modal.js?");

/***/ }),

/***/ "./modules/TableController.js":
/*!************************************!*\
  !*** ./modules/TableController.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TableController\": () => (/* binding */ TableController)\n/* harmony export */ });\n/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal */ \"./modules/Modal.js\");\n\r\n\r\nclass TableController {\r\n  constructor(model, view) {\r\n    this._model = model;\r\n    this._view = view;\r\n\r\n    //view.subscribe(\"listModified\", (idx) => this.updateSelected(idx));\r\n    view.subscribe(\"addButtonClicked\", () => this.addItem());\r\n    view.subscribe(\"delButtonClicked\", (idx) => this.delItem(idx));\r\n  }\r\n  _requestCreateItem() {}\r\n  addItem() {\r\n    const modal = new _Modal__WEBPACK_IMPORTED_MODULE_0__.Modal();\r\n    const modalRun = new Promise((resolve, reject) => modal.show(resolve, reject));\r\n    modalRun\r\n      .then((data) => {\r\n        if (data) {\r\n          const props = [...data].reduce((obj, inputValue) => {\r\n            let property = inputValue[0];\r\n\r\n            if (property) {\r\n              property = property.split(\"-\").reduce((camelCase, chunk, ind) => {\r\n                if (ind > 0) {\r\n                  chunk = chunk[0].toUpperCase() + chunk.substring(1);\r\n                }\r\n                return camelCase + chunk;\r\n              }, \"\");\r\n              console.log(property);\r\n              obj[property] = inputValue[1];\r\n              return obj;\r\n            }\r\n          }, {});\r\n          this._model.addRow(props);\r\n        }\r\n      })\r\n      .catch((e) => {\r\n        console.log(e);\r\n      });\r\n  }\r\n\r\n  delItem() {\r\n    const index = this._model.selectedIndex;\r\n    if (index !== -1) {\r\n      this._model.removeItemAt(index);\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./modules/TableController.js?");

/***/ }),

/***/ "./modules/TableModel.js":
/*!*******************************!*\
  !*** ./modules/TableModel.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TableModel\": () => (/* binding */ TableModel)\n/* harmony export */ });\n/* harmony import */ var _EventEmitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventEmitter */ \"./modules/EventEmitter.js\");\n/* harmony import */ var _equipment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./equipment */ \"./modules/equipment.js\");\n\r\n\r\n\r\nclass TableModel extends _EventEmitter__WEBPACK_IMPORTED_MODULE_0__.EventEmitter {\r\n  constructor(rows) {\r\n    super();\r\n    this._rowList = rows || [];\r\n    //this._selectedIndex = -1;\r\n  }\r\n  getRows() {\r\n    return this._rowList.slice();\r\n  }\r\n  addRow(rowObj) {\r\n    console.log(rowObj);\r\n    const row = new _equipment__WEBPACK_IMPORTED_MODULE_1__.Equipment(rowObj);\r\n    console.log(row);\r\n    this._rowList.push(row);\r\n    console.log(this._rowList);\r\n    this.emit(\"rowAdded\", row);\r\n  }\r\n\r\n  removeRow(id) {\r\n    const row = this._rowList.splice(id, 1)[0];\r\n    this.emit(\"rowRemoved\", row);\r\n\r\n    // if (index === this._selectedIndex) {\r\n    //   this.selectedIndex = -1;\r\n    // }\r\n  }\r\n  //constructor() {\r\n  //this._rowList = localStorage.getItem(\"equipments\") ? JSON.parse(localStorage.getItem(\"equipments\")) : [];\r\n  //this._tableView = document.querySelector(\".main__table tbody\");\r\n  // this._tableView.addEventListener(\"click\", (e) => {\r\n  //   if (e.target.closest(\".table__row\")) {\r\n  //     const id = e.target.closest(\".table__row\").id;\r\n  //     if (e.target.closest(\".table__button.remove\")) {\r\n  //       this._remove(id);\r\n  //     }\r\n  //   }\r\n  // });\r\n\r\n  //this._show();\r\n  //}\r\n  // append(row) {\r\n  //   this._rowList.push(row);\r\n  //   localStorage.setItem(\"equipments\", JSON.stringify(this._rowList));\r\n  //   this._show();\r\n  // }\r\n  // _remove(index) {\r\n  //   this._rowList.splice(index, 1);\r\n  //   localStorage.setItem(\"equipments\", JSON.stringify(this._rowList));\r\n  //   this._show();\r\n  // }\r\n}\r\n\r\n// class ListModel extends EventEmitter {\r\n\r\n//   get selectedIndex() {\r\n//     return this._selectedIndex;\r\n//   }\r\n\r\n//   set selectedIndex(index) {\r\n//     const previousIndex = this._selectedIndex;\r\n//     this._selectedIndex = index;\r\n//     this.emit(\"selectedIndexChanged\", previousIndex);\r\n//   }\r\n// }\r\n\r\n//export const instanceTable = new MainTable();\r\n\n\n//# sourceURL=webpack:///./modules/TableModel.js?");

/***/ }),

/***/ "./modules/TableView.js":
/*!******************************!*\
  !*** ./modules/TableView.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TableView\": () => (/* binding */ TableView)\n/* harmony export */ });\n/* harmony import */ var _EventEmitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventEmitter */ \"./modules/EventEmitter.js\");\n\r\n\r\nclass TableView extends _EventEmitter__WEBPACK_IMPORTED_MODULE_0__.EventEmitter {\r\n  constructor(model, elements) {\r\n    super();\r\n    this._model = model;\r\n    this._elements = elements;\r\n\r\n    // attach model listeners\r\n    model\r\n      .subscribe(\"itemAdded\", () => this.rebuildTable())\r\n      .subscribe(\"itemRemoved\", () => this.rebuildTable());\r\n\r\n    // attach listeners to HTML controls\r\n    elements.tableBody.addEventListener(\"click\", (e) => {\r\n      if (e.target.closest(\".table__row\")) {\r\n        const id = e.target.closest(\".table__row\").id;\r\n        if (e.target.closest(\".table__button.remove\")) {\r\n          this.emit(\"delButtonClicked\", id);\r\n        }\r\n      }\r\n    });\r\n\r\n    //old\r\n    // elements.list.addEventListener(\"change\", (e) => this.emit(\"listModified\", e.target.selectedIndex));\r\n    elements.addButton.addEventListener(\"click\", () => this.emit(\"addButtonClicked\"));\r\n    // elements.delButton.addEventListener(\"click\", () => this.emit(\"delButtonClicked\"));\r\n  }\r\n\r\n  show() {\r\n    this.rebuildTable();\r\n  }\r\n\r\n  rebuildTable() {\r\n    this._elements.tableBody.innerHTML = \"\";\r\n    this._model.getRows().forEach((row, index) => {\r\n      const tr = document.createElement(\"tr\");\r\n      tr.classList.add(\"table__row\");\r\n      tr.id = index;\r\n      tr.innerHTML = `\r\n                <td class=\"table__cell\">${row.nameEquip}</td>\r\n                <td class=\"table__cell\">${row.brandEquip}</td>\r\n                <td class=\"table__cell\">${row.modelEquip}</td>\r\n                <td class=\"table__cell\">${row.numberEquip}</td>\r\n                <td class=\"table__cell\">${row.dateEquip}</td>\r\n                <td class=\"table__cell\">${row.unitTypeName}</td>\r\n                <th class=\"table__title\">\r\n                  <div class=\"table__button remove\">\r\n                    <img class=\"table__img\" src=\"img/trash-can.svg\" alt=\"\" />\r\n                  </div>\r\n               </th>\r\n      `;\r\n      // <div class=\"table__button edit\">\r\n      //   <img class=\"table__img\" src=\"img/pen-to-square.svg\" alt=\"\" />\r\n      // </div>\r\n      this._elements.tableBody.append(tr);\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./modules/TableView.js?");

/***/ }),

/***/ "./modules/equipment.js":
/*!******************************!*\
  !*** ./modules/equipment.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Equipment\": () => (/* binding */ Equipment)\n/* harmony export */ });\nclass Equipment {\r\n  constructor({\r\n    nameEquip,\r\n    brandEquip,\r\n    modelEquip,\r\n    numberEquip,\r\n    dateEquip,\r\n    unitType,\r\n    unitTypeName,\r\n  }) {\r\n    this._nameEquip = nameEquip;\r\n    this._brandEquip = brandEquip;\r\n    this._modelEquip = modelEquip;\r\n    this._numberEquip = numberEquip;\r\n    this._dateEquip = dateEquip;\r\n    this._unitType = unitType;\r\n    this._unitTypeName = unitTypeName;\r\n  }\r\n  set nameEquip(nameEquip) {\r\n    this._nameEquip = nameEquip;\r\n  }\r\n  get nameEquip() {\r\n    return this._nameEquip;\r\n  }\r\n  set brandEquip(brandEquip) {\r\n    this._brandEquip = brandEquip;\r\n  }\r\n  get brandEquip() {\r\n    return this._brandEquip;\r\n  }\r\n  set modelEquip(modelEquip) {\r\n    this._modelEquip = modelEquip;\r\n  }\r\n  get modelEquip() {\r\n    return this._modelEquip;\r\n  }\r\n  set numberEquip(numberEquip) {\r\n    this._numberEquip = numberEquip;\r\n  }\r\n  get numberEquip() {\r\n    return this._numberEquip;\r\n  }\r\n  set dateEquip(dateEquip) {\r\n    this._dateEquip = dateEquip;\r\n  }\r\n  get dateEquip() {\r\n    return this._dateEquip;\r\n  }\r\n  set unitType(unitType) {\r\n    this._unitType = unitType;\r\n  }\r\n  get unitType() {\r\n    return this._unitType;\r\n  }\r\n  set unitTypeName(unitTypeName) {\r\n    this._unitTypeName = unitTypeName;\r\n  }\r\n  get unitTypeName() {\r\n    return this._unitTypeName;\r\n  }\r\n  addSubscriber(view) {\r\n    this.subcribers.push(view);\r\n  }\r\n  update() {\r\n    this.subcribers.forEach((subscriber) => {\r\n      subscriber.update(this._getData());\r\n    });\r\n  }\r\n\r\n  _getData() {\r\n    return {\r\n      nameEquip: this.nameEquip,\r\n      brandEquip: this.brandEquip,\r\n      modelEquip: this.modelEquip,\r\n      numberEquip: this.numberEquip,\r\n      dateEquip: this.dateEquip,\r\n      unitType: this.unitType,\r\n      unitTypeName: this.unitTypeName,\r\n    };\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./modules/equipment.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;