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

/***/ "./src/GameController.js":
/*!*******************************!*\
  !*** ./src/GameController.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player.js */ \"./src/Player.js\");\n/* harmony import */ var _Gameboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Gameboard.js */ \"./src/Gameboard.js\");\n/* harmony import */ var _Ship_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Ship.js */ \"./src/Ship.js\");\n/* harmony import */ var _UIController_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UIController.js */ \"./src/UIController.js\");\n\r\n\r\n\r\n\r\n\r\nconst PlayerInstance = new _Player_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\nconst ComputerInstance = new _Player_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](true);\r\n\r\n_UIController_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].createGrid(PlayerInstance.displayBoard());\r\n\n\n//# sourceURL=webpack:///./src/GameController.js?");

/***/ }),

/***/ "./src/Gameboard.js":
/*!**************************!*\
  !*** ./src/Gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Gameboard)\n/* harmony export */ });\n/* harmony import */ var _Ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship.js */ \"./src/Ship.js\");\n\r\n\r\nclass Gameboard {\r\n  #ships = [];\r\n  #availableShips = [5, 4, 3, 3, 2];\r\n  #gameboard;\r\n  #miss = 0;\r\n  constructor() {\r\n    this.#gameboard = Array.from({ length: 10 }, () => Array(10).fill(null));\r\n  }\r\n  placeShip(x, y, length) {\r\n    const index = this.#availableShips.indexOf(length);\r\n    if (index === -1) {\r\n      return false;\r\n    }\r\n    this.#availableShips.splice(index, 1);\r\n    const ship = new _Ship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](length);\r\n    let count = 0;\r\n    if (y + length > 10) return false;\r\n    for (let i = 0; i < length; i++) {\r\n      if (this.#gameboard[x][y + i]) {\r\n        for (let j = 0; j < count; j++) {\r\n          this.#gameboard[x][y - j] = null;\r\n        }\r\n        return false;\r\n      }\r\n      count++;\r\n      this.#gameboard[x][y + i] = ship;\r\n    }\r\n    this.#ships.push(ship);\r\n    return ship;\r\n  }\r\n  receiveAttack(x, y) {\r\n    if (!this.#gameboard[x][y]) {\r\n      this.#miss++;\r\n      return (this.#gameboard[x][y] = \"MISS\");\r\n    }\r\n    const ship = this.#gameboard[x][y];\r\n    this.#gameboard[x][y] = \"HIT\";\r\n    ship.hit();\r\n    if (ship.isSunk()) {\r\n      this.#ships.splice(this.#ships.indexOf(ship), 1);\r\n      return \"SUNK\";\r\n    }\r\n    return \"HIT\";\r\n  }\r\n  getMisses() {\r\n    return this.#miss;\r\n  }\r\n  isAllSunk() {\r\n    return this.#ships.length === 0;\r\n  }\r\n  displayBoard() {\r\n    return this.#gameboard.map((row) => [...row]);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/Gameboard.js?");

/***/ }),

/***/ "./src/Player.js":
/*!***********************!*\
  !*** ./src/Player.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _Gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gameboard.js */ \"./src/Gameboard.js\");\n\r\nclass Player {\r\n  #board;\r\n  #isComputer;\r\n  constructor(isComputer = false) {\r\n    this.#board = new _Gameboard_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n    this.#isComputer = isComputer;\r\n  }\r\n  placeShip(x, y, length) {\r\n    return this.#board.placeShip(x, y, length);\r\n  }\r\n  receiveAttack(x, y) {\r\n    return this.#board.receiveAttack(x, y);\r\n  }\r\n  getMisses() {\r\n    return this.#board.getMisses();\r\n  }\r\n  isAllSunk() {\r\n    return this.#board.isAllSunk();\r\n  }\r\n  displayBoard() {\r\n    return this.#board.displayBoard();\r\n  }\r\n  makeMove(x, y, opponent) {\r\n    return opponent.receiveAttack(x, y);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/Player.js?");

/***/ }),

/***/ "./src/Ship.js":
/*!*********************!*\
  !*** ./src/Ship.js ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Ship)\n/* harmony export */ });\nclass Ship {\r\n  #length;\r\n  #hits;\r\n  #sunk;\r\n  constructor(length) {\r\n    this.#length = length;\r\n    this.#hits = 0;\r\n    this.#sunk = false;\r\n  }\r\n  getLength() {\r\n    return this.#length;\r\n  }\r\n  hit() {\r\n    return this.#hits++;\r\n  }\r\n  isSunk() {\r\n    return (this.#sunk = this.#hits === this.#length);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/Ship.js?");

/***/ }),

/***/ "./src/UIController.js":
/*!*****************************!*\
  !*** ./src/UIController.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UI)\n/* harmony export */ });\nclass UI {\r\n  all = document.getElementById(\"all\");\r\n  createGrid(board) {\r\n    board.forEach((rows, Xindex) => {\r\n      rows.forEach((_, Yindex) => {\r\n        const square = document.createElement(\"div\");\r\n        square.classList.add(\"square\");\r\n        square.dataset.x = Xindex;\r\n        square.dataset.y = Yindex;\r\n        all.appendChild(square);\r\n      });\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/UIController.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/GameController.js");
/******/ 	
/******/ })()
;