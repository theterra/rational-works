webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_PillarCards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PillarCards */ "./components/PillarCards.js");
/* harmony import */ var _components_MetaContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/MetaContent */ "./components/MetaContent.js");
/* harmony import */ var _components_common_getContentUrl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/common/getContentUrl */ "./components/common/getContentUrl.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.scss */ "./pages/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_6__);


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var Index = function Index() {
  var _getContentUrl = Object(_components_common_getContentUrl__WEBPACK_IMPORTED_MODULE_5__["getContentUrl"])(),
      _getContentUrl2 = _slicedToArray(_getContentUrl, 1),
      contentUrl = _getContentUrl2[0];

  var scrollToView = function scrollToView(id) {
    document.querySelector(id).scrollIntoView({
      behavior: "smooth"
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    circle: true,
    paddingTop: "7rem",
    showVerticalTitle: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MetaContent__WEBPACK_IMPORTED_MODULE_4__["default"], {
    contentType: "article",
    contentTitle: "Be a rationalist",
    contentDescription: "1% people run the world while other 99% follows it. We help you to be in that 1%.",
    contentImage: "/static/assets/images/logo.png",
    contentUrl: contentUrl
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "header"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header__content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header__content--left"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "header__content__text header__content__text--large"
  }, "1% people run the world while other 99% follows it.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "highlight"
  }, "We help you to be in that 1%")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "header__content__text header__content__text--small"
  }, "We are an Organisation that helps people change their perception towards how to lead life. We define purpose of life. We explain people how the Universe Works. We show people how the goals and dreams are manifested"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "btn btn--next",
    onClick: function onClick() {
      return scrollToView("#about");
    }
  }, "Learn more", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u2192")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header__content--right"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "show__images"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "show__images__item"
  }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "section-left"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content",
    id: "about"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content__desc"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content__item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "content__item--head"
  }, "How do you change their Perception?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "content__item--sub"
  }, "By making them familiar with Rationalism.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content__item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "content__item--head"
  }, "What is ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "highlight"
  }, "Rationalism"), "?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "content__item--sub"
  }, "Rationalism is a way of life. To be a Rationalist You must follow our Constitution. Our Constitution Comprises of 13 Independent Pillars."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content__bloat"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "content__bloat__list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "content__bloat__list__item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    href: "/constitution"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "highlight__hover"
  }, "Atheism"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "content__bloat__list__item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    href: "/constitution"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "highlight__hover"
  }, "Law of Attraction"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "content__bloat__list__item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    href: "/constitution"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "highlight__hover"
  }, "Positivity"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "content__bloat__list__item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    href: "/constitution"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "highlight__hover"
  }, "Objectivism"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "content__bloat__list__item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    href: "/constitution"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "highlight__hover"
  }, "Happiness"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "content__bloat__list__item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    href: "/constitution"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "highlight__hover"
  }, "Discipline"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "content__bloat__list__item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    href: "/constitution"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "highlight__hover"
  }, "Fearless"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "content__bloat__list__item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    href: "/constitution"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "highlight__hover"
  }, "Social"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "content__bloat__list__item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    href: "/constitution"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "highlight__hover"
  }, "Behaviour"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "content__bloat__list__item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    href: "/constitution"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "highlight__hover"
  }, "Healthy"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "content__bloat__list__item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    href: "/constitution"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "highlight__hover"
  }, "Determination"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "content__bloat__list__item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    href: "/constitution"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "highlight__hover"
  }, "Service"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "content__bloat__list__item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    href: "/constitution"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "highlight__hover"
  }, "Freedom"))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "section-principles"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "principles"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PillarCards__WEBPACK_IMPORTED_MODULE_3__["default"], null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "section-quotes"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "quotes"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "quotes__item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "quotes__item__text"
  }, "Strength does not come from physical capacity It comes from an indomitable will")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "quotes__item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "quotes__item__text"
  }, "It takes no time for the universe to manifest")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "quotes__item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "quotes__item__text"
  }, "Falling down is an accident. Staying down is a choice.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "quotes__item",
    style: {
      opacity: 0,
      minHeight: 0
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "quotes__item__text"
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.993325cef5a9adce3201.hot-update.js.map