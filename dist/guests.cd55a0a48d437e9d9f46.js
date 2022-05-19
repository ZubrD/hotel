/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/guests.js":
/*!**************************!*\
  !*** ./src/js/guests.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// 10 человек, в том числе не больше 2 младенцев
var guestInput = document.querySelector('.js-guest__input');
var plusAdult = document.querySelector('.js-plus-adult');
var minusAdult = document.querySelector('.js-minus-adult');
var plusChild = document.querySelector('.js-plus-child');
var minusChild = document.querySelector('.js-minus-child');
var plusBaby = document.querySelector('.js-plus-baby');
var minusBaby = document.querySelector('.js-minus-baby');
var guestsConfirmationClear = document.querySelector('.js-guests-confirmation__clear');
var guestsConfirmationAssume = document.querySelector('.js-guests-confirmation__assume');

var Guests = /*#__PURE__*/function () {
  function Guests() {
    _classCallCheck(this, Guests);
  }

  _createClass(Guests, [{
    key: "bindEventListers",
    value: function bindEventListers() {
      guestInput.addEventListener('click', this.openBlock);
      plusAdult.addEventListener('click', this.plusAdultClick);
      minusAdult.addEventListener('click', this.minusAdultClick);
      plusChild.addEventListener('click', this.plusChildClick);
      minusChild.addEventListener('click', this.minusChildClick);
      plusBaby.addEventListener('click', this.plusBabyClick);
      minusBaby.addEventListener('click', this.minusBabyClick);
      guestsConfirmationClear.addEventListener('click', this.guestsConfirmationClearClick);
      guestsConfirmationAssume.addEventListener('click', this.guestsConfirmationAssumeClick);
    }
  }, {
    key: "openBlock",
    value: function openBlock() {
      $('.js-guests-block').toggleClass('block-open');
    } /////////////////////ВЗРОСЛЫЕ/////////////////////

  }, {
    key: "plusAdultClick",
    value: function plusAdultClick(event) {
      event.preventDefault();
      $('.js-guests-confirmation__clear').removeClass('opaque');
      var value = parseInt($('.js-guest__input').attr('adult'));
      var guests = parseInt($('.js-guest__input').attr('guests'));

      if (guests < 10) {
        value = value + 1;
        guests = guests + 1;
        $('.js-guest__input').attr({
          'adult': value
        });
        $('.js-guest__input').attr({
          'guests': guests
        });
      }

      if (value > 0) {
        $('.js-minus-adult').css('border', '1px solid rgba(31, 32, 65, 0.25)');
      }

      $('.js-guest__input').val(messangeInput());
      $('.js-adult-result').text(value);
      messangeInput();
    }
  }, {
    key: "minusAdultClick",
    value: function minusAdultClick(event) {
      event.preventDefault();
      var value = $('.js-guest__input').attr('adult');
      var guests = parseInt($('.js-guest__input').attr('guests'));
      var child = parseInt($('.js-guest__input').attr('child'));

      if (value != 0) {
        /* Если есть дети, то должен остаться хоть один взрослый */
        if (!(value == 1 && guests > 1)) {
          value = value - 1;
          guests = guests - 1;
          $('.js-guest__input').attr({
            'adult': value
          });
          $('.js-guest__input').attr({
            'guests': guests
          });
        }
      }

      if (value == 0) {
        $(this).css('border', '1px solid rgba(31, 32, 65, 0.1)');
      }

      if (guests == 0) {
        $('.js-guests-confirmation__clear').addClass('opaque');
      }

      $('.js-guest__input').val(messangeInput());
      $('.js-adult-result').text(value);
    } //////////////////////////ДЕТИ////////////////////////////

  }, {
    key: "plusChildClick",
    value: function plusChildClick(event) {
      event.preventDefault();
      $('.js-guests-confirmation__clear').removeClass('opaque');
      var value = parseInt($('.js-guest__input').attr('child'));
      var guests = parseInt($('.js-guest__input').attr('guests'));
      var adult = parseInt($('.js-guest__input').attr('adult'));
      /* Не более 5 детей */

      if (value < 5 && guests < 10) {
        /* Должен быть как минимум один взрослый */
        if (adult === 0) {
          adult = 1;
          guests = guests + 1;
        }

        value = value + 1;
        guests = guests + 1;
        $('.js-guest__input').attr({
          'child': value
        });
        $('.js-guest__input').attr({
          'guests': guests
        });
        $('.js-guest__input').attr({
          'adult': adult
        });
      }

      if (value > 0) {
        $('.js-minus-child').css('border', '1px solid rgba(31, 32, 65, 0.25)');
      }

      $('.js-guest__input').val(messangeInput());
      $('.js-child-result').text(value);
      $('.js-adult-result').text(adult);
    }
  }, {
    key: "minusChildClick",
    value: function minusChildClick(event) {
      event.preventDefault();
      var value = $('.js-guest__input').attr('child');
      var guests = $('.js-guest__input').attr('guests');

      if (value != 0) {
        value = value - 1;
        guests = guests - 1;
        $('.js-guest__input').attr({
          'child': value
        });
        $('.js-guest__input').attr({
          'guests': guests
        });
      }

      if (value == 0) {
        $(this).css('border', '1px solid rgba(31, 32, 65, 0.1)');
      }

      $('.js-guest__input').val(messangeInput());
      $('.js-child-result').text(value);
    } ////////////////////////////МЛАДЕНЦЫ////////////////////////

  }, {
    key: "plusBabyClick",
    value: function plusBabyClick(event) {
      event.preventDefault();
      $('.js-guests-confirmation__clear').removeClass('opaque');
      var value = parseInt($('.js-guest__input').attr('baby'));
      var guests = parseInt($('.js-guest__input').attr('guests'));
      var adult = parseInt($('.js-guest__input').attr('adult'));
      /* Не более 2 младенцев */

      if (value < 2 && guests < 10) {
        /* Должен быть как минимум один взрослый */
        if (adult === 0) {
          adult = 1;
          guests = guests + 1;
        }

        value = value + 1;
        guests = guests + 1;
        $('.js-guest__input').attr({
          'baby': value
        });
        $('.js-guest__input').attr({
          'guests': guests
        });
        $('.js-guest__input').attr({
          'adult': adult
        });
      }

      if (value > 0) {
        $('.js-minus-baby').css('border', '1px solid rgba(31, 32, 65, 0.25)');
      }

      $('.js-guest__input').val(messangeInput());
      $('.js-baby-result').text(value);
      $('.js-adult-result').text(adult);
    }
  }, {
    key: "minusBabyClick",
    value: function minusBabyClick(event) {
      event.preventDefault();
      var value = $('.js-guest__input').attr('baby');
      var guests = $('.js-guest__input').attr('guests');

      if (value != 0) {
        value = value - 1;
        guests = guests - 1;
        $('.js-guest__input').attr({
          'baby': value
        });
        $('.js-guest__input').attr({
          'guests': guests
        });
      }

      if (value == 0) {
        $(this).css('border', '1px solid rgba(31, 32, 65, 0.1)');
      }

      $('.js-guest__input').val(messangeInput());
      $('.js-baby-result').text(value);
    } ////////////СБРОС ЗНАЧЕНИЙ В ФОРМЕ ПОДБОРА КОЛИЧЕСТВА ГОСТЕЙ/////////

  }, {
    key: "guestsConfirmationClearClick",
    value: function guestsConfirmationClearClick() {
      $('.js-guest__input').val('');
      $('.js-guest__input').attr('adult', 0);
      $('.js-guest__input').attr('child', 0);
      $('.js-guest__input').attr('baby', 0);
      $('.js-guest__input').attr('guests', 0);
      $('.js-adult-result').text('0');
      $('.js-child-result').text('0');
      $('.js-baby-result').text('0');
      $('.js-minus-adult').css('border', '1px solid rgba(31, 32, 65, 0.1)');
      $('.js-minus-child').css('border', '1px solid rgba(31, 32, 65, 0.1)');
      $('.js-minus-baby').css('border', '1px solid rgba(31, 32, 65, 0.1)');
      $('.js-guests-confirmation__clear').addClass('opaque');
    } //////////////ПРИНЯТЬ ЗНАЧЕНИЯ (СКРЫТЬ ФОРМУ)///////////////

  }, {
    key: "guestsConfirmationAssumeClick",
    value: function guestsConfirmationAssumeClick() {
      $('.js-guests-block').addClass('block-open');
    }
  }]);

  return Guests;
}();

var guests = new Guests();
guests.bindEventListers(); ///////////////////////////СОСТАВЛЕНИЕ СООБЩЕНИЯ ВЫВОДА В ИНПУТ КОЛИЧЕСТВА ГОСТЕЙ////////////////////////////////////

function messangeInput() {
  var guests = parseInt($('.js-guest__input').attr('guests'));
  var baby = parseInt($('.js-guest__input').attr('baby'));
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
//# sourceMappingURL=guests.cd55a0a48d437e9d9f46.js.map