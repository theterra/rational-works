webpackHotUpdate("static/development/pages/index.js",{

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
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "nav--left"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "nav__logo",
    src: "/static/assets/images/logo.png"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "nav--right"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/blog"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "btn"
  }, "Blog")))), props.children);
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
//# sourceMappingURL=index.js.eb0f39f733b111a5e780.hot-update.js.map