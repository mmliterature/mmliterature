webpackHotUpdate("static\\development\\pages\\category.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");






next_router__WEBPACK_IMPORTED_MODULE_3___default.a.onRouteChangeStart = function () {
  nprogress__WEBPACK_IMPORTED_MODULE_4___default.a.start();
};

next_router__WEBPACK_IMPORTED_MODULE_3___default.a.onRouteChangeComplete = function () {
  nprogress__WEBPACK_IMPORTED_MODULE_4___default.a.done();
};

next_router__WEBPACK_IMPORTED_MODULE_3___default.a.onRouteChangeError = function () {
  nprogress__WEBPACK_IMPORTED_MODULE_4___default.a.done();
};

react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Nav"].Link.onRouteChangeStart = function () {
  nprogress__WEBPACK_IMPORTED_MODULE_4___default.a.start();
};

react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Nav"].Link.onRouteChangeComplete = function () {
  nprogress__WEBPACK_IMPORTED_MODULE_4___default.a.done();
};

react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Nav"].Link.onRouteChangeError = function () {
  nprogress__WEBPACK_IMPORTED_MODULE_4___default.a.done();
};




var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1378284321" + " " + "navContainer"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Navbar"], {
    expand: "lg",
    className: "scrolling-navbar"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Container"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Navbar"].Brand, {
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Image"], {
    src: "https://react-bootstrap.github.io/logo.svg",
    width: "30",
    height: "30",
    className: "d-inline-block align-top",
    alt: "React Bootstrap logo"
  }), ' MMLiterature'), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Navbar"].Toggle, {
    "aria-controls": "basic-navbar-nav"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Navbar"].Collapse, {
    id: "basic-navbar-nav"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Nav"], {
    className: "mr-auto"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Nav"].Link, {
    href: "/",
    className: "menu-link"
  }, "Home"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Nav"].Link, {
    href: "/about",
    className: "menu-link"
  }, "About"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NavDropdown"], {
    title: "Categories",
    id: "basic-nav-dropdown",
    className: "menu-link"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NavDropdown"].Item, {
    href: "/category"
  }, "Novels"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NavDropdown"].Item, {
    href: "/category"
  }, "Fiction"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NavDropdown"].Item, {
    href: "/category"
  }, "Non-fiction"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Nav"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/about",
    className: "menu-link nav-link"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-1378284321"
  }, "Sign In"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Navbar"].Text, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-1378284321"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    size: "md",
    className: "btn btn-signup"
  }, "SIGN UP FREE"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1378284321"
  }, ".scrolling-navbar.jsx-1378284321{padding-top:1.5rem;padding-bottom:1.5rem;}.menu-link.jsx-1378284321{color:#17191d !important;font:bold 14px/14px 'Roboto',sans-serif;-webkit-text-decoration:none;text-decoration:none;}.navContainer.jsx-1378284321{margin:0px auto;padding:0;border:0;width:calc(100% - 60px);height:100%;max-width:1740px;position:relative;display:block;}.btn.jsx-1378284321{cursor:pointer;color:rgb(255,255,255);display:inline-block;font-family:'Roboto',sans-serif;font-size:12px;font-weight:bold;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;line-height:14px;position:relative;text-align:center;text-transform:uppercase;white-space:nowrap;max-width:100%;background:#ff3366;border-width:2px;border-style:solid;border-color:#ff3366;border-image:initial;border-radius:100em;outline:0px;overflow:hidden;padding:13px 32px 11px;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:all 0.2s ease 0s;transition:all 0.2s ease 0s;}.btn.jsx-1378284321:hover{color:#e81e61;background:#ffffff;border-color:#e81e61;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2h3ZS55ZWVcXERvY3VtZW50c1xcZ2l0XFxzeXdcXG1tbFxcY29tcG9uZW50c1xcSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRIZ0IsQUFHNEIsQUFJTSxBQUtULEFBVUQsQUEwQkQsY0FDSyxDQTFCTSxDQVZmLEdBVFksTUFJbUIsQ0FNaEMsT0FvQ1ksRUFuQ0csR0FTSCxHQW5CdkIsYUE4Q0EsS0FuQ2MsQUFTcUIsTUFoQlosTUFRSixpQkFDQyxHQVFILGVBUEQsQUFRRyxTQWpCbkIsS0FVQSxHQVFxQiw2RkFDRixpQkFDQyxrQkFDQSxrQkFDTyx5QkFDTixtQkFDSixlQUNJLG1CQUNGLGlCQUNFLG1CQUNFLHFCQUNBLHFCQUNELG9CQUNSLFlBQ0ksZ0JBQ08sdUJBQ0Ysa0RBQ08sZ0VBQzlCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcc2h3ZS55ZWVcXERvY3VtZW50c1xcZ2l0XFxzeXdcXG1tbFxcY29tcG9uZW50c1xcSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBOUHJvZ3Jlc3MgZnJvbSAnbnByb2dyZXNzJztcclxuXHJcblJvdXRlci5vblJvdXRlQ2hhbmdlU3RhcnQgPSAoKSA9PiB7XHJcbiAgTlByb2dyZXNzLnN0YXJ0KCk7XHJcbn07XHJcblJvdXRlci5vblJvdXRlQ2hhbmdlQ29tcGxldGUgPSAoKSA9PiB7XHJcbiAgTlByb2dyZXNzLmRvbmUoKTtcclxufTtcclxuUm91dGVyLm9uUm91dGVDaGFuZ2VFcnJvciA9ICgpID0+IHtcclxuICBOUHJvZ3Jlc3MuZG9uZSgpO1xyXG59O1xyXG5cclxuTmF2Lkxpbmsub25Sb3V0ZUNoYW5nZVN0YXJ0ID0gKCkgPT4ge1xyXG4gIE5Qcm9ncmVzcy5zdGFydCgpO1xyXG59O1xyXG5OYXYuTGluay5vblJvdXRlQ2hhbmdlQ29tcGxldGUgPSAoKSA9PiB7XHJcbiAgTlByb2dyZXNzLmRvbmUoKTtcclxufTtcclxuTmF2Lkxpbmsub25Sb3V0ZUNoYW5nZUVycm9yID0gKCkgPT4ge1xyXG4gIE5Qcm9ncmVzcy5kb25lKCk7XHJcbn07XHJcblxyXG5pbXBvcnQge1xyXG4gIEltYWdlLFxyXG4gIE5hdmJhcixcclxuICBOYXYsXHJcbiAgTmF2RHJvcGRvd24sXHJcbiAgRm9ybSxcclxuICBGb3JtQ29udHJvbCxcclxuICBCdXR0b24sXHJcbiAgQ29udGFpbmVyLFxyXG4gIENvbCxcclxuICBSb3dcclxufSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPVwibmF2Q29udGFpbmVyXCI+XHJcbiAgICA8TmF2YmFyIGV4cGFuZD1cImxnXCIgY2xhc3NOYW1lPVwic2Nyb2xsaW5nLW5hdmJhclwiPlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxOYXZiYXIuQnJhbmQgaHJlZj1cIi9cIj5cclxuICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL3JlYWN0LWJvb3RzdHJhcC5naXRodWIuaW8vbG9nby5zdmdcIlxyXG4gICAgICAgICAgICB3aWR0aD1cIjMwXCJcclxuICAgICAgICAgICAgaGVpZ2h0PVwiMzBcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJkLWlubGluZS1ibG9jayBhbGlnbi10b3BcIlxyXG4gICAgICAgICAgICBhbHQ9XCJSZWFjdCBCb290c3RyYXAgbG9nb1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgeycgTU1MaXRlcmF0dXJlJ31cclxuICAgICAgICA8L05hdmJhci5CcmFuZD5cclxuICAgICAgICA8TmF2YmFyLlRvZ2dsZSBhcmlhLWNvbnRyb2xzPVwiYmFzaWMtbmF2YmFyLW5hdlwiIC8+XHJcbiAgICAgICAgPE5hdmJhci5Db2xsYXBzZSBpZD1cImJhc2ljLW5hdmJhci1uYXZcIj5cclxuICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPlxyXG4gICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJtZW51LWxpbmtcIj5cclxuICAgICAgICAgICAgICBIb21lXHJcbiAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiL2Fib3V0XCIgY2xhc3NOYW1lPVwibWVudS1saW5rXCI+XHJcbiAgICAgICAgICAgICAgQWJvdXRcclxuICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgPE5hdkRyb3Bkb3duXHJcbiAgICAgICAgICAgICAgdGl0bGU9XCJDYXRlZ29yaWVzXCJcclxuICAgICAgICAgICAgICBpZD1cImJhc2ljLW5hdi1kcm9wZG93blwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWVudS1saW5rXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGhyZWY9XCIvY2F0ZWdvcnlcIj5Ob3ZlbHM8L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gaHJlZj1cIi9jYXRlZ29yeVwiPkZpY3Rpb248L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gaHJlZj1cIi9jYXRlZ29yeVwiPk5vbi1maWN0aW9uPC9OYXZEcm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgIHsvKiA8TmF2RHJvcGRvd24uRGl2aWRlciAvPlxyXG4gICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gaHJlZj1cIiNhY3Rpb24vMy40XCI+U2VwYXJhdGVkIGxpbms8L05hdkRyb3Bkb3duLkl0ZW0+ICovfVxyXG4gICAgICAgICAgICA8L05hdkRyb3Bkb3duPlxyXG4gICAgICAgICAgPC9OYXY+XHJcblxyXG4gICAgICAgICAgPE5hdj5cclxuICAgICAgICAgICAgey8qIDxOYXYuTGlua1xyXG4gICAgICAgICAgICAgIGV2ZW50S2V5PXsyfVxyXG4gICAgICAgICAgICAgIGhyZWY9XCIvXCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nUmlnaHQ6IDIwIH19XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWVudS1saW5rXCJcclxuICAgICAgICAgICAgPiAqL31cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiIGNsYXNzTmFtZT1cIm1lbnUtbGluayBuYXYtbGlua1wiPlxyXG4gICAgICAgICAgICAgIDxhPlNpZ24gSW48L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgey8qIDwvTmF2Lkxpbms+ICovfVxyXG4gICAgICAgICAgICB7LyogPE5hdmJhci5CcmFuZCBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBzcmM9XCIvc3RhdGljL3VzZXJzL2F2YWRhLnBuZ1wiXHJcbiAgICAgICAgICAgIHdpZHRoPVwiMzBcIlxyXG4gICAgICAgICAgICBoZWlnaHQ9XCIzMFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtaW5saW5lLWJsb2NrIGFsaWduLXRvcFwiXHJcbiAgICAgICAgICAgIGFsdD1cIlVzZXIgQXZhZGEgSW1hZ2VcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIFxyXG4gICAgICAgIDwvTmF2YmFyLkJyYW5kPiAqL31cclxuICAgICAgICAgICAgey8qIDxOYXZiYXIuVGV4dD5cclxuICAgICAgICAgICAgU2lnbmVkIGluIGFzOiBcclxuICAgICAgICA8L05hdmJhci5UZXh0PlxyXG4gICAgICAgIDxOYXZEcm9wZG93biB0aXRsZT1cIlNod2UgWWVlXCIgaWQ9XCJiYXNpYy1uYXYtZHJvcGRvd25cIj5cclxuICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGhyZWY9XCIjYWN0aW9uLzMuMVwiPjxGb250QXdlc29tZUljb24gaWNvbj1cImtleVwiIGNvbG9yPVwiIzZEQjY1QlwiIC8+eycgJ31BY3Rpb248L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBocmVmPVwiI2FjdGlvbi8zLjJcIj5Bbm90aGVyIGFjdGlvbjwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGhyZWY9XCIjYWN0aW9uLzMuM1wiPlNvbWV0aGluZzwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgIDxOYXZEcm9wZG93bi5EaXZpZGVyIC8+XHJcbiAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBocmVmPVwiI2FjdGlvbi8zLjRcIj5TZXBhcmF0ZWQgbGluazwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICA8L05hdkRyb3Bkb3duPiAqL31cclxuICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgICAgey8qIDxGb3JtIGlubGluZT5cclxuICAgICAgICA8Rm9ybUNvbnRyb2wgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiIGNsYXNzTmFtZT1cIm1yLXNtLTJcIiAvPlxyXG4gICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmUtc3VjY2Vzc1wiPlNlYXJjaDwvQnV0dG9uPlxyXG4gICAgICA8L0Zvcm0+ICovfVxyXG4gICAgICAgICAgPE5hdmJhci5UZXh0PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgIDxhIC8+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvTmF2YmFyLlRleHQ+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHNpemU9XCJtZFwiIGNsYXNzTmFtZT1cImJ0biBidG4tc2lnbnVwXCI+XHJcbiAgICAgICAgICAgICAgU0lHTiBVUCBGUkVFXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvTmF2YmFyLkNvbGxhcHNlPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvTmF2YmFyPlxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAuc2Nyb2xsaW5nLW5hdmJhciB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEuNXJlbTtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMS41cmVtO1xyXG4gICAgICB9XHJcbiAgICAgIC5tZW51LWxpbmsge1xyXG4gICAgICAgIGNvbG9yOiAjMTcxOTFkICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udDogYm9sZCAxNHB4LzE0cHggJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICB9XHJcbiAgICAgIC5uYXZDb250YWluZXIge1xyXG4gICAgICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDYwcHgpO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDE3NDBweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuICAgICAgLmJ0biB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmMzM2NjtcclxuICAgICAgICBib3JkZXItd2lkdGg6IDJweDtcclxuICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogI2ZmMzM2NjtcclxuICAgICAgICBib3JkZXItaW1hZ2U6IGluaXRpYWw7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwZW07XHJcbiAgICAgICAgb3V0bGluZTogMHB4O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgcGFkZGluZzogMTNweCAzMnB4IDExcHg7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UgMHM7XHJcbiAgICAgIH1cclxuICAgICAgLmJ0bjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICNlODFlNjE7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICBib3JkZXItY29sb3I6ICNlODFlNjE7XHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIl19 */\n/*@ sourceURL=C:\\Users\\shwe.yee\\Documents\\git\\syw\\mml\\components\\Header.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=category.js.e4f26f5398f040213d16.hot-update.js.map