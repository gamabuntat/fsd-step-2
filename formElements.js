/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/UI kit/Form Elements/formElements.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\\n\\n/* Document\\n   ========================================================================== */\\n\\n/**\\n * 1. Correct the line height in all browsers.\\n * 2. Prevent adjustments of font size after orientation changes in iOS.\\n */\\n\\nhtml {\\n  line-height: 1.15; /* 1 */\\n  -webkit-text-size-adjust: 100%; /* 2 */\\n}\\n\\n/* Sections\\n   ========================================================================== */\\n\\n/**\\n * Remove the margin in all browsers.\\n */\\n\\nbody {\\n  margin: 0;\\n}\\n\\n/**\\n * Render the `main` element consistently in IE.\\n */\\n\\nmain {\\n  display: block;\\n}\\n\\n/**\\n * Correct the font size and margin on `h1` elements within `section` and\\n * `article` contexts in Chrome, Firefox, and Safari.\\n */\\n\\nh1 {\\n  font-size: 2em;\\n  margin: 0.67em 0;\\n}\\n\\n/* Grouping content\\n   ========================================================================== */\\n\\n/**\\n * 1. Add the correct box sizing in Firefox.\\n * 2. Show the overflow in Edge and IE.\\n */\\n\\nhr {\\n  box-sizing: content-box; /* 1 */\\n  height: 0; /* 1 */\\n  overflow: visible; /* 2 */\\n}\\n\\n/**\\n * 1. Correct the inheritance and scaling of font size in all browsers.\\n * 2. Correct the odd `em` font sizing in all browsers.\\n */\\n\\npre {\\n  font-family: monospace, monospace; /* 1 */\\n  font-size: 1em; /* 2 */\\n}\\n\\n/* Text-level semantics\\n   ========================================================================== */\\n\\n/**\\n * Remove the gray background on active links in IE 10.\\n */\\n\\na {\\n  background-color: transparent;\\n}\\n\\n/**\\n * 1. Remove the bottom border in Chrome 57-\\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\\n */\\n\\nabbr[title] {\\n  border-bottom: none; /* 1 */\\n  text-decoration: underline; /* 2 */\\n  text-decoration: underline dotted; /* 2 */\\n}\\n\\n/**\\n * Add the correct font weight in Chrome, Edge, and Safari.\\n */\\n\\nb,\\nstrong {\\n  font-weight: bolder;\\n}\\n\\n/**\\n * 1. Correct the inheritance and scaling of font size in all browsers.\\n * 2. Correct the odd `em` font sizing in all browsers.\\n */\\n\\ncode,\\nkbd,\\nsamp {\\n  font-family: monospace, monospace; /* 1 */\\n  font-size: 1em; /* 2 */\\n}\\n\\n/**\\n * Add the correct font size in all browsers.\\n */\\n\\nsmall {\\n  font-size: 80%;\\n}\\n\\n/**\\n * Prevent `sub` and `sup` elements from affecting the line height in\\n * all browsers.\\n */\\n\\nsub,\\nsup {\\n  font-size: 75%;\\n  line-height: 0;\\n  position: relative;\\n  vertical-align: baseline;\\n}\\n\\nsub {\\n  bottom: -0.25em;\\n}\\n\\nsup {\\n  top: -0.5em;\\n}\\n\\n/* Embedded content\\n   ========================================================================== */\\n\\n/**\\n * Remove the border on images inside links in IE 10.\\n */\\n\\nimg {\\n  border-style: none;\\n}\\n\\n/* Forms\\n   ========================================================================== */\\n\\n/**\\n * 1. Change the font styles in all browsers.\\n * 2. Remove the margin in Firefox and Safari.\\n */\\n\\nbutton,\\ninput,\\noptgroup,\\nselect,\\ntextarea {\\n  font-family: inherit; /* 1 */\\n  font-size: 100%; /* 1 */\\n  line-height: 1.15; /* 1 */\\n  margin: 0; /* 2 */\\n}\\n\\n/**\\n * Show the overflow in IE.\\n * 1. Show the overflow in Edge.\\n */\\n\\nbutton,\\ninput { /* 1 */\\n  overflow: visible;\\n}\\n\\n/**\\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\\n * 1. Remove the inheritance of text transform in Firefox.\\n */\\n\\nbutton,\\nselect { /* 1 */\\n  text-transform: none;\\n}\\n\\n/**\\n * Correct the inability to style clickable types in iOS and Safari.\\n */\\n\\nbutton,\\n[type=\\\"button\\\"],\\n[type=\\\"reset\\\"],\\n[type=\\\"submit\\\"] {\\n  -webkit-appearance: button;\\n}\\n\\n/**\\n * Remove the inner border and padding in Firefox.\\n */\\n\\nbutton::-moz-focus-inner,\\n[type=\\\"button\\\"]::-moz-focus-inner,\\n[type=\\\"reset\\\"]::-moz-focus-inner,\\n[type=\\\"submit\\\"]::-moz-focus-inner {\\n  border-style: none;\\n  padding: 0;\\n}\\n\\n/**\\n * Restore the focus styles unset by the previous rule.\\n */\\n\\nbutton:-moz-focusring,\\n[type=\\\"button\\\"]:-moz-focusring,\\n[type=\\\"reset\\\"]:-moz-focusring,\\n[type=\\\"submit\\\"]:-moz-focusring {\\n  outline: 1px dotted ButtonText;\\n}\\n\\n/**\\n * Correct the padding in Firefox.\\n */\\n\\nfieldset {\\n  padding: 0.35em 0.75em 0.625em;\\n}\\n\\n/**\\n * 1. Correct the text wrapping in Edge and IE.\\n * 2. Correct the color inheritance from `fieldset` elements in IE.\\n * 3. Remove the padding so developers are not caught out when they zero out\\n *    `fieldset` elements in all browsers.\\n */\\n\\nlegend {\\n  box-sizing: border-box; /* 1 */\\n  color: inherit; /* 2 */\\n  display: table; /* 1 */\\n  max-width: 100%; /* 1 */\\n  padding: 0; /* 3 */\\n  white-space: normal; /* 1 */\\n}\\n\\n/**\\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\\n */\\n\\nprogress {\\n  vertical-align: baseline;\\n}\\n\\n/**\\n * Remove the default vertical scrollbar in IE 10+.\\n */\\n\\ntextarea {\\n  overflow: auto;\\n}\\n\\n/**\\n * 1. Add the correct box sizing in IE 10.\\n * 2. Remove the padding in IE 10.\\n */\\n\\n[type=\\\"checkbox\\\"],\\n[type=\\\"radio\\\"] {\\n  box-sizing: border-box; /* 1 */\\n  padding: 0; /* 2 */\\n}\\n\\n/**\\n * Correct the cursor style of increment and decrement buttons in Chrome.\\n */\\n\\n[type=\\\"number\\\"]::-webkit-inner-spin-button,\\n[type=\\\"number\\\"]::-webkit-outer-spin-button {\\n  height: auto;\\n}\\n\\n/**\\n * 1. Correct the odd appearance in Chrome and Safari.\\n * 2. Correct the outline style in Safari.\\n */\\n\\n[type=\\\"search\\\"] {\\n  -webkit-appearance: textfield; /* 1 */\\n  outline-offset: -2px; /* 2 */\\n}\\n\\n/**\\n * Remove the inner padding in Chrome and Safari on macOS.\\n */\\n\\n[type=\\\"search\\\"]::-webkit-search-decoration {\\n  -webkit-appearance: none;\\n}\\n\\n/**\\n * 1. Correct the inability to style clickable types in iOS and Safari.\\n * 2. Change font properties to `inherit` in Safari.\\n */\\n\\n::-webkit-file-upload-button {\\n  -webkit-appearance: button; /* 1 */\\n  font: inherit; /* 2 */\\n}\\n\\n/* Interactive\\n   ========================================================================== */\\n\\n/*\\n * Add the correct display in Edge, IE 10+, and Firefox.\\n */\\n\\ndetails {\\n  display: block;\\n}\\n\\n/*\\n * Add the correct display in all browsers.\\n */\\n\\nsummary {\\n  display: list-item;\\n}\\n\\n/* Misc\\n   ========================================================================== */\\n\\n/**\\n * Add the correct display in IE 10+.\\n */\\n\\ntemplate {\\n  display: none;\\n}\\n\\n/**\\n * Add the correct display in IE 10.\\n */\\n\\n[hidden] {\\n  display: none;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./node_modules/normalize.css/normalize.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/common.blocks/common.sass":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/common.blocks/common.sass ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".container {\\n  display: flex;\\n}\\n\\n.container_direction-column {\\n  flex-direction: column;\\n}\\n\\n.container_direction-row-reverse {\\n  flex-direction: row-reverse;\\n}\\n\\n.container_justify-content-space-between {\\n  justify-content: space-between;\\n}\\n\\n.container_justify-content-space-around {\\n  justify-content: space-around;\\n}\\n\\n.container_justify-content-flex-end {\\n  justify-content: flex-end;\\n}\\n\\n.container_justify-content-flex-start {\\n  justify-content: flex-start;\\n}\\n\\n.container_justify-content-center {\\n  justify-content: center;\\n}\\n\\n.container_align-items-center {\\n  align-items: center;\\n}\\n\\n.container_align-items-flex-end {\\n  align-items: flex-end;\\n}\\n\\n.page__container {\\n  margin-top: 145px;\\n  margin-right: 149.74px;\\n  margin-bottom: 145px;\\n  margin-left: 149.74px;\\n}\\n\\n.flex-element_flex-grow {\\n  flex-grow: 1;\\n}\\n\\n.flex-element_align-self-flex-end {\\n  align-self: flex-end;\\n}\\n\\n.page {\\n  font: 14px \\\"Conv_Montserrat-Regular\\\";\\n}\\n\\n.color-100 {\\n  color: #1f2041;\\n}\\n\\n.color-75 {\\n  color: rgba(31, 32, 65, 0.75);\\n}\\n\\n.color-50 {\\n  color: rgba(31, 32, 65, 0.5);\\n}\\n\\n.color-25 {\\n  color: rgba(31, 32, 65, 0.25);\\n}\\n\\n.color-5 {\\n  color: rgba(31, 32, 65, 0.05);\\n}\\n\\n.color-purple {\\n  color: #BC9CFF;\\n}\\n\\n.color-green {\\n  color: #6FCF97;\\n}\\n\\n.h1 {\\n  font: 24px \\\"Conv_Quicksand-Bold\\\";\\n  margin: 0;\\n}\\n\\n.h2 {\\n  font: 19px \\\"Conv_Quicksand-Bold\\\";\\n  margin: 0;\\n}\\n\\n.h3 {\\n  font: 12px \\\"Conv_Montserrat-Bold\\\";\\n  text-transform: uppercase;\\n  margin: 0;\\n}\\n\\n.p {\\n  margin: 0;\\n}\\n\\n.text-button {\\n  margin: 0;\\n  padding: 0.5px;\\n  color: #BC9CFF;\\n  border: none;\\n  background: none;\\n  cursor: pointer;\\n}\\n\\n.text-button_cancel {\\n  color: rgba(31, 32, 65, 0.5);\\n}\\n\\n.watermark {\\n  margin: 30px;\\n  width: 50px;\\n  height: 50px;\\n  position: absolute;\\n  top: 0;\\n}\\n\\n.color {\\n  margin-bottom: 20px;\\n}\\n\\n.rectangle {\\n  width: 70px;\\n  height: 70px;\\n  border-radius: 5px;\\n  background: #1f2041;\\n}\\n\\n.rectangle_color-75 {\\n  background: rgba(31, 32, 65, 0.75);\\n}\\n\\n.rectangle_color-50 {\\n  background: rgba(31, 32, 65, 0.5);\\n}\\n\\n.rectangle_color-25 {\\n  background: rgba(31, 32, 65, 0.25);\\n}\\n\\n.rectangle_color-5 {\\n  background: rgba(31, 32, 65, 0.05);\\n}\\n\\n.rectangle_color-purple {\\n  background: #BC9CFF;\\n}\\n\\n.rectangle_color-green {\\n  background: #6FCF97;\\n}\\n\\n.color__sign {\\n  padding-left: 40px;\\n}\\n\\n.font-type__symbol {\\n  width: 37px;\\n  padding-right: 30px;\\n}\\n\\n.font-type {\\n  padding-bottom: 50px;\\n}\\n\\n.text-field__input {\\n  height: 16px;\\n  padding: 13px 15px;\\n  color: rgba(31, 32, 65, 0.75);\\n  border: 1px solid rgba(31, 32, 65, 0.25);\\n  border-radius: 4px;\\n  outline: none;\\n}\\n.text-field__input:focus, .text-field__input:hover {\\n  border: 1px solid rgba(31, 32, 65, 0.5);\\n}\\n\\n::-webkit-input-placeholder {\\n  color: rgba(31, 32, 65, 0.25);\\n}\\n\\n.text-field__input_hover-focus {\\n  border: 1px solid rgba(31, 32, 65, 0.5);\\n}\\n\\n.text-field {\\n  width: 320px;\\n}\\n\\n.dropdown__button {\\n  position: relative;\\n  height: 44px;\\n  padding-left: 15px;\\n  padding-right: 15px;\\n  color: rgba(31, 32, 65, 0.75);\\n  background-color: inherit;\\n  outline: none;\\n  border: 1px solid rgba(31, 32, 65, 0.25);\\n  border-bottom-left-radius: 4px;\\n  border-bottom-right-radius: 4px;\\n  border-top-left-radius: 4px;\\n  border-top-right-radius: 4px;\\n  cursor: pointer;\\n}\\n.dropdown__button:focus {\\n  border: 1px solid rgba(31, 32, 65, 0.5);\\n}\\n\\n.dropdown__button_open {\\n  border: 1px solid rgba(31, 32, 65, 0.5);\\n  border-bottom-left-radius: 0;\\n  border-bottom-right-radius: 0;\\n}\\n\\n.dropdown__expand-list {\\n  display: none;\\n  padding-top: 6px;\\n  padding-bottom: 12px;\\n  width: 318px;\\n  height: 0;\\n  position: absolute;\\n  background: #ffffff;\\n  border: 1px solid rgba(31, 32, 65, 0.5);\\n  border-bottom-left-radius: 4px;\\n  border-bottom-right-radius: 4px;\\n  box-shadow: 0px 14px 14px #f2f2f2;\\n  transition: all 0.2s;\\n  z-index: 100;\\n  overflow: hidden;\\n}\\n\\n.dropdown__expand-list_open {\\n  height: 141px;\\n}\\n\\n.dropdown__expand-items {\\n  margin-left: 15px;\\n  margin-right: 7px;\\n}\\n\\n.dropdown__increase-button {\\n  width: 30px;\\n  height: 30px;\\n  color: rgba(31, 32, 65, 0.5);\\n  border: 1px solid rgba(31, 32, 65, 0.25);\\n  border-radius: 50%;\\n  background: #ffffff;\\n  outline: none;\\n  cursor: pointer;\\n}\\n.dropdown__increase-button:focus {\\n  border-color: rgba(31, 32, 65, 0.5);\\n}\\n\\n.dropdown__decrease-button {\\n  width: 30px;\\n  height: 30px;\\n  color: rgba(31, 32, 65, 0.5);\\n  border: 1px solid rgba(31, 32, 65, 0.25);\\n  border-radius: 50%;\\n  background: #ffffff;\\n  outline: none;\\n  cursor: pointer;\\n}\\n.dropdown__decrease-button:focus {\\n  border-color: rgba(31, 32, 65, 0.5);\\n}\\n\\n.dropdown__decrease-button_disabled {\\n  color: rgba(31, 32, 65, 0.25);\\n  border-color: rgba(31, 32, 65, 0.15);\\n}\\n.dropdown__decrease-button_disabled:focus {\\n  border-color: rgba(31, 32, 65, 0.25);\\n}\\n\\n.dropdown__cancel-button_hidden {\\n  display: none;\\n}\\n\\n.dropdown__counter {\\n  width: 32px;\\n}\\n\\n.calendar__table {\\n  width: 280px;\\n  border-width: 0;\\n  border-spacing: 0;\\n  border-collapse: collapse;\\n  transition: all 0.2s;\\n}\\n\\n.calendar__table_first {\\n  margin-left: 0;\\n}\\n\\ntd {\\n  position: relative;\\n  padding: 0;\\n  width: 40px;\\n  background-color: lightblue;\\n  text-align: center;\\n}\\n\\n.calendar__last-week {\\n  display: none;\\n}\\n\\n.calendar__range-start:after {\\n  content: \\\"\\\";\\n  position: absolute;\\n  right: 0;\\n  display: inline-block;\\n  width: 20px;\\n  height: 100%;\\n  background: magenta;\\n}\\n\\n.calendar__range-end:before {\\n  content: \\\"\\\";\\n  position: absolute;\\n  left: 0;\\n  display: inline-block;\\n  width: 20px;\\n  height: 40px;\\n  background: magenta;\\n}\\n\\n.calendar__container {\\n  position: absolute;\\n  top: 40px;\\n  width: 280px;\\n  border: 1px solid black;\\n  border-right: 1px;\\n  overflow: hidden;\\n}\\n\\n.calendar__day-button_next-month {\\n  color: red;\\n}\\n\\n.calendar__day-button_prev-month {\\n  color: red;\\n}\\n\\n.calendar__day-button_range {\\n  background: magenta;\\n}\\n\\n.calendar__day-button_today {\\n  color: white;\\n  background: tomato;\\n}\\n\\n.calendar__day-button {\\n  position: relative;\\n  margin: 0;\\n  width: 40px;\\n  height: 40px;\\n  border-radius: 50%;\\n  z-index: 100;\\n}\\n\\n.calendar {\\n  position: relative;\\n}\\n\\n.dropdown {\\n  width: 320px;\\n}\\n\\n.font_montserrat-b {\\n  font-family: \\\"Conv_Montserrat-Bold\\\";\\n}\\n\\n.font_montserrat-r {\\n  font-family: \\\"Conv_Montserrat-Regular\\\";\\n}\\n\\n.font_quicksand-b {\\n  font-family: \\\"Conv_Quicksand-Bold\\\";\\n}\\n\\n.font_quicksand-r {\\n  font-family: \\\"Conv_Quicksand-Regular\\\";\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/common.blocks/common.sass?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/fonts/montserrat-bold/fonts.css":
/*!***********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/fonts/montserrat-bold/fonts.css ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fonts_Montserrat_Bold_eot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fonts/Montserrat-Bold.eot */ \"./src/fonts/montserrat-bold/fonts/Montserrat-Bold.eot\");\n/* harmony import */ var _fonts_Montserrat_Bold_woff__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fonts/Montserrat-Bold.woff */ \"./src/fonts/montserrat-bold/fonts/Montserrat-Bold.woff\");\n/* harmony import */ var _fonts_Montserrat_Bold_ttf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fonts/Montserrat-Bold.ttf */ \"./src/fonts/montserrat-bold/fonts/Montserrat-Bold.ttf\");\n/* harmony import */ var _fonts_Montserrat_Bold_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fonts/Montserrat-Bold.svg */ \"./src/fonts/montserrat-bold/fonts/Montserrat-Bold.svg\");\n// Imports\n\n\n\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_Montserrat_Bold_eot__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_Montserrat_Bold_woff__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_Montserrat_Bold_ttf__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_Montserrat_Bold_svg__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"/** Generated by FG **/\\n@font-face {\\n\\tfont-family: 'Conv_Montserrat-Bold';\\n\\tsrc: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n\\tsrc: local('☺'), url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") format('woff'), url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \") format('truetype'), url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \") format('svg');\\n\\tfont-weight: normal;\\n\\tfont-style: normal;\\n}\\n\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/fonts/montserrat-bold/fonts.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/fonts/montserrat-regular/fonts.css":
/*!**************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/fonts/montserrat-regular/fonts.css ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fonts_Montserrat_Regular_eot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fonts/Montserrat-Regular.eot */ \"./src/fonts/montserrat-regular/fonts/Montserrat-Regular.eot\");\n/* harmony import */ var _fonts_Montserrat_Regular_woff__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fonts/Montserrat-Regular.woff */ \"./src/fonts/montserrat-regular/fonts/Montserrat-Regular.woff\");\n/* harmony import */ var _fonts_Montserrat_Regular_ttf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fonts/Montserrat-Regular.ttf */ \"./src/fonts/montserrat-regular/fonts/Montserrat-Regular.ttf\");\n/* harmony import */ var _fonts_Montserrat_Regular_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fonts/Montserrat-Regular.svg */ \"./src/fonts/montserrat-regular/fonts/Montserrat-Regular.svg\");\n// Imports\n\n\n\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_Montserrat_Regular_eot__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_Montserrat_Regular_woff__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_Montserrat_Regular_ttf__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_Montserrat_Regular_svg__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"/** Generated by FG **/\\n@font-face {\\n\\tfont-family: 'Conv_Montserrat-Regular';\\n\\tsrc: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n\\tsrc: local('☺'), url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") format('woff'), url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \") format('truetype'), url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \") format('svg');\\n\\tfont-weight: normal;\\n\\tfont-style: normal;\\n}\\n\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/fonts/montserrat-regular/fonts.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/fonts/quicksand-bold/fonts.css":
/*!**********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/fonts/quicksand-bold/fonts.css ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fonts_Quicksand_Bold_eot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fonts/Quicksand-Bold.eot */ \"./src/fonts/quicksand-bold/fonts/Quicksand-Bold.eot\");\n/* harmony import */ var _fonts_Quicksand_Bold_woff__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fonts/Quicksand-Bold.woff */ \"./src/fonts/quicksand-bold/fonts/Quicksand-Bold.woff\");\n/* harmony import */ var _fonts_Quicksand_Bold_ttf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fonts/Quicksand-Bold.ttf */ \"./src/fonts/quicksand-bold/fonts/Quicksand-Bold.ttf\");\n/* harmony import */ var _fonts_Quicksand_Bold_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fonts/Quicksand-Bold.svg */ \"./src/fonts/quicksand-bold/fonts/Quicksand-Bold.svg\");\n// Imports\n\n\n\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_Quicksand_Bold_eot__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_Quicksand_Bold_woff__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_Quicksand_Bold_ttf__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_Quicksand_Bold_svg__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"/** Generated by FG **/\\n@font-face {\\n\\tfont-family: 'Conv_Quicksand-Bold';\\n\\tsrc: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n\\tsrc: local('☺'), url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") format('woff'), url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \") format('truetype'), url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \") format('svg');\\n\\tfont-weight: normal;\\n\\tfont-style: normal;\\n}\\n\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/fonts/quicksand-bold/fonts.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/fonts/quicksand-regular/fonts.css":
/*!*************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/fonts/quicksand-regular/fonts.css ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fonts_Quicksand_Regular_eot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fonts/Quicksand-Regular.eot */ \"./src/fonts/quicksand-regular/fonts/Quicksand-Regular.eot\");\n/* harmony import */ var _fonts_Quicksand_Regular_woff__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fonts/Quicksand-Regular.woff */ \"./src/fonts/quicksand-regular/fonts/Quicksand-Regular.woff\");\n/* harmony import */ var _fonts_Quicksand_Regular_ttf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fonts/Quicksand-Regular.ttf */ \"./src/fonts/quicksand-regular/fonts/Quicksand-Regular.ttf\");\n/* harmony import */ var _fonts_Quicksand_Regular_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fonts/Quicksand-Regular.svg */ \"./src/fonts/quicksand-regular/fonts/Quicksand-Regular.svg\");\n// Imports\n\n\n\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_Quicksand_Regular_eot__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_Quicksand_Regular_woff__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_Quicksand_Regular_ttf__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_Quicksand_Regular_svg__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"/** Generated by FG **/\\n@font-face {\\n\\tfont-family: 'Conv_Quicksand-Regular';\\n\\tsrc: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n\\tsrc: local('☺'), url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") format('woff'), url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \") format('truetype'), url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \") format('svg');\\n\\tfont-weight: normal;\\n\\tfont-style: normal;\\n}\\n\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/fonts/quicksand-regular/fonts.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/normalize.css/normalize.css":
/*!**************************************************!*\
  !*** ./node_modules/normalize.css/normalize.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../css-loader/dist/cjs.js!./normalize.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./node_modules/normalize.css/normalize.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/UI kit/Form Elements/formElements.js":
/*!**************************************************!*\
  !*** ./src/UI kit/Form Elements/formElements.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_common_blocks_common_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @src/common.blocks/common.sass */ \"./src/common.blocks/common.sass\");\n/* harmony import */ var _src_common_blocks_common_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_common_blocks_common_sass__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_fonts_quicksand_regular_fonts_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @src/fonts/quicksand-regular/fonts.css */ \"./src/fonts/quicksand-regular/fonts.css\");\n/* harmony import */ var _src_fonts_quicksand_regular_fonts_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_fonts_quicksand_regular_fonts_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_fonts_quicksand_bold_fonts_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @src/fonts/quicksand-bold/fonts.css */ \"./src/fonts/quicksand-bold/fonts.css\");\n/* harmony import */ var _src_fonts_quicksand_bold_fonts_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_fonts_quicksand_bold_fonts_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_fonts_montserrat_regular_fonts_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @src/fonts/montserrat-regular/fonts.css */ \"./src/fonts/montserrat-regular/fonts.css\");\n/* harmony import */ var _src_fonts_montserrat_regular_fonts_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_src_fonts_montserrat_regular_fonts_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _src_fonts_montserrat_bold_fonts_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @src/fonts/montserrat-bold/fonts.css */ \"./src/fonts/montserrat-bold/fonts.css\");\n/* harmony import */ var _src_fonts_montserrat_bold_fonts_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_src_fonts_montserrat_bold_fonts_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_library_blocks_dropdown_dropdown_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @src/library.blocks/dropdown/dropdown.js */ \"./src/library.blocks/dropdown/dropdown.js\");\n/* harmony import */ var _src_library_blocks_dropdown_dropdown_observer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @src/library.blocks/dropdown/dropdown__observer.js */ \"./src/library.blocks/dropdown/dropdown__observer.js\");\n/* harmony import */ var _src_library_blocks_dropdown_dropdown_observer_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_src_library_blocks_dropdown_dropdown_observer_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _src_library_blocks_calendar_calendar_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @src/library.blocks/calendar/calendar.js */ \"./src/library.blocks/calendar/calendar.js\");\n/* harmony import */ var _src_library_blocks_calendar_next_button_calendar_next_button_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @src/library.blocks/calendar/__next-button/calendar__next-button.js */ \"./src/library.blocks/calendar/__next-button/calendar__next-button.js\");\n/* harmony import */ var _src_library_blocks_calendar_prev_button_calendar_prev_button_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @src/library.blocks/calendar/__prev-button/calendar__prev-button.js */ \"./src/library.blocks/calendar/__prev-button/calendar__prev-button.js\");\n/* harmony import */ var _src_library_blocks_calendar_container_calendar_container_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @src/library.blocks/calendar/__container/calendar__container.js */ \"./src/library.blocks/calendar/__container/calendar__container.js\");\n/* harmony import */ var _node_modules_normalize_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/node_modules/normalize.css */ \"./node_modules/normalize.css/normalize.css\");\n/* harmony import */ var _node_modules_normalize_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_node_modules_normalize_css__WEBPACK_IMPORTED_MODULE_11__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/UI_kit/Form_Elements/formElements.js?");

/***/ }),

/***/ "./src/common.blocks/common.sass":
/*!***************************************!*\
  !*** ./src/common.blocks/common.sass ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./common.sass */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/common.blocks/common.sass\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/common.blocks/common.sass?");

/***/ }),

/***/ "./src/fonts/montserrat-bold/fonts.css":
/*!*********************************************!*\
  !*** ./src/fonts/montserrat-bold/fonts.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./fonts.css */ \"./node_modules/css-loader/dist/cjs.js!./src/fonts/montserrat-bold/fonts.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/fonts/montserrat-bold/fonts.css?");

/***/ }),

/***/ "./src/fonts/montserrat-bold/fonts/Montserrat-Bold.eot":
/*!*************************************************************!*\
  !*** ./src/fonts/montserrat-bold/fonts/Montserrat-Bold.eot ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"fonts/Montserrat-Bold.eot\");\n\n//# sourceURL=webpack:///./src/fonts/montserrat-bold/fonts/Montserrat-Bold.eot?");

/***/ }),

/***/ "./src/fonts/montserrat-bold/fonts/Montserrat-Bold.svg":
/*!*************************************************************!*\
  !*** ./src/fonts/montserrat-bold/fonts/Montserrat-Bold.svg ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"fonts/Montserrat-Bold.svg\");\n\n//# sourceURL=webpack:///./src/fonts/montserrat-bold/fonts/Montserrat-Bold.svg?");

/***/ }),

/***/ "./src/fonts/montserrat-bold/fonts/Montserrat-Bold.ttf":
/*!*************************************************************!*\
  !*** ./src/fonts/montserrat-bold/fonts/Montserrat-Bold.ttf ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"fonts/Montserrat-Bold.ttf\");\n\n//# sourceURL=webpack:///./src/fonts/montserrat-bold/fonts/Montserrat-Bold.ttf?");

/***/ }),

/***/ "./src/fonts/montserrat-bold/fonts/Montserrat-Bold.woff":
/*!**************************************************************!*\
  !*** ./src/fonts/montserrat-bold/fonts/Montserrat-Bold.woff ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"fonts/Montserrat-Bold.woff\");\n\n//# sourceURL=webpack:///./src/fonts/montserrat-bold/fonts/Montserrat-Bold.woff?");

/***/ }),

/***/ "./src/fonts/montserrat-regular/fonts.css":
/*!************************************************!*\
  !*** ./src/fonts/montserrat-regular/fonts.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./fonts.css */ \"./node_modules/css-loader/dist/cjs.js!./src/fonts/montserrat-regular/fonts.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/fonts/montserrat-regular/fonts.css?");

/***/ }),

/***/ "./src/fonts/montserrat-regular/fonts/Montserrat-Regular.eot":
/*!*******************************************************************!*\
  !*** ./src/fonts/montserrat-regular/fonts/Montserrat-Regular.eot ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"fonts/Montserrat-Regular.eot\");\n\n//# sourceURL=webpack:///./src/fonts/montserrat-regular/fonts/Montserrat-Regular.eot?");

/***/ }),

/***/ "./src/fonts/montserrat-regular/fonts/Montserrat-Regular.svg":
/*!*******************************************************************!*\
  !*** ./src/fonts/montserrat-regular/fonts/Montserrat-Regular.svg ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"fonts/Montserrat-Regular.svg\");\n\n//# sourceURL=webpack:///./src/fonts/montserrat-regular/fonts/Montserrat-Regular.svg?");

/***/ }),

/***/ "./src/fonts/montserrat-regular/fonts/Montserrat-Regular.ttf":
/*!*******************************************************************!*\
  !*** ./src/fonts/montserrat-regular/fonts/Montserrat-Regular.ttf ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"fonts/Montserrat-Regular.ttf\");\n\n//# sourceURL=webpack:///./src/fonts/montserrat-regular/fonts/Montserrat-Regular.ttf?");

/***/ }),

/***/ "./src/fonts/montserrat-regular/fonts/Montserrat-Regular.woff":
/*!********************************************************************!*\
  !*** ./src/fonts/montserrat-regular/fonts/Montserrat-Regular.woff ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"fonts/Montserrat-Regular.woff\");\n\n//# sourceURL=webpack:///./src/fonts/montserrat-regular/fonts/Montserrat-Regular.woff?");

/***/ }),

/***/ "./src/fonts/quicksand-bold/fonts.css":
/*!********************************************!*\
  !*** ./src/fonts/quicksand-bold/fonts.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./fonts.css */ \"./node_modules/css-loader/dist/cjs.js!./src/fonts/quicksand-bold/fonts.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/fonts/quicksand-bold/fonts.css?");

/***/ }),

/***/ "./src/fonts/quicksand-bold/fonts/Quicksand-Bold.eot":
/*!***********************************************************!*\
  !*** ./src/fonts/quicksand-bold/fonts/Quicksand-Bold.eot ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"fonts/Quicksand-Bold.eot\");\n\n//# sourceURL=webpack:///./src/fonts/quicksand-bold/fonts/Quicksand-Bold.eot?");

/***/ }),

/***/ "./src/fonts/quicksand-bold/fonts/Quicksand-Bold.svg":
/*!***********************************************************!*\
  !*** ./src/fonts/quicksand-bold/fonts/Quicksand-Bold.svg ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"fonts/Quicksand-Bold.svg\");\n\n//# sourceURL=webpack:///./src/fonts/quicksand-bold/fonts/Quicksand-Bold.svg?");

/***/ }),

/***/ "./src/fonts/quicksand-bold/fonts/Quicksand-Bold.ttf":
/*!***********************************************************!*\
  !*** ./src/fonts/quicksand-bold/fonts/Quicksand-Bold.ttf ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"fonts/Quicksand-Bold.ttf\");\n\n//# sourceURL=webpack:///./src/fonts/quicksand-bold/fonts/Quicksand-Bold.ttf?");

/***/ }),

/***/ "./src/fonts/quicksand-bold/fonts/Quicksand-Bold.woff":
/*!************************************************************!*\
  !*** ./src/fonts/quicksand-bold/fonts/Quicksand-Bold.woff ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"fonts/Quicksand-Bold.woff\");\n\n//# sourceURL=webpack:///./src/fonts/quicksand-bold/fonts/Quicksand-Bold.woff?");

/***/ }),

/***/ "./src/fonts/quicksand-regular/fonts.css":
/*!***********************************************!*\
  !*** ./src/fonts/quicksand-regular/fonts.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./fonts.css */ \"./node_modules/css-loader/dist/cjs.js!./src/fonts/quicksand-regular/fonts.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/fonts/quicksand-regular/fonts.css?");

/***/ }),

/***/ "./src/fonts/quicksand-regular/fonts/Quicksand-Regular.eot":
/*!*****************************************************************!*\
  !*** ./src/fonts/quicksand-regular/fonts/Quicksand-Regular.eot ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"fonts/Quicksand-Regular.eot\");\n\n//# sourceURL=webpack:///./src/fonts/quicksand-regular/fonts/Quicksand-Regular.eot?");

/***/ }),

/***/ "./src/fonts/quicksand-regular/fonts/Quicksand-Regular.svg":
/*!*****************************************************************!*\
  !*** ./src/fonts/quicksand-regular/fonts/Quicksand-Regular.svg ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"fonts/Quicksand-Regular.svg\");\n\n//# sourceURL=webpack:///./src/fonts/quicksand-regular/fonts/Quicksand-Regular.svg?");

/***/ }),

/***/ "./src/fonts/quicksand-regular/fonts/Quicksand-Regular.ttf":
/*!*****************************************************************!*\
  !*** ./src/fonts/quicksand-regular/fonts/Quicksand-Regular.ttf ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"fonts/Quicksand-Regular.ttf\");\n\n//# sourceURL=webpack:///./src/fonts/quicksand-regular/fonts/Quicksand-Regular.ttf?");

/***/ }),

/***/ "./src/fonts/quicksand-regular/fonts/Quicksand-Regular.woff":
/*!******************************************************************!*\
  !*** ./src/fonts/quicksand-regular/fonts/Quicksand-Regular.woff ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"fonts/Quicksand-Regular.woff\");\n\n//# sourceURL=webpack:///./src/fonts/quicksand-regular/fonts/Quicksand-Regular.woff?");

/***/ }),

/***/ "./src/library.blocks/calendar/__container/calendar__container.js":
/*!************************************************************************!*\
  !*** ./src/library.blocks/calendar/__container/calendar__container.js ***!
  \************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _calendar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../calendar.js */ \"./src/library.blocks/calendar/calendar.js\");\n\n\nlet nextButton = document.querySelector('.calendar__next-button');\nlet calendar= document.querySelector('.calendar__table');\n\nlet dataPicker = function() {\n    let startRange = true,\n        startRangeElem = [],\n        endRangeElem = [];\n\n    return function() {\n        let target = event.target;\n        if (!target.classList.contains('calendar__day-button')) return;\n\n        if (startRange) {\n            if (startRangeElem.length) removeRange();\n            chooseButton(startRangeElem);\n            startRange = false;\n        }\n        else {\n            chooseButton(endRangeElem);\n            console.log(endRangeElem);\n            if (startRangeElem.find(elem => elem == endRangeElem[0])) {\n                endRangeElem = [];\n                return;\n            }\n            drawRange();\n            startRange = true;\n        }\n\n        function chooseButton(range) {\n            range.push(target);\n            range[0].rangeIndex = _calendar_js__WEBPACK_IMPORTED_MODULE_0__[\"printCalendar\"].ordinal;\n            range[0].rangeY = target.parentElement.parentElement.rowIndex;\n            range[0].rangeX = target.parentElement.cellIndex;\n\n            chooseAdditionalButton(range);\n\n            console.log(range);\n            range.forEach(elem => elem.classList.add('calendar__day-button_range'));\n        }\n\n        function chooseAdditionalButton(range) {\n            let rangeWeek = range[0].parentElement.parentElement;\n            if (rangeWeek.querySelector('.calendar__day-button_prev-month') && range[0].rangeIndex) {\n                let prevMonth = _calendar_js__WEBPACK_IMPORTED_MODULE_0__[\"collectionOfDates\"][range[0].rangeIndex - 1].elem;\n                let week = prevMonth.querySelector('.calendar__last-week') ? 5 : 6;\n                range.push(prevMonth.rows[week].cells[range[0].rangeX].firstElementChild);\n                range[1].rangeIndex = range[0].rangeIndex - 1;\n                range[1].rangeY = week;\n                range[1].rangeX = range[0].rangeX;\n            }\n            else if (rangeWeek.querySelector('.calendar__day-button_next-month')) {\n                let nextMonth = _calendar_js__WEBPACK_IMPORTED_MODULE_0__[\"collectionOfDates\"][range[0].rangeIndex + 1].elem;\n                range.push(nextMonth.rows[1].cells[range[0].rangeX].firstElementChild);\n                range[1].rangeIndex = range[0].rangeIndex + 1;\n                range[1].rangeY = 1;\n                range[1].rangeX = range[0].rangeX;\n            }\n        }\n\n        function drawRange() {\n            let elems = startRangeElem.concat(endRangeElem);\n            elems.sort(compareElems);\n            console.log(elems);\n        }\n\n        function compareElems(a, b) {\n            let result;\n            let coordRelativePosition = [\n                a.rangeIndex - b.rangeIndex, \n                a.rangeY - b.rangeY,\n                a.rangeX - b.rangeX\n            ];\n            coordRelativePosition.find(coord => {\n                if (coord != 0) {\n                    result = coord;\n                    return true;\n                }\n            })\n            return result;\n        }\n\n        function removeRange() {\n            endRangeElem.forEach(elem => elem.classList.remove('calendar__day-button_range'));\n            startRangeElem.forEach(elem => elem.classList.remove('calendar__day-button_range'));\n            endRangeElem = [];\n            startRangeElem = [];\n        }\n\n        function chooseEndButton() {\n\n            endRangeX = target.parentElement.cellIndex;\n            endRangeY = target.parentElement.parentElement.rowIndex;\n\n\n            coordRelativePosition.find((coord, index) => {\n                if (coord > 0) {\n                    setCorrectRange();\n                    return true;\n                }\n                else if (coord < 0) {\n                    setReverseRange();\n                    return true;\n                }\n                else if (index == 2 && coord == 0) {\n                    setUnitRange();\n                }\n            })\n        }\n\n        //function setCorrectRange() {\n        //    endRangeElem = target;\n        //    drawRange();\n        //}\n\n        //function setReverseRange() {\n        //    endRangeElem = startRangeElem;\n        //    startRangeElem = target;\n        //    drawRange();\n        //}\n\n        //function setUnitRange() {\n        //    endRangeElem = startRangeElem;\n        //    drawUnitRange();\n        //}\n\n        function drawUnitRange() {\n        }\n    }\n}\n\n_calendar_js__WEBPACK_IMPORTED_MODULE_0__[\"container\"].addEventListener('click', dataPicker());\n_calendar_js__WEBPACK_IMPORTED_MODULE_0__[\"container\"].addEventListener('focus', function() {\n    let calendar = _calendar_js__WEBPACK_IMPORTED_MODULE_0__[\"collectionOfDates\"][_calendar_js__WEBPACK_IMPORTED_MODULE_0__[\"printCalendar\"].ordinal].elem;\n    let row = 5;\n\n    if (calendar.querySelector('.calendar__last-week') && \n        event.target == calendar.rows[row].cells[6].firstElementChild) {\n        event.target.addEventListener('keydown', focusOnFirstDay);\n    }\n    if (!calendar.querySelector('.calendar__last-week') && \n        event.target == calendar.rows[row + 1].cells[6].firstElementChild) {\n        event.target.addEventListener('keydown', focusOnFirstDay);\n    }\n    if (event.target == calendar.rows[1].cells[0].firstElementChild) {\n        event.target.addEventListener('keydown', focusOnNextMonthButton);\n    }\n}, true)\n\nfunction focusOnFirstDay() {\n    if (event.code == 'Tab' && !event.shiftKey) {\n        event.preventDefault();\n        _calendar_js__WEBPACK_IMPORTED_MODULE_0__[\"collectionOfDates\"][_calendar_js__WEBPACK_IMPORTED_MODULE_0__[\"printCalendar\"].ordinal].elem.rows[1].cells[0].firstElementChild.focus();\n    }\n}\n\nfunction focusOnNextMonthButton() {\n    if (event.code == 'Tab' && event.shiftKey) {\n        event.preventDefault();\n        nextButton.focus();\n    }\n}\n\n\n//# sourceURL=webpack:///./src/library.blocks/calendar/__container/calendar__container.js?");

/***/ }),

/***/ "./src/library.blocks/calendar/__next-button/calendar__next-button.js":
/*!****************************************************************************!*\
  !*** ./src/library.blocks/calendar/__next-button/calendar__next-button.js ***!
  \****************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _calendar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../calendar.js */ \"./src/library.blocks/calendar/calendar.js\");\n/* harmony import */ var _calendar_template_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../calendar__template.js */ \"./src/library.blocks/calendar/calendar__template.js\");\n\n\n\nlet nextButton = document.querySelector('.calendar__next-button');\nlet counter = 0;\nlet storedCounter = 0;\nnextButton.addEventListener('click', scrollNextMonth);\n\nfunction scrollNextMonth() {\n    _calendar_js__WEBPACK_IMPORTED_MODULE_0__[\"printCalendar\"].ordinal++;\n\n    _calendar_js__WEBPACK_IMPORTED_MODULE_0__[\"collectionOfDates\"][_calendar_js__WEBPACK_IMPORTED_MODULE_0__[\"printCalendar\"].ordinal].updateTitle();\n    let y = parseInt(_calendar_js__WEBPACK_IMPORTED_MODULE_0__[\"firstTable\"].style.marginLeft);\n    if (!y) y = 0;\n    _calendar_js__WEBPACK_IMPORTED_MODULE_0__[\"firstTable\"].style.marginLeft = y - 280 + 'px' ;\n\n    if (!_calendar_js__WEBPACK_IMPORTED_MODULE_0__[\"collectionOfDates\"][_calendar_js__WEBPACK_IMPORTED_MODULE_0__[\"printCalendar\"].ordinal + 1]) {\n\n        _calendar_js__WEBPACK_IMPORTED_MODULE_0__[\"collectionOfDates\"].push(new _calendar_js__WEBPACK_IMPORTED_MODULE_0__[\"MyDate\"](new Date(_calendar_js__WEBPACK_IMPORTED_MODULE_0__[\"collectionOfDates\"][_calendar_js__WEBPACK_IMPORTED_MODULE_0__[\"printCalendar\"].ordinal].year, _calendar_js__WEBPACK_IMPORTED_MODULE_0__[\"collectionOfDates\"][_calendar_js__WEBPACK_IMPORTED_MODULE_0__[\"printCalendar\"].ordinal].month + 1)))\n\n        _calendar_js__WEBPACK_IMPORTED_MODULE_0__[\"container\"].insertAdjacentHTML('beforeend', _calendar_template_js__WEBPACK_IMPORTED_MODULE_1__[\"CALENDAR_TABLE_TEMPLATE\"]);\n\n        _calendar_js__WEBPACK_IMPORTED_MODULE_0__[\"collectionOfDates\"][_calendar_js__WEBPACK_IMPORTED_MODULE_0__[\"printCalendar\"].ordinal + 1].elem = _calendar_js__WEBPACK_IMPORTED_MODULE_0__[\"container\"].lastElementChild;\n\n        counter++;\n\n        setTimeout(wrapper);\n    }\n}\n\nfunction wrapper() {\n    let i = 0;\n    let ordinalValue = _calendar_js__WEBPACK_IMPORTED_MODULE_0__[\"printCalendar\"].ordinal;\n    if (storedCounter >= counter) return;\n    do {\n        Object(_calendar_js__WEBPACK_IMPORTED_MODULE_0__[\"specifyMonth\"])(ordinalValue);\n        i++;\n        storedCounter++;\n    } while (i % 3 != 0 && storedCounter < counter);\n}\n\nnextButton.addEventListener('keydown', function() {\n    if (event.code == 'Tab' && !event.shiftKey) {\n        event.preventDefault();\n        _calendar_js__WEBPACK_IMPORTED_MODULE_0__[\"collectionOfDates\"][_calendar_js__WEBPACK_IMPORTED_MODULE_0__[\"printCalendar\"].ordinal].elem.rows[1].cells[0].firstElementChild.focus();\n    }\n})\n\nnextButton.addEventListener('dblclick', function() {\n    event.preventDefault();\n})\n\n\n//# sourceURL=webpack:///./src/library.blocks/calendar/__next-button/calendar__next-button.js?");

/***/ }),

/***/ "./src/library.blocks/calendar/__prev-button/calendar__prev-button.js":
/*!****************************************************************************!*\
  !*** ./src/library.blocks/calendar/__prev-button/calendar__prev-button.js ***!
  \****************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _calendar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../calendar.js */ \"./src/library.blocks/calendar/calendar.js\");\n\n\ndocument.querySelector('.calendar__prev-button').addEventListener('click', showPrevMonth);\n\nfunction showPrevMonth() {\n    if (!_calendar_js__WEBPACK_IMPORTED_MODULE_0__[\"printCalendar\"].ordinal) return;\n    _calendar_js__WEBPACK_IMPORTED_MODULE_0__[\"collectionOfDates\"][--_calendar_js__WEBPACK_IMPORTED_MODULE_0__[\"printCalendar\"].ordinal].updateTitle();\n    let y = parseInt(_calendar_js__WEBPACK_IMPORTED_MODULE_0__[\"firstTable\"].style.marginLeft);\n    _calendar_js__WEBPACK_IMPORTED_MODULE_0__[\"firstTable\"].style.marginLeft = y + 280 + 'px' ;\n}\n\n\n//# sourceURL=webpack:///./src/library.blocks/calendar/__prev-button/calendar__prev-button.js?");

/***/ }),

/***/ "./src/library.blocks/calendar/calendar.js":
/*!*************************************************!*\
  !*** ./src/library.blocks/calendar/calendar.js ***!
  \*************************************************/
/*! exports provided: collectionOfDates, container, firstTable, MyDate, specifyMonth, printCalendar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"collectionOfDates\", function() { return collectionOfDates; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"container\", function() { return container; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"firstTable\", function() { return firstTable; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MyDate\", function() { return MyDate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"specifyMonth\", function() { return specifyMonth; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"printCalendar\", function() { return printCalendar; });\n/* harmony import */ var _calendar_template_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar__template.js */ \"./src/library.blocks/calendar/calendar__template.js\");\n\n\nconst MONTHS = ['jan', 'feb', 'mar', 'apr', 'may', 'june', 'july', 'aug', 'sept', 'oct', 'nov', 'dec'];\nlet collectionOfDates = [];\nlet container = document.querySelector('.calendar__container');\nlet firstTable = document.querySelector('.calendar__table_first');\nlet titleMonth = document.querySelector('.calendar__month-name');\nlet titleYear = document.querySelector('.calendar__year');\n\nfunction init() {\n    printCalendar.ordinal = 0;\n    collectionOfDates.push( new MyDate(new Date()) );\n    collectionOfDates.push( new MyDate(new Date(collectionOfDates[0].year, collectionOfDates[0].month + 1)) );\n    collectionOfDates[0].elem = container.firstElementChild;\n    collectionOfDates[1].elem = container.lastElementChild;\n    specifyMonth(printCalendar.ordinal);\n    specifyMonth(printCalendar.ordinal);\n    collectionOfDates[0].updateTitle();\n\n    addTodayClass();\n    console.log(collectionOfDates[1].isPrint);\n}\n\nclass MyDate {\n    constructor(date) {\n        this.today = date.getDate();\n        this.month = date.getMonth();\n        this.year = date.getFullYear();\n        this.firstDay = new Date(this.year, this.month, 1).getDay();\n        this.firstDayOfWeek = this.firstDay - 1 == -1 ? 6 : this.firstDay - 1;\n        this.lastDate = new Date(this.year, this.month + 1, 0).getDate();\n        this.isPrint = false;\n    }\n\n    updateTitle() {\n        titleMonth.innerHTML = MONTHS[this.month];\n        titleYear.innerHTML = this.year;\n    }\n\n    callPrintCalendar() {\n        printCalendar.call(this)\n    }\n}\n\nfunction specifyMonth(ordinalValue) {\n    let calendarObj;\n\n    if (!collectionOfDates[ordinalValue].isPrint) {\n        calendarObj = collectionOfDates[ordinalValue];\n    }\n    else if (!collectionOfDates[ordinalValue + 1].isPrint) {\n        calendarObj = collectionOfDates[ordinalValue + 1];\n    }\n    else if (!collectionOfDates[ordinalValue - 1].isPrint) {\n        calendarObj = collectionOfDates[ordinalValue - 1];\n    }\n    else {\n        let index = collectionOfDates.lastIndexOf(date => !date.isPrint)\n        if (~index) calendarObj = collectionOfDates[index];\n        else return;\n    }\n\n    calendarObj.callPrintCalendar();\n}\n\nfunction printCalendar() {\n    this.isPrint = true;\n    let calendar = this.elem;\n    let weeks = calendar.rows;\n    let lastWeek = weeks[weeks.length - 1];\n\n    let day = this.firstDayOfWeek;\n    let week = 1;\n    let currentDate = 1;\n    let nextMonthWeek = 5;\n\n    //this month\n    for (; week < weeks.length; week++) {\n        for (; day < 7; day++) {\n            if (currentDate > this.lastDate) break;\n            weeks[week].cells[day].firstElementChild.innerHTML = currentDate;\n            currentDate++;\n        }\n        if (week == 6) {\n            nextMonthWeek = 6;\n            lastWeek.classList.remove('calendar__last-week');\n        }\n        if (currentDate > this.lastDate) break;\n        day = 0;\n    }\n\n    //prev month\n    let lastMonthDate = new Date(this.year, this.month, 0).getDate();\n    let prevDay = this.firstDayOfWeek - 1;\n    for (; prevDay >= 0; prevDay--) {\n        weeks[1].cells[prevDay].firstElementChild.classList.add('calendar__day-button_prev-month');\n        weeks[1].cells[prevDay].firstElementChild.innerHTML = lastMonthDate;\n        lastMonthDate--;\n    }\n\n    //next month\n    let nextMonthDate = 1;\n    if (week < 5) day = 0;\n    for (; day < 7; day++) {\n        weeks[nextMonthWeek].cells[day].firstElementChild.classList.add('calendar__day-button_next-month');\n        weeks[nextMonthWeek].cells[day].firstElementChild.innerHTML = nextMonthDate;\n        nextMonthDate++;\n    }\n}\n\nfunction addTodayClass() {\n    let range = collectionOfDates[0].today + collectionOfDates[0].firstDayOfWeek;\n    let row = collectionOfDates[0].y = Math.ceil(range / 7);\n    let cell = range % 7;\n    cell == 0 ? cell = 6 : --cell;\n    collectionOfDates[0].x = cell;\n    firstTable.rows[row].cells[cell].firstElementChild.classList.add('calendar__day-button_today');\n    let lastWeekOfFirstTable = firstTable.querySelector('.calendar__last-week') ? 5 : 6;\n\n    if (row == lastWeekOfFirstTable && firstTable.querySelector('.calendar__day-button_next-month')) {\n        container.lastElementChild.rows[1].cells[collectionOfDates[0].x].firstElementChild.classList.add('calendar__day-button_today');\n    }\n}\n\ninit();\n\n\n//# sourceURL=webpack:///./src/library.blocks/calendar/calendar.js?");

/***/ }),

/***/ "./src/library.blocks/calendar/calendar__template.js":
/*!***********************************************************!*\
  !*** ./src/library.blocks/calendar/calendar__template.js ***!
  \***********************************************************/
/*! exports provided: CALENDAR_TABLE_TEMPLATE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CALENDAR_TABLE_TEMPLATE\", function() { return CALENDAR_TABLE_TEMPLATE; });\nconst CALENDAR_TABLE_TEMPLATE = \n`<table class='calendar__table'>\n<tr>\n    <th>пн</th>\n    <th>вт</th>\n    <th>ср</th>\n    <th>чт</th>\n    <th>пт</th>\n    <th>сб</th>\n    <th>вс</th>\n</tr>\n<tr>\n    <td><button class='calendar__day-button'></button></td>\n    <td><button class='calendar__day-button'></button></td>\n    <td><button class='calendar__day-button'></button></td>\n    <td><button class='calendar__day-button'></button></td>\n    <td><button class='calendar__day-button'></button></td>\n    <td><button class='calendar__day-button'></button></td>\n    <td><button class='calendar__day-button'></button></td>\n</tr>\n<tr>\n    <td><button class='calendar__day-button'></button></td>\n    <td><button class='calendar__day-button'></button></td>\n    <td><button class='calendar__day-button'></button></td>\n    <td><button class='calendar__day-button'></button></td>\n    <td><button class='calendar__day-button'></button></td>\n    <td><button class='calendar__day-button'></button></td>\n    <td><button class='calendar__day-button'></button></td>\n</tr>\n<tr>\n    <td><button class='calendar__day-button'></button></td>\n    <td><button class='calendar__day-button'></button></td>\n    <td><button class='calendar__day-button'></button></td>\n    <td><button class='calendar__day-button'></button></td>\n    <td><button class='calendar__day-button'></button></td>\n    <td><button class='calendar__day-button'></button></td>\n    <td><button class='calendar__day-button'></button></td>\n</tr>\n<tr>\n    <td><button class='calendar__day-button'></button></td>\n    <td><button class='calendar__day-button'></button></td>\n    <td><button class='calendar__day-button'></button></td>\n    <td><button class='calendar__day-button'></button></td>\n    <td><button class='calendar__day-button'></button></td>\n    <td><button class='calendar__day-button'></button></td>\n    <td><button class='calendar__day-button'></button></td>\n</tr>\n<tr>\n    <td><button class='calendar__day-button'></button></td>\n    <td><button class='calendar__day-button'></button></td>\n    <td><button class='calendar__day-button'></button></td>\n    <td><button class='calendar__day-button'></button></td>\n    <td><button class='calendar__day-button'></button></td>\n    <td><button class='calendar__day-button'></button></td>\n    <td><button class='calendar__day-button'></button></td>\n</tr>\n<tr class='calendar__last-week'>\n    <td><button class='calendar__day-button'></button></td>\n    <td><button class='calendar__day-button'></button></td>\n    <td><button class='calendar__day-button'></button></td>\n    <td><button class='calendar__day-button'></button></td>\n    <td><button class='calendar__day-button'></button></td>\n    <td><button class='calendar__day-button'></button></td>\n    <td><button class='calendar__day-button'></button></td>\n</tr>\n</table>`\n\n\n//# sourceURL=webpack:///./src/library.blocks/calendar/calendar__template.js?");

/***/ }),

/***/ "./src/library.blocks/dropdown/__button/dropdown__button.js":
/*!******************************************************************!*\
  !*** ./src/library.blocks/dropdown/__button/dropdown__button.js ***!
  \******************************************************************/
/*! exports provided: dropdownButton, showOrHideExpandlist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dropdownButton\", function() { return dropdownButton; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showOrHideExpandlist\", function() { return showOrHideExpandlist; });\nfunction dropdownButton() {\n    let openButton = document.querySelector('.dropdown__button_open');\n\n    document.removeEventListener('click', clickOutsideButton);\n\n    showOrHideExpandlist(this.targetElem);\n\n    if (!openButton) {\n        document.addEventListener('click', clickOutsideButton)\n    }\n    else if (this.targetElem != openButton) {\n        showOrHideExpandlist(openButton);\n        document.addEventListener('click', clickOutsideButton)\n    }\n}\n\nfunction clickOutsideButton(e) {\n    let elementClicked = e.target;\n\n    while (elementClicked != document.body.parentElement) {\n        if (elementClicked.closest('.dropdown__button') || elementClicked.closest('.dropdown__expand-list')) return;\n\n        elementClicked = elementClicked.parentElement;\n    }\n    showOrHideExpandlist(document.querySelector('.dropdown__button_open'));\n\n    document.removeEventListener('click', clickOutsideButton);\n}\n\n\nfunction showOrHideExpandlist(button) {\n    let coord = button.getBoundingClientRect();\n    let expandList = button.nextElementSibling;\n\n    expandList.style.left = coord.x + window.pageXOffest + 'px';\n    expandList.style.top = coord.y + coord.height + window.pageYOffset - button.clientTop + 'px';\n    expandList.style.width = coord.width - 2*button.clientLeft + 'px';\n    expandList.style.borderWidth = button.clientLeft;\n    button.classList.toggle('dropdown__button_open');\n\n    if (button.classList.contains('dropdown__button_open')) {\n        expandList.style.display = 'flex';\n        setTimeout(() => expandList.classList.toggle('dropdown__expand-list_open'), 0);\n        return;\n    }\n    expandList.style.display = 'none';\n    expandList.classList.toggle('dropdown__expand-list_open');\n}\n\n\n//# sourceURL=webpack:///./src/library.blocks/dropdown/__button/dropdown__button.js?");

/***/ }),

/***/ "./src/library.blocks/dropdown/__cancel-button/dropdown__cancel-button.js":
/*!********************************************************************************!*\
  !*** ./src/library.blocks/dropdown/__cancel-button/dropdown__cancel-button.js ***!
  \********************************************************************************/
/*! exports provided: cancelButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cancelButton\", function() { return cancelButton; });\nfunction cancelButton() {\n    let target = this.targetElem;\n    while (!target.classList.contains('dropdown')) {\n        target = target.parentElement;\n    }\n    for (let counter of target.querySelectorAll('.dropdown__counter')) {\n        counter.innerHTML = 0; \n    }\n}\n\n\n//# sourceURL=webpack:///./src/library.blocks/dropdown/__cancel-button/dropdown__cancel-button.js?");

/***/ }),

/***/ "./src/library.blocks/dropdown/__decrease-button/dropdown__decrease-button.js":
/*!************************************************************************************!*\
  !*** ./src/library.blocks/dropdown/__decrease-button/dropdown__decrease-button.js ***!
  \************************************************************************************/
/*! exports provided: decreaseButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"decreaseButton\", function() { return decreaseButton; });\nfunction decreaseButton() {\n    let counter = this.targetElem.nextElementSibling;\n    if (counter.innerHTML == 0) return;\n    counter.innerHTML--;\n}\n\n\n//# sourceURL=webpack:///./src/library.blocks/dropdown/__decrease-button/dropdown__decrease-button.js?");

/***/ }),

/***/ "./src/library.blocks/dropdown/__increase-button/dropdown__increase-button.js":
/*!************************************************************************************!*\
  !*** ./src/library.blocks/dropdown/__increase-button/dropdown__increase-button.js ***!
  \************************************************************************************/
/*! exports provided: increaseButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"increaseButton\", function() { return increaseButton; });\nfunction increaseButton() {\n    let counter = this.targetElem.previousElementSibling;\n    counter.innerHTML++;\n}\n\n\n//# sourceURL=webpack:///./src/library.blocks/dropdown/__increase-button/dropdown__increase-button.js?");

/***/ }),

/***/ "./src/library.blocks/dropdown/__submit-button/dropdown__submit-button.js":
/*!********************************************************************************!*\
  !*** ./src/library.blocks/dropdown/__submit-button/dropdown__submit-button.js ***!
  \********************************************************************************/
/*! exports provided: submitButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"submitButton\", function() { return submitButton; });\n/* harmony import */ var _button_dropdown_button_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../__button/dropdown__button.js */ \"./src/library.blocks/dropdown/__button/dropdown__button.js\");\n\n\nfunction submitButton() {\n    let openButton = document.querySelector('.dropdown__button_open');\n    Object(_button_dropdown_button_js__WEBPACK_IMPORTED_MODULE_0__[\"showOrHideExpandlist\"])(openButton);\n\n}\n\n\n//# sourceURL=webpack:///./src/library.blocks/dropdown/__submit-button/dropdown__submit-button.js?");

/***/ }),

/***/ "./src/library.blocks/dropdown/dropdown.js":
/*!*************************************************!*\
  !*** ./src/library.blocks/dropdown/dropdown.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _button_dropdown_button_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./__button/dropdown__button.js */ \"./src/library.blocks/dropdown/__button/dropdown__button.js\");\n/* harmony import */ var _decrease_button_dropdown_decrease_button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./__decrease-button/dropdown__decrease-button.js */ \"./src/library.blocks/dropdown/__decrease-button/dropdown__decrease-button.js\");\n/* harmony import */ var _increase_button_dropdown_increase_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./__increase-button/dropdown__increase-button.js */ \"./src/library.blocks/dropdown/__increase-button/dropdown__increase-button.js\");\n/* harmony import */ var _submit_button_dropdown_submit_button_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./__submit-button/dropdown__submit-button.js */ \"./src/library.blocks/dropdown/__submit-button/dropdown__submit-button.js\");\n/* harmony import */ var _cancel_button_dropdown_cancel_button_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./__cancel-button/dropdown__cancel-button.js */ \"./src/library.blocks/dropdown/__cancel-button/dropdown__cancel-button.js\");\n\n\n\n\n\n\nlet dropdowns = document.querySelectorAll('.dropdown');\ndropdowns.forEach(dropdown => dropdown.addEventListener('click', defineElement));\n\nfunction defineElement() {\n    let prop = methodsProp.find( prop => methods.targetElem = event.target.closest(`.${prop}`) );\n    if (methods.targetElem) methods[prop]();\n}\n\nlet methods = {\n    dropdown__button() {\n        _button_dropdown_button_js__WEBPACK_IMPORTED_MODULE_0__[\"dropdownButton\"].call(this)\n    },\n\n    'dropdown__increase-button'() {\n        _increase_button_dropdown_increase_button_js__WEBPACK_IMPORTED_MODULE_2__[\"increaseButton\"].call(this)\n    }, \n\n    'dropdown__decrease-button'() {\n        _decrease_button_dropdown_decrease_button_js__WEBPACK_IMPORTED_MODULE_1__[\"decreaseButton\"].call(this)\n    }, \n\n    'dropdown__submit-button'() {\n        _submit_button_dropdown_submit_button_js__WEBPACK_IMPORTED_MODULE_3__[\"submitButton\"].call(this)\n    }, \n\n    'dropdown__cancel-button'() {\n        _cancel_button_dropdown_cancel_button_js__WEBPACK_IMPORTED_MODULE_4__[\"cancelButton\"].call(this)\n    }, \n}\n\nlet methodsProp = Object.keys(methods);\n\n\n//# sourceURL=webpack:///./src/library.blocks/dropdown/dropdown.js?");

/***/ }),

/***/ "./src/library.blocks/dropdown/dropdown__observer.js":
/*!***********************************************************!*\
  !*** ./src/library.blocks/dropdown/dropdown__observer.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let observer = new MutationObserver(function(mutations) {\n    for (let mutation of mutations) {\n        if (mutation.target.classList.contains('dropdown__counter')) {\n            makeChangesInDropdown(mutation);\n        }\n    }\n\n    function makeChangesInDropdown(mutation) {\n        let target = mutation.target;\n        let showCancleButton = false;\n\n        if (mutation.removedNodes[0].data == 0 && mutation.addedNodes[0].data == 1) {\n            target.previousElementSibling.classList.remove('dropdown__decrease-button_disabled');\n            showCancleButton = true;\n\n        } else if (mutation.addedNodes[0].data == 0) {\n            target.previousElementSibling.classList.add('dropdown__decrease-button_disabled');\n        };\n\n        for (let dropdown of dropdowns) {\n            if (dropdown.contains(target)) target = dropdown;\n        }\n\n        let sum = Array.from(target.querySelectorAll('.dropdown__counter')).\n            reduce((sum, counter) => +counter.innerHTML + sum, 0);\n\n        let partOfString = '';\n\n        if (!sum) {\n            sum = 'Сколько гостей';\n            showOrHideCancelButton(target);\n        } else if (sum == 1) {\n            partOfString = ' гость';\n            if (showCancleButton) showOrHideCancelButton(target);\n        } else if (sum < 5) {\n            partOfString = ' гостя';\n        } else {\n            partOfString = ' гостей';\n        }\n\n        target.querySelector('.dropdown__button').firstElementChild.innerHTML = `${sum}${partOfString}`;\n    }\n\n    function showOrHideCancelButton(dropdown) {\n        let cancelButton = dropdown.querySelector('.dropdown__cancel-button');\n        cancelButton.classList.toggle('dropdown__cancel-button_hidden')\n    }\n})\n\nlet dropdowns = Array.from(document.querySelectorAll('.dropdown'));\n\ndropdowns.forEach(dropdown => observer.observe(dropdown, { childList: true, subtree: true, }));\n\n\n//# sourceURL=webpack:///./src/library.blocks/dropdown/dropdown__observer.js?");

/***/ })

/******/ });