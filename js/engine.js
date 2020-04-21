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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classes = __webpack_require__(2);

var header = new _classes.Element("header", "body");
header.createElement();

var h1 = new _classes.Element("h1", "header");
h1.createElement();
document.querySelector("h1").innerHTML = "NIEWIERNE PSY";

var h3 = new _classes.Element("h3", "header");
h3.createElement();
document.querySelector("h3").innerHTML = "nemo est dominus meus";

var nav = new _classes.Element("nav", "body");
nav.createElement();

var home = new _classes.ElementIdTxt("div", "nav", "home", "START");
home.createElement();

var about = new _classes.ElementIdTxt("div", "nav", "about", "O NAS");
about.createElement();

var games = new _classes.ElementIdTxt("div", "nav", "games", "GRY");
games.createElement();

var graphic = new _classes.ElementIdTxt("div", "nav", "graphic", "GRAFIK");
graphic.createElement();

var mainContainer = new _classes.ElementId("div", "body", "mainContainer");
mainContainer.createElement();

var path = 'https://szymekcendecki.github.io/NiewiernePsy/json/';

document.querySelector("#home").addEventListener("click", function () {
    fetch(path + 'home.json').then(function (response) {
        return response.json();
    }).then(function (data) {
        document.querySelector("#mainContainer").innerHTML = "";
    }).catch(function (error) {
        return console.error(error);
    });
});

document.querySelector("#about").addEventListener("click", function () {
    fetch(path + 'about.json').then(function (response) {
        return response.json();
    }).then(function (data) {
        document.querySelector("#mainContainer").innerHTML = "";
        document.querySelector("#mainContainer").innerHTML = data.about;
    }).catch(function (error) {
        return console.error(error);
    });
});

document.querySelector("#games").addEventListener("click", function () {
    fetch(path + 'games.json').then(function (response) {
        return response.json();
    }).then(function (data) {
        document.querySelector("#mainContainer").innerHTML = "";
    }).catch(function (error) {
        return console.error(error);
    });
});

document.querySelector("#graphic").addEventListener("click", function () {
    fetch(path + 'graphic.json').then(function (response) {
        return response.json();
    }).then(function (data) {
        document.querySelector("#mainContainer").innerHTML = "";
    }).catch(function (error) {
        return console.error(error);
    });
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Element = exports.Element = function () {
    function Element(what, where) {
        _classCallCheck(this, Element);

        this.what = what;
        this.where = where;
    }

    _createClass(Element, [{
        key: "createElement",
        value: function createElement() {
            var el = document.createElement(this.what);
            document.querySelector(this.where).append(el);
        }
    }]);

    return Element;
}();

var ElementId = exports.ElementId = function (_Element) {
    _inherits(ElementId, _Element);

    function ElementId(what, where, id) {
        _classCallCheck(this, ElementId);

        var _this = _possibleConstructorReturn(this, (ElementId.__proto__ || Object.getPrototypeOf(ElementId)).call(this, what, where));

        _this.id = id;
        return _this;
    }

    _createClass(ElementId, [{
        key: "createElement",
        value: function createElement() {
            var el = document.createElement(this.what);
            el.id = this.id;
            document.querySelector(this.where).append(el);
        }
    }]);

    return ElementId;
}(Element);

var ElementIdTxt = exports.ElementIdTxt = function (_ElementId) {
    _inherits(ElementIdTxt, _ElementId);

    function ElementIdTxt(what, where, id, text) {
        _classCallCheck(this, ElementIdTxt);

        var _this2 = _possibleConstructorReturn(this, (ElementIdTxt.__proto__ || Object.getPrototypeOf(ElementIdTxt)).call(this, what, where, id));

        _this2.text = text;
        return _this2;
    }

    _createClass(ElementIdTxt, [{
        key: "createElement",
        value: function createElement() {
            var el = document.createElement(this.what);
            el.id = this.id;
            el.innerHTML = this.text;
            document.querySelector(this.where).append(el);
        }
    }]);

    return ElementIdTxt;
}(ElementId);

/***/ })
/******/ ]);