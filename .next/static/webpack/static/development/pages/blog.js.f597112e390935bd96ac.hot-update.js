webpackHotUpdate("static/development/pages/blog.js",{

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
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers */ "./helpers/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_helpers__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _blogPosts_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blogPosts.scss */ "./components/blogPosts.scss");
/* harmony import */ var _blogPosts_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_blogPosts_scss__WEBPACK_IMPORTED_MODULE_5__);







var routeToPost = function routeToPost(data) {
  next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push(_helpers__WEBPACK_IMPORTED_MODULE_4___default()(data));
};

var BlogPostCard = function BlogPostCard(_ref) {
  var _ref$post = _ref.post,
      post = _ref$post === void 0 ? {} : _ref$post;
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
    },
    onClick: routeToPost
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "blog__posts__meta"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "date"
  }, moment__WEBPACK_IMPORTED_MODULE_2___default()(Object(prismic_dom__WEBPACK_IMPORTED_MODULE_1__["Date"])(post.last_publication_date)).format('MMM DD YYYY'))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "blog__posts__content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "blog__posts__title",
    onClick: routeToPost
  }, data.title.length ? data.title[0].text : ""), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "blog__posts__desc",
    onClick: routeToPost
  }, data.summary.length ? data.summary[0].text : "")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "read__more",
    onClick: routeToPost
  }, "Read more", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("spa", null, "\u2192")));
};

/* harmony default export */ __webpack_exports__["default"] = (BlogPostCard);

/***/ })

})
//# sourceMappingURL=blog.js.f597112e390935bd96ac.hot-update.js.map