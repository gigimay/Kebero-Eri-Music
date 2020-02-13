/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 30);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = __webpack_require__(11);

var _axios2 = _interopRequireDefault(_axios);

var _dompurify = __webpack_require__(28);

var _dompurify2 = _interopRequireDefault(_dompurify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function searchResultsHTML(stores) {
  return stores.map(function (store) {
    return '\n      <a href="/store/' + store.slug + '" class="search__result">\n        <strong> ' + store.name + ' </strong>\n      </a>\n    ';
  }).join(' ');
}

function typeAhead(search) {
  if (!search) return;

  var searchInput = search.querySelector('.search__input');
  var searchResults = search.querySelector('.search__results');

  searchInput.on('input', function () {
    var _this = this;

    // if there is no value quite it
    if (!this.value) {
      searchResults.style.display = 'none';
      return;
    }
    //show the search searchResults
    searchResults.style.display = 'block';

    _axios2.default.get('/api/search?q=' + this.value).then(function (res) {
      if (res.data.length) {
        var html = searchResultsHTML(res.data);
        searchResults.innerHTML = _dompurify2.default.sanitize(html);
        return;
      }
      //tell them nothing came bracket
      searchResults.innerHTML = _dompurify2.default.sanitize('<div class="search__result"> No results found for ' + _this.value + '!! </div>');
    }).catch(function (err) {
      console.error(err);
    });
  });
  // handle keyboard inputs
  searchInput.on('keyup', function (e) {
    //"e" stands for event
    // if they aren't pressing up, down or enter, who cares!
    console.log(e.keyCode);
    if (![38, 40, 13].includes(e.keyCode)) {
      return; //we don't care let him click with his mouth
    }
    var activeclass = 'search__result--active';
    var current = search.querySelector('.' + activeclass);
    var items = search.querySelectorAll('.search__result');
    var next = void 0;
    if (e.keyCode === 40 && current) {
      next = current.nextElementSibling || items[0];
    } else if (e.keyCode === 40) {
      next = items[0];
    } else if (e.keyCode === 38 && current) {
      next = current.previousElementSibling || items[items.length - 1];
    } else if (e.keyCode === 38) {
      next = items[items.length - 1];
    } else if (e.keyCode === 13 && current.href) {
      window.location = current.href;
      return;
    }
    if (current) {
      current.classList.remove(activeclass);
    }
    next.classList.add(activeclass);
  });
}

exports.default = typeAhead;

/***/ }),

/***/ 11:
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\gdawit\\Desktop\\testing-folder\\Kebero-Eri-Music\\node_modules\\axios\\index.js'");

/***/ }),

/***/ 28:
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\gdawit\\Desktop\\testing-folder\\Kebero-Eri-Music\\node_modules\\dompurify\\dist\\purify.js'");

/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _bling = __webpack_require__(9);

var _typeAhead = __webpack_require__(10);

var _typeAhead2 = _interopRequireDefault(_typeAhead);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _typeAhead2.default)((0, _bling.$)('.search'));

//****audio play button pour faire que play mais pas pause****//

var status = false;
var playproperty = document.getElementsByClassName('playproperty');

if (playproperty.length) {
  playproperty[0].addEventListener('click', function audioHandler(e) {
    e.preventDefault();

    var elm = e.target;
    var audio = document.getElementsByClassName('audiocontrols')[0];

    var source = document.getElementsByClassName('audiosource')[0];
    source.elm = elm.getAttribute('data-value');

    if (status == false || audio.paused) {
      audio.play();
      status = true;
      this.classList.add('togglePlayImage');
      this.classList.remove('togglePauseImage');
      console.log('played', this.classList);
    } else {
      audio.pause();
      status = false;
      this.classList.add('togglePauseImage');
      this.classList.remove('togglePlayImage');
      console.log('paused', this.classList);
    }
  });
}

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// based on https://gist.github.com/paulirish/12fb951a8b893a454b32

var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

Node.prototype.on = window.on = function (name, fn) {
  this.addEventListener(name, fn);
};

NodeList.prototype.__proto__ = Array.prototype; // eslint-disable-line

NodeList.prototype.on = NodeList.prototype.addEventListener = function (name, fn) {
  this.forEach(function (elem) {
    elem.on(name, fn);
  });
};

exports.$ = $;
exports.$$ = $$;

/***/ })

/******/ });