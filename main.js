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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n  margin: 0;\n  overflow: hidden;\n  background-color: #0b0f17;\n  font-family: \"Orbitron\", sans-serif;\n  font-size: 2rem;\n  margin-bottom: 8px;\n  letter-spacing: 2px;\n}\n\n#all {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n}\n#top {\n  height: 10vh;\n  width: 100%;\n}\n#main {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  height: 60vh;\n}\n.player-box > h1 {\n  color: #40f5ff;\n  text-shadow:\n    0 0 2px #00eaff,\n    0 0 4px rgba(0, 234, 255, 0.4);\n  margin: 0;\n  margin-bottom: 2vh;\n}\n.computer-box > h1 {\n  color: #00ffe0;\n  text-shadow:\n    0 0 2px #00ffe0,\n    0 0 4px rgba(0, 216, 255, 0.4);\n  margin: 0;\n  margin-bottom: 2vh;\n}\n.player-box,\n.computer-box {\n  text-align: center;\n}\n#bottom {\n  height: 20vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  gap: 40px;\n  align-items: center;\n}\n.board {\n  width: 50vmin;\n  aspect-ratio: 1;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n}\n.player {\n  border: 4px solid #40f5ff;\n  box-shadow: 0 0 20px #00e5ff;\n}\n\n.computer {\n  border: 4px solid #00ffe0;\n  box-shadow: 0 0 10px #00d8ff;\n}\n.player,\n.computer {\n  border-radius: 10px;\n}\n.player > .square {\n  border: 1px solid #00eaff;\n}\n.computer > .square {\n  border: 1px solid #00ffc8;\n}\n.square {\n  width: 100%;\n  height: 100%;\n  border: 1.5px solid black;\n}\n.ship {\n  background-color: #3ccac2;\n  border: 2px solid #2baaa2;\n  box-shadow: 0 0 4px rgba(0, 255, 242, 0.4);\n  border-radius: 4px;\n}\n.miss {\n  position: relative;\n}\n.miss::after {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 16px;\n  height: 16px;\n  transform: translate(-50%, -50%);\n  border: 2px solid #00ffd9;\n  border-radius: 50%;\n  box-shadow: 0 0 8px rgba(0, 255, 217, 0.6);\n}\n\n.hit {\n  position: relative;\n}\n.hit::before,\n.hit::after {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 20px;\n  height: 2px;\n  background-color: #ff3c3c;\n  box-shadow: 0 0 6px rgba(255, 60, 60, 0.8);\n}\n\n.hit::before {\n  transform: translate(-50%, -50%) rotate(45deg);\n}\n\n.hit::after {\n  transform: translate(-50%, -50%) rotate(-45deg);\n}\n.preview {\n  background-color: rgba(102, 255, 204, 0.3);\n  box-shadow: 0 0 6px rgba(102, 255, 204, 0.5);\n}\n.invalid {\n  background-color: rgba(255, 80, 80, 0.3);\n  box-shadow: 0 0 6px rgba(255, 80, 80, 0.5);\n}\n.sunk {\n  border: 2px solid #ff7b00;\n  box-shadow: 0 0 6px rgba(255, 123, 0, 0.8);\n}\n.player-ships,\n.computer-ships {\n  display: block;\n  text-align: center;\n  margin-top: 10px;\n  font-size: 1.2rem;\n  font-family: \"Courier New\", Courier, monospace;\n  color: #00fff0;\n  text-shadow: 0 0 6px rgba(0, 255, 255, 0.6);\n  letter-spacing: 1px;\n  font-weight: bold;\n}\n#swap,\n.restart-button {\n  background-color: #0b0f17;\n  color: #00fff0;\n  border: 2px solid #00fff0;\n  padding: 8px 16px;\n  font-size: 1rem;\n  font-family: \"Courier New\", Courier, monospace;\n  border-radius: 6px;\n  text-shadow: 0 0 6px rgba(0, 255, 255, 0.6);\n  box-shadow: 0 0 8px rgba(0, 255, 255, 0.3);\n  transition: all 0.2s ease-in-out;\n}\n\n#swap:hover,\n.restart-button:hover {\n  background-color: #00fff0;\n  color: #0b0f17;\n  box-shadow: 0 0 12px rgba(0, 255, 255, 0.8);\n}\n.end {\n  box-shadow: 0 0 30px red;\n}\n.board.end {\n  pointer-events: none;\n  opacity: 0.6;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/GameController.js":
/*!*******************************!*\
  !*** ./src/GameController.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   startGame: () => (/* binding */ startGame),\n/* harmony export */   updateBoards: () => (/* binding */ updateBoards)\n/* harmony export */ });\n/* harmony import */ var _Player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player.js */ \"./src/Player.js\");\n/* harmony import */ var _Gameboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Gameboard.js */ \"./src/Gameboard.js\");\n/* harmony import */ var _Ship_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Ship.js */ \"./src/Ship.js\");\n/* harmony import */ var _UIController_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UIController.js */ \"./src/UIController.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\n\nconst PlayerInstance = new _Player_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nconst ComputerInstance = new _Player_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](true);\nconst ui = new _UIController_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n\nfunction startGame() {\n  ui.gameStarted = true;\n  populateBoard(ComputerInstance);\n  updateBoards();\n  ui.attack((x, y) => {\n    const hit = PlayerInstance.makeMove(x, y, ComputerInstance);\n    updateBoards();\n    if (ComputerInstance.isAllSunk()) {\n      endGame(\"Player\");\n    }\n    if (hit === \"MISS\") {\n      computerTurn();\n    }\n  });\n}\nfunction computerTurn() {\n  let hit;\n  do {\n    hit = ComputerInstance.makeRandomMove(PlayerInstance);\n    updateBoards();\n    if (PlayerInstance.isAllSunk()) {\n      endGame(\"Computer\");\n      return;\n    }\n  } while (hit !== \"MISS\");\n}\n\nfunction populateBoard(instance) {\n  let availableShips = [5, 4, 3, 3, 2];\n  for (let i = 0; i < 5; i++) {\n    while (\n      !instance.placeShip(\n        Math.floor(Math.random() * 10),\n        Math.floor(Math.random() * 10),\n        availableShips[0]\n      )\n    );\n    availableShips.shift();\n  }\n}\nfunction updateBoards() {\n  ui.clearBoard();\n  ui.displayGrid(PlayerInstance, true);\n  ui.displayGrid(ComputerInstance, false);\n\n  ui.updateAliveShips(PlayerInstance, true);\n  ui.updateAliveShips(ComputerInstance, false);\n}\nlet gameOver = false;\nfunction endGame(winner) {\n  if (gameOver) return;\n  gameOver = true;\n  ui.clearBoard();\n  ui.displayGrid(PlayerInstance, true);\n  ui.displayGrid(ComputerInstance, false);\n  ui.restart();\n  ui.updateAliveShips(PlayerInstance, true);\n  ui.updateAliveShips(ComputerInstance, false);\n\n  setTimeout(() => {\n    alert(`${winner} wygrał!`);\n  }, 100);\n}\n(0,_UIController_js__WEBPACK_IMPORTED_MODULE_3__.startShipPlacement)(PlayerInstance);\n\n\n//# sourceURL=webpack:///./src/GameController.js?");

/***/ }),

/***/ "./src/Gameboard.js":
/*!**************************!*\
  !*** ./src/Gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Gameboard)\n/* harmony export */ });\n/* harmony import */ var _Ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship.js */ \"./src/Ship.js\");\n\n\nclass Gameboard {\n  #ships = [];\n  #availableShips = [5, 4, 3, 3, 2];\n  #gameboard;\n  #miss = 0;\n  constructor() {\n    this.#gameboard = Array.from({ length: 10 }, () => Array(10).fill(null));\n  }\n  placeShip(x, y, length) {\n    const index = this.#availableShips.indexOf(length);\n    if (index === -1) {\n      return false;\n    }\n    const ship = new _Ship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](length);\n    let count = 0;\n    if (x + length > 10 || y >= 10) return false;\n    for (let i = 0; i < length; i++) {\n      if (this.#gameboard[x + i][y]) {\n        for (let j = 0; j < count; j++) {\n          this.#gameboard[x - j][y] = null;\n        }\n        return false;\n      }\n      count++;\n      this.#gameboard[x + i][y] = ship;\n    }\n    this.#availableShips.splice(index, 1);\n    this.#ships.push(ship);\n    return true;\n  }\n  placeShipHorizontal(x, y, length) {\n    const index = this.#availableShips.indexOf(length);\n    if (index === -1) {\n      return false;\n    }\n    const ship = new _Ship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](length);\n    let count = 0;\n\n    if (y + length > 10 || x >= 10) return false;\n\n    for (let i = 0; i < length; i++) {\n      if (this.#gameboard[x][y + i]) {\n        for (let j = 0; j < count; j++) {\n          this.#gameboard[x][y + j] = null;\n        }\n        return false;\n      }\n      count++;\n      this.#gameboard[x][y + i] = ship;\n    }\n\n    this.#availableShips.splice(index, 1);\n    this.#ships.push(ship);\n    return true;\n  }\n  receiveAttack(x, y) {\n    if (!this.#gameboard[x][y]) {\n      this.#miss++;\n      return (this.#gameboard[x][y] = \"MISS\");\n    }\n    const ship = this.#gameboard[x][y];\n    this.#gameboard[x][y] = \"HIT\";\n    ship.hit();\n    if (ship.isSunk()) {\n      this.#ships.splice(this.#ships.indexOf(ship), 1);\n      return \"SUNK\";\n    }\n    return \"HIT\";\n  }\n  getMisses() {\n    return this.#miss;\n  }\n  isAllSunk() {\n    return this.#ships.length === 0;\n  }\n  displayBoard() {\n    return this.#gameboard.map((row) => [...row]);\n  }\n  getAliveShips() {\n    return this.#ships.length;\n  }\n}\n\n\n//# sourceURL=webpack:///./src/Gameboard.js?");

/***/ }),

/***/ "./src/Player.js":
/*!***********************!*\
  !*** ./src/Player.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _Gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gameboard.js */ \"./src/Gameboard.js\");\n\nclass Player {\n  #board;\n  #isComputer;\n  constructor(isComputer = false) {\n    this.#board = new _Gameboard_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.#isComputer = isComputer;\n  }\n  placeShip(x, y, length) {\n    return this.#board.placeShip(x, y, length);\n  }\n  placeShipHorizontally(x, y, length) {\n    return this.#board.placeShipHorizontal(x, y, length);\n  }\n  receiveAttack(x, y) {\n    return this.#board.receiveAttack(x, y);\n  }\n  getMisses() {\n    return this.#board.getMisses();\n  }\n  isAllSunk() {\n    return this.#board.isAllSunk();\n  }\n  displayBoard() {\n    return this.#board.displayBoard();\n  }\n  makeMove(x, y, opponent) {\n    return opponent.receiveAttack(x, y);\n  }\n  makeRandomMove(opponent) {\n    let x, y, result;\n    do {\n      x = Math.floor(Math.random() * 10);\n      y = Math.floor(Math.random() * 10);\n      result = opponent.displayBoard()[x][y];\n    } while (result === \"HIT\" || result === \"MISS\");\n\n    return this.makeMove(x, y, opponent);\n  }\n  getAliveShips() {\n    console.log(this.#board); // sprawdź, co zwraca\n    console.log(typeof this.#board.getAliveShips); // powinno być 'function'\n    return this.#board.getAliveShips();\n  }\n}\n\n\n//# sourceURL=webpack:///./src/Player.js?");

/***/ }),

/***/ "./src/Ship.js":
/*!*********************!*\
  !*** ./src/Ship.js ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Ship)\n/* harmony export */ });\nclass Ship {\n  #length;\n  #hits;\n  #sunk;\n  constructor(length) {\n    this.#length = length;\n    this.#hits = 0;\n    this.#sunk = false;\n  }\n  getLength() {\n    return this.#length;\n  }\n  hit() {\n    return this.#hits++;\n  }\n  isSunk() {\n    return (this.#sunk = this.#hits === this.#length);\n  }\n}\n\n\n//# sourceURL=webpack:///./src/Ship.js?");

/***/ }),

/***/ "./src/UIController.js":
/*!*****************************!*\
  !*** ./src/UIController.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UI),\n/* harmony export */   startShipPlacement: () => (/* binding */ startShipPlacement)\n/* harmony export */ });\n/* harmony import */ var _GameController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameController.js */ \"./src/GameController.js\");\n\n\nclass UI {\n  gameStarted = false;\n  main = document.getElementById(\"main\");\n  displayGrid(playerInstance, player) {\n    this.attackEnabled = true;\n    const board = playerInstance.displayBoard();\n    console.log(board);\n    const box = document.createElement(\"div\");\n    const container = document.createElement(\"div\");\n    const name = document.createElement(\"h1\");\n    name.textContent = player ? \"Player\" : \"Computer\";\n\n    container.classList.add(player ? \"player\" : \"computer\");\n    box.classList.add(player ? \"player-box\" : \"computer-box\");\n    container.classList.add(\"board\");\n    board.forEach((rows, Xindex) => {\n      rows.forEach((cell, Yindex) => {\n        const square = document.createElement(\"div\");\n        if (cell === \"MISS\") {\n          square.classList.add(\"miss\");\n        } else if (cell === \"HIT\") {\n          square.classList.add(\"hit\");\n        } else if (cell !== null && player) {\n          square.classList.add(\"ship\");\n        }\n        square.classList.add(\"square\");\n        square.dataset.x = Xindex;\n        square.dataset.y = Yindex;\n        container.appendChild(square);\n      });\n    });\n    box.appendChild(name);\n    box.appendChild(container);\n    if (this.gameStarted) {\n      const aliveShips = document.createElement(\"span\");\n      aliveShips.classList.add(player ? \"player-ships\" : \"computer-ships\");\n      aliveShips.textContent = `Alive Ships: ${playerInstance.getAliveShips()}`;\n      box.appendChild(aliveShips);\n    }\n    this.main.appendChild(box);\n    return container;\n  }\n  updateAliveShips(playerInstance, isPlayer) {\n    const selector = isPlayer ? \".player-ships\" : \".computer-ships\";\n    const el = document.querySelector(selector);\n    if (el) {\n      el.textContent = `Alive Ships: ${playerInstance.getAliveShips()}`;\n    }\n  }\n  clearBoard() {\n    this.main.innerHTML = \"\";\n  }\n  attack(callback) {\n    this.main.addEventListener(\"click\", (e) => {\n      if (!this.attackEnabled) return;\n      if (\n        e.target.classList.contains(\"square\") &&\n        e.target.closest(\".computer\")\n      ) {\n        const square = e.target;\n        if (\n          square.classList.contains(\"hit\") ||\n          square.classList.contains(\"miss\")\n        )\n          return;\n\n        const x = parseInt(square.dataset.x);\n        const y = parseInt(square.dataset.y);\n        callback(x, y);\n      }\n    });\n  }\n  restart() {\n    const restartBtn = document.createElement(\"button\");\n    restartBtn.textContent = \"New Game\";\n    restartBtn.classList.add(\"restart-button\");\n    restartBtn.onclick = () => window.location.reload();\n    const bottom = document.getElementById(\"bottom\");\n    bottom.appendChild(restartBtn);\n    document.querySelectorAll(\".board\").forEach((el) => {\n      el.classList.add(\"end\");\n    });\n  }\n  disableAttack() {\n    this.attackEnabled = false;\n  }\n}\nlet shipsToPlace = [5, 4, 3, 3, 2];\nlet currentIndex = 0;\nlet currentOrientation = \"vertical\";\n\nfunction setupOrientationButton() {\n  const swapBtn = document.getElementById(\"swap\");\n  swapBtn.textContent = \"Vertical\";\n\n  swapBtn.addEventListener(\"click\", () => {\n    currentOrientation =\n      currentOrientation === \"vertical\" ? \"horizontal\" : \"vertical\";\n    swapBtn.textContent =\n      currentOrientation === \"vertical\" ? \"Vertical\" : \"Horizontal\";\n  });\n}\n\nfunction handleClick(e, PlayerInstance) {\n  const square = e.target;\n  if (!square.classList.contains(\"square\")) return;\n  if (!square.closest(\".player\")) return;\n\n  const x = parseInt(square.dataset.x);\n  const y = parseInt(square.dataset.y);\n  const length = shipsToPlace[currentIndex];\n\n  const placed =\n    currentOrientation === \"vertical\"\n      ? PlayerInstance.placeShip(x, y, length)\n      : PlayerInstance.placeShipHorizontally(x, y, length);\n\n  (0,_GameController_js__WEBPACK_IMPORTED_MODULE_0__.updateBoards)();\n\n  if (placed) {\n    currentIndex++;\n    if (currentIndex >= shipsToPlace.length) {\n      finishPlacement();\n    }\n  }\n}\n\nfunction handleHover(e) {\n  const square = e.target;\n  if (!square.classList.contains(\"square\")) return;\n  if (!square.closest(\".player\")) return;\n\n  const x = parseInt(square.dataset.x);\n  const y = parseInt(square.dataset.y);\n  const length = shipsToPlace[currentIndex];\n\n  clearPreview();\n\n  const toHighlight = [];\n  let isValid = true;\n\n  for (let i = 0; i < length; i++) {\n    const dx = currentOrientation === \"vertical\" ? x + i : x;\n    const dy = currentOrientation === \"vertical\" ? y : y + i;\n    const el = document.querySelector(\n      `.square[data-x=\"${dx}\"][data-y=\"${dy}\"]`\n    );\n    if (!el || el.classList.contains(\"ship\")) isValid = false;\n    if (el) toHighlight.push(el);\n  }\n\n  toHighlight.forEach((el) => {\n    el.classList.add(\"preview\");\n    if (!isValid) el.classList.add(\"invalid\");\n  });\n}\n\nfunction clearPreview() {\n  document\n    .querySelectorAll(\".preview\")\n    .forEach((el) => el.classList.remove(\"preview\", \"invalid\"));\n}\n\nfunction startShipPlacement(PlayerInstance) {\n  setupOrientationButton();\n  (0,_GameController_js__WEBPACK_IMPORTED_MODULE_0__.updateBoards)();\n\n  document\n    .getElementById(\"main\")\n    .addEventListener(\"click\", (e) => handleClick(e, PlayerInstance));\n  document.getElementById(\"main\").addEventListener(\"mouseover\", handleHover);\n  document.getElementById(\"main\").addEventListener(\"mouseout\", clearPreview);\n}\nfunction finishPlacement() {\n  document.getElementById(\"main\").removeEventListener(\"click\", handleClick);\n  document.getElementById(\"main\").removeEventListener(\"mouseover\", handleHover);\n  document.getElementById(\"main\").removeEventListener(\"mouseout\", clearPreview);\n  (0,_GameController_js__WEBPACK_IMPORTED_MODULE_0__.startGame)();\n}\n\n\n//# sourceURL=webpack:///./src/UIController.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/style.css?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/GameController.js");
/******/ 	
/******/ })()
;