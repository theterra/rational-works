webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header.scss */ "./components/header.scss");
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_header_scss__WEBPACK_IMPORTED_MODULE_3__);


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
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/blog"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "btn"
  }, "Blog"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "nav--right"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "share__button"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    viewBox: "0 0 30 30",
    width: "30px",
    height: "30px"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h10v-9h-3v-3h3v-1.611C16,9.339,17.486,8,20.021,8 c1.214,0,1.856,0.09,2.16,0.131V11h-1.729C19.376,11,19,11.568,19,12.718V14h3.154l-0.428,3H19v9h5c1.105,0,2-0.895,2-2V6 C26,4.895,25.104,4,24,4z"
  }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "share__button"
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

/***/ })

})
//# sourceMappingURL=blog.js.bc0e30fd230771399bd5.hot-update.js.map