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
/***/ (function(module, exports) {

// Animation settings

var movementScale = 5;

// Animation functions

function cardAnimation(event) {
  var coords = relativeCoords(event, this);
  var image = this.querySelector('img');
  var xPercent = coords.x / this.offsetWidth;
  var yPercent = coords.y / this.offsetHeight;
  var x = calculatePosition(xPercent +30, coords.x, this);
  var y = calculatePosition(yPercent +50, coords.y, this);
  image.style.transform = 'translateY(' + y + 'px) translateX(' + x + 'px) scale3d(1.1, 1.1, 1.1)';
}

function cardReset() {
  var image = this.querySelector('img');
  image.style.transform = 'translateY(0) translateX(0) scale3d(1.0,1.0,1.0)';
}

// Helper functions

function calculatePosition(percent, coord, element) {
  var subPercent;
  var position;

  if (percent < 0.5) {
    subPercent = 1 - (coord / (element.offsetWidth / 2));
    position = (subPercent * -movementScale);
  } else {
    subPercent = (coord / (element.offsetWidth / 2));
    position = (subPercent * movementScale);
  }
  return position;
}

function relativeCoords(event, element) {
  var bounds = element.getBoundingClientRect();
  var x = event.clientX - bounds.left;
  var y = event.clientY - bounds.top;
  return {x: x, y: y};
}

window.onload = function() {
  const cards = document.getElementsByClassName('hover-3d');

  for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener('mousemove', cardAnimation);
    cards[i].addEventListener('mouseleave', cardReset);
  }
}


/***/ })
/******/ ]);
