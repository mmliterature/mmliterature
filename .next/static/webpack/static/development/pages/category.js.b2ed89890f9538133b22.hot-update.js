webpackHotUpdate("static\\development\\pages\\category.js",{

/***/ "./components/CategoryList.js":
/*!************************************!*\
  !*** ./components/CategoryList.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");



function _templateObject8() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  body {\n    color: green;\n    font-family: \"Roboto\", sans-serif;\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  .bar {\n    border-bottom: 10px solid ", ";\n    display: grid;\n    grid-template-columns: auto 1fr;\n    justify-content: space-between;\n    align-items: stretch;\n    @media (max-width: 1300px) {\n      grid-template-columns: auto 1fr;\n      justify-content: center;\n    }\n  }\n  .sub-bar {\n    display: grid;\n    grid-template-columns: 1fr;\n    border-bottom: 1px soild ", ";\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-size: 4rem;\n  margin-left: 2rem;\n  position: relative;\n  z-index: 2;\n  transform: skew(-7deg);\n  a {\n    padding: 0.5rem;\n    background: ", ";\n    color: white;\n    text-transform: uppercase;\n    text-decoration: none;\n  }\n  @media (max-width: 1300px) {\n    margin: 0;\n    text-align: center;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  max-width: ", ";\n  margin: 0 auto;\n  padding: 2rem;\n  background-color: ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background: green;\n  color: black;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background: red;\n  font-size: ", ";\n  span {\n    font-size: 100px;\n  }\n  .txt {\n    color: pink;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-size: 1.5em;\n  text-align: center;\n  color: palevioletred;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: 4em;\n  background: papayawhip;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var theme = {
  red: '#ff0000',
  black: '#393939',
  grey: '#3a3a3a',
  lightgrey: '#e1e1e1',
  offWhite: '#ededed',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)'
};
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].section(_templateObject());
var Title = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].h1(_templateObject2());
var MyButton = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].button(_templateObject3(), function (props) {
  return props.huge ? '100px' : '50px';
});
var StyledPage = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject4());
var Inner = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject5(), function (props) {
  return props.theme.maxWidth;
}, function (props) {
  return props.theme.lightgrey;
});
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].h1(_templateObject6(), function (props) {
  return props.theme.red;
});
var StyledHeader = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].header(_templateObject7(), function (props) {
  return props.theme.black;
}, function (props) {
  return props.theme.lightgrey;
});
var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["createGlobalStyle"])(_templateObject8());

var CategoryList = function CategoryList() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_4__["ThemeProvider"], {
    theme: theme
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Wrapper, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Title, null, "Hello World!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MyButton, {
    huge: true
  }, "Click Me", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "000"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "txt"
  }, "111")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MyButton, null, "Click Me", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "000"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "txt"
  }, "111")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledPage, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Inner, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledHeader, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "bar"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Logo, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", null, "Sick Fits")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "sub-bar"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Search")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (CategoryList);

/***/ })

})
//# sourceMappingURL=category.js.b2ed89890f9538133b22.hot-update.js.map