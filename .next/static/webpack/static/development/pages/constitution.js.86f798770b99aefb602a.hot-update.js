webpackHotUpdate("static/development/pages/constitution.js",{

/***/ "./pages/constitution.js":
/*!*******************************!*\
  !*** ./pages/constitution.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prismic_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prismic-dom */ "./node_modules/prismic-dom/dist/prismic-dom.min.js");
/* harmony import */ var prismic_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prismic_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api */ "./api/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers */ "./helpers/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_helpers__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _constitution_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constitution.scss */ "./pages/constitution.scss");
/* harmony import */ var _constitution_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_constitution_scss__WEBPACK_IMPORTED_MODULE_6__);



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






var Elements = prismic_dom__WEBPACK_IMPORTED_MODULE_2___default.a.RichText.Elements;

var htmlSerializer = function htmlSerializer(type, element, content, children) {
  switch (type) {
    case Elements.paragraph:
      return "<p class=\"const__list__paragraph\">".concat(children.join(""), "</p>");

    case Elements.strong:
      return "<strong>".concat(children.join(""), "</strong>");

    case Elements.em:
      return "<em>".concat(children.join(""), "</em>");
  }
};

var Constitution = function Constitution(_ref) {
  var data = _ref.data;
  var pillars = data && data.pillars;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    circle: true,
    paddingTop: "4rem",
    showVerticalTitle: true
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "const__title"
  }, "Constitution"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "const"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "const__list"
  }, Array.isArray(pillars) && pillars.map(function (item, index) {
    console.log("<<<<<<<<>>>>>>>>>", item);
    var content = prismic_dom__WEBPACK_IMPORTED_MODULE_2___default.a.RichText.asHtml(item.pillar_content, _helpers__WEBPACK_IMPORTED_MODULE_5__["linkResolver"], htmlSerializer);
    var title = item.pillar_title.length ? item.pillar_title[0].text : "";
    var imageUrl = item.pillar_image ? item.pillar_image.url : "/static/assets/images/no-image.jpg";
    var formattedContent = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "const__list__content"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
      className: "const__list__title"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "highlight__hover"
    }, title.toLowerCase())), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      dangerouslySetInnerHTML: {
        __html: content
      }
    }));
    var formattedImage = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "const__list__image-box"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "const__list__image",
      style: {
        backgroundImage: "url(".concat(imageUrl, ")")
      }
    }));
    var isTextRight = index % 2 == 0;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "const__list__item",
      key: index
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "const__list__item--".concat(isTextRight ? 60 : 40, " ").concat(isTextRight ? "" : "const__list__item--image-order")
    }, isTextRight ? formattedContent : formattedImage), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "const__list__item--".concat(!isTextRight ? 60 : 40, " ").concat(žisTextRight ? "" : "const__list__item--image-order")
    }, !isTextRight ? formattedContent : formattedImage));
  })))));
};

Constitution.getInitialProps =
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
          return Object(_api__WEBPACK_IMPORTED_MODULE_4__["getConstitutionAPI"])({});

        case 2:
          response = _context.sent;
          console.log(">>>>>>", JSON.stringify(response.results[0].data));
          return _context.abrupt("return", {
            data: response.results[0].data
          });

        case 5:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
}));
/* harmony default export */ __webpack_exports__["default"] = (Constitution);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/constitution")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=constitution.js.86f798770b99aefb602a.hot-update.js.map