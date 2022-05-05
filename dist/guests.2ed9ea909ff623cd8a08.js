/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/guests.js":
/*!**************************!*\
  !*** ./src/js/guests.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
 // 10 человек, в том числе не больше 2 младенцев

jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-guest__input').on('focus', function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-guests-block').toggleClass('block-open');
}); //////////////////////////////////////////ВЗРОСЛЫЕ/////////////////////////////////////////////////////////////////

jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-plus-adult').on('click', function (event) {
  event.preventDefault();
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-guests-confirmation__clear').removeClass('opaque');
  var value = parseInt(jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-guest__input').attr('adult'));
  var guests = parseInt(jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-guest__input').attr('guests'));

  if (guests < 10) {
    value = value + 1;
    guests = guests + 1;
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-guest__input').attr({
      'adult': value
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-guest__input').attr({
      'guests': guests
    });
  }

  if (value > 0) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-minus-adult').css('border', '1px solid rgba(31, 32, 65, 0.25)');
  }

  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-guest__input').val(messangeInput());
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-adult-result').text(value);
  messangeInput();
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-minus-adult').on('click', function (event) {
  event.preventDefault();
  var value = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-guest__input').attr('adult');
  var guests = parseInt(jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-guest__input').attr('guests'));
  var child = parseInt(jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-guest__input').attr('child'));

  if (value != 0) {
    /* Если есть дети, то должен остаться хоть один взрослый */
    if (!(value == 1 && guests > 1)) {
      value = value - 1;
      guests = guests - 1;
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-guest__input').attr({
        'adult': value
      });
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-guest__input').attr({
        'guests': guests
      });
    }
  }

  if (value == 0) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).css('border', '1px solid rgba(31, 32, 65, 0.1)');
  }

  if (guests == 0) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-guests-confirmation__clear').addClass('opaque');
  }

  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-guest__input').val(messangeInput());
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-adult-result').text(value);
}); /////////////////////////////////////////////////////ДЕТИ///////////////////////////////////////////////////////

jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-plus-child').on('click', function (event) {
  event.preventDefault();
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-guests-confirmation__clear').removeClass('opaque');
  var value = parseInt(jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-guest__input').attr('child'));
  var guests = parseInt(jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-guest__input').attr('guests'));
  var adult = parseInt(jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-guest__input').attr('adult'));
  /* Не более 5 детей */

  if (value < 5 && guests < 10) {
    /* Должен быть как минимум один взрослый */
    if (adult === 0) {
      adult = 1;
      guests = guests + 1;
    }

    value = value + 1;
    guests = guests + 1;
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-guest__input').attr({
      'child': value
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-guest__input').attr({
      'guests': guests
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-guest__input').attr({
      'adult': adult
    });
  }

  if (value > 0) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-minus-child').css('border', '1px solid rgba(31, 32, 65, 0.25)');
  }

  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-guest__input').val(messangeInput());
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-child-result').text(value);
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-adult-result').text(adult);
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-minus-child').on('click', function (event) {
  event.preventDefault();
  var value = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-guest__input').attr('child');
  var guests = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-guest__input').attr('guests');

  if (value != 0) {
    value = value - 1;
    guests = guests - 1;
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-guest__input').attr({
      'child': value
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-guest__input').attr({
      'guests': guests
    });
  }

  if (value == 0) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).css('border', '1px solid rgba(31, 32, 65, 0.1)');
  }

  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-guest__input').val(messangeInput());
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-child-result').text(value);
}); ////////////////////////////////////////////////////////МЛАДЕНЦЫ//////////////////////////////////////////////

jquery__WEBPACK_IMPORTED_MODULE_0___default()('.plus-baby').on('click', function (event) {
  event.preventDefault();
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-guests-confirmation__clear').removeClass('opaque');
  var value = parseInt(jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-guest__input').attr('baby'));
  var guests = parseInt(jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-guest__input').attr('guests'));
  var adult = parseInt(jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-guest__input').attr('adult'));
  /* Не более 2 младенцев */

  if (value < 2 && guests < 10) {
    /* Должен быть как минимум один взрослый */
    if (adult === 0) {
      adult = 1;
      guests = guests + 1;
    }

    value = value + 1;
    guests = guests + 1;
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-guest__input').attr({
      'baby': value
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-guest__input').attr({
      'guests': guests
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-guest__input').attr({
      'adult': adult
    });
  }

  if (value > 0) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-minus-baby').css('border', '1px solid rgba(31, 32, 65, 0.25)');
  }

  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-guest__input').val(messangeInput());
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-baby-result').text(value);
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-adult-result').text(adult);
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-minus-baby').on('click', function (event) {
  event.preventDefault();
  var value = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-guest__input').attr('baby');
  var guests = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-guest__input').attr('guests');

  if (value != 0) {
    value = value - 1;
    guests = guests - 1;
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-guest__input').attr({
      'baby': value
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-guest__input').attr({
      'guests': guests
    });
  }

  if (value == 0) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).css('border', '1px solid rgba(31, 32, 65, 0.1)');
  }

  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-guest__input').val(messangeInput());
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-baby-result').text(value);
}); ///////////////////////////СОСТАВЛЕНИЕ СООБЩЕНИЯ ВЫВОДА В ИНПУТ КОЛИЧЕСТВА ГОСТЕЙ////////////////////////////////////

function messangeInput() {
  var guests = parseInt(jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-guest__input').attr('guests'));
  var baby = parseInt(jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-guest__input').attr('baby'));
  var guestsPl, babyPl;
  var messange;
  var onlyGuests = guests - baby;

  if (onlyGuests == 1) {
    guestsPl = 'гость';
  } else if (onlyGuests > 1 && onlyGuests < 5) {
    guestsPl = 'гостя';
  } else if (guests > 4) {
    guestsPl = 'гостей';
  }

  if (baby == 1) {
    babyPl = 'младенец';
  } else {
    babyPl = 'младенца';
  }

  if (onlyGuests > 0 && baby == 0) {
    messange = onlyGuests + ' ' + guestsPl;
  } else if (onlyGuests > 0 && baby > 0) {
    messange = onlyGuests + ' ' + guestsPl + ', ' + baby + ' ' + babyPl;
  }

  return messange;
} ///////////////////////////////////СБРОС ЗНАЧЕНИЙ В ФОРМЕ ПОДБОРА КОЛИЧЕСТВА ГОСТЕЙ///////////////////////////////


jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-guests-confirmation__clear').on('click', function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-guest__input').val('');
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-guest__input').attr('adult', 0);
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-guest__input').attr('child', 0);
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-guest__input').attr('baby', 0);
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-guest__input').attr('guests', 0);
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-adult-result').text('0');
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-child-result').text('0');
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-baby-result').text('0');
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-minus-adult').css('border', '1px solid rgba(31, 32, 65, 0.1)');
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-minus-child').css('border', '1px solid rgba(31, 32, 65, 0.1)');
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-minus-baby').css('border', '1px solid rgba(31, 32, 65, 0.1)');
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-guests-confirmation__clear').addClass('opaque');
}); ///////////////////////////////////ПРИНЯТЬ ЗНАЧЕНИЯ (СКРЫТЬ ФОРМУ)///////////////////////////////

jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-guests-confirmation__assume').on('click', function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-guests-block').addClass('block-open');
});

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
/******/ 			"guests": 0
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
/******/ 		var chunkLoadingGlobal = self["webpackChunkzubr_webpack"] = self["webpackChunkzubr_webpack"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_jquery_dist_jquery_js"], () => (__webpack_require__("./src/js/guests.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=guests.2ed9ea909ff623cd8a08.js.map