webpackHotUpdate("static/development/pages/post.js",{

/***/ "./pages/post.js":
/*!***********************!*\
  !*** ./pages/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BlogPost; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prismic_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prismic-dom */ "./node_modules/prismic-dom/dist/prismic-dom.min.js");
/* harmony import */ var prismic_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prismic_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api */ "./api/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers */ "./helpers/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_helpers__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helpers_htmlSerializer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/htmlSerializer */ "./helpers/htmlSerializer.js");
/* harmony import */ var _components_BlogPostCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/BlogPostCard */ "./components/BlogPostCard.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _post_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./post.scss */ "./pages/post.scss");
/* harmony import */ var _post_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_post_scss__WEBPACK_IMPORTED_MODULE_8__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var BlogPost =
/*#__PURE__*/
function (_Component) {
  _inherits(BlogPost, _Component);

  function BlogPost() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, BlogPost);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(BlogPost)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "shareHandler", function () {
      if (FB) {
        FB.ui({
          method: "share",
          display: "popup",
          href: "https://sour-zebra-65.localtunnel.me/blog/hello-test"
        }, function (response) {});
      }
    });

    return _this;
  }

  _createClass(BlogPost, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          suggestedPosts = _this$props.suggestedPosts,
          postData = _this$props.postData;
      var post = postData.data;
      return (//   <article>
        //     <h1>{post.title.length ? post.title[0].text : ""}</h1>
        //     {/* Here we pass our rich text field to Prismics RichText renderer, along with our linkResolver */}
        //     {RichText.render(post.body, linkResolver)}
        //   </article>
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_7__["default"], {
          paddingTop: "4rem",
          hideNavigation: true
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
          className: "article"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "article--container"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
          className: "article__title"
        }, post.title.length ? post.title[0].text : ""), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          className: "article__summary"
        }, post.summary.length ? post.summary[0].text : ""), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "article__content"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          dangerouslySetInnerHTML: {
            __html: prismic_dom__WEBPACK_IMPORTED_MODULE_2___default.a.RichText.asHtml(post.body, _helpers__WEBPACK_IMPORTED_MODULE_4___default.a, _helpers_htmlSerializer__WEBPACK_IMPORTED_MODULE_5__["default"])
          }
        })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
          className: "article__related__posts"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
          className: "blog__posts"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "blog__posts--container"
        }, Array.isArray(suggestedPosts) && suggestedPosts.map(function (post, index) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_BlogPostCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
            key: index,
            post: post
          });
        })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("aside", {
          className: "article__share"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "article__share--wrapper"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "article__share__list"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
          className: "share__button",
          onClick: this.shareHandler
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
          viewBox: "0 0 30 30",
          width: "30px",
          height: "30px"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
          d: "M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h10v-9h-3v-3h3v-1.611C16,9.339,17.486,8,20.021,8 c1.214,0,1.856,0.09,2.16,0.131V11h-1.729C19.376,11,19,11.568,19,12.718V14h3.154l-0.428,3H19v9h5c1.105,0,2-0.895,2-2V6 C26,4.895,25.104,4,24,4z"
        })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
          className: "share__button",
          onClick: this.shareHandler
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
          viewBox: "0 0 30 30",
          width: "30px",
          height: "30px"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
          d: "M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"
        }))))))))
      );
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
        var slug, response, suggestedPosts;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // we get the slug of the post so that we can
                // query the API with it
                slug = context.query.slug;
                _context.next = 3;
                return Object(_api__WEBPACK_IMPORTED_MODULE_3__["getBlogPostAPI"])(slug);

              case 3:
                response = _context.sent;
                _context.next = 6;
                return Object(_api__WEBPACK_IMPORTED_MODULE_3__["getBlogPostsAPI"])({
                  pageSize: 3
                });

              case 6:
                suggestedPosts = _context.sent;
                return _context.abrupt("return", {
                  postData: response[0],
                  suggestedPosts: suggestedPosts.results
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return BlogPost;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);


    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/post")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=post.js.e79c5c75f659d48ccd60.hot-update.js.map