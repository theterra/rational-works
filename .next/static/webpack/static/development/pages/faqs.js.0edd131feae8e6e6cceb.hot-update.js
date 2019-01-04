webpackHotUpdate("static/development/pages/faqs.js",{

/***/ "./pages/faqs.js":
/*!***********************!*\
  !*** ./pages/faqs.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_MetaContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MetaContent */ "./components/MetaContent.js");
/* harmony import */ var _components_common_getContentUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/common/getContentUrl */ "./components/common/getContentUrl.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api */ "./api/index.js");
/* harmony import */ var _faqs_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./faqs.scss */ "./pages/faqs.scss");
/* harmony import */ var _faqs_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_faqs_scss__WEBPACK_IMPORTED_MODULE_6__);



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var Faqs = function Faqs(_ref) {
  var data = _ref.data;

  var _getContentUrl = Object(_components_common_getContentUrl__WEBPACK_IMPORTED_MODULE_4__["getContentUrl"])(),
      _getContentUrl2 = _slicedToArray(_getContentUrl, 1),
      contentUrl = _getContentUrl2[0];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      tab = _useState2[0],
      tabHandler = _useState2[1];

  var openHandler = function openHandler(idx) {
    tabHandler(tab == idx ? null : idx);
  };

  var questionList = data.questions_list || [];
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    circle: true,
    paddingTop: "7rem"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_MetaContent__WEBPACK_IMPORTED_MODULE_3__["default"], {
    contentType: "article",
    contentTitle: "Be a rationalist",
    contentDescription: "1% people run the world while other 99% follows it. We help you to be in that 1%.",
    contentImage: "/static/assets/images/logo.png",
    contentUrl: contentUrl
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "section__questions"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "questions"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "questions__main-title"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    width: "40",
    height: "40",
    viewBox: "0 0 28 28",
    className: "questions__icon"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M11 6c-4.875 0-9 2.75-9 6 0 1.719 1.156 3.375 3.156 4.531l1.516 0.875-0.547 1.313c0.328-0.187 0.656-0.391 0.969-0.609l0.688-0.484 0.828 0.156c0.781 0.141 1.578 0.219 2.391 0.219 4.875 0 9-2.75 9-6s-4.125-6-9-6zM11 4c6.078 0 11 3.578 11 8s-4.922 8-11 8c-0.953 0-1.875-0.094-2.75-0.25-1.297 0.922-2.766 1.594-4.344 2-0.422 0.109-0.875 0.187-1.344 0.25h-0.047c-0.234 0-0.453-0.187-0.5-0.453v0c-0.063-0.297 0.141-0.484 0.313-0.688 0.609-0.688 1.297-1.297 1.828-2.594-2.531-1.469-4.156-3.734-4.156-6.266 0-4.422 4.922-8 11-8zM23.844 22.266c0.531 1.297 1.219 1.906 1.828 2.594 0.172 0.203 0.375 0.391 0.313 0.688v0c-0.063 0.281-0.297 0.484-0.547 0.453-0.469-0.063-0.922-0.141-1.344-0.25-1.578-0.406-3.047-1.078-4.344-2-0.875 0.156-1.797 0.25-2.75 0.25-2.828 0-5.422-0.781-7.375-2.063 0.453 0.031 0.922 0.063 1.375 0.063 3.359 0 6.531-0.969 8.953-2.719 2.609-1.906 4.047-4.484 4.047-7.281 0-0.812-0.125-1.609-0.359-2.375 2.641 1.453 4.359 3.766 4.359 6.375 0 2.547-1.625 4.797-4.156 6.266z"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Frequently Asked Questions")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "questions__list"
  }, Array.isArray(questionList) && questionList.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(QuestionCard, {
      item: item,
      tab: tab,
      index: index,
      openHandler: openHandler,
      key: index
    });
  })))));
};

var QuestionCard = function QuestionCard(_ref2) {
  var item = _ref2.item,
      tab = _ref2.tab,
      openHandler = _ref2.openHandler,
      index = _ref2.index;
  var question = item.question.length ? item.question[0].text : "";
  var answer = item.answer.length ? item.answer[0].text : "";
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "questions__list__item",
    onClick: function onClick() {
      return openHandler(index);
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "questions__list__item--question"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, question), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Icon, {
    isActive: tab === index
  })), tab === index && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "questions__list__item--answer"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, answer)));
};

var Icon = function Icon(_ref3) {
  var isActive = _ref3.isActive;
  return isActive ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"
  })) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fill: "#010101",
    d: "M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"
  }));
};

Faqs.getInitialProps =
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
          return Object(_api__WEBPACK_IMPORTED_MODULE_5__["getFaqsAPI"])();

        case 2:
          response = _context.sent;
          console.log(response);
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
/* harmony default export */ __webpack_exports__["default"] = (Faqs);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/faqs")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=faqs.js.0edd131feae8e6e6cceb.hot-update.js.map