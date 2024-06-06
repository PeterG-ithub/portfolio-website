/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n  padding: 0;\r\n  margin: 0;\r\n  width: 100%;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.header {\r\n  padding: 2rem;\r\n  text-align: center;\r\n  width: 100%;\r\n}\r\n\r\n.header img {\r\n  height: auto;\r\n  width: auto;\r\n  max-width: 540px;\r\n}\r\n\r\n.header-desc {\r\n  font-family: 'Times New Roman', Times, serif;\r\n  font-size: 1.3rem;\r\n  opacity: 0.6;\r\n}\r\n\r\n.github-icon {\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 10px;\r\n  font-size: 32px;\r\n  width: auto;\r\n}\r\n\r\n/*PROJECTS*/\r\n.projects-container {\r\n  display: grid;\r\n  grid-template-columns: repeat(\r\n    auto-fit,\r\n    minmax(350px, 1fr)\r\n  ); /* Ensure each column has a minimum width of 200px */\r\n  gap: 15px;\r\n  max-width: 1350px;\r\n  margin: auto;\r\n  padding: 1rem;\r\n}\r\n\r\n.project-container {\r\n  position: relative;\r\n  border: solid black;\r\n  border-radius: 0.7rem;\r\n  min-width: 350px; /* Keep a minimum width */\r\n  height: fit-content;\r\n  text-align: center;\r\n  box-sizing: border-box; /* Include border in the box's dimensions */\r\n  transition: all 0.2s ease; /* Set position to relative for absolute positioning of tech-container */\r\n  overflow: hidden;\r\n  cursor: pointer;\r\n}\r\n\r\n.project-container:hover {\r\n  transform: scale(1.01);\r\n}\r\n\r\n\r\n.project-status-container {\r\n  width: auto;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  padding: 3px 5px;\r\n  margin: 3px;\r\n  display: flex;\r\n  align-items: center; /* Align items vertically */\r\n  justify-content: flex-end; /* Align items to the end (right side) */\r\n  background-color: azure;\r\n  border-radius: 0.7rem;\r\n  border: solid black 2px;\r\n  opacity: 0.8;\r\n  z-index: 3;\r\n}\r\n\r\n.project-status {\r\n  margin-right: 5px; /* Adjust margin between text and image */\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-weight: bolder;\r\n  width: auto;\r\n}\r\n\r\n.project-status-container img {\r\n  max-width: 16px; /* Ensure image does not exceed container width */\r\n  height: auto; /* Maintain aspect ratio */\r\n  vertical-align: middle; /* Align image vertically */\r\n}\r\n\r\n.project-thumbnail {\r\n  position: relative;\r\n}\r\n\r\n.project-tech-container {\r\n  position: absolute; /* Set position to absolute */\r\n  bottom: 0; /* Align at the bottom of the container */\r\n  left: 0; /* Align to the left */\r\n  width: 100%; /* Occupy full width */\r\n  background-color: #f9f9f9af;\r\n  padding: 10px;\r\n  display: flex;\r\n  gap: 15px;\r\n}\r\n\r\n.project-tech {\r\n  width: auto;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\n.see-more-dropdown {\r\n  position: relative; /* Set position to relative */\r\n  z-index: 2; /* Ensure dropdown appears above tech container */\r\n}\r\n\r\n.dropdown-icon {\r\n  height: 16px;\r\n  width: auto;\r\n  margin: .2rem;\r\n} \r\n\r\n.project-description {\r\n  padding: .5rem 1.5rem;\r\n  text-align: left;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n/*FILTER*/\r\n\r\n.filter-container {\r\n  max-width: 1300px;\r\n  margin: auto;\r\n  padding: 0rem 1rem;\r\n  display: flex;\r\n  gap: 10px;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.dropdown {\r\n  position: relative;\r\n  display: inline-block;\r\n  border: solid black 2px;\r\n  border-radius: 0.7rem;\r\n  background-color: #f0f0f0;\r\n  width: auto;\r\n}\r\n\r\n.dropdown-toggle {\r\n  background-color: #f0f0f0;\r\n  color: #000;\r\n  padding: 10px;\r\n  border: none;\r\n  cursor: pointer;\r\n  border-radius: inherit;\r\n}\r\n\r\n.dropdown-toggle.active {\r\n  background-color: #d0d0d0;\r\n}\r\n\r\n.dropdown-menu {\r\n  display: none;\r\n  position: absolute;\r\n  top: 45px;\r\n  background-color: #f0f0f0;\r\n  border: solid #757575 1px;\r\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);\r\n  z-index: 5;\r\n  cursor: pointer;\r\n}\r\n\r\n.dropdown-menu .dropdown-item {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 8px 12px;\r\n}\r\n.dropdown-menu .dropdown-item input[type='checkbox'] {\r\n  margin-right: 8px;\r\n}\r\n\r\n.dropdown-item {\r\n  white-space: nowrap;\r\n}\r\n\r\n.dropdown-item:hover {\r\n  background-color: #c6c6c6;\r\n}\r\n\r\n.dropdown.show .dropdown-menu {\r\n  display: block;\r\n}\r\n\r\n.dropdown-item > * {\r\n  width: auto;\r\n}\r\n\r\n.dropdown-menu {\r\n  width: fit-content;\r\n}\r\n\r\n.dropdown-toggle {\r\n  background-color: transparent;\r\n  border: none;\r\n  font-size: 16px;\r\n  cursor: pointer;\r\n}\r\n\r\n.inverted {\r\n  background-color: rgb(138, 138, 138);\r\n  color: white;\r\n  border-radius: .5rem;\r\n}\r\n\r\n/* Styles for the reset button */\r\n.reset-button {\r\n  background: none;\r\n  border: none;\r\n  color: red;\r\n  cursor: pointer;\r\n  margin-left: 10px;\r\n  font-weight: bold;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://portfolio-website/./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://portfolio-website/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://portfolio-website/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/data/filter.json":
/*!******************************!*\
  !*** ./src/data/filter.json ***!
  \******************************/
/***/ ((module) => {

eval("module.exports = {\"Programming Languages\":{\"type\":[\"Checkbox\"],\"data\":[\"C++\",\"HTML\",\"CSS\",\"JavaScript\",\"Ruby\"]},\"Frameworks and Libraries\":{\"type\":[\"Checkbox\"],\"data\":[\"SFML\",\"Ruby on rails\"]},\"Tools and Software\":{\"type\":[\"Checkbox\"],\"data\":[\"Godot\",\"Aseprite\"]},\"Project Type\":{\"type\":[\"Checkbox\"],\"data\":[\"Web Development\",\"Game Development\",\"Simulation\",\"Physics Simulation\"]},\"Dev Stage\":{\"type\":[\"Checkbox\"],\"data\":[\"Completed\",\"In Progress\",\"Concept\",\"Protoype\",\"On Hold\"]}}\n\n//# sourceURL=webpack://portfolio-website/./src/data/filter.json?");

/***/ }),

/***/ "./src/data/projects.json":
/*!********************************!*\
  !*** ./src/data/projects.json ***!
  \********************************/
/***/ ((module) => {

eval("module.exports = {\"bouncyBallProject\":{\"name\":\"Bouncy Ball\",\"description\":\"A simple bouncy ball simulation using C++ and SFML\",\"image\":\"bouncy-ball-project.png\",\"technology\":[\"C++\",\"SFML\"],\"link\":\"pages/bouncy-ball.html\",\"devStage\":\"Completed\",\"tags\":[\"Physics Simulation\",\"C++\",\"SFML\",\"Completed\"]},\"godotFeatureProject\":{\"name\":\"Godot Feature Project\",\"description\":\"A project where I put all the features and systems I can add using godot\",\"image\":\"godot-feature-project.png\",\"technology\":[\"Godot\"],\"link\":\"pages/\",\"devStage\":\"Prototype\",\"tags\":[\"Godot\",\"Aseprite\",\"GDScript\",\"Game Development\",\"Prototype\"]},\"antSimulationProject\":{\"name\":\"Ant Simulation Project\",\"description\":\"This Ant Simulation project models the behavior and interactions of an ant colony using C++ and SFML. The simulation includes features like food searching, pheromone trail communication, and pathfinding. It provides a simple yet effective demonstration of ant colony dynamics and behaviors.\",\"image\":\"ant-simulation-thumbnail.png\",\"technology\":[\"C++\",\"SFML\"],\"link\":\"pages/\",\"devStage\":\"In Progress\",\"tags\":[\"C++\",\"SFML\",\"Simulation\",\"In Progress\"]},\"sociwave\":{\"name\":\"Sociwave\",\"description\":\"My take on a simple social media application. This application allows users to create accounts, confirm their accounts, comment on posts, like posts, send friend requests, and manage friends.\",\"image\":\"sociwave-thumbnail.png\",\"technology\":[\"Ruby on rails\",\"devise\",\"omniauth\"],\"link\":\"pages/sociwave.html\",\"devStage\":\"On Hold\",\"tags\":[\"Web Development\",\"HTML\",\"CSS\",\"Javascript\",\"Ruby\",\"Ruby on rails\",\"On Hold\"]}}\n\n//# sourceURL=webpack://portfolio-website/./src/data/projects.json?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://portfolio-website/./src/css/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://portfolio-website/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://portfolio-website/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://portfolio-website/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://portfolio-website/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://portfolio-website/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://portfolio-website/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/images/status sync recursive ^\\.\\/.*\\-icon\\.png$":
/*!*****************************************************!*\
  !*** ./src/images/status/ sync ^\.\/.*\-icon\.png$ ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./completed-icon.png\": \"./src/images/status/completed-icon.png\",\n\t\"./in-progress-icon.png\": \"./src/images/status/in-progress-icon.png\",\n\t\"./on-hold-icon.png\": \"./src/images/status/on-hold-icon.png\",\n\t\"./prototype-icon.png\": \"./src/images/status/prototype-icon.png\",\n\t\"./template-icon.png\": \"./src/images/status/template-icon.png\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/images/status sync recursive ^\\\\.\\\\/.*\\\\-icon\\\\.png$\";\n\n//# sourceURL=webpack://portfolio-website/./src/images/status/_sync_^\\.\\/.*\\-icon\\.png$?");

/***/ }),

/***/ "./src/images/thumbnail sync recursive ^\\.\\/.*$":
/*!*********************************************!*\
  !*** ./src/images/thumbnail/ sync ^\.\/.*$ ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./ant-simulation-thumbnail.png\": \"./src/images/thumbnail/ant-simulation-thumbnail.png\",\n\t\"./bouncy-ball-project.png\": \"./src/images/thumbnail/bouncy-ball-project.png\",\n\t\"./godot-feature-project.png\": \"./src/images/thumbnail/godot-feature-project.png\",\n\t\"./sociwave-thumbnail.png\": \"./src/images/thumbnail/sociwave-thumbnail.png\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/images/thumbnail sync recursive ^\\\\.\\\\/.*$\";\n\n//# sourceURL=webpack://portfolio-website/./src/images/thumbnail/_sync_^\\.\\/.*$?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _js_filter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/filter.js */ \"./src/js/filter.js\");\n/* harmony import */ var _js_project_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/project.js */ \"./src/js/project.js\");\n\r\n\r\n\r\n// Create the header div\r\nconst header = document.createElement('div');\r\nheader.classList.add('header');\r\n\r\n// Create the GitHub link\r\nconst githubLink = document.createElement('a');\r\ngithubLink.href = 'https://github.com/PeterG-ithub';\r\ngithubLink.classList.add('github-icon');\r\ngithubLink.target = '_blank';\r\n\r\n// Create the GitHub icon\r\nconst githubIcon = document.createElement('i');\r\ngithubIcon.classList.add('fab', 'fa-github');\r\ngithubLink.appendChild(githubIcon);\r\n\r\n// Create the logo image\r\nconst logoImg = document.createElement('img');\r\nlogoImg.src = __webpack_require__(/*! ./images/portfolio-logo.png */ \"./src/images/portfolio-logo.png\");\r\nlogoImg.alt = 'portfolio logo';\r\n\r\n// Create the header description\r\nconst headerDesc = document.createElement('div');\r\nheaderDesc.classList.add('header-desc');\r\nheaderDesc.textContent = 'a small portfolio website by Peter';\r\n\r\n// Append elements to the header\r\nheader.appendChild(githubLink);\r\nheader.appendChild(logoImg);\r\nheader.appendChild(headerDesc);\r\n\r\n// Create the filter container\r\nconst filterContainer = document.createElement('div');\r\nfilterContainer.classList.add('filter-container');\r\n\r\n// Create the projects container\r\nconst projectsContainer = document.createElement('div');\r\nprojectsContainer.classList.add('projects-container');\r\n\r\n// Append the header, filter container, and projects container to the body\r\ndocument.body.appendChild(header);\r\ndocument.body.appendChild(filterContainer);\r\ndocument.body.appendChild(projectsContainer);\n\n//# sourceURL=webpack://portfolio-website/./src/index.js?");

/***/ }),

/***/ "./src/js/filter.js":
/*!**************************!*\
  !*** ./src/js/filter.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_dataLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dataLoader */ \"./src/utils/dataLoader.js\");\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ \"./src/js/project.js\");\n\r\n\r\nconst filterState = {};\r\nconst filterData = (0,_utils_dataLoader__WEBPACK_IMPORTED_MODULE_0__.getFilterData)();\r\nconst projectsData = (0,_utils_dataLoader__WEBPACK_IMPORTED_MODULE_0__.getProjectsData)();\r\nconsole.log(projectsData);\r\nfor (const projectId in projectsData) {\r\n  if (projectsData.hasOwnProperty(projectId)) {\r\n      const project = projectsData[projectId];\r\n      // Iterate over each tag of the project\r\n      for (const tag of project.tags) {\r\n          console.log(`Tag: ${tag}`);\r\n\r\n      }\r\n  }\r\n}\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', function () {\r\n\r\n\r\n  // Create checkbox dropdown for status\r\n  createDropdowns(filterData);\r\n\r\n  // Add event listener to dropdown toggles\r\n  addDropdownEventListeners();\r\n\r\n  // Add event listener to close dropdowns when clicking outside\r\n  document.addEventListener('click', closeDropdownsOnClickOutside);\r\n});\r\n\r\nfunction createDropdowns(data) {\r\n  // Iterate over each category\r\n  Object.keys(data).forEach((categoryName) => {\r\n    createDropdown(categoryName, data[categoryName]);\r\n  });\r\n}\r\n\r\nfunction createDropdown(categoryName, categoryData) {\r\n  const parentContainer = document.querySelector('.filter-container');\r\n  // Create dropdown container\r\n  const dropdownContainer = document.createElement('div');\r\n  dropdownContainer.classList.add('dropdown-container', 'dropdown');\r\n\r\n  // Create dropdown toggle button\r\n  const button = document.createElement('button');\r\n  button.classList.add('dropdown-toggle');\r\n  button.id = `filter-${categoryName}`;\r\n  button.textContent = categoryName.charAt(0).toUpperCase() + categoryName.slice(1); // Capitalize first letter\r\n\r\n  // Initialize filter state for this category\r\n  filterState[categoryName] = {};\r\n\r\n  // Create dropdown menu\r\n  const dropdownMenu = document.createElement('div');\r\n  dropdownMenu.classList.add('dropdown-menu');\r\n\r\n  // Check the type of dropdown\r\n  if (categoryData.type.includes('Checkbox')) {\r\n    // Checkbox dropdown logic\r\n    categoryData.data.forEach((item) => {\r\n      const dropdownItem = document.createElement('div');\r\n      dropdownItem.classList.add('dropdown-item');\r\n\r\n      const checkbox = document.createElement('input');\r\n      checkbox.type = 'checkbox';\r\n      checkbox.id = item.toLowerCase().replace(/\\s+/g, '-');\r\n      checkbox.setAttribute('data-state', 'neutral');\r\n\r\n      const label = document.createElement('label');\r\n      label.htmlFor = checkbox.id;\r\n      label.textContent = item;\r\n\r\n      dropdownItem.appendChild(checkbox);\r\n      dropdownItem.appendChild(label);\r\n      dropdownMenu.appendChild(dropdownItem);\r\n\r\n      // Checkbox event listener\r\n      checkbox.addEventListener('click', function () {\r\n        const states = ['include', 'exclude', 'neutral'];\r\n        let currentState = this.getAttribute('data-state');\r\n        let currentIndex = states.indexOf(currentState);\r\n        let nextIndex = (currentIndex + 1) % states.length;\r\n        this.setAttribute('data-state', states[nextIndex]);\r\n        this.checked = states[nextIndex] === 'include';\r\n        this.indeterminate = states[nextIndex] === 'exclude';\r\n        if (states[nextIndex] === 'neutral') {\r\n          this.checked = false;\r\n        }\r\n\r\n        // Update filter state\r\n        updateFilterState(categoryName, item, states[nextIndex]);\r\n      });\r\n    });\r\n  } else if (categoryData.type.includes('Select')) {\r\n    // Select dropdown logic\r\n    categoryData.data.forEach((item) => {\r\n      const dropdownItem = document.createElement('div');\r\n      dropdownItem.classList.add('dropdown-item', 'select-dropdown-item');\r\n      dropdownItem.setAttribute('data-value', item.toLowerCase().replace(/\\s+/g, '-'));\r\n\r\n      dropdownItem.textContent = item;\r\n      dropdownMenu.appendChild(dropdownItem);\r\n\r\n      // Select dropdown event listener\r\n      dropdownItem.addEventListener('click', function () {\r\n        const selectedValue = this.getAttribute('data-value');\r\n        const selectedText = this.textContent;\r\n        const parentButton =\r\n          this.closest('.dropdown-container').querySelector('.dropdown-toggle');\r\n\r\n        // Update button text and invert color scheme\r\n        parentButton.textContent = `${selectedText} X`;\r\n        parentButton.classList.add('inverted');\r\n\r\n        // Close dropdown\r\n        this.parentNode.parentNode.classList.remove('show');\r\n\r\n        // Update filter state\r\n        updateFilterState(categoryName, selectedText, 'selected');\r\n\r\n        // Add event listener to reset the entire button\r\n        parentButton.addEventListener('click', function () {\r\n          parentButton.textContent = categoryName.charAt(0).toUpperCase() + categoryName.slice(1);\r\n          parentButton.classList.remove('inverted');\r\n          // Clear filter state for this category\r\n          filterState[categoryName] = {};\r\n        });\r\n      });\r\n    });\r\n  }\r\n\r\n  // Append dropdown toggle button and dropdown menu to dropdown container\r\n  dropdownContainer.appendChild(button);\r\n  dropdownContainer.appendChild(dropdownMenu);\r\n\r\n  // Append dropdown container to filter container\r\n  parentContainer.appendChild(dropdownContainer);\r\n}\r\n\r\nfunction updateFilterState(categoryName, item, state) {\r\n  if (state === 'neutral') {\r\n    delete filterState[categoryName][item];\r\n  } else {\r\n    filterState[categoryName][item] = state;\r\n  }\r\n  console.log('Filter state updated:', filterState);\r\n  updateProjects();\r\n}\r\n\r\nfunction addDropdownEventListeners() {\r\n  // Select all dropdown toggles and dropdowns\r\n  const dropdowns = document.querySelectorAll('.dropdown');\r\n\r\n  // Add event listener to each dropdown toggle within its container\r\n  dropdowns.forEach((dropdown) => {\r\n    const dropdownToggle = dropdown.querySelector('.dropdown-toggle');\r\n\r\n    dropdownToggle.addEventListener('click', function (event) {\r\n      // If the button contains the reset button, reset the dropdown\r\n      if (dropdownToggle.querySelector('.reset-button')) {\r\n        event.stopPropagation();\r\n        dropdownToggle.textContent =\r\n          dropdownToggle.id.replace('filter-', '').charAt(0).toUpperCase() +\r\n          dropdownToggle.id.replace('filter-', '').slice(1);\r\n        dropdownToggle.classList.remove('inverted');\r\n        dropdownToggle.querySelector('.reset-button').remove();\r\n      } else {\r\n        // Check if the dropdown is already open\r\n        const isOpen = dropdown.classList.contains('show');\r\n\r\n        // Close all dropdowns\r\n        closeAllDropdowns();\r\n\r\n        // If the clicked dropdown was not already open, open it\r\n        if (!isOpen) {\r\n          dropdown.classList.add('show');\r\n        }\r\n      }\r\n    });\r\n  });\r\n}\r\n\r\nfunction closeAllDropdowns() {\r\n  // Select all dropdowns and remove the 'show' class\r\n  const dropdowns = document.querySelectorAll('.dropdown');\r\n  dropdowns.forEach((dropdown) => {\r\n    dropdown.classList.remove('show');\r\n  });\r\n}\r\n\r\nfunction closeDropdownsOnClickOutside(event) {\r\n  // Check if the clicked element is inside any dropdown\r\n  const isInsideDropdown = event.target.closest('.dropdown');\r\n\r\n  // If not, close all dropdowns\r\n  if (!isInsideDropdown) {\r\n    closeAllDropdowns();\r\n  }\r\n}\r\n\r\nconst filterProjects = (filter, projects) => {\r\n  const filteredProjects = [];\r\n\r\n  for (const projectKey in projects) {\r\n      const project = projects[projectKey];\r\n      let includeProject = true;\r\n\r\n      for (const category in filter) {\r\n          const categoryFilter = filter[category];\r\n          const projectTags = project.tags;\r\n\r\n          for (const tag in categoryFilter) {\r\n              if (categoryFilter[tag] === \"include\" && !projectTags.includes(tag)) {\r\n                  includeProject = false;\r\n                  break;\r\n              } else if (categoryFilter[tag] === \"exclude\" && projectTags.includes(tag)) {\r\n                  includeProject = false;\r\n                  break;\r\n              }\r\n          }\r\n\r\n          if (!includeProject) {\r\n              break;\r\n          }\r\n      }\r\n\r\n      if (includeProject) {\r\n          filteredProjects.push(project);\r\n      }\r\n  }\r\n\r\n  return filteredProjects;\r\n};\r\n\r\nfunction updateProjects() {\r\n  const projectContainer = document.querySelector('.projects-container');\r\n  projectContainer.innerHTML = '';\r\n  let filteredProjects = filterProjects(filterState, projectsData);\r\n  (0,_project_js__WEBPACK_IMPORTED_MODULE_1__.createProjects)(filteredProjects, projectContainer);\r\n}\n\n//# sourceURL=webpack://portfolio-website/./src/js/filter.js?");

/***/ }),

/***/ "./src/js/project.js":
/*!***************************!*\
  !*** ./src/js/project.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createProjects: () => (/* binding */ createProjects)\n/* harmony export */ });\n/* harmony import */ var _utils_dataLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dataLoader */ \"./src/utils/dataLoader.js\");\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n    console.log(\"hi\")\r\n    const projectsData = (0,_utils_dataLoader__WEBPACK_IMPORTED_MODULE_0__.getProjectsData)();\r\n    const projectContainer = document.querySelector('.projects-container');\r\n    createProjects(projectsData, projectContainer);\r\n});\r\n\r\nfunction createProjects(data, container) {\r\n    for (const key in data) {\r\n        if (data.hasOwnProperty(key)) {\r\n            const project = data[key];\r\n            const projectElement = createProject(project);\r\n            container.appendChild(projectElement);\r\n        }\r\n    }\r\n}\r\n\r\nfunction createProject(project) {\r\n    // Create project container\r\n    const projectElement = document.createElement('div');\r\n    projectElement.className = 'project-container';\r\n\r\n    // Project status container\r\n    const projectStatusContainer = document.createElement('div');\r\n    projectStatusContainer.className = 'project-status-container';\r\n    const projectStatus = document.createElement('div');\r\n    projectStatus.className = 'project-status';\r\n    projectStatus.innerText = project.devStage; // Join array values for display\r\n\r\n    const statusIcon = document.createElement('img');\r\n    statusIcon.className = 'status-icon';\r\n    // Assuming the first devStage represents the current status\r\n    const status = project.devStage.toLowerCase().replace(/ /g, '-');\r\n    statusIcon.src = __webpack_require__(\"./src/images/status sync recursive ^\\\\.\\\\/.*\\\\-icon\\\\.png$\")(`./${status}-icon.png`); // Construct the image path\r\n    statusIcon.alt = `${project.devStage[0]} Icon`; // Use the devStage as the alt text\r\n\r\n    projectStatusContainer.appendChild(projectStatus);\r\n    projectStatusContainer.appendChild(statusIcon);\r\n\r\n    // Project thumbnail\r\n    const projectThumbnail = document.createElement('div');\r\n    projectThumbnail.className = 'project-thumbnail';\r\n    const thumbnailImage = document.createElement('img');\r\n    thumbnailImage.src = __webpack_require__(\"./src/images/thumbnail sync recursive ^\\\\.\\\\/.*$\")(`./${project.image}`);\r\n    thumbnailImage.alt = 'Project Thumbnail';\r\n\r\n    projectThumbnail.appendChild(thumbnailImage);\r\n\r\n    // Project technologies\r\n    const projectTechContainer = document.createElement('div');\r\n    projectTechContainer.className = 'project-tech-container';\r\n    project.technology.forEach(tech => {\r\n        const techElement = document.createElement('div');\r\n        techElement.className = 'project-tech';\r\n        techElement.innerText = tech;\r\n        projectTechContainer.appendChild(techElement);\r\n    });\r\n\r\n    projectThumbnail.appendChild(projectTechContainer);\r\n\r\n    // See more dropdown (initially hidden)\r\n    const seeMoreDropdown = document.createElement('div');\r\n    seeMoreDropdown.className = 'see-more-dropdown';\r\n    seeMoreDropdown.style.display = 'none'; // Hide the description initially\r\n\r\n    const projectDescription = document.createElement('div');\r\n    projectDescription.className = 'project-description';\r\n    projectDescription.innerText = project.description;\r\n    // const projectLink = document.createElement('a');\r\n    // projectLink.className = 'project-link';\r\n    // projectLink.href = project.link;\r\n    // projectLink.target = '_blank';\r\n    // projectLink.innerText = 'Learn more...';\r\n\r\n    seeMoreDropdown.appendChild(projectDescription);\r\n    //seeMoreDropdown.appendChild(projectLink);\r\n\r\n    // Dropdown icon\r\n    const dropdownIcon = document.createElement('img');\r\n    dropdownIcon.className = 'dropdown-icon';\r\n    dropdownIcon.src = __webpack_require__(/*! ../images/icons/project-dropdown.png */ \"./src/images/icons/project-dropdown.png\");\r\n    dropdownIcon.alt = 'Dropdown Icon';\r\n\r\n    // Add click event listener to toggle project description visibility and rotate dropdown icon\r\n    projectElement.addEventListener('click', () => {\r\n        if (seeMoreDropdown.style.display === 'none') {\r\n            seeMoreDropdown.style.display = 'block';\r\n            dropdownIcon.style.transform = 'rotate(180deg)';\r\n        } else {\r\n            seeMoreDropdown.style.display = 'none';\r\n            dropdownIcon.style.transform = 'rotate(0deg)';\r\n        }\r\n    });\r\n\r\n    // Append all elements to the project container\r\n    projectElement.appendChild(projectStatusContainer);\r\n    projectElement.appendChild(projectThumbnail);\r\n    projectElement.appendChild(seeMoreDropdown);\r\n    projectElement.appendChild(dropdownIcon);\r\n\r\n    return projectElement;\r\n}\r\n\n\n//# sourceURL=webpack://portfolio-website/./src/js/project.js?");

/***/ }),

/***/ "./src/utils/dataLoader.js":
/*!*********************************!*\
  !*** ./src/utils/dataLoader.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getFilterData: () => (/* binding */ getFilterData),\n/* harmony export */   getProjectsData: () => (/* binding */ getProjectsData)\n/* harmony export */ });\nlet cachedFilterData = null;\r\nlet cachedProjectsData = null;\r\n\r\nconst getFilterData = () => {\r\n  if (cachedFilterData) {\r\n    return cachedFilterData;\r\n  }\r\n\r\n  const filterData = __webpack_require__(/*! ../data/filter.json */ \"./src/data/filter.json\");\r\n  cachedFilterData = filterData;\r\n  return filterData;\r\n};\r\n    \r\nconst getProjectsData = () => {\r\n  if (cachedProjectsData) {\r\n    return cachedProjectsData;\r\n  }\r\n\r\n  const projectsData = __webpack_require__(/*! ../data/projects.json */ \"./src/data/projects.json\");\r\n  cachedProjectsData = projectsData;\r\n  return projectsData;\r\n};\n\n//# sourceURL=webpack://portfolio-website/./src/utils/dataLoader.js?");

/***/ }),

/***/ "./src/images/icons/project-dropdown.png":
/*!***********************************************!*\
  !*** ./src/images/icons/project-dropdown.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/project-dropdown.png\";\n\n//# sourceURL=webpack://portfolio-website/./src/images/icons/project-dropdown.png?");

/***/ }),

/***/ "./src/images/portfolio-logo.png":
/*!***************************************!*\
  !*** ./src/images/portfolio-logo.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/portfolio-logo.png\";\n\n//# sourceURL=webpack://portfolio-website/./src/images/portfolio-logo.png?");

/***/ }),

/***/ "./src/images/status/completed-icon.png":
/*!**********************************************!*\
  !*** ./src/images/status/completed-icon.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/completed-icon.png\";\n\n//# sourceURL=webpack://portfolio-website/./src/images/status/completed-icon.png?");

/***/ }),

/***/ "./src/images/status/in-progress-icon.png":
/*!************************************************!*\
  !*** ./src/images/status/in-progress-icon.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/in-progress-icon.png\";\n\n//# sourceURL=webpack://portfolio-website/./src/images/status/in-progress-icon.png?");

/***/ }),

/***/ "./src/images/status/on-hold-icon.png":
/*!********************************************!*\
  !*** ./src/images/status/on-hold-icon.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/on-hold-icon.png\";\n\n//# sourceURL=webpack://portfolio-website/./src/images/status/on-hold-icon.png?");

/***/ }),

/***/ "./src/images/status/prototype-icon.png":
/*!**********************************************!*\
  !*** ./src/images/status/prototype-icon.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/prototype-icon.png\";\n\n//# sourceURL=webpack://portfolio-website/./src/images/status/prototype-icon.png?");

/***/ }),

/***/ "./src/images/status/template-icon.png":
/*!*********************************************!*\
  !*** ./src/images/status/template-icon.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/template-icon.png\";\n\n//# sourceURL=webpack://portfolio-website/./src/images/status/template-icon.png?");

/***/ }),

/***/ "./src/images/thumbnail/ant-simulation-thumbnail.png":
/*!***********************************************************!*\
  !*** ./src/images/thumbnail/ant-simulation-thumbnail.png ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/ant-simulation-thumbnail.png\";\n\n//# sourceURL=webpack://portfolio-website/./src/images/thumbnail/ant-simulation-thumbnail.png?");

/***/ }),

/***/ "./src/images/thumbnail/bouncy-ball-project.png":
/*!******************************************************!*\
  !*** ./src/images/thumbnail/bouncy-ball-project.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/bouncy-ball-project.png\";\n\n//# sourceURL=webpack://portfolio-website/./src/images/thumbnail/bouncy-ball-project.png?");

/***/ }),

/***/ "./src/images/thumbnail/godot-feature-project.png":
/*!********************************************************!*\
  !*** ./src/images/thumbnail/godot-feature-project.png ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/godot-feature-project.png\";\n\n//# sourceURL=webpack://portfolio-website/./src/images/thumbnail/godot-feature-project.png?");

/***/ }),

/***/ "./src/images/thumbnail/sociwave-thumbnail.png":
/*!*****************************************************!*\
  !*** ./src/images/thumbnail/sociwave-thumbnail.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/sociwave-thumbnail.png\";\n\n//# sourceURL=webpack://portfolio-website/./src/images/thumbnail/sociwave-thumbnail.png?");

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
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