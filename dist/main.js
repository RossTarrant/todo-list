/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body{\n    margin: 0;\n    background-color: rgb(247, 157, 73);\n    font-family: 'Lora';\n}\n\n.content{\n    width: 100vw;\n    height: 100vh;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    grid-template-rows: 1fr 9fr;\n}\n\n.header, .header-fullscreen{\n    display: grid;\n    align-items: center;\n    grid-template-columns: 1fr 1fr 1fr;\n    background-color: rgb(122, 115, 115);\n}\n\n.header{\n    grid-column: 2/3;\n}\n\n.header-fullscreen{\n    grid-column: 1/3;\n}\n\n.header h1, .header-fullscreen h1{\n    color: white;\n    font-size: 48px;\n    text-align: center;\n}\n\n.navbar{\n    color: white;\n    font-size: 24px;\n    grid-row: 2/3;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: flex-start;\n}\n\n.navbar h2{\n    cursor: pointer;\n}\n\n.navbar h2:hover{\n    color: rgb(233, 231, 231);\n}\n\n.add-project-btn{\n    width: 200px;\n    color: white;\n    font-family: 'Lora';\n    font-size: 24px;\n    font-weight: 600;\n    margin: 25px;\n    padding: 8px;\n    border: none;\n    border-radius: 9px;\n    background-color: rgb(122, 115, 115);\n}\n\n.navbar button:hover{\n    background-color: rgb(158, 149, 149);\n    cursor: pointer;\n}\n\n.add-project-confirm{\n    font-family: 'Lora';\n    font-weight: 500;\n    font-size: 12px;\n    background-color: green;\n    border: none;\n    border-radius: 4px;\n}\n\n.add-project-cancel{\n    font-family: 'Lora';\n    font-weight: 500;\n    font-size: 12px;\n    background-color: red;\n    border: none;\n    border-radius: 4px;\n}\n\n.add-project{\n    display: flex;\n    \n}\n\n.header img, .header-fullscreen img{\n    width: 60px;\n    cursor: pointer;\n}\n\n.tasks, .tasks-fullscreen{\n    grid-row: 2/3;\n    background-color: white;\n}\n\n.tasks{\n    grid-column: 2/3;\n}\n\n.tasks h1, .tasks-fullscreen h1{\n    text-align: center;\n    text-decoration: underline;\n}\n\n.task-container{\n    border-radius: 6px;\n    padding-left: 30px;\n    padding-right: 30px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.task-container:hover{\n    background-color: rgb(233, 231, 231);\n}\n\n.task-container input{\n    height: 25px;\n    width: 25px;\n    background-color: #eee;\n}\n\n.task-container-left{\n    display: flex;\n    gap: 10px;\n    justify-content: center;\n    align-items: center;\n}\n\n.task-container-right{\n    display: flex;\n    gap: 20px;\n    justify-content: center;\n    align-items: center;\n}\n\n.task-container-right img:hover{\n    transform: scale(1.2);\n    cursor: pointer;\n}\n\n.task-completed{\n    text-decoration: line-through;\n}\n\n.tasks-fullscreen{\n    grid-column: 1/3;\n}\n\n.task-add-btn{\n    width: 200px;\n    color: white;\n    font-family: 'Lora';\n    font-size: 24px;\n    font-weight: 600;\n    margin: 25px;\n    padding: 8px;\n    border: none;\n    border-radius: 9px;\n    background-color: rgb(122, 115, 115);\n}\n\n.task-add-btn:hover{\n    background-color: rgb(158, 149, 149);\n    cursor: pointer;\n}\n\n.add-todo-form{\n    margin: 40px;\n    font-size: 18px;\n    font-weight: 600;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    gap: 20px;\n}\n\n.add-todo-form input[type=text]{\n    font-family: 'Lora';\n    font-size: 16px;\n    width: 300px;\n    border: 1px solid black;\n}\n\n.add-todo-form input[type=date]{\n    border: 1px solid black;\n}\n\n.add-todo-form button{\n    border: none;\n    border-radius: 8px;\n    font-size: 18px;\n    font-weight: 600;\n    font-family: 'Lora';\n    padding: 6px;\n    width: 100px;\n}\n\n.add-todo-confirm{\n    background-color: green;\n    cursor: pointer;\n}\n\n.add-todo-cancel{\n    background-color: red;\n    cursor: pointer;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,SAAS;IACT,mCAAmC;IACnC,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,aAAa;IACb,8BAA8B;IAC9B,2BAA2B;AAC/B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,kCAAkC;IAClC,oCAAoC;AACxC;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,2BAA2B;AAC/B;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,mBAAmB;IACnB,eAAe;IACf,gBAAgB;IAChB,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,oCAAoC;AACxC;;AAEA;IACI,oCAAoC;IACpC,eAAe;AACnB;;AAEA;IACI,mBAAmB;IACnB,gBAAgB;IAChB,eAAe;IACf,uBAAuB;IACvB,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;IACnB,gBAAgB;IAChB,eAAe;IACf,qBAAqB;IACrB,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,aAAa;;AAEjB;;AAEA;IACI,WAAW;IACX,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,0BAA0B;AAC9B;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,mBAAmB;IACnB,aAAa;IACb,mBAAmB;IACnB,8BAA8B;AAClC;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,SAAS;IACT,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,SAAS;IACT,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,qBAAqB;IACrB,eAAe;AACnB;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,mBAAmB;IACnB,eAAe;IACf,gBAAgB;IAChB,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,oCAAoC;AACxC;;AAEA;IACI,oCAAoC;IACpC,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,gBAAgB;IAChB,aAAa;IACb,2BAA2B;IAC3B,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,mBAAmB;IACnB,eAAe;IACf,YAAY;IACZ,uBAAuB;AAC3B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,eAAe;IACf,gBAAgB;IAChB,mBAAmB;IACnB,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,uBAAuB;IACvB,eAAe;AACnB;;AAEA;IACI,qBAAqB;IACrB,eAAe;AACnB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap');\n\nbody{\n    margin: 0;\n    background-color: rgb(247, 157, 73);\n    font-family: 'Lora';\n}\n\n.content{\n    width: 100vw;\n    height: 100vh;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    grid-template-rows: 1fr 9fr;\n}\n\n.header, .header-fullscreen{\n    display: grid;\n    align-items: center;\n    grid-template-columns: 1fr 1fr 1fr;\n    background-color: rgb(122, 115, 115);\n}\n\n.header{\n    grid-column: 2/3;\n}\n\n.header-fullscreen{\n    grid-column: 1/3;\n}\n\n.header h1, .header-fullscreen h1{\n    color: white;\n    font-size: 48px;\n    text-align: center;\n}\n\n.navbar{\n    color: white;\n    font-size: 24px;\n    grid-row: 2/3;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: flex-start;\n}\n\n.navbar h2{\n    cursor: pointer;\n}\n\n.navbar h2:hover{\n    color: rgb(233, 231, 231);\n}\n\n.add-project-btn{\n    width: 200px;\n    color: white;\n    font-family: 'Lora';\n    font-size: 24px;\n    font-weight: 600;\n    margin: 25px;\n    padding: 8px;\n    border: none;\n    border-radius: 9px;\n    background-color: rgb(122, 115, 115);\n}\n\n.navbar button:hover{\n    background-color: rgb(158, 149, 149);\n    cursor: pointer;\n}\n\n.add-project-confirm{\n    font-family: 'Lora';\n    font-weight: 500;\n    font-size: 12px;\n    background-color: green;\n    border: none;\n    border-radius: 4px;\n}\n\n.add-project-cancel{\n    font-family: 'Lora';\n    font-weight: 500;\n    font-size: 12px;\n    background-color: red;\n    border: none;\n    border-radius: 4px;\n}\n\n.add-project{\n    display: flex;\n    \n}\n\n.header img, .header-fullscreen img{\n    width: 60px;\n    cursor: pointer;\n}\n\n.tasks, .tasks-fullscreen{\n    grid-row: 2/3;\n    background-color: white;\n}\n\n.tasks{\n    grid-column: 2/3;\n}\n\n.tasks h1, .tasks-fullscreen h1{\n    text-align: center;\n    text-decoration: underline;\n}\n\n.task-container{\n    border-radius: 6px;\n    padding-left: 30px;\n    padding-right: 30px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.task-container:hover{\n    background-color: rgb(233, 231, 231);\n}\n\n.task-container input{\n    height: 25px;\n    width: 25px;\n    background-color: #eee;\n}\n\n.task-container-left{\n    display: flex;\n    gap: 10px;\n    justify-content: center;\n    align-items: center;\n}\n\n.task-container-right{\n    display: flex;\n    gap: 20px;\n    justify-content: center;\n    align-items: center;\n}\n\n.task-container-right img:hover{\n    transform: scale(1.2);\n    cursor: pointer;\n}\n\n.task-completed{\n    text-decoration: line-through;\n}\n\n.tasks-fullscreen{\n    grid-column: 1/3;\n}\n\n.task-add-btn{\n    width: 200px;\n    color: white;\n    font-family: 'Lora';\n    font-size: 24px;\n    font-weight: 600;\n    margin: 25px;\n    padding: 8px;\n    border: none;\n    border-radius: 9px;\n    background-color: rgb(122, 115, 115);\n}\n\n.task-add-btn:hover{\n    background-color: rgb(158, 149, 149);\n    cursor: pointer;\n}\n\n.add-todo-form{\n    margin: 40px;\n    font-size: 18px;\n    font-weight: 600;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    gap: 20px;\n}\n\n.add-todo-form input[type=text]{\n    font-family: 'Lora';\n    font-size: 16px;\n    width: 300px;\n    border: 1px solid black;\n}\n\n.add-todo-form input[type=date]{\n    border: 1px solid black;\n}\n\n.add-todo-form button{\n    border: none;\n    border-radius: 8px;\n    font-size: 18px;\n    font-weight: 600;\n    font-family: 'Lora';\n    padding: 6px;\n    width: 100px;\n}\n\n.add-todo-confirm{\n    background-color: green;\n    cursor: pointer;\n}\n\n.add-todo-cancel{\n    background-color: red;\n    cursor: pointer;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UI)
/* harmony export */ });
/* harmony import */ var _images_menu_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/menu.svg */ "./src/images/menu.svg");
/* harmony import */ var _images_delete_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/delete.svg */ "./src/images/delete.svg");
/* harmony import */ var _images_edit_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/edit.svg */ "./src/images/edit.svg");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todo */ "./src/modules/todo.js");
/* harmony import */ var _project_controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project-controller */ "./src/modules/project-controller.js");







let controller = new _project_controller__WEBPACK_IMPORTED_MODULE_5__["default"]();
let currentProject = null;

class UI{

    static initLoad(){
        let inbox = new _project__WEBPACK_IMPORTED_MODULE_3__["default"]('Inbox');
        let completedTasks = new _project__WEBPACK_IMPORTED_MODULE_3__["default"]('Completed Tasks');
        controller.addProject(inbox);
        controller.addProject(completedTasks);
        UI.addDemoTodos(inbox);
        currentProject = inbox;
        this.showHeader();
        this.showNavbar();
        this.setupContent();
        this.showTasks(inbox);
    }

    static showNavbar(){
        const content = document.querySelector('.content');
        const nav = document.createElement('div');
        nav.classList.add('navbar')
        controller.getProjects().forEach(project => {
            const projectTitle = document.createElement('h2');
            projectTitle.textContent = project.getName();
            projectTitle.addEventListener('click', function(){
                currentProject = controller.getProject(project.getName());
                UI.clearTasks();
                UI.showTasks(currentProject);  
            });
        nav.appendChild(projectTitle);
        })

        const addProjectBtn = document.createElement('button');
        addProjectBtn.textContent = 'Add Project';
        addProjectBtn.classList.add('add-project-btn');
        addProjectBtn.addEventListener('click', function(){
            const checkForContainer = document.querySelectorAll('.add-project');
            if(checkForContainer.length < 1){
                const addProjectContainer = document.createElement('div');
                addProjectContainer.classList.add('add-project');
                const addProjectInput = document.createElement('input')
                addProjectInput.setAttribute('type', 'text');
                addProjectContainer.appendChild(addProjectInput);

                const addProjectConfirmBtn = document.createElement('button');
                addProjectConfirmBtn.textContent = 'Confirm';
                addProjectConfirmBtn.classList.add('add-project-confirm');
                addProjectConfirmBtn.addEventListener('click', function(){
                    let tempProject = new _project__WEBPACK_IMPORTED_MODULE_3__["default"](addProjectInput.value);
                    currentProject = tempProject;
                    controller.addProject(tempProject);
                    UI.refreshNavbar();
                    UI.clearTasks();
                    UI.showTasks(tempProject);
                })
                addProjectContainer.appendChild(addProjectConfirmBtn)

                const addProjectCancelBtn = document.createElement('button');
                addProjectCancelBtn.textContent = 'Cancel';
                addProjectCancelBtn.classList.add('add-project-cancel');
                addProjectCancelBtn.addEventListener('click', function(){
                    nav.removeChild(addProjectContainer);
                })
                addProjectContainer.appendChild(addProjectCancelBtn)

                nav.appendChild(addProjectContainer);  
            };  
        })
        nav.appendChild(addProjectBtn);

        content.appendChild(nav);
    }

    static hideNavbar(){
        const content = document.querySelector('.content');
        const nav = document.querySelector('.navbar');
        const heading = document.querySelector('.header');
        heading.classList.remove('header')
        heading.classList.add('header-fullscreen')
        content.removeChild(nav)
    }

    static refreshNavbar(){
        UI.hideNavbar();
        UI.showNavbar();
        const header = document.querySelector('.header-fullscreen');
        header.classList.remove('header-fullscreen');
        header.classList.add('header');
    }

    static getNavState(){
        let heading = document.querySelector('header');
        if(heading===null){
            return "off"
        }
        else{
            return "on"
        }
    }

    static showHeader(){
        let clicks = 0
        const content = document.querySelector('.content');
        const header = document.createElement('div');
        const heading = document.createElement('h1');
        heading.textContent = "Todo List"
        header.classList.add('header');
        const menuImg = new Image();
        menuImg.src = _images_menu_svg__WEBPACK_IMPORTED_MODULE_0__;
        menuImg.addEventListener('click', function(){
            if(clicks % 2 === 0){
                UI.hideNavbar();
                const tasks = document.querySelector('.tasks');
                tasks.classList.remove('tasks')
                tasks.classList.add('tasks-fullscreen');
            }
            else{
                const tasks = document.querySelector('.tasks-fullscreen');
                header.classList.remove('header-fullscreen')
                header.classList.add('header');
                tasks.classList.remove('tasks-fullscreen')
                tasks.classList.add('tasks');
                UI.showNavbar();
            }
            clicks++;
            console.log(clicks);
        });
        header.appendChild(menuImg)
        header.appendChild(heading);
        content.appendChild(header);
    }

    static setupContent(){
        const content = document.querySelector('.content');
        const tasks = document.createElement('div');
        tasks.classList.add('tasks');
        const addTaskBtn = document.createElement('button');
        addTaskBtn.textContent = "Add Task +";
        addTaskBtn.classList.add('task-add-btn');
        addTaskBtn.addEventListener('click', function(){
            const taskContainers = document.querySelectorAll('.add-todo-form');
            if(taskContainers.length === 0){
                UI.createAddTodoForm(); 
            }
        });
        tasks.appendChild(addTaskBtn);
        content.appendChild(tasks);
    }

    static showTasks(project){
        const tasks = document.querySelector('.tasks');
        const projectHeading = document.createElement('h1');
        projectHeading.textContent = currentProject.getName();
        tasks.appendChild(projectHeading);
        project.getTodos().forEach(task => {
            let taskContainer = document.createElement('div');
            taskContainer.classList.add('task-container');
            let taskContainerLeft = document.createElement('div');
            taskContainerLeft.classList.add('task-container-left');
            let taskContainerRight = document.createElement('div');
            taskContainerRight.classList.add('task-container-right');
            let taskTitle = document.createElement('h3');
            let taskDueDate = document.createElement('p');
            taskTitle.textContent = task.getTitle();
            taskDueDate.textContent = task.getDueDate();
            let checkbox = document.createElement('input')
            checkbox.setAttribute('type', 'checkbox')
            checkbox.addEventListener('click', function(){
                controller.getProject('Completed Tasks').addTodo(task);
                tasks.removeChild(taskContainer);
                currentProject.removeTodo(task);
            })
            const editImg = new Image();
            editImg.src = _images_edit_svg__WEBPACK_IMPORTED_MODULE_2__;
            editImg.addEventListener('click', function(){
                // Edit task
            })
            const deleteImg = new Image();
            deleteImg.src = _images_delete_svg__WEBPACK_IMPORTED_MODULE_1__;
            deleteImg.addEventListener('click', function(){
                tasks.removeChild(taskContainer);
                controller.removeTodo(task, currentProject);
            });
            taskContainerLeft.appendChild(checkbox);
            taskContainerLeft.appendChild(taskTitle);
            taskContainerRight.appendChild(taskDueDate);
            taskContainerRight.appendChild(editImg);
            taskContainerRight.appendChild(deleteImg);
            taskContainer.appendChild(taskContainerLeft);
            taskContainer.appendChild(taskContainerRight);
            tasks.appendChild(taskContainer);
        });
    }

    static clearTasks(){
        const tasks = document.querySelectorAll('.task-container');
        const tasksSection = document.querySelector('.tasks');
        const projectHeading = document.querySelector('.tasks h1')
        tasksSection.removeChild(projectHeading);
        tasks.forEach(task => {
            task.remove();
        })
    }

    static createAddTodoForm(){
        let tasks = document.querySelector('.tasks');
        if(tasks===null){
            tasks = document.querySelector('.tasks-fullscreen');
        }
        const taskForm = document.createElement('div');
        taskForm.classList.add('add-todo-form');

        const titleLabel = document.createElement('label');
        titleLabel.textContent = 'Title: '
        taskForm.appendChild(titleLabel);

        const titleInput = document.createElement('input');
        titleInput.setAttribute('type', 'text');
        taskForm.appendChild(titleInput);

        const dateLabel = document.createElement('label');
        dateLabel.textContent = 'Due Date: '
        taskForm.appendChild(dateLabel);

        const dateInput = document.createElement('input');
        dateInput.setAttribute('type', 'date');
        taskForm.appendChild(dateInput);

        const confirmButton = document.createElement('button');
        confirmButton.textContent = "Confirm";
        confirmButton.classList.add('add-todo-confirm');
        confirmButton.addEventListener('click', function(){
            //Validate form
            // If valid....
            let tempTitle = titleInput.value;
            let tempDate = dateInput.value;
            let tempTodo = new _todo__WEBPACK_IMPORTED_MODULE_4__["default"](tempTitle, '', tempDate, '');
            controller.addTodo(tempTodo, currentProject);
            tasks.removeChild(taskForm);
            UI.clearTasks();
            UI.showTasks(currentProject);
        })
        taskForm.appendChild(confirmButton);

        const cancelButton = document.createElement('button');
        cancelButton.textContent = "Cancel";
        cancelButton.classList.add('add-todo-cancel');
        cancelButton.addEventListener('click', function(){
            tasks.removeChild(taskForm);
        })
        taskForm.appendChild(cancelButton);

        tasks.appendChild(taskForm);
    }

    static addTodo(todo, project){
        project.addTodo(todo);
    }

    static setCurrentProject(project){
        
    }

    static getCurrentProject(){
        // Logic for working out current project
        return currentProject;
    }

    static addDemoTodos(inbox){
        const demoTodo1 = new _todo__WEBPACK_IMPORTED_MODULE_4__["default"]('Homework', 'Finish english homework', 'Today', 'High');
        const demoTodo2 = new _todo__WEBPACK_IMPORTED_MODULE_4__["default"]('Washing', 'Wash my school shirts', 'Tomorrow', 'Medium');
        const demoTodo3 = new _todo__WEBPACK_IMPORTED_MODULE_4__["default"]('Tidying', 'Tidy up my bedroom', 'Sometime', 'Low');
        inbox.addTodo(demoTodo1);
        inbox.addTodo(demoTodo2);
        inbox.addTodo(demoTodo3);
    }

}

/***/ }),

/***/ "./src/modules/project-controller.js":
/*!*******************************************!*\
  !*** ./src/modules/project-controller.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ projectController)
/* harmony export */ });
class projectController{

    constructor(name){
        this.projects = [];
    }

    addProject(project){
        this.projects.push(project);
    }

    removeProject(project){
        for(var i = 0; i < this.projects.length; i++){
            if(this.projects[i].getName()===project.getName()){
                this.projects.splice(i, 1);
            }
        }
    }

    getProjects(){
        return this.projects;
    }

    getProject(name){
        let toReturn = null;
        this.projects.forEach(project => {
            if(project.getName() == name){
                toReturn = project;
            }
        })
        return toReturn;
    }

    addTodo(todo, project){
        project.addTodo(todo);
    }

    removeTodo(todo, project){
        project.removeTodo(todo);
    }

}

/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
class Project{

    constructor(name){
        this.name = name;
        this.todos = [];
    }

    addTodo(todo){
        this.todos.push(todo);
    }

    removeTodo(todo){
        for(var i = 0; i < this.todos.length; i++){
            if(this.todos[i].getTitle()===todo.getTitle()){
                this.todos.splice(i, 1);
            }
        }
    }

    getName(){
        return this.name;
    }

    getTodos(){
        return this.todos;
    }

}

/***/ }),

/***/ "./src/modules/todo.js":
/*!*****************************!*\
  !*** ./src/modules/todo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Todo)
/* harmony export */ });
class Todo{

    constructor(title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    getTitle(){
        return this.title;
    }

    getDescription(){
        return this.description;
    }

    getDueDate(){
        return this.dueDate;
    }

    getPriority(){
        return this.priority;
    }

    setTitle(title){
        this.title = title;
    }

    setDescription(description){
        this.description = description;
    }

    setDueDate(dueDate){
        this.dueDate = dueDate;
    }

    setPriority(priority){
        this.priority = priority;
    }

}

/***/ }),

/***/ "./src/images/delete.svg":
/*!*******************************!*\
  !*** ./src/images/delete.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1129c53a10f3c7163570.svg";

/***/ }),

/***/ "./src/images/edit.svg":
/*!*****************************!*\
  !*** ./src/images/edit.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4fa02ba3eeb22ca444b3.svg";

/***/ }),

/***/ "./src/images/menu.svg":
/*!*****************************!*\
  !*** ./src/images/menu.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e486499b733632c93143.svg";

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_UI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/UI.js */ "./src/modules/UI.js");
/* harmony import */ var _modules_todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/todo */ "./src/modules/todo.js");




_modules_UI_js__WEBPACK_IMPORTED_MODULE_1__["default"].initLoad();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0EsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDZDQUFRO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDBCQUEwQiw2Q0FBUTtBQUNsQztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsNEJBQTRCLCtDQUFVO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDZDQUFJO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCLDZDQUFJO0FBQ2xDLDhCQUE4Qiw2Q0FBSTtBQUNsQyw4QkFBOEIsNkNBQUk7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDN1JlOztBQUVmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIsMEJBQTBCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDeENlOztBQUVmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVCQUF1Qix1QkFBdUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQzNCZTs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7OztBQ2ZxQjtBQUNZO0FBQ0M7O0FBRWxDLCtEQUFXLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvVUkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcHJvamVjdC1jb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxvcmE6aXRhbCx3Z2h0QDAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHl7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NywgMTU3LCA3Myk7XFxuICAgIGZvbnQtZmFtaWx5OiAnTG9yYSc7XFxufVxcblxcbi5jb250ZW50e1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgOWZyO1xcbn1cXG5cXG4uaGVhZGVyLCAuaGVhZGVyLWZ1bGxzY3JlZW57XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjIsIDExNSwgMTE1KTtcXG59XFxuXFxuLmhlYWRlcntcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG59XFxuXFxuLmhlYWRlci1mdWxsc2NyZWVue1xcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcbn1cXG5cXG4uaGVhZGVyIGgxLCAuaGVhZGVyLWZ1bGxzY3JlZW4gaDF7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiA0OHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5uYXZiYXJ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5uYXZiYXIgaDJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm5hdmJhciBoMjpob3ZlcntcXG4gICAgY29sb3I6IHJnYigyMzMsIDIzMSwgMjMxKTtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LWJ0bntcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiAnTG9yYSc7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgbWFyZ2luOiAyNXB4O1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIyLCAxMTUsIDExNSk7XFxufVxcblxcbi5uYXZiYXIgYnV0dG9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU4LCAxNDksIDE0OSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LWNvbmZpcm17XFxuICAgIGZvbnQtZmFtaWx5OiAnTG9yYSc7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4uYWRkLXByb2plY3QtY2FuY2Vse1xcbiAgICBmb250LWZhbWlseTogJ0xvcmEnO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbi5hZGQtcHJvamVjdHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgXFxufVxcblxcbi5oZWFkZXIgaW1nLCAuaGVhZGVyLWZ1bGxzY3JlZW4gaW1ne1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFza3MsIC50YXNrcy1mdWxsc2NyZWVue1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRhc2tze1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbn1cXG5cXG4udGFza3MgaDEsIC50YXNrcy1mdWxsc2NyZWVuIGgxe1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4udGFzay1jb250YWluZXJ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi50YXNrLWNvbnRhaW5lcjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMywgMjMxLCAyMzEpO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIgaW5wdXR7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lci1sZWZ0e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGFzay1jb250YWluZXItcmlnaHR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lci1yaWdodCBpbWc6aG92ZXJ7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzay1jb21wbGV0ZWR7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4udGFza3MtZnVsbHNjcmVlbntcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG59XFxuXFxuLnRhc2stYWRkLWJ0bntcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiAnTG9yYSc7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgbWFyZ2luOiAyNXB4O1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIyLCAxMTUsIDExNSk7XFxufVxcblxcbi50YXNrLWFkZC1idG46aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTgsIDE0OSwgMTQ5KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkLXRvZG8tZm9ybXtcXG4gICAgbWFyZ2luOiA0MHB4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uYWRkLXRvZG8tZm9ybSBpbnB1dFt0eXBlPXRleHRde1xcbiAgICBmb250LWZhbWlseTogJ0xvcmEnO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5hZGQtdG9kby1mb3JtIGlucHV0W3R5cGU9ZGF0ZV17XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uYWRkLXRvZG8tZm9ybSBidXR0b257XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnTG9yYSc7XFxuICAgIHBhZGRpbmc6IDZweDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbn1cXG5cXG4uYWRkLXRvZG8tY29uZmlybXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZC10b2RvLWNhbmNlbHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxTQUFTO0lBQ1QsbUNBQW1DO0lBQ25DLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtDQUFrQztJQUNsQyxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhOztBQUVqQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCx1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCx1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsWUFBWTtJQUNaLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxvcmE6aXRhbCx3Z2h0QDAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbmJvZHl7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NywgMTU3LCA3Myk7XFxuICAgIGZvbnQtZmFtaWx5OiAnTG9yYSc7XFxufVxcblxcbi5jb250ZW50e1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgOWZyO1xcbn1cXG5cXG4uaGVhZGVyLCAuaGVhZGVyLWZ1bGxzY3JlZW57XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjIsIDExNSwgMTE1KTtcXG59XFxuXFxuLmhlYWRlcntcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG59XFxuXFxuLmhlYWRlci1mdWxsc2NyZWVue1xcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcbn1cXG5cXG4uaGVhZGVyIGgxLCAuaGVhZGVyLWZ1bGxzY3JlZW4gaDF7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiA0OHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5uYXZiYXJ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5uYXZiYXIgaDJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm5hdmJhciBoMjpob3ZlcntcXG4gICAgY29sb3I6IHJnYigyMzMsIDIzMSwgMjMxKTtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LWJ0bntcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiAnTG9yYSc7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgbWFyZ2luOiAyNXB4O1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIyLCAxMTUsIDExNSk7XFxufVxcblxcbi5uYXZiYXIgYnV0dG9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU4LCAxNDksIDE0OSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LWNvbmZpcm17XFxuICAgIGZvbnQtZmFtaWx5OiAnTG9yYSc7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4uYWRkLXByb2plY3QtY2FuY2Vse1xcbiAgICBmb250LWZhbWlseTogJ0xvcmEnO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbi5hZGQtcHJvamVjdHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgXFxufVxcblxcbi5oZWFkZXIgaW1nLCAuaGVhZGVyLWZ1bGxzY3JlZW4gaW1ne1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFza3MsIC50YXNrcy1mdWxsc2NyZWVue1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRhc2tze1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbn1cXG5cXG4udGFza3MgaDEsIC50YXNrcy1mdWxsc2NyZWVuIGgxe1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4udGFzay1jb250YWluZXJ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi50YXNrLWNvbnRhaW5lcjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMywgMjMxLCAyMzEpO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIgaW5wdXR7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lci1sZWZ0e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGFzay1jb250YWluZXItcmlnaHR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lci1yaWdodCBpbWc6aG92ZXJ7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzay1jb21wbGV0ZWR7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4udGFza3MtZnVsbHNjcmVlbntcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG59XFxuXFxuLnRhc2stYWRkLWJ0bntcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiAnTG9yYSc7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgbWFyZ2luOiAyNXB4O1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIyLCAxMTUsIDExNSk7XFxufVxcblxcbi50YXNrLWFkZC1idG46aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTgsIDE0OSwgMTQ5KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkLXRvZG8tZm9ybXtcXG4gICAgbWFyZ2luOiA0MHB4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uYWRkLXRvZG8tZm9ybSBpbnB1dFt0eXBlPXRleHRde1xcbiAgICBmb250LWZhbWlseTogJ0xvcmEnO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5hZGQtdG9kby1mb3JtIGlucHV0W3R5cGU9ZGF0ZV17XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uYWRkLXRvZG8tZm9ybSBidXR0b257XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnTG9yYSc7XFxuICAgIHBhZGRpbmc6IDZweDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbn1cXG5cXG4uYWRkLXRvZG8tY29uZmlybXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZC10b2RvLWNhbmNlbHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IG1lbnVJY29uIGZyb20gJy4uL2ltYWdlcy9tZW51LnN2Zyc7XG5pbXBvcnQgZGVsZXRlSWNvbiBmcm9tICcuLi9pbWFnZXMvZGVsZXRlLnN2Zyc7XG5pbXBvcnQgZWRpdEljb24gZnJvbSAnLi4vaW1hZ2VzL2VkaXQuc3ZnJztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdCc7XG5pbXBvcnQgVG9kbyBmcm9tICcuL3RvZG8nO1xuaW1wb3J0IHByb2plY3RDb250cm9sbGVyIGZyb20gJy4vcHJvamVjdC1jb250cm9sbGVyJztcblxubGV0IGNvbnRyb2xsZXIgPSBuZXcgcHJvamVjdENvbnRyb2xsZXIoKTtcbmxldCBjdXJyZW50UHJvamVjdCA9IG51bGw7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJe1xuXG4gICAgc3RhdGljIGluaXRMb2FkKCl7XG4gICAgICAgIGxldCBpbmJveCA9IG5ldyBQcm9qZWN0KCdJbmJveCcpO1xuICAgICAgICBsZXQgY29tcGxldGVkVGFza3MgPSBuZXcgUHJvamVjdCgnQ29tcGxldGVkIFRhc2tzJyk7XG4gICAgICAgIGNvbnRyb2xsZXIuYWRkUHJvamVjdChpbmJveCk7XG4gICAgICAgIGNvbnRyb2xsZXIuYWRkUHJvamVjdChjb21wbGV0ZWRUYXNrcyk7XG4gICAgICAgIFVJLmFkZERlbW9Ub2RvcyhpbmJveCk7XG4gICAgICAgIGN1cnJlbnRQcm9qZWN0ID0gaW5ib3g7XG4gICAgICAgIHRoaXMuc2hvd0hlYWRlcigpO1xuICAgICAgICB0aGlzLnNob3dOYXZiYXIoKTtcbiAgICAgICAgdGhpcy5zZXR1cENvbnRlbnQoKTtcbiAgICAgICAgdGhpcy5zaG93VGFza3MoaW5ib3gpO1xuICAgIH1cblxuICAgIHN0YXRpYyBzaG93TmF2YmFyKCl7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgICAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbmF2LmNsYXNzTGlzdC5hZGQoJ25hdmJhcicpXG4gICAgICAgIGNvbnRyb2xsZXIuZ2V0UHJvamVjdHMoKS5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0TmFtZSgpO1xuICAgICAgICAgICAgcHJvamVjdFRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBjdXJyZW50UHJvamVjdCA9IGNvbnRyb2xsZXIuZ2V0UHJvamVjdChwcm9qZWN0LmdldE5hbWUoKSk7XG4gICAgICAgICAgICAgICAgVUkuY2xlYXJUYXNrcygpO1xuICAgICAgICAgICAgICAgIFVJLnNob3dUYXNrcyhjdXJyZW50UHJvamVjdCk7ICBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBuYXYuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGFkZFByb2plY3RCdG4udGV4dENvbnRlbnQgPSAnQWRkIFByb2plY3QnO1xuICAgICAgICBhZGRQcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoJ2FkZC1wcm9qZWN0LWJ0bicpO1xuICAgICAgICBhZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrRm9yQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFkZC1wcm9qZWN0Jyk7XG4gICAgICAgICAgICBpZihjaGVja0ZvckNvbnRhaW5lci5sZW5ndGggPCAxKXtcbiAgICAgICAgICAgICAgICBjb25zdCBhZGRQcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgYWRkUHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhZGQtcHJvamVjdCcpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGFkZFByb2plY3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgICAgICAgICAgICBhZGRQcm9qZWN0SW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICAgICAgICAgICAgICBhZGRQcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFByb2plY3RJbnB1dCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBhZGRQcm9qZWN0Q29uZmlybUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIGFkZFByb2plY3RDb25maXJtQnRuLnRleHRDb250ZW50ID0gJ0NvbmZpcm0nO1xuICAgICAgICAgICAgICAgIGFkZFByb2plY3RDb25maXJtQnRuLmNsYXNzTGlzdC5hZGQoJ2FkZC1wcm9qZWN0LWNvbmZpcm0nKTtcbiAgICAgICAgICAgICAgICBhZGRQcm9qZWN0Q29uZmlybUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0ZW1wUHJvamVjdCA9IG5ldyBQcm9qZWN0KGFkZFByb2plY3RJbnB1dC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0ID0gdGVtcFByb2plY3Q7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuYWRkUHJvamVjdCh0ZW1wUHJvamVjdCk7XG4gICAgICAgICAgICAgICAgICAgIFVJLnJlZnJlc2hOYXZiYXIoKTtcbiAgICAgICAgICAgICAgICAgICAgVUkuY2xlYXJUYXNrcygpO1xuICAgICAgICAgICAgICAgICAgICBVSS5zaG93VGFza3ModGVtcFByb2plY3QpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgYWRkUHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRQcm9qZWN0Q29uZmlybUJ0bilcblxuICAgICAgICAgICAgICAgIGNvbnN0IGFkZFByb2plY3RDYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICBhZGRQcm9qZWN0Q2FuY2VsQnRuLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG4gICAgICAgICAgICAgICAgYWRkUHJvamVjdENhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKCdhZGQtcHJvamVjdC1jYW5jZWwnKTtcbiAgICAgICAgICAgICAgICBhZGRQcm9qZWN0Q2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgbmF2LnJlbW92ZUNoaWxkKGFkZFByb2plY3RDb250YWluZXIpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgYWRkUHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRQcm9qZWN0Q2FuY2VsQnRuKVxuXG4gICAgICAgICAgICAgICAgbmF2LmFwcGVuZENoaWxkKGFkZFByb2plY3RDb250YWluZXIpOyAgXG4gICAgICAgICAgICB9OyAgXG4gICAgICAgIH0pXG4gICAgICAgIG5hdi5hcHBlbmRDaGlsZChhZGRQcm9qZWN0QnRuKTtcblxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKG5hdik7XG4gICAgfVxuXG4gICAgc3RhdGljIGhpZGVOYXZiYXIoKXtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXInKTtcbiAgICAgICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKTtcbiAgICAgICAgaGVhZGluZy5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXInKVxuICAgICAgICBoZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1mdWxsc2NyZWVuJylcbiAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChuYXYpXG4gICAgfVxuXG4gICAgc3RhdGljIHJlZnJlc2hOYXZiYXIoKXtcbiAgICAgICAgVUkuaGlkZU5hdmJhcigpO1xuICAgICAgICBVSS5zaG93TmF2YmFyKCk7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXItZnVsbHNjcmVlbicpO1xuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGVhZGVyLWZ1bGxzY3JlZW4nKTtcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXROYXZTdGF0ZSgpe1xuICAgICAgICBsZXQgaGVhZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpO1xuICAgICAgICBpZihoZWFkaW5nPT09bnVsbCl7XG4gICAgICAgICAgICByZXR1cm4gXCJvZmZcIlxuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICByZXR1cm4gXCJvblwiXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgc2hvd0hlYWRlcigpe1xuICAgICAgICBsZXQgY2xpY2tzID0gMFxuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJUb2RvIExpc3RcIlxuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG4gICAgICAgIGNvbnN0IG1lbnVJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgbWVudUltZy5zcmMgPSBtZW51SWNvbjtcbiAgICAgICAgbWVudUltZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpZihjbGlja3MgJSAyID09PSAwKXtcbiAgICAgICAgICAgICAgICBVSS5oaWRlTmF2YmFyKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MnKTtcbiAgICAgICAgICAgICAgICB0YXNrcy5jbGFzc0xpc3QucmVtb3ZlKCd0YXNrcycpXG4gICAgICAgICAgICAgICAgdGFza3MuY2xhc3NMaXN0LmFkZCgndGFza3MtZnVsbHNjcmVlbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcy1mdWxsc2NyZWVuJyk7XG4gICAgICAgICAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hlYWRlci1mdWxsc2NyZWVuJylcbiAgICAgICAgICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG4gICAgICAgICAgICAgICAgdGFza3MuY2xhc3NMaXN0LnJlbW92ZSgndGFza3MtZnVsbHNjcmVlbicpXG4gICAgICAgICAgICAgICAgdGFza3MuY2xhc3NMaXN0LmFkZCgndGFza3MnKTtcbiAgICAgICAgICAgICAgICBVSS5zaG93TmF2YmFyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjbGlja3MrKztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNsaWNrcyk7XG4gICAgICAgIH0pO1xuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobWVudUltZylcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgfVxuXG4gICAgc3RhdGljIHNldHVwQ29udGVudCgpe1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICAgICAgY29uc3QgdGFza3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFza3MuY2xhc3NMaXN0LmFkZCgndGFza3MnKTtcbiAgICAgICAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBhZGRUYXNrQnRuLnRleHRDb250ZW50ID0gXCJBZGQgVGFzayArXCI7XG4gICAgICAgIGFkZFRhc2tCdG4uY2xhc3NMaXN0LmFkZCgndGFzay1hZGQtYnRuJyk7XG4gICAgICAgIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgY29uc3QgdGFza0NvbnRhaW5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWRkLXRvZG8tZm9ybScpO1xuICAgICAgICAgICAgaWYodGFza0NvbnRhaW5lcnMubGVuZ3RoID09PSAwKXtcbiAgICAgICAgICAgICAgICBVSS5jcmVhdGVBZGRUb2RvRm9ybSgpOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRhc2tzLmFwcGVuZENoaWxkKGFkZFRhc2tCdG4pO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHRhc2tzKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgc2hvd1Rhc2tzKHByb2plY3Qpe1xuICAgICAgICBjb25zdCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcycpO1xuICAgICAgICBjb25zdCBwcm9qZWN0SGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgIHByb2plY3RIZWFkaW5nLnRleHRDb250ZW50ID0gY3VycmVudFByb2plY3QuZ2V0TmFtZSgpO1xuICAgICAgICB0YXNrcy5hcHBlbmRDaGlsZChwcm9qZWN0SGVhZGluZyk7XG4gICAgICAgIHByb2plY3QuZ2V0VG9kb3MoKS5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgbGV0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFzay1jb250YWluZXInKTtcbiAgICAgICAgICAgIGxldCB0YXNrQ29udGFpbmVyTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGFza0NvbnRhaW5lckxlZnQuY2xhc3NMaXN0LmFkZCgndGFzay1jb250YWluZXItbGVmdCcpO1xuICAgICAgICAgICAgbGV0IHRhc2tDb250YWluZXJSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGFza0NvbnRhaW5lclJpZ2h0LmNsYXNzTGlzdC5hZGQoJ3Rhc2stY29udGFpbmVyLXJpZ2h0Jyk7XG4gICAgICAgICAgICBsZXQgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgICAgIGxldCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IHRhc2suZ2V0VGl0bGUoKTtcbiAgICAgICAgICAgIHRhc2tEdWVEYXRlLnRleHRDb250ZW50ID0gdGFzay5nZXREdWVEYXRlKCk7XG4gICAgICAgICAgICBsZXQgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgICAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKVxuICAgICAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuZ2V0UHJvamVjdCgnQ29tcGxldGVkIFRhc2tzJykuYWRkVG9kbyh0YXNrKTtcbiAgICAgICAgICAgICAgICB0YXNrcy5yZW1vdmVDaGlsZCh0YXNrQ29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICBjdXJyZW50UHJvamVjdC5yZW1vdmVUb2RvKHRhc2spO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGNvbnN0IGVkaXRJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIGVkaXRJbWcuc3JjID0gZWRpdEljb247XG4gICAgICAgICAgICBlZGl0SW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAvLyBFZGl0IHRhc2tcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBjb25zdCBkZWxldGVJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIGRlbGV0ZUltZy5zcmMgPSBkZWxldGVJY29uO1xuICAgICAgICAgICAgZGVsZXRlSW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICB0YXNrcy5yZW1vdmVDaGlsZCh0YXNrQ29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyLnJlbW92ZVRvZG8odGFzaywgY3VycmVudFByb2plY3QpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0YXNrQ29udGFpbmVyTGVmdC5hcHBlbmRDaGlsZChjaGVja2JveCk7XG4gICAgICAgICAgICB0YXNrQ29udGFpbmVyTGVmdC5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xuICAgICAgICAgICAgdGFza0NvbnRhaW5lclJpZ2h0LmFwcGVuZENoaWxkKHRhc2tEdWVEYXRlKTtcbiAgICAgICAgICAgIHRhc2tDb250YWluZXJSaWdodC5hcHBlbmRDaGlsZChlZGl0SW1nKTtcbiAgICAgICAgICAgIHRhc2tDb250YWluZXJSaWdodC5hcHBlbmRDaGlsZChkZWxldGVJbWcpO1xuICAgICAgICAgICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrQ29udGFpbmVyTGVmdCk7XG4gICAgICAgICAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tDb250YWluZXJSaWdodCk7XG4gICAgICAgICAgICB0YXNrcy5hcHBlbmRDaGlsZCh0YXNrQ29udGFpbmVyKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNsZWFyVGFza3MoKXtcbiAgICAgICAgY29uc3QgdGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzay1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgdGFza3NTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzJyk7XG4gICAgICAgIGNvbnN0IHByb2plY3RIZWFkaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzIGgxJylcbiAgICAgICAgdGFza3NTZWN0aW9uLnJlbW92ZUNoaWxkKHByb2plY3RIZWFkaW5nKTtcbiAgICAgICAgdGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgIHRhc2sucmVtb3ZlKCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZUFkZFRvZG9Gb3JtKCl7XG4gICAgICAgIGxldCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcycpO1xuICAgICAgICBpZih0YXNrcz09PW51bGwpe1xuICAgICAgICAgICAgdGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MtZnVsbHNjcmVlbicpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tGb3JtLmNsYXNzTGlzdC5hZGQoJ2FkZC10b2RvLWZvcm0nKTtcblxuICAgICAgICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgdGl0bGVMYWJlbC50ZXh0Q29udGVudCA9ICdUaXRsZTogJ1xuICAgICAgICB0YXNrRm9ybS5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcblxuICAgICAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgICB0YXNrRm9ybS5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcblxuICAgICAgICBjb25zdCBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBkYXRlTGFiZWwudGV4dENvbnRlbnQgPSAnRHVlIERhdGU6ICdcbiAgICAgICAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQoZGF0ZUxhYmVsKTtcblxuICAgICAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbiAgICAgICAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcblxuICAgICAgICBjb25zdCBjb25maXJtQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNvbmZpcm1CdXR0b24udGV4dENvbnRlbnQgPSBcIkNvbmZpcm1cIjtcbiAgICAgICAgY29uZmlybUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGQtdG9kby1jb25maXJtJyk7XG4gICAgICAgIGNvbmZpcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgLy9WYWxpZGF0ZSBmb3JtXG4gICAgICAgICAgICAvLyBJZiB2YWxpZC4uLi5cbiAgICAgICAgICAgIGxldCB0ZW1wVGl0bGUgPSB0aXRsZUlucHV0LnZhbHVlO1xuICAgICAgICAgICAgbGV0IHRlbXBEYXRlID0gZGF0ZUlucHV0LnZhbHVlO1xuICAgICAgICAgICAgbGV0IHRlbXBUb2RvID0gbmV3IFRvZG8odGVtcFRpdGxlLCAnJywgdGVtcERhdGUsICcnKTtcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuYWRkVG9kbyh0ZW1wVG9kbywgY3VycmVudFByb2plY3QpO1xuICAgICAgICAgICAgdGFza3MucmVtb3ZlQ2hpbGQodGFza0Zvcm0pO1xuICAgICAgICAgICAgVUkuY2xlYXJUYXNrcygpO1xuICAgICAgICAgICAgVUkuc2hvd1Rhc2tzKGN1cnJlbnRQcm9qZWN0KTtcbiAgICAgICAgfSlcbiAgICAgICAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQoY29uZmlybUJ1dHRvbik7XG5cbiAgICAgICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNhbmNlbEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG4gICAgICAgIGNhbmNlbEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGQtdG9kby1jYW5jZWwnKTtcbiAgICAgICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHRhc2tzLnJlbW92ZUNoaWxkKHRhc2tGb3JtKTtcbiAgICAgICAgfSlcbiAgICAgICAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKTtcblxuICAgICAgICB0YXNrcy5hcHBlbmRDaGlsZCh0YXNrRm9ybSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGFkZFRvZG8odG9kbywgcHJvamVjdCl7XG4gICAgICAgIHByb2plY3QuYWRkVG9kbyh0b2RvKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgc2V0Q3VycmVudFByb2plY3QocHJvamVjdCl7XG4gICAgICAgIFxuICAgIH1cblxuICAgIHN0YXRpYyBnZXRDdXJyZW50UHJvamVjdCgpe1xuICAgICAgICAvLyBMb2dpYyBmb3Igd29ya2luZyBvdXQgY3VycmVudCBwcm9qZWN0XG4gICAgICAgIHJldHVybiBjdXJyZW50UHJvamVjdDtcbiAgICB9XG5cbiAgICBzdGF0aWMgYWRkRGVtb1RvZG9zKGluYm94KXtcbiAgICAgICAgY29uc3QgZGVtb1RvZG8xID0gbmV3IFRvZG8oJ0hvbWV3b3JrJywgJ0ZpbmlzaCBlbmdsaXNoIGhvbWV3b3JrJywgJ1RvZGF5JywgJ0hpZ2gnKTtcbiAgICAgICAgY29uc3QgZGVtb1RvZG8yID0gbmV3IFRvZG8oJ1dhc2hpbmcnLCAnV2FzaCBteSBzY2hvb2wgc2hpcnRzJywgJ1RvbW9ycm93JywgJ01lZGl1bScpO1xuICAgICAgICBjb25zdCBkZW1vVG9kbzMgPSBuZXcgVG9kbygnVGlkeWluZycsICdUaWR5IHVwIG15IGJlZHJvb20nLCAnU29tZXRpbWUnLCAnTG93Jyk7XG4gICAgICAgIGluYm94LmFkZFRvZG8oZGVtb1RvZG8xKTtcbiAgICAgICAgaW5ib3guYWRkVG9kbyhkZW1vVG9kbzIpO1xuICAgICAgICBpbmJveC5hZGRUb2RvKGRlbW9Ub2RvMyk7XG4gICAgfVxuXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgcHJvamVjdENvbnRyb2xsZXJ7XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lKXtcbiAgICAgICAgdGhpcy5wcm9qZWN0cyA9IFtdO1xuICAgIH1cblxuICAgIGFkZFByb2plY3QocHJvamVjdCl7XG4gICAgICAgIHRoaXMucHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgICB9XG5cbiAgICByZW1vdmVQcm9qZWN0KHByb2plY3Qpe1xuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5wcm9qZWN0cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBpZih0aGlzLnByb2plY3RzW2ldLmdldE5hbWUoKT09PXByb2plY3QuZ2V0TmFtZSgpKXtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2plY3RzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFByb2plY3RzKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RzO1xuICAgIH1cblxuICAgIGdldFByb2plY3QobmFtZSl7XG4gICAgICAgIGxldCB0b1JldHVybiA9IG51bGw7XG4gICAgICAgIHRoaXMucHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgICAgIGlmKHByb2plY3QuZ2V0TmFtZSgpID09IG5hbWUpe1xuICAgICAgICAgICAgICAgIHRvUmV0dXJuID0gcHJvamVjdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHRvUmV0dXJuO1xuICAgIH1cblxuICAgIGFkZFRvZG8odG9kbywgcHJvamVjdCl7XG4gICAgICAgIHByb2plY3QuYWRkVG9kbyh0b2RvKTtcbiAgICB9XG5cbiAgICByZW1vdmVUb2RvKHRvZG8sIHByb2plY3Qpe1xuICAgICAgICBwcm9qZWN0LnJlbW92ZVRvZG8odG9kbyk7XG4gICAgfVxuXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdHtcblxuICAgIGNvbnN0cnVjdG9yKG5hbWUpe1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnRvZG9zID0gW107XG4gICAgfVxuXG4gICAgYWRkVG9kbyh0b2RvKXtcbiAgICAgICAgdGhpcy50b2Rvcy5wdXNoKHRvZG8pO1xuICAgIH1cblxuICAgIHJlbW92ZVRvZG8odG9kbyl7XG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLnRvZG9zLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGlmKHRoaXMudG9kb3NbaV0uZ2V0VGl0bGUoKT09PXRvZG8uZ2V0VGl0bGUoKSl7XG4gICAgICAgICAgICAgICAgdGhpcy50b2Rvcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXROYW1lKCl7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgfVxuXG4gICAgZ2V0VG9kb3MoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9kb3M7XG4gICAgfVxuXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb3tcblxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpe1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIH1cblxuICAgIGdldFRpdGxlKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnRpdGxlO1xuICAgIH1cblxuICAgIGdldERlc2NyaXB0aW9uKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIGdldER1ZURhdGUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHVlRGF0ZTtcbiAgICB9XG5cbiAgICBnZXRQcmlvcml0eSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5wcmlvcml0eTtcbiAgICB9XG5cbiAgICBzZXRUaXRsZSh0aXRsZSl7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB9XG5cbiAgICBzZXREZXNjcmlwdGlvbihkZXNjcmlwdGlvbil7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICBzZXREdWVEYXRlKGR1ZURhdGUpe1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIH1cblxuICAgIHNldFByaW9yaXR5KHByaW9yaXR5KXtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIH1cblxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgVUkgZnJvbSAnLi9tb2R1bGVzL1VJLmpzJztcbmltcG9ydCB0b2RvIGZyb20gJy4vbW9kdWxlcy90b2RvJztcblxuVUkuaW5pdExvYWQoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=