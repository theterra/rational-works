webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./components/FeaturedPost.js":
/*!************************************!*\
  !*** ./components/FeaturedPost.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers */ "./helpers/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_helpers__WEBPACK_IMPORTED_MODULE_2__);




var FeaturedPost = function FeaturedPost(_ref) {
  var featuredPost = _ref.featuredPost;
  var data = featuredPost.data;
  console.log(JSON.stringify(data));
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "blog__feature"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "blog__feature--container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "blog__feature__content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "blog__feature__title"
  }, data.title.length ? data.title[0].text : ""), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "blog__feature__desc"
  }, data.summary.length ? data.summary[0].text : ""), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["linkResolver"])(featuredPost)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "read__more"
  }, "Read more", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u2192")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "blog__feature__image-box"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "blog__feature__image",
    style: {
      backgroundImage: "url(/static/assets/images/mask.jpg)"
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (FeaturedPost);

/***/ })

})
//# sourceMappingURL=blog.js.d132953c5d279a2bd764.hot-update.js.map