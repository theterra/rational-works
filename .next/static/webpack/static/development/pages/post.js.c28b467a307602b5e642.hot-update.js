webpackHotUpdate("static/development/pages/post.js",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");
/* harmony import */ var _layout_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout.scss */ "./components/layout.scss");
/* harmony import */ var _layout_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_layout_scss__WEBPACK_IMPORTED_MODULE_3__);





var Layout = function Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: props.circle ? "circle-wrapper" : ""
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    hideNavigation: props.hideNavigation,
    shadowLine: props.shadowLine
  }), props.showVerticalTitle && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "vertical"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "vertical__title"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Rational Works"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      paddingTop: props.paddingTop,
      overflow: 'hidden'
    },
    id: "wrapper"
  }, props.children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=post.js.c28b467a307602b5e642.hot-update.js.map