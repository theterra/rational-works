webpackHotUpdate("static/development/pages/post.js",{

/***/ "./helpers/htmlSerializer.js":
/*!***********************************!*\
  !*** ./helpers/htmlSerializer.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {var PrismicDOM = __webpack_require__(/*! prismic-dom */ "./node_modules/prismic-dom/dist/prismic-dom.min.js");

var Elements = PrismicDOM.RichText.Elements;

var htmlSerializer = function htmlSerializer(type, element, content, children) {
  switch (type) {
    case Elements.heading1:
      return "<h1>".concat(children.join(''), "</h1>");

    case Elements.heading2:
      return "<h2>".concat(children.join(''), "</h2>");

    case Elements.heading3:
      return "<h3>".concat(children.join(''), "</h3>");

    case Elements.heading4:
      return "<h4>".concat(children.join(''), "</h4>");

    case Elements.heading5:
      return "<h5>".concat(children.join(''), "</h5>");

    case Elements.heading6:
      return "<h6>".concat(children.join(''), "</h6>");

    case Elements.paragraph:
      return "<p>".concat(children.join(''), "</p>");

    case Elements.preformatted:
      return "<pre>".concat(children.join(''), "</pre>");

    case Elements.strong:
      return "<strong>".concat(children.join(''), "</strong>");

    case Elements.em:
      return "<em>".concat(children.join(''), "</em>");

    case Elements.listItem:
      return "<li>".concat(children.join(''), "</li>");

    case Elements.oListItem:
      return "<li>".concat(children.join(''), "</li>");

    case Elements.list:
      return "<ul>".concat(children.join(''), "</ul>");

    case Elements.oList:
      return "<ol>".concat(children.join(''), "</ol>");

    case Elements.image:
      var linkUrl = element.linkTo ? PrismicDOM.Link.url(element.linkTo, module.exports.linkResolver) : null;
      var linkTarget = element.linkTo && element.linkTo.target ? "target=\"".concat(element.linkTo.target, "\" rel=\"noopener\"") : '';
      var wrapperClassList = [element.label || '', 'block-img'];
      var img = "<img src=\"".concat(element.url, "\" alt=\"").concat(element.alt || '', "\" copyright=\"").concat(element.copyright || '', "\">");
      return "\n        <p class=\"".concat(wrapperClassList.join(' '), "\">\n          ").concat(linkUrl ? "<a ".concat(linkTarget, " href=\"").concat(linkUrl, "\">").concat(img, "</a>") : img, "\n        </p>\n      ");

    case Elements.embed:
      return "\n        <div data-oembed=\"".concat(element.oembed.embed_url, "\"\n          data-oembed-type=\"").concat(element.oembed.type, "\"\n          data-oembed-provider=\"").concat(element.oembed.provider_name, "\"\n        >\n          ").concat(element.oembed.html, "\n        </div>\n      ");

    case Elements.hyperlink:
      var target = element.data.target ? "target=\"".concat(element.data.target, "\" rel=\"noopener\"") : '';
      var linkUrl = PrismicDOM.Link.url(element.data, linkResolver);
      return "<a ".concat(target, " href=\"").concat(linkUrl, "\">").concat(children.join(''), "</a>");

    case Elements.label:
      var label = element.data.label ? " class=\"".concat(element.data.label, "\"") : '';
      return "<span ".concat(label, ">").concat(children.join(''), "</span>");

    case Elements.span:
      return content ? content.replace(/\n/g, "<br />") : '';

    default:
      return null;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (htmlSerializer);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=post.js.cdf326dcd3e2cd5b3d99.hot-update.js.map