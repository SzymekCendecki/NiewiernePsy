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


var allP = document.querySelectorAll("p");

var idBtn = ["aboutBtn", "gamesBtn", "programsBtn", "streamBtn"];
var id = ["about", "games", "programs", "stream"];

var polishBTN = ["o nas", "gry", "programy", "stream"];

var polishTXT = ["Nazwa studia wzięła się od pewnej historii, z próbą wynajęcia pokoju w Warszawie. Krótko rzecz ujmując, założycielowi studia pokój nie został wynajęty, gdyż... problemem był ateizm owego założyciela, a to było problematyczne dla osoby chcącej wynająć pokój (historia jak najbardziej autentyczna). Data założenia tego nieoficjalnego studia to... No właśnie, z tym jest drobny kłopot, gdyż delikatnie zaginęła ta data w mrokach historii. Dla uproszczenia trzeba będzie założyć, iż oficjalnie powstało tego samego co utworzenie fanpage na fejsie (13 czerwca 2016). A nieoficjalnie to musiało być to trochę wcześniej (tak się domyślam po pierwszych postach). Od początku w planach studia było tworzenie gier pod przeglądarkę oraz nauka programowania (html, js, css). 25 stycznia studio rozpoczęło także streamowanie gier. Na pierwszy ogień poszły trzy gry: Eve Online, Neverwinter Nights oraz World of Tanks. Grafik streamów w zakładce GRAFIK.", "Piekło z gwiazd", "Piracki rejs", "Uwzględniono tylko grywalne wersje gier.", "Biblioteka SCSS", "Polityczny Atlas Świata 1985", "Gry streamowane są na twitch.tv, pod nickiem Krupik Hopsas. Na tym kanale znajduje się również aktualny harmonogram streamów."];

var englishBTN = ["about us", "games", "programs", "stream"];

var englishTXT = ["The name of the studio comes from a story about an attempt to rent a room in Warsaw. In short, the room was not rented to the founder of the studio because ... the atheism of that founder was a problem, and it was problematic for a person who wanted to rent a room (the most authentic story). The date of establishing this unofficial studio is ... Exactly, there is a slight problem with that, as this date has been slightly lost in the darkness of history. For the sake of simplicity, it will be necessary to assume that 'officially' was the same as the creation of the fanpage on Facebook (June 13, 2016). And unofficially, it had to be a little earlier (I guess after the first posts). From the beginning, the studio's plans were to create browser games and learn programming (html, js, css). On January 25, the studio also began streaming games. Three games went first: Eve Online, Neverwinter Nights and World of Tanks. The stream schedule in the 'GRAFIK' tab.", "Hell of the stars", "Pirate cruise", "Only playable versions of the games are included.", "SCSS library.", "Political World Atlas '85", "Current stream schedule:", "friday: Eve Online: start 7pm", "saturday: Civilisation V: start 7pm", "sundy: Eve Online 5pm - 8pm", "The games are streamed on twitch.tv under the nickname Krupik Hopsas. This channel also has the current stream schedule."];

for (var i = 0; i < polishTXT.length; i++) {
    allP[i].innerHTML = polishTXT[i];
}

document.querySelector("#aboutBtn").addEventListener("click", function () {

    for (var _i = 0; _i < id.length; _i++) {

        if (document.querySelector("#" + id[_i]).getAttribute('class') === "displayBlock") {
            document.querySelector("#" + id[_i]).classList.remove('displayBlock');
            document.querySelector("#" + id[_i]).classList.add('displayNone');
        }
    }

    document.querySelector("#about").classList.remove("displayNone");
    document.querySelector("#about").classList.add("displayBlock");
});

document.querySelector("#gamesBtn").addEventListener("click", function () {

    for (var _i2 = 0; _i2 < id.length; _i2++) {

        if (document.querySelector("#" + id[_i2]).getAttribute('class') === "displayBlock") {
            document.querySelector("#" + id[_i2]).classList.remove('displayBlock');
            document.querySelector("#" + id[_i2]).classList.add('displayNone');
        }
    }

    document.querySelector("#games").classList.remove("displayNone");
    document.querySelector("#games").classList.add("displayBlock");
});

document.querySelector("#programsBtn").addEventListener("click", function () {
    for (var _i3 = 0; _i3 < id.length; _i3++) {

        if (document.querySelector("#" + id[_i3]).getAttribute('class') === "displayBlock") {
            document.querySelector("#" + id[_i3]).classList.remove('displayBlock');
            document.querySelector("#" + id[_i3]).classList.add('displayNone');
        }
    }

    document.querySelector("#programs").classList.remove("displayNone");
    document.querySelector("#programs").classList.add("displayBlock");
});

document.querySelector("#streamBtn").addEventListener("click", function () {
    for (var _i4 = 0; _i4 < id.length; _i4++) {

        if (document.querySelector("#" + id[_i4]).getAttribute('class') === "displayBlock") {
            document.querySelector("#" + id[_i4]).classList.remove('displayBlock');
            document.querySelector("#" + id[_i4]).classList.add('displayNone');
        }
    }

    document.querySelector("#stream").classList.remove("displayNone");
    document.querySelector("#stream").classList.add("displayBlock");
});

/***/ })
/******/ ]);