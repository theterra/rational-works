module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/ActiveLink.js":
/*!**********************************!*\
  !*** ./components/ActiveLink.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);




var ActiveLink = function ActiveLink(_ref) {
  var children = _ref.children,
      router = _ref.router,
      href = _ref.href;
  var style = classnames__WEBPACK_IMPORTED_MODULE_2___default()('btn', {
    'btn--active-link': router.pathname === href
  });

  var handleClick = function handleClick(e) {
    e.preventDefault();
    router.push(href);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: href,
    onClick: handleClick,
    className: style
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(ActiveLink));

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _footer_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.scss */ "./components/footer.scss");
/* harmony import */ var _footer_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_footer_scss__WEBPACK_IMPORTED_MODULE_1__);



var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    className: "footer"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer__content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "footer__title"
  }, "#RATIONAL WORKS"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer__navigation"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null))));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ActiveLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ActiveLink */ "./components/ActiveLink.js");
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header.scss */ "./components/header.scss");
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_header_scss__WEBPACK_IMPORTED_MODULE_4__);


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var Header = function Header(props) {
  var navRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  var _hideNavBar = hideNavBar(navRef, props.hideNavigation),
      _hideNavBar2 = _slicedToArray(_hideNavBar, 2),
      hideNav = _hideNavBar2[0],
      fixNav = _hideNavBar2[1];

  var navStyle = classnames__WEBPACK_IMPORTED_MODULE_2___default()("nav", {
    hidden: hideNav,
    nav__fix: fixNav
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: navStyle,
    ref: navRef
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "nav__logo",
    src: "/static/assets/images/logo.png"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "nav__links"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ActiveLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: "/blog"
  }, "Blog")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "nav--right"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "nav__share__links"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav__share__links__item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "share__button",
    href: "https://www.facebook.com/RationalWorks/",
    target: "__blank"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    viewBox: "0 0 30 30",
    width: "30px",
    height: "30px"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h10v-9h-3v-3h3v-1.611C16,9.339,17.486,8,20.021,8 c1.214,0,1.856,0.09,2.16,0.131V11h-1.729C19.376,11,19,11.568,19,12.718V14h3.154l-0.428,3H19v9h5c1.105,0,2-0.895,2-2V6 C26,4.895,25.104,4,24,4z"
  }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav__share__links__item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "share__button",
    href: "https://twitter.com/RationalWorks",
    target: "__blank"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    viewBox: "0 0 30 30",
    width: "30px",
    height: "30px"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"
  })))))))), props.children);
};

var hideNavBar = function hideNavBar(ref, hideNavigation) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      hideNav = _useState2[0],
      navHandler = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      fixNav = _useState4[0],
      fixNavHandler = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var prevTop = window.pageYOffset;
    var scrollDelta = 5;
    var scrollOffset = 50;
    var scroll = false;
    console.log(window.location.pathname);

    var listener = function listener() {
      var currentTop = window.pageYOffset;

      if (!scroll && hideNavigation) {
        scroll = true;
        requestAnimationFrame(function () {
          if (prevTop - currentTop > scrollDelta) {
            navHandler(false);
          } else if (currentTop - prevTop > scrollDelta && currentTop > scrollOffset) {
            navHandler(true);
          }

          prevTop = currentTop;
          scroll = false;
        });
      }

      if (currentTop > ref.current.offsetHeight) {
        fixNavHandler(true);
        document.querySelector("#wrapper").style.marginTop = -ref.current.offsetHeight;
      } else {
        fixNavHandler(false);
        document.querySelector("#wrapper").style.marginTop = 0;
      }
    };

    window.addEventListener("scroll", listener);
    return function () {
      return window.removeEventListener("scroll", listener);
    };
  }, []);
  return [hideNav, fixNav];
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");
/* harmony import */ var _layout_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout.scss */ "./components/layout.scss");
/* harmony import */ var _layout_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_layout_scss__WEBPACK_IMPORTED_MODULE_3__);





var Layout = function Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: props.circle ? "circle-wrapper" : ""
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    hideNavigation: props.hideNavigation
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      paddingTop: props.paddingTop
    },
    id: "wrapper"
  }, props.children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/footer.scss":
/*!********************************!*\
  !*** ./components/footer.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/header.scss":
/*!********************************!*\
  !*** ./components/header.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/layout.scss":
/*!********************************!*\
  !*** ./components/layout.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.scss */ "./pages/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_3__);





var Index = function Index() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    circle: true,
    paddingTop: "7rem"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "header"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header__content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header__content--left"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "header__content__text header__content__text--large"
  }, "1% people run the world while other 99% follows it.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "highlight"
  }, "We help you to be in that 1%")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "header__content__text header__content__text--small"
  }, "We are an Organisation that helps people change their perception towards how to lead life. We define purpose of life. We explain people how the Universe Works. We show people how the goals and dreams are manifested"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "btn btn--next"
  }, "Learn more", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u2192")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header__content--right"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "section-left"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content__desc"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content__item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "content__item--head"
  }, "How do you change their Perception?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "content__item--sub"
  }, "By making them familiar with Rationalism.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content__item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "content__item--head"
  }, "What is ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "highlight"
  }, "Rationalism"), "?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "content__item--sub"
  }, "Rationalism is a way of life. To be a Rationalist You must follow our Constitution. Our Constitution Comprises of 13 Independent Pillars."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content__bloat"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "content__bloat__list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "content__bloat__list__item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/constitution"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "highlight__hover"
  }, "Atheism"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "content__bloat__list__item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/constitution"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "highlight__hover"
  }, "Law of Attraction"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "content__bloat__list__item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/constitution"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "highlight__hover"
  }, "Positivity"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "content__bloat__list__item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/constitution"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "highlight__hover"
  }, "Objectivism"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "content__bloat__list__item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/constitution"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "highlight__hover"
  }, "Happiness"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "content__bloat__list__item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/constitution"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "highlight__hover"
  }, "Discipline"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "content__bloat__list__item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/constitution"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "highlight__hover"
  }, "Fearless"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "content__bloat__list__item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/constitution"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "highlight__hover"
  }, "Social"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "content__bloat__list__item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/constitution"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "highlight__hover"
  }, "Behaviour"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "content__bloat__list__item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/constitution"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "highlight__hover"
  }, "Healthy"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "content__bloat__list__item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/constitution"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "highlight__hover"
  }, "Determination"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "content__bloat__list__item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/constitution"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "highlight__hover"
  }, "Service"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "content__bloat__list__item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/constitution"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "highlight__hover"
  }, "Freedom")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center"
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/constitution"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "read__more"
  }, "Learn more")), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u2192"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "section-quotes"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "quotes"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "quotes__item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "quotes__item__text"
  }, "Strength does not come from physical capacity It comes from an indomitable will")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "quotes__item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "quotes__item__text"
  }, "It takes no time for the universe to manifest")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "quotes__item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "quotes__item__text"
  }, "Falling down is an accident. Staying down is a choice.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "quotes__item",
    style: {
      opacity: 0
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "quotes__item__text"
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./pages/index.scss":
/*!**************************!*\
  !*** ./pages/index.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map