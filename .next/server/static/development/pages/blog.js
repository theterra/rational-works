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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./api/index.js":
/*!**********************!*\
  !*** ./api/index.js ***!
  \**********************/
/*! exports provided: getBlogPostsAPI, getBlogPostAPI, getFeaturedBlogPostAPI, getConstitutionAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBlogPostsAPI", function() { return getBlogPostsAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBlogPostAPI", function() { return getBlogPostAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFeaturedBlogPostAPI", function() { return getFeaturedBlogPostAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConstitutionAPI", function() { return getConstitutionAPI; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prismic_javascript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prismic-javascript */ "prismic-javascript");
/* harmony import */ var prismic_javascript__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prismic_javascript__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./config.js");


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var getBlogPostsAPI =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(params) {
    var API, response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return prismic_javascript__WEBPACK_IMPORTED_MODULE_1___default.a.api(_config__WEBPACK_IMPORTED_MODULE_2__["PRISMIC_API_URL"]);

          case 3:
            API = _context.sent;
            _context.next = 6;
            return API.query(prismic_javascript__WEBPACK_IMPORTED_MODULE_1___default.a.Predicates.at("document.type", "scopeblog"), _objectSpread({
              orderings: "[my.scopeblog.date desc]"
            }, params));

          case 6:
            response = _context.sent;
            return _context.abrupt("return", response);

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", _context.t0);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 10]]);
  }));

  return function getBlogPostsAPI(_x) {
    return _ref.apply(this, arguments);
  };
}();

var getFeaturedBlogPostAPI =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(params) {
    var API, response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return prismic_javascript__WEBPACK_IMPORTED_MODULE_1___default.a.api(_config__WEBPACK_IMPORTED_MODULE_2__["PRISMIC_API_URL"]);

          case 3:
            API = _context2.sent;
            _context2.next = 6;
            return API.query(prismic_javascript__WEBPACK_IMPORTED_MODULE_1___default.a.Predicates.at("document.tags", ["featured"]), _objectSpread({
              orderings: "[my.scopeblog.date desc]"
            }, params));

          case 6:
            response = _context2.sent;
            return _context2.abrupt("return", response);

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", _context2.t0);

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this, [[0, 10]]);
  }));

  return function getFeaturedBlogPostAPI(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

var getBlogPostAPI =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(slug) {
    var API, response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return prismic_javascript__WEBPACK_IMPORTED_MODULE_1___default.a.api(_config__WEBPACK_IMPORTED_MODULE_2__["PRISMIC_API_URL"]);

          case 3:
            API = _context3.sent;
            _context3.next = 6;
            return API.query(prismic_javascript__WEBPACK_IMPORTED_MODULE_1___default.a.Predicates.at("my.scopeblog.uid", slug));

          case 6:
            response = _context3.sent;
            return _context3.abrupt("return", response.results);

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](0);
            console.error(_context3.t0);
            return _context3.abrupt("return", _context3.t0);

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this, [[0, 10]]);
  }));

  return function getBlogPostAPI(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

var getConstitutionAPI =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(params) {
    var API, response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return prismic_javascript__WEBPACK_IMPORTED_MODULE_1___default.a.api(_config__WEBPACK_IMPORTED_MODULE_2__["PRISMIC_API_URL"]);

          case 3:
            API = _context4.sent;
            _context4.next = 6;
            return API.query(prismic_javascript__WEBPACK_IMPORTED_MODULE_1___default.a.Predicates.at("document.type", "consititution"), _objectSpread({}, params));

          case 6:
            response = _context4.sent;
            return _context4.abrupt("return", response);

          case 10:
            _context4.prev = 10;
            _context4.t0 = _context4["catch"](0);
            return _context4.abrupt("return", _context4.t0);

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this, [[0, 10]]);
  }));

  return function getConstitutionAPI(_x4) {
    return _ref4.apply(this, arguments);
  };
}();



/***/ }),

/***/ "./components/BlogPostCard.js":
/*!************************************!*\
  !*** ./components/BlogPostCard.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prismic_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prismic-dom */ "prismic-dom");
/* harmony import */ var prismic_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prismic_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers */ "./helpers/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_helpers__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _blogPosts_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blogPosts.scss */ "./components/blogPosts.scss");
/* harmony import */ var _blogPosts_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_blogPosts_scss__WEBPACK_IMPORTED_MODULE_5__);







var routeToPost = function routeToPost(data) {
  return next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push(Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["linkResolver"])(data));
};

var BlogPostCard = function BlogPostCard(_ref) {
  var _ref$post = _ref.post,
      post = _ref$post === void 0 ? {} : _ref$post;
  var data = post.data || {};
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
    onClick: function onClick() {
      return routeToPost(post);
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "blog__posts__meta"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "date"
  }, moment__WEBPACK_IMPORTED_MODULE_2___default()(Object(prismic_dom__WEBPACK_IMPORTED_MODULE_1__["Date"])(post.last_publication_date)).format("MMM DD YYYY"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "blog__posts__content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "blog__posts__title",
    onClick: function onClick() {
      return routeToPost(post);
    }
  }, data.title.length ? data.title[0].text : ""), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "blog__posts__desc",
    onClick: function onClick() {
      return routeToPost(post);
    }
  }, data.summary.length ? data.summary[0].text : "")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    onClick: function onClick() {
      return routeToPost(post);
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "read__more"
  }, "Read more"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u2192")));
};

/* harmony default export */ __webpack_exports__["default"] = (BlogPostCard);

/***/ }),

/***/ "./components/BlogPosts.js":
/*!*********************************!*\
  !*** ./components/BlogPosts.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
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
      pageSize: 5
    }).then(function (response) {
      postsHandler(response.results);
    });
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "blog__posts"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "blog__posts--container"
  }, Array.isArray(posts) && posts.map(function (post, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BlogPostCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: index,
      post: post
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (BlogPosts);

/***/ }),

/***/ "./components/FeaturedPost.js":
/*!************************************!*\
  !*** ./components/FeaturedPost.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
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
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "read__more"
  }, "Read more"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u2192")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "blog__feature__image-box"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "blog__feature__image",
    style: {
      backgroundImage: "url(/static/assets/images/mask.jpg)"
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (FeaturedPost);

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
  }, "Blog")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "Faqs"))), props.children);
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

/***/ "./components/blogPosts.scss":
/*!***********************************!*\
  !*** ./components/blogPosts.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {



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

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! exports provided: PRISMIC_API_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRISMIC_API_URL", function() { return PRISMIC_API_URL; });
var PRISMIC_API_URL = 'https://scope-test.prismic.io/api/v2';

/***/ }),

/***/ "./helpers/index.js":
/*!**************************!*\
  !*** ./helpers/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

function linkResolver(doc) {
  if (doc.type === "scopeblog") {
    return "/blog/".concat(doc.uid);
  }

  return "/";
}

module.exports = {
  linkResolver: linkResolver
};

/***/ }),

/***/ "./pages/blog.js":
/*!***********************!*\
  !*** ./pages/blog.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _blog_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blog.scss */ "./pages/blog.scss");
/* harmony import */ var _blog_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_blog_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api */ "./api/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers */ "./helpers/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_helpers__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_BlogPostCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/BlogPostCard */ "./components/BlogPostCard.js");
/* harmony import */ var _components_FeaturedPost__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/FeaturedPost */ "./components/FeaturedPost.js");
/* harmony import */ var _components_BlogPosts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/BlogPosts */ "./components/BlogPosts.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }











var Index = function Index(_ref) {
  var _ref$featuredPost = _ref.featuredPost,
      featuredPost = _ref$featuredPost === void 0 ? {} : _ref$featuredPost;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_10__["default"], {
    paddingTop: '4rem'
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "blog"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_FeaturedPost__WEBPACK_IMPORTED_MODULE_8__["default"], {
    featuredPost: featuredPost
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_BlogPosts__WEBPACK_IMPORTED_MODULE_9__["default"], null)));
};

Index.getInitialProps =
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var response;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(_api__WEBPACK_IMPORTED_MODULE_5__["getFeaturedBlogPostAPI"])({
            pageSize: 1
          });

        case 2:
          response = _context.sent;
          console.log(response);
          return _context.abrupt("return", {
            featuredPost: response.results[0]
          });

        case 5:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
}));
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./pages/blog.scss":
/*!*************************!*\
  !*** ./pages/blog.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 4:
/*!*****************************!*\
  !*** multi ./pages/blog.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/blog.js */"./pages/blog.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

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

/***/ "prismic-dom":
/*!******************************!*\
  !*** external "prismic-dom" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prismic-dom");

/***/ }),

/***/ "prismic-javascript":
/*!*************************************!*\
  !*** external "prismic-javascript" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prismic-javascript");

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
//# sourceMappingURL=blog.js.map