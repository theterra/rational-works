webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./components/BlogPosts.js":
/*!*********************************!*\
  !*** ./components/BlogPosts.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BlogPostCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BlogPostCard */ "./components/BlogPostCard.js");
/* harmony import */ var _api___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/ */ "./api/index.js");


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var BlogPosts = function BlogPosts() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      posts = _useState2[0],
      postsHandler = _useState2[1]; //   const getPosts = async () => {
  //     return await getBlogPostsAPI({ pageSize: 5 });
  //   };


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    Object(_api___WEBPACK_IMPORTED_MODULE_2__["getBlogPostsAPI"])({
      pageSize: 100
    }).then(function (response) {
      postsHandler(response.results);
    });
  }, []);
  var extraCards = Math.ceil(3 - posts.length % 3);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "blog__posts"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "blog__posts--container"
  }, Array.isArray(posts) && posts.map(function (post, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BlogPostCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: index,
      post: post
    });
  }), extraCards > 0 && Array.from(Array(extraCards).fill("extraCards")).map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "blog__posts__item",
      key: "".concat(item).concat(index),
      style: {
        opacity: 0,
        height: 0
      }
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (BlogPosts);

/***/ })

})
//# sourceMappingURL=blog.js.b32032f923feac02916f.hot-update.js.map