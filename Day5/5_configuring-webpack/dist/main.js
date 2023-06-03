/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   log: () => (/* binding */ log)
/* harmony export */ });
function log(message) {
    console.log(message);
}

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/util.js");


const cart = [];

function addToCart(item) {
    cart.push(item);
    (0,_util__WEBPACK_IMPORTED_MODULE_0__.log)("added: " + item);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    (0,_util__WEBPACK_IMPORTED_MODULE_0__.log)("removed item from index: " + index);
}

addToCart("Air Filter");
removeFromCart(0);
})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/util.js");


function register(email) {
    (0,_util__WEBPACK_IMPORTED_MODULE_0__.log)(`registering ${email}`);
}

register('manish@abc.com');
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTs7Ozs7O1VDRkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNONkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMENBQUc7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMENBQUc7QUFDUDtBQUNBO0FBQ0E7QUFDQSxrQjs7Ozs7Ozs7OztBQ2Y2QjtBQUM3QjtBQUNBO0FBQ0EsSUFBSSwwQ0FBRyxnQkFBZ0IsTUFBTTtBQUM3QjtBQUNBO0FBQ0EsMkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaW1wbGUtYnVpbGQvLi9zcmMvdXRpbC5qcyIsIndlYnBhY2s6Ly9zaW1wbGUtYnVpbGQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc2ltcGxlLWJ1aWxkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zaW1wbGUtYnVpbGQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zaW1wbGUtYnVpbGQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zaW1wbGUtYnVpbGQvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2ltcGxlLWJ1aWxkLy4vc3JjL2hvbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGxvZyhtZXNzYWdlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgbG9nIH0gZnJvbSAnLi91dGlsJztcclxuXHJcbmNvbnN0IGNhcnQgPSBbXTtcclxuXHJcbmZ1bmN0aW9uIGFkZFRvQ2FydChpdGVtKSB7XHJcbiAgICBjYXJ0LnB1c2goaXRlbSk7XHJcbiAgICBsb2coXCJhZGRlZDogXCIgKyBpdGVtKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlRnJvbUNhcnQoaW5kZXgpIHtcclxuICAgIGNhcnQuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIGxvZyhcInJlbW92ZWQgaXRlbSBmcm9tIGluZGV4OiBcIiArIGluZGV4KTtcclxufVxyXG5cclxuYWRkVG9DYXJ0KFwiQWlyIEZpbHRlclwiKTtcclxucmVtb3ZlRnJvbUNhcnQoMCk7IiwiaW1wb3J0IHsgbG9nIH0gZnJvbSAnLi91dGlsJztcclxuXHJcbmZ1bmN0aW9uIHJlZ2lzdGVyKGVtYWlsKSB7XHJcbiAgICBsb2coYHJlZ2lzdGVyaW5nICR7ZW1haWx9YCk7XHJcbn1cclxuXHJcbnJlZ2lzdGVyKCdtYW5pc2hAYWJjLmNvbScpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==