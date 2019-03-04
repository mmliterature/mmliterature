webpackHotUpdate("static\\development\\pages\\about.js",{

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
  }, "Non-fiction"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Nav"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Nav"].Link, {
    eventKey: 2,
    href: "/",
    style: {
      paddingRight: 20
    },
    className: "menu-link"
  }, "AAA"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/about",
    className: "menu-link nav-link",
    eventKey: 2
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
  }, ".scrolling-navbar.jsx-1378284321{padding-top:1.5rem;padding-bottom:1.5rem;}.menu-link.jsx-1378284321{color:#17191d !important;font:bold 14px/14px 'Roboto',sans-serif;-webkit-text-decoration:none;text-decoration:none;}.navContainer.jsx-1378284321{margin:0px auto;padding:0;border:0;width:calc(100% - 60px);height:100%;max-width:1740px;position:relative;display:block;}.btn.jsx-1378284321{cursor:pointer;color:rgb(255,255,255);display:inline-block;font-family:'Roboto',sans-serif;font-size:12px;font-weight:bold;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;line-height:14px;position:relative;text-align:center;text-transform:uppercase;white-space:nowrap;max-width:100%;background:#ff3366;border-width:2px;border-style:solid;border-color:#ff3366;border-image:initial;border-radius:100em;outline:0px;overflow:hidden;padding:13px 32px 11px;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:all 0.2s ease 0s;transition:all 0.2s ease 0s;}.btn.jsx-1378284321:hover{color:#e81e61;background:#ffffff;border-color:#e81e61;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2h3ZS55ZWVcXERvY3VtZW50c1xcZ2l0XFxzeXdcXG1tbFxcY29tcG9uZW50c1xcSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThIZ0IsQUFHNEIsQUFJTSxBQUtULEFBVUQsQUEwQkQsY0FDSyxDQTFCTSxDQVZmLEdBVFksTUFJbUIsQ0FNaEMsT0FvQ1ksRUFuQ0csR0FTSCxHQW5CdkIsYUE4Q0EsS0FuQ2MsQUFTcUIsTUFoQlosTUFRSixpQkFDQyxHQVFILGVBUEQsQUFRRyxTQWpCbkIsS0FVQSxHQVFxQiw2RkFDRixpQkFDQyxrQkFDQSxrQkFDTyx5QkFDTixtQkFDSixlQUNJLG1CQUNGLGlCQUNFLG1CQUNFLHFCQUNBLHFCQUNELG9CQUNSLFlBQ0ksZ0JBQ08sdUJBQ0Ysa0RBQ08sZ0VBQzlCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcc2h3ZS55ZWVcXERvY3VtZW50c1xcZ2l0XFxzeXdcXG1tbFxcY29tcG9uZW50c1xcSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBOUHJvZ3Jlc3MgZnJvbSAnbnByb2dyZXNzJztcclxuXHJcblJvdXRlci5vblJvdXRlQ2hhbmdlU3RhcnQgPSAoKSA9PiB7XHJcbiAgTlByb2dyZXNzLnN0YXJ0KCk7XHJcbn07XHJcblJvdXRlci5vblJvdXRlQ2hhbmdlQ29tcGxldGUgPSAoKSA9PiB7XHJcbiAgTlByb2dyZXNzLmRvbmUoKTtcclxufTtcclxuUm91dGVyLm9uUm91dGVDaGFuZ2VFcnJvciA9ICgpID0+IHtcclxuICBOUHJvZ3Jlc3MuZG9uZSgpO1xyXG59O1xyXG5cclxuTmF2Lkxpbmsub25Sb3V0ZUNoYW5nZVN0YXJ0ID0gKCkgPT4ge1xyXG4gIE5Qcm9ncmVzcy5zdGFydCgpO1xyXG59O1xyXG5OYXYuTGluay5vblJvdXRlQ2hhbmdlQ29tcGxldGUgPSAoKSA9PiB7XHJcbiAgTlByb2dyZXNzLmRvbmUoKTtcclxufTtcclxuTmF2Lkxpbmsub25Sb3V0ZUNoYW5nZUVycm9yID0gKCkgPT4ge1xyXG4gIE5Qcm9ncmVzcy5kb25lKCk7XHJcbn07XHJcblxyXG5pbXBvcnQge1xyXG4gIEltYWdlLFxyXG4gIE5hdmJhcixcclxuICBOYXYsXHJcbiAgTmF2RHJvcGRvd24sXHJcbiAgRm9ybSxcclxuICBGb3JtQ29udHJvbCxcclxuICBCdXR0b24sXHJcbiAgQ29udGFpbmVyLFxyXG4gIENvbCxcclxuICBSb3dcclxufSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPVwibmF2Q29udGFpbmVyXCI+XHJcbiAgICA8TmF2YmFyIGV4cGFuZD1cImxnXCIgY2xhc3NOYW1lPVwic2Nyb2xsaW5nLW5hdmJhclwiPlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxOYXZiYXIuQnJhbmQgaHJlZj1cIi9cIj5cclxuICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL3JlYWN0LWJvb3RzdHJhcC5naXRodWIuaW8vbG9nby5zdmdcIlxyXG4gICAgICAgICAgICB3aWR0aD1cIjMwXCJcclxuICAgICAgICAgICAgaGVpZ2h0PVwiMzBcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJkLWlubGluZS1ibG9jayBhbGlnbi10b3BcIlxyXG4gICAgICAgICAgICBhbHQ9XCJSZWFjdCBCb290c3RyYXAgbG9nb1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgeycgTU1MaXRlcmF0dXJlJ31cclxuICAgICAgICA8L05hdmJhci5CcmFuZD5cclxuICAgICAgICA8TmF2YmFyLlRvZ2dsZSBhcmlhLWNvbnRyb2xzPVwiYmFzaWMtbmF2YmFyLW5hdlwiIC8+XHJcbiAgICAgICAgPE5hdmJhci5Db2xsYXBzZSBpZD1cImJhc2ljLW5hdmJhci1uYXZcIj5cclxuICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPlxyXG4gICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJtZW51LWxpbmtcIj5cclxuICAgICAgICAgICAgICBIb21lXHJcbiAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiL2Fib3V0XCIgY2xhc3NOYW1lPVwibWVudS1saW5rXCI+XHJcbiAgICAgICAgICAgICAgQWJvdXRcclxuICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgPE5hdkRyb3Bkb3duXHJcbiAgICAgICAgICAgICAgdGl0bGU9XCJDYXRlZ29yaWVzXCJcclxuICAgICAgICAgICAgICBpZD1cImJhc2ljLW5hdi1kcm9wZG93blwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWVudS1saW5rXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGhyZWY9XCIvY2F0ZWdvcnlcIj5Ob3ZlbHM8L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gaHJlZj1cIi9jYXRlZ29yeVwiPkZpY3Rpb248L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gaHJlZj1cIi9jYXRlZ29yeVwiPk5vbi1maWN0aW9uPC9OYXZEcm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgIHsvKiA8TmF2RHJvcGRvd24uRGl2aWRlciAvPlxyXG4gICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gaHJlZj1cIiNhY3Rpb24vMy40XCI+U2VwYXJhdGVkIGxpbms8L05hdkRyb3Bkb3duLkl0ZW0+ICovfVxyXG4gICAgICAgICAgICA8L05hdkRyb3Bkb3duPlxyXG4gICAgICAgICAgPC9OYXY+XHJcblxyXG4gICAgICAgICAgPE5hdj5cclxuICAgICAgICAgICAgPE5hdi5MaW5rXHJcbiAgICAgICAgICAgICAgZXZlbnRLZXk9ezJ9XHJcbiAgICAgICAgICAgICAgaHJlZj1cIi9cIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmdSaWdodDogMjAgfX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZW51LWxpbmtcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQUFBXHJcbiAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIiBjbGFzc05hbWU9XCJtZW51LWxpbmsgbmF2LWxpbmtcIiBldmVudEtleT17Mn0+XHJcbiAgICAgICAgICAgICAgPGE+U2lnbiBJbjwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgey8qIDxOYXZiYXIuQnJhbmQgaHJlZj1cIi9cIj5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgc3JjPVwiL3N0YXRpYy91c2Vycy9hdmFkYS5wbmdcIlxyXG4gICAgICAgICAgICB3aWR0aD1cIjMwXCJcclxuICAgICAgICAgICAgaGVpZ2h0PVwiMzBcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJkLWlubGluZS1ibG9jayBhbGlnbi10b3BcIlxyXG4gICAgICAgICAgICBhbHQ9XCJVc2VyIEF2YWRhIEltYWdlXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICBcclxuICAgICAgICA8L05hdmJhci5CcmFuZD4gKi99XHJcbiAgICAgICAgICAgIHsvKiA8TmF2YmFyLlRleHQ+XHJcbiAgICAgICAgICAgIFNpZ25lZCBpbiBhczogXHJcbiAgICAgICAgPC9OYXZiYXIuVGV4dD5cclxuICAgICAgICA8TmF2RHJvcGRvd24gdGl0bGU9XCJTaHdlIFllZVwiIGlkPVwiYmFzaWMtbmF2LWRyb3Bkb3duXCI+XHJcbiAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBocmVmPVwiI2FjdGlvbi8zLjFcIj48Rm9udEF3ZXNvbWVJY29uIGljb249XCJrZXlcIiBjb2xvcj1cIiM2REI2NUJcIiAvPnsnICd9QWN0aW9uPC9OYXZEcm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gaHJlZj1cIiNhY3Rpb24vMy4yXCI+QW5vdGhlciBhY3Rpb248L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBocmVmPVwiI2FjdGlvbi8zLjNcIj5Tb21ldGhpbmc8L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICA8TmF2RHJvcGRvd24uRGl2aWRlciAvPlxyXG4gICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gaHJlZj1cIiNhY3Rpb24vMy40XCI+U2VwYXJhdGVkIGxpbms8L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgPC9OYXZEcm9wZG93bj4gKi99XHJcbiAgICAgICAgICA8L05hdj5cclxuICAgICAgICAgIHsvKiA8Rm9ybSBpbmxpbmU+XHJcbiAgICAgICAgPEZvcm1Db250cm9sIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIiBjbGFzc05hbWU9XCJtci1zbS0yXCIgLz5cclxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lLXN1Y2Nlc3NcIj5TZWFyY2g8L0J1dHRvbj5cclxuICAgICAgPC9Gb3JtPiAqL31cclxuICAgICAgICAgIDxOYXZiYXIuVGV4dD5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICA8YSAvPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L05hdmJhci5UZXh0PlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgPEJ1dHRvbiBzaXplPVwibWRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXNpZ251cFwiPlxyXG4gICAgICAgICAgICAgIFNJR04gVVAgRlJFRVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L05hdmJhci5Db2xsYXBzZT5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L05hdmJhcj5cclxuICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgLnNjcm9sbGluZy1uYXZiYXIge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxLjVyZW07XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcclxuICAgICAgfVxyXG4gICAgICAubWVudS1saW5rIHtcclxuICAgICAgICBjb2xvcjogIzE3MTkxZCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQ6IGJvbGQgMTRweC8xNHB4ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgfVxyXG4gICAgICAubmF2Q29udGFpbmVyIHtcclxuICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA2MHB4KTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxNzQwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcbiAgICAgIC5idG4ge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZjMzNjY7XHJcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICBib3JkZXItY29sb3I6ICNmZjMzNjY7XHJcbiAgICAgICAgYm9yZGVyLWltYWdlOiBpbml0aWFsO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMGVtO1xyXG4gICAgICAgIG91dGxpbmU6IDBweDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHBhZGRpbmc6IDEzcHggMzJweCAxMXB4O1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlIDBzO1xyXG4gICAgICB9XHJcbiAgICAgIC5idG46aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAjZTgxZTYxO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjZTgxZTYxO1xyXG4gICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\shwe.yee\\Documents\\git\\syw\\mml\\components\\Header.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=about.js.5bac0f89cccaa82e63fd.hot-update.js.map