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

/***/ "./src/common/addNew.js":
/*!******************************!*\
  !*** ./src/common/addNew.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lists_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lists.js */ \"./src/common/lists.js\");\n\n\nvar addNew = function addNew(e) {\n  e.stopPropagation();\n  var list = new _lists_js__WEBPACK_IMPORTED_MODULE_0__.List();\n  var description = document.getElementById('input-todo').value;\n  list.add(description, false);\n  document.getElementById('input-todo').value = '';\n  var storedTodoList = JSON.parse(localStorage.getItem('toDolist'));\n\n  if (localStorage.getItem('toDolist') === null) {\n    localStorage.setItem('toDolist', JSON.stringify(list.list));\n    window.location.reload();\n  } else {\n    var newList = storedTodoList.concat(list.list);\n    localStorage.setItem('toDolist', JSON.stringify(newList));\n    window.location.reload();\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addNew);\n\n//# sourceURL=webpack://to-do-list/./src/common/addNew.js?");

/***/ }),

/***/ "./src/common/changeItemAppearence.js":
/*!********************************************!*\
  !*** ./src/common/changeItemAppearence.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar changeItemAppearence = function changeItemAppearence(e) {\n  e.currentTarget.childNodes[4].style.display = 'none';\n  e.currentTarget.childNodes[6].style.display = 'block';\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (changeItemAppearence);\n\n//# sourceURL=webpack://to-do-list/./src/common/changeItemAppearence.js?");

/***/ }),

/***/ "./src/common/clearAll.js":
/*!********************************!*\
  !*** ./src/common/clearAll.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar clearAll = function clearAll() {\n  var storedList = JSON.parse(localStorage.getItem('toDolist'));\n  var newArray = storedList.filter(function (item) {\n    return item.completed === false;\n  });\n  localStorage.setItem('toDolist', JSON.stringify(newArray));\n  window.location.reload();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearAll);\n\n//# sourceURL=webpack://to-do-list/./src/common/clearAll.js?");

/***/ }),

/***/ "./src/common/deleteItem.js":
/*!**********************************!*\
  !*** ./src/common/deleteItem.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar deleteItem = function deleteItem(e) {\n  e.stopPropagation();\n  var index = e.currentTarget.parentNode.childNodes[0].innerHTML;\n  var storedList = JSON.parse(localStorage.getItem('toDolist'));\n  storedList.splice(index, 1);\n  localStorage.setItem('toDolist', JSON.stringify(storedList));\n  window.location.reload();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deleteItem);\n\n//# sourceURL=webpack://to-do-list/./src/common/deleteItem.js?");

/***/ }),

/***/ "./src/common/lists.js":
/*!*****************************!*\
  !*** ./src/common/lists.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"List\": () => (/* binding */ List),\n/* harmony export */   \"Todo\": () => (/* binding */ Todo)\n/* harmony export */ });\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/* eslint-disable */\nvar Todo = /*#__PURE__*/_createClass(\n/* eslint-enable */\nfunction Todo(description, completed, index) {\n  _classCallCheck(this, Todo);\n\n  this.description = description;\n  this.completed = completed;\n  this.index = index;\n});\nvar List = /*#__PURE__*/function () {\n  function List() {\n    _classCallCheck(this, List);\n\n    this.list = [];\n  }\n\n  _createClass(List, [{\n    key: \"add\",\n    value: function add(description) {\n      if (Array.isArray(this.list)) {\n        this.list.push(new Todo(description, false, this.list.length));\n      }\n    }\n  }, {\n    key: \"removeItem\",\n    value: function removeItem(index) {\n      if (Array.isArray(this.list)) {\n        var array = this.list;\n        array.splice(index, 1);\n      }\n    }\n  }]);\n\n  return List;\n}();\n\n//# sourceURL=webpack://to-do-list/./src/common/lists.js?");

/***/ }),

/***/ "./src/common/printLoclaStorage.js":
/*!*****************************************!*\
  !*** ./src/common/printLoclaStorage.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_3dot_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/3dot.png */ \"./src/images/3dot.png\");\n/* harmony import */ var _images_bin_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/bin.png */ \"./src/images/bin.png\");\n\n\nvar binIcon = new Image();\nbinIcon.src = _images_bin_png__WEBPACK_IMPORTED_MODULE_1__;\nbinIcon.classList.add('icon');\nvar kebabIcon = new Image();\nkebabIcon.src = _images_3dot_png__WEBPACK_IMPORTED_MODULE_0__;\nkebabIcon.classList.add('icon');\n\nvar printLocalStorage = function printLocalStorage() {\n  if (localStorage.getItem('toDolist') != null) {\n    var storedList = JSON.parse(localStorage.getItem('toDolist'));\n    document.querySelector('.container').textContent = '';\n\n    for (var i = 0; i < storedList.length; i += 1) {\n      var div = document.createElement('div');\n      div.className = 'list-item';\n      div.innerHTML = \"<h5 class=\\\"d-none\\\">\".concat(i, \"</h5><input type=\\\"checkbox\\\" class=\\\"check-box\\\">\\n      <div class=\\\"description-label\\\" contenteditable=\\\"true\\\">\").concat(storedList[i].description, \"</div><img src=\\\"\").concat(_images_3dot_png__WEBPACK_IMPORTED_MODULE_0__, \"\\\" alt=\\\"Kebab Icon\\\" class=\\\"kebab icon\\\">\\n      <img src=\\\"\").concat(_images_bin_png__WEBPACK_IMPORTED_MODULE_1__, \"\\\" alt=\\\"d-none icon bin\\\" class=\\\"bin icon \\\">\");\n      document.querySelector('.container').appendChild(div);\n    }\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (printLocalStorage);\n\n//# sourceURL=webpack://to-do-list/./src/common/printLoclaStorage.js?");

/***/ }),

/***/ "./src/common/refresh.js":
/*!*******************************!*\
  !*** ./src/common/refresh.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar refresh = function refresh() {\n  document.querySelector('.refresh').classList.toggle('refreshed');\n  window.location.reload();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (refresh);\n\n//# sourceURL=webpack://to-do-list/./src/common/refresh.js?");

/***/ }),

/***/ "./src/common/saveEdits.js":
/*!*********************************!*\
  !*** ./src/common/saveEdits.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar saveEdits = function saveEdits(e) {\n  var text = e.currentTarget.innerHTML;\n  var index = e.currentTarget.parentNode.childNodes[0].innerHTML;\n  var toDolist = JSON.parse(localStorage.getItem('toDolist'));\n  toDolist[index].description = text;\n  localStorage.setItem('toDolist', JSON.stringify(toDolist));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (saveEdits);\n\n//# sourceURL=webpack://to-do-list/./src/common/saveEdits.js?");

/***/ }),

/***/ "./src/common/setIndex.js":
/*!********************************!*\
  !*** ./src/common/setIndex.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar setIndex = function setIndex() {\n  if (localStorage.getItem('toDolist') != null) {\n    var storedTodoList = JSON.parse(localStorage.getItem('toDolist'));\n\n    for (var i = 0; i < storedTodoList.length; i += 1) {\n      storedTodoList[i].index = i + 1;\n      localStorage.setItem('toDolist', JSON.stringify(storedTodoList));\n    }\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setIndex);\n\n//# sourceURL=webpack://to-do-list/./src/common/setIndex.js?");

/***/ }),

/***/ "./src/common/underline.js":
/*!*********************************!*\
  !*** ./src/common/underline.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar underline = function underline(e) {\n  if (e.currentTarget.checked === true) {\n    e.currentTarget.parentNode.childNodes[3].style.textDecoration = 'line-through';\n    e.currentTarget.parentNode.childNodes[3].style.color = 'gray';\n    var index = e.currentTarget.parentNode.childNodes[0].innerHTML;\n    var storedList = JSON.parse(localStorage.getItem('toDolist'));\n    storedList[index].completed = true;\n    localStorage.setItem('toDolist', JSON.stringify(storedList));\n  } else {\n    var _index = e.currentTarget.parentNode.childNodes[0].innerHTML;\n\n    var _storedList = JSON.parse(localStorage.getItem('toDolist'));\n\n    _storedList[_index].completed = false;\n    localStorage.setItem('toDolist', JSON.stringify(_storedList));\n    e.currentTarget.parentNode.childNodes[3].style.textDecoration = 'none';\n    e.currentTarget.parentNode.childNodes[3].style.color = 'black';\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (underline);\n\n//# sourceURL=webpack://to-do-list/./src/common/underline.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _images_refresh_icon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/refresh-icon.png */ \"./src/images/refresh-icon.png\");\n/* harmony import */ var _common_refresh_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/refresh.js */ \"./src/common/refresh.js\");\n/* harmony import */ var _common_printLoclaStorage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/printLoclaStorage.js */ \"./src/common/printLoclaStorage.js\");\n/* harmony import */ var _common_clearAll_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/clearAll.js */ \"./src/common/clearAll.js\");\n/* harmony import */ var _common_addNew_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/addNew.js */ \"./src/common/addNew.js\");\n/* harmony import */ var _common_saveEdits_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/saveEdits.js */ \"./src/common/saveEdits.js\");\n/* harmony import */ var _common_underline_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/underline.js */ \"./src/common/underline.js\");\n/* harmony import */ var _common_changeItemAppearence_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/changeItemAppearence.js */ \"./src/common/changeItemAppearence.js\");\n/* harmony import */ var _common_deleteItem_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/deleteItem.js */ \"./src/common/deleteItem.js\");\n/* harmony import */ var _common_setIndex_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./common/setIndex.js */ \"./src/common/setIndex.js\");\n\n\n\n\n\n\n\n\n\n\n\nvar refreshIcon = new Image();\nrefreshIcon.src = _images_refresh_icon_png__WEBPACK_IMPORTED_MODULE_1__; // PRINT THE LOCAL STORAGE\n\n(0,_common_printLoclaStorage_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(); // SET INDEX OF LOCAL STORAGE\n\n(0,_common_setIndex_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(); // Add the image to todo div div.\n\nrefreshIcon.classList.add('refresh');\ndocument.querySelector('.todo').appendChild(refreshIcon); // ONCLICK ROTATE THE REFRESH ICON AND REFRESH THE WHOLE PAGE\n\ndocument.querySelector('.refresh').addEventListener('click', _common_refresh_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]); // ADD NEW TO-DO LIST\n\ndocument.getElementById('enter').addEventListener('click', _common_addNew_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]); // Taking Inputs to use enter key\n\ndocument.querySelector('#input-todo').addEventListener('change', _common_addNew_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]); // EDIT AN ITEM\n\ndocument.querySelectorAll('.description-label').forEach(function (description) {\n  description.addEventListener('input', _common_saveEdits_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n}); // Delete a row\n\ndocument.querySelectorAll('.bin').forEach(function (bin) {\n  bin.addEventListener('click', _common_deleteItem_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"]);\n}); // CHANGE THE THEAM OF THE SELECTED TO DO LIST\n\ndocument.querySelectorAll('.list-item').forEach(function (item) {\n  item.addEventListener('click', _common_changeItemAppearence_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"]);\n}); // REMOVE THE LIST OF CHECKED ITEMS\n\ndocument.querySelector('.clear-all').addEventListener('click', _common_clearAll_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]); // LINE-THROUGH AN ITEM CHECKING THE CHECKBOX\n\ndocument.querySelectorAll('.check-box').forEach(function (value) {\n  value.addEventListener('change', _common_underline_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\n});\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.css":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.css ***!
  \****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css?family=Karla:weight@400;700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  font-family: \\\"Karla\\\", sans-serif;\\n}\\n\\n.main {\\n  padding: 10px;\\n  border: 1px solid rgb(229, 226, 226);\\n  text-shadow: 2px 2px 4px #6d6969;\\n  box-shadow: 0 0 5px rgb(222, 224, 224);\\n}\\n\\nh1 {\\n  text-align: center;\\n  font-size: 15px;\\n}\\n\\n.todo {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n}\\n\\n.refresh {\\n  width: 20px;\\n  height: 20px;\\n  cursor: pointer;\\n  transition: transform 0.5s;\\n}\\n\\n.icon {\\n  width: 20px;\\n  height: 20px;\\n  cursor: pointer;\\n  float: right;\\n}\\n\\n.refreshed {\\n  transform: rotate(360deg);\\n}\\n\\n.list-item {\\n  display: flex;\\n  padding: 10px;\\n  border: 1px solid rgb(229, 226, 226);\\n  text-shadow: 2px 2px 4px #b4b0b0;\\n  box-shadow: 0 0 5px rgb(222, 224, 224);\\n  justify-content: space-between;\\n}\\n\\n.yellwo {\\n  background-color: rgb(236, 236, 111);\\n}\\n\\n.kebabIcon {\\n  width: 20px;\\n  height: 20px;\\n  cursor: pointer;\\n}\\n\\n.check-box {\\n  float: left;\\n}\\n\\n#input-todo {\\n  /* width: auto; */\\n  height: 30px;\\n  padding-left: 15px;\\n  font-style: italic;\\n  border: none;\\n}\\n\\n#input-todo:focus {\\n  outline: none;\\n}\\n\\n#input-form {\\n  display: flex;\\n  justify-content: space-between;\\n}\\n\\n#enter {\\n  background-color: white;\\n  border: none;\\n  margin: 0;\\n  padding: 10px;\\n}\\n\\n.clear-all {\\n  background-color: rgb(236, 234, 234);\\n  padding: 10px;\\n  text-align: center;\\n}\\n\\n.clear-all h5 {\\n  margin: 0;\\n  text-align: center;\\n  display: inline;\\n  text-decoration: none;\\n  color: rgb(115, 113, 113);\\n  cursor: pointer;\\n}\\n\\n.clear-all > h5:hover {\\n  text-decoration-line: underline;\\n}\\n\\n.bin {\\n  display: none;\\n}\\n\\n.d-none {\\n  display: none;\\n}\\n\\n.d-block {\\n  display: block;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/images/3dot.png":
/*!*****************************!*\
  !*** ./src/images/3dot.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8b8ceeb120d2e9bbc31b.png\";\n\n//# sourceURL=webpack://to-do-list/./src/images/3dot.png?");

/***/ }),

/***/ "./src/images/bin.png":
/*!****************************!*\
  !*** ./src/images/bin.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"92b624de8b37f1883521.png\";\n\n//# sourceURL=webpack://to-do-list/./src/images/bin.png?");

/***/ }),

/***/ "./src/images/refresh-icon.png":
/*!*************************************!*\
  !*** ./src/images/refresh-icon.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c3c1fa5ccccc29e2f236.png\";\n\n//# sourceURL=webpack://to-do-list/./src/images/refresh-icon.png?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;