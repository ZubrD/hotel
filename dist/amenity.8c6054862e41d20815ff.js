/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/amenity.js":
/*!***************************!*\
  !*** ./src/js/amenity.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()('.amenity-form__input').on('focus', function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.amenity-block').toggleClass('block-open');
}); //////////////////////////////////////////СПАЛЬНИ/////////////////////////////////////////////////////////////////

jquery__WEBPACK_IMPORTED_MODULE_0___default()('.plus-sleep').on('click', function () {
  console.log(this);
  var value = parseInt(jquery__WEBPACK_IMPORTED_MODULE_0___default()('.amenity-form__input').attr('sleep'));

  if (value < 3) {
    value = value + 1;
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.amenity-form__input').attr({
      'sleep': value
    });
  }

  if (value > 0) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.minus-sleep').css('border', '1px solid rgba(31, 32, 65, 0.25)');
  }

  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.amenity-form__input').val(my_select());
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sleep-result').text(value);
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()('.minus-sleep').on('click', function () {
  var value = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.amenity-form__input').attr('sleep');

  if (value != 0) {
    value = value - 1;
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.amenity-form__input').attr({
      'sleep': value
    });
  }

  if (value == 0) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).css('border', '1px solid rgba(31, 32, 65, 0.1)');
  }

  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.amenity-form__input').val(my_select());
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sleep-result').text(value);
}); /////////////////////////////////////////////////////КРОВАТИ///////////////////////////////////////////////////////

jquery__WEBPACK_IMPORTED_MODULE_0___default()('.plus-bed').on('click', function () {
  var value = parseInt(jquery__WEBPACK_IMPORTED_MODULE_0___default()('.amenity-form__input').attr('bed'));

  if (value < 6) {
    value = value + 1;
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.amenity-form__input').attr({
      'bed': value
    });
  }

  if (value > 0) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.minus-bed').css('border', '1px solid rgba(31, 32, 65, 0.25)');
  }

  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.amenity-form__input').val(my_select());
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.bed-result').text(value);
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()('.minus-bed').on('click', function () {
  var value = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.amenity-form__input').attr('bed');

  if (value != 0) {
    value = value - 1;
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.amenity-form__input').attr({
      'bed': value
    });
  }

  if (value == 0) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).css('border', '1px solid rgba(31, 32, 65, 0.1)');
  }

  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.amenity-form__input').val(my_select());
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.bed-result').text(value);
}); ////////////////////////////////////////////////////////ВАННЫЕ КОМНАТЫ//////////////////////////////////////////////

jquery__WEBPACK_IMPORTED_MODULE_0___default()('.plus-bath').on('click', function () {
  var value = parseInt(jquery__WEBPACK_IMPORTED_MODULE_0___default()('.amenity-form__input').attr('bath'));

  if (value < 3) {
    value = value + 1;
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.amenity-form__input').attr({
      'bath': value
    });
  }

  if (value > 0) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.minus-bath').css('border', '1px solid rgba(31, 32, 65, 0.25)');
  }

  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.amenity-form__input').val(my_select());
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.bath-result').text(value);
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()('.minus-bath').on('click', function () {
  var value = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.amenity-form__input').attr('bath');

  if (value != 0) {
    value = value - 1;
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.amenity-form__input').attr({
      'bath': value
    });
  }

  if (value == 0) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).css('border', '1px solid rgba(31, 32, 65, 0.1)');
  }

  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.amenity-form__input').val(my_select());
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.bath-result').text(value);
});

function my_select() {
  var sleep = parseInt(jquery__WEBPACK_IMPORTED_MODULE_0___default()('.amenity-form__input').attr('sleep'));
  var bed = parseInt(jquery__WEBPACK_IMPORTED_MODULE_0___default()('.amenity-form__input').attr('bed'));
  var bath = parseInt(jquery__WEBPACK_IMPORTED_MODULE_0___default()('.amenity-form__input').attr('bath'));
  var sleep_pl, bed_pl, bath_pl;
  var sleep_ms;
  var bed_ms;
  var bath_ms;

  switch (sleep) {
    case 1:
      sleep_pl = 'спальня';
      break;

    case 2:
      sleep_pl = 'спальни';
      break;

    case 3:
      sleep_pl = 'спальни';
      break;
  }

  switch (bed) {
    case 1:
      bed_pl = 'кровать';
      break;

    case 2:
      bed_pl = 'кровати';
      break;

    case 3:
      bed_pl = 'кровати';
      break;

    case 4:
      bed_pl = 'кровати';
      break;

    case 5:
      bed_pl = 'кроватей';
      break;

    case 6:
      bed_pl = 'кроватей';
      break;
  }

  switch (bath) {
    case 1:
      bath_pl = 'ванная комната';
      break;

    case 2:
      bath_pl = 'ванных комнаты';
      break;

    case 3:
      bath_pl = 'ванных комнаты';
      break;
  }

  if (sleep == 0) {
    sleep_ms = '';
  } else if (bed != 0 || bath != 0) {
    sleep_ms = sleep + ' ' + sleep_pl + ', ';
  } else {
    sleep_ms = sleep + ' ' + sleep_pl;
  }

  if (bed == 0) {
    bed_ms = '';
  } else if (bath != 0) {
    bed_ms = bed + ' ' + bed_pl + ', ';
  } else {
    bed_ms = bed + ' ' + bed_pl;
  }

  if (bath == 0) {
    bath_ms = '';
  } else {
    bath_ms = bath + ' ' + bath_pl;
  }

  return sleep_ms + bed_ms + bath_ms;
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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"amenity": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkmaxgraph_webpack"] = self["webpackChunkmaxgraph_webpack"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_jquery_dist_jquery_js"], () => (__webpack_require__("./src/js/amenity.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=amenity.8c6054862e41d20815ff.js.map