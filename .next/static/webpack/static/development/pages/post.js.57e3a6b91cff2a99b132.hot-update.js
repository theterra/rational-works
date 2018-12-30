webpackHotUpdate("static/development/pages/post.js",{

/***/ "./components/MetaContent.js":
/*!***********************************!*\
  !*** ./components/MetaContent.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var MetaContent = function MetaContent(_ref) {
  var contentType = _ref.contentType,
      contentTitle = _ref.contentTitle,
      contentDescription = _ref.contentDescription,
      contentImage = _ref.contentImage,
      contentUrl = _ref.contentUrl;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState2 = _slicedToArray(_useState, 2),
      siteUrl = _useState2[0],
      siteUrlHandler = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    siteUrlHandler(window.location.host);
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Rational Works | ", contentTitle), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:url",
    content: contentUrl
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:type",
    content: contentType
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "twitter:card",
    content: contentDescription
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "twitter:site",
    content: siteUrl
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "twitter:creator",
    content: "sriram"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:title",
    content: contentTitle
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:description",
    content: contentDescription
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:image",
    content: contentImage
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (MetaContent);

/***/ })

})
//# sourceMappingURL=post.js.57e3a6b91cff2a99b132.hot-update.js.map