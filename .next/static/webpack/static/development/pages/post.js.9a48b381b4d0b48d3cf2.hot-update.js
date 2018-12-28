webpackHotUpdate("static/development/pages/post.js",{

/***/ "./components/BlogPostCard.js":
/*!************************************!*\
  !*** ./components/BlogPostCard.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prismic_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prismic-dom */ "./node_modules/prismic-dom/dist/prismic-dom.min.js");
/* harmony import */ var prismic_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prismic_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blogPosts_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blogPosts.scss */ "./components/blogPosts.scss");
/* harmony import */ var _blogPosts_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_blogPosts_scss__WEBPACK_IMPORTED_MODULE_2__);




var BlogPostCard = function BlogPostCard(_ref) {
  var _ref$post = _ref.post,
      post = _ref$post === void 0 ? {} : _ref$post;
  console.log(post);
  var data = post.data;
  var primaryImage = data && data.body.find(function (item) {
    return item.type === "image";
  });
  var imageUrl = primaryImage ? primaryImage.url : "/static/assets/images/no-image.png";
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "blog__posts__item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "blog__posts__image-box"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "blog__posts__image",
    style: {
      backgroundImage: "url(".concat(imageUrl, ")")
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "blog__posts__meta"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "date"
  }, Object(prismic_dom__WEBPACK_IMPORTED_MODULE_1__["Date"])(post.last_publication_date))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "blog__posts__content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "blog__posts__title"
  }, data.title.length ? data.title[0].text : ""), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "blog__posts__desc"
  }, data.summary.length ? data.summary[0].text : "")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "read__more"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (BlogPostCard);

/***/ })

})
//# sourceMappingURL=post.js.9a48b381b4d0b48d3cf2.hot-update.js.map