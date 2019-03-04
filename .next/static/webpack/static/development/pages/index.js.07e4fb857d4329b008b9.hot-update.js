webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Header/Header.js":
/*!*************************************!*\
  !*** ./components/Header/Header.js ***!
  \*************************************/
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
/* harmony import */ var _HeaderStyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HeaderStyle */ "./components/Header/HeaderStyle.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");









next_router__WEBPACK_IMPORTED_MODULE_3___default.a.onRouteChangeStart = function () {
  nprogress__WEBPACK_IMPORTED_MODULE_4___default.a.start();
};

next_router__WEBPACK_IMPORTED_MODULE_3___default.a.onRouteChangeComplete = function () {
  nprogress__WEBPACK_IMPORTED_MODULE_4___default.a.done();
};

next_router__WEBPACK_IMPORTED_MODULE_3___default.a.onRouteChangeError = function () {
  nprogress__WEBPACK_IMPORTED_MODULE_4___default.a.done();
};

var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_HeaderStyle__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Navbar"], {
    expand: "lg",
    className: "scrolling-navbar"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Navbar"].Brand, {
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Image"], {
    src: "/static/logo/logo.png",
    width: "150px",
    height: "auto",
    className: "d-inline-block align-top",
    alt: "Myanmar Literature"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Navbar"].Toggle, {
    "aria-controls": "basic-navbar-nav"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Navbar"].Collapse, {
    id: "basic-navbar-nav"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Nav"], {
    className: "mr-auto"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-2085888330" + " " + "menu-link"
  }, "Home")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/about"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-2085888330" + " " + "menu-link"
  }, "About")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NavDropdown"], {
    title: "Categories",
    id: "basic-nav-dropdown",
    className: "menu-link"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NavDropdown"].Item, {
    href: "/category"
  }, "Novels"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NavDropdown"].Item, {
    href: "/category"
  }, "Fiction"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NavDropdown"].Item, {
    href: "/category"
  }, "Non-fiction"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Nav"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Nav"].Link, {
    eventKey: 2,
    href: "/",
    style: {
      paddingRight: 20
    },
    className: "menu-link"
  }, "AAA"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/about",
    className: "menu-link nav-link",
    eventKey: 2,
    style: {
      paddingRight: 20
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-2085888330"
  }, "Sign In"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Navbar"].Text, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-2085888330"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    size: "md",
    className: "btn btn-signup"
  }, "SIGN UP FREE"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2085888330"
  }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2h3ZS55ZWVcXERvY3VtZW50c1xcZ2l0XFxzeXdcXG1tbFxcY29tcG9uZW50c1xcSGVhZGVyXFxIZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEhnQiIsImZpbGUiOiJDOlxcVXNlcnNcXHNod2UueWVlXFxEb2N1bWVudHNcXGdpdFxcc3l3XFxtbWxcXGNvbXBvbmVudHNcXEhlYWRlclxcSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBOUHJvZ3Jlc3MgZnJvbSAnbnByb2dyZXNzJztcclxuXHJcbmltcG9ydCBIZWFkZXJTdHlsZSBmcm9tICcuL0hlYWRlclN0eWxlJztcclxuXHJcbmltcG9ydCB7XHJcbiAgSW1hZ2UsXHJcbiAgTmF2YmFyLFxyXG4gIE5hdixcclxuICBOYXZEcm9wZG93bixcclxuICBGb3JtLFxyXG4gIEZvcm1Db250cm9sLFxyXG4gIEJ1dHRvbixcclxuICBDb250YWluZXIsXHJcbiAgQ29sLFxyXG4gIFJvd1xyXG59IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcblxyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xyXG5cclxuUm91dGVyLm9uUm91dGVDaGFuZ2VTdGFydCA9ICgpID0+IHtcclxuICBOUHJvZ3Jlc3Muc3RhcnQoKTtcclxufTtcclxuUm91dGVyLm9uUm91dGVDaGFuZ2VDb21wbGV0ZSA9ICgpID0+IHtcclxuICBOUHJvZ3Jlc3MuZG9uZSgpO1xyXG59O1xyXG5Sb3V0ZXIub25Sb3V0ZUNoYW5nZUVycm9yID0gKCkgPT4ge1xyXG4gIE5Qcm9ncmVzcy5kb25lKCk7XHJcbn07XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiAoXHJcbiAgPEhlYWRlclN0eWxlPlxyXG4gICAgPE5hdmJhciBleHBhbmQ9XCJsZ1wiIGNsYXNzTmFtZT1cInNjcm9sbGluZy1uYXZiYXJcIj5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8TmF2YmFyLkJyYW5kIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgc3JjPVwiL3N0YXRpYy9sb2dvL2xvZ28ucG5nXCJcclxuICAgICAgICAgICAgd2lkdGg9XCIxNTBweFwiXHJcbiAgICAgICAgICAgIGhlaWdodD1cImF1dG9cIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJkLWlubGluZS1ibG9jayBhbGlnbi10b3BcIlxyXG4gICAgICAgICAgICBhbHQ9XCJNeWFubWFyIExpdGVyYXR1cmVcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L05hdmJhci5CcmFuZD5cclxuICAgICAgICA8TmF2YmFyLlRvZ2dsZSBhcmlhLWNvbnRyb2xzPVwiYmFzaWMtbmF2YmFyLW5hdlwiIC8+XHJcbiAgICAgICAgPE5hdmJhci5Db2xsYXBzZSBpZD1cImJhc2ljLW5hdmJhci1uYXZcIj5cclxuICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm1lbnUtbGlua1wiPkhvbWU8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm1lbnUtbGlua1wiPkFib3V0PC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICA8TmF2RHJvcGRvd25cclxuICAgICAgICAgICAgICB0aXRsZT1cIkNhdGVnb3JpZXNcIlxyXG4gICAgICAgICAgICAgIGlkPVwiYmFzaWMtbmF2LWRyb3Bkb3duXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZW51LWxpbmtcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gaHJlZj1cIi9jYXRlZ29yeVwiPk5vdmVsczwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBocmVmPVwiL2NhdGVnb3J5XCI+RmljdGlvbjwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBocmVmPVwiL2NhdGVnb3J5XCI+Tm9uLWZpY3Rpb248L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgey8qIDxOYXZEcm9wZG93bi5EaXZpZGVyIC8+XHJcbiAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBocmVmPVwiI2FjdGlvbi8zLjRcIj5TZXBhcmF0ZWQgbGluazwvTmF2RHJvcGRvd24uSXRlbT4gKi99XHJcbiAgICAgICAgICAgIDwvTmF2RHJvcGRvd24+XHJcbiAgICAgICAgICA8L05hdj5cclxuXHJcbiAgICAgICAgICA8TmF2PlxyXG4gICAgICAgICAgICA8TmF2LkxpbmtcclxuICAgICAgICAgICAgICBldmVudEtleT17Mn1cclxuICAgICAgICAgICAgICBocmVmPVwiL1wiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZ1JpZ2h0OiAyMCB9fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1lbnUtbGlua1wiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBBQUFcclxuICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICBocmVmPVwiL2Fib3V0XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZW51LWxpbmsgbmF2LWxpbmtcIlxyXG4gICAgICAgICAgICAgIGV2ZW50S2V5PXsyfVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmdSaWdodDogMjAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxhPlNpZ24gSW48L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgIHsvKiA8TmF2YmFyLkJyYW5kIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHNyYz1cIi9zdGF0aWMvdXNlcnMvYXZhZGEucG5nXCJcclxuICAgICAgICAgICAgd2lkdGg9XCIzMFwiXHJcbiAgICAgICAgICAgIGhlaWdodD1cIjMwXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1pbmxpbmUtYmxvY2sgYWxpZ24tdG9wXCJcclxuICAgICAgICAgICAgYWx0PVwiVXNlciBBdmFkYSBJbWFnZVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgPC9OYXZiYXIuQnJhbmQ+ICovfVxyXG4gICAgICAgICAgICB7LyogPE5hdmJhci5UZXh0PlxyXG4gICAgICAgICAgICBTaWduZWQgaW4gYXM6IFxyXG4gICAgICAgIDwvTmF2YmFyLlRleHQ+XHJcbiAgICAgICAgPE5hdkRyb3Bkb3duIHRpdGxlPVwiU2h3ZSBZZWVcIiBpZD1cImJhc2ljLW5hdi1kcm9wZG93blwiPlxyXG4gICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gaHJlZj1cIiNhY3Rpb24vMy4xXCI+PEZvbnRBd2Vzb21lSWNvbiBpY29uPVwia2V5XCIgY29sb3I9XCIjNkRCNjVCXCIgLz57JyAnfUFjdGlvbjwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGhyZWY9XCIjYWN0aW9uLzMuMlwiPkFub3RoZXIgYWN0aW9uPC9OYXZEcm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gaHJlZj1cIiNhY3Rpb24vMy4zXCI+U29tZXRoaW5nPC9OYXZEcm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgPE5hdkRyb3Bkb3duLkRpdmlkZXIgLz5cclxuICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGhyZWY9XCIjYWN0aW9uLzMuNFwiPlNlcGFyYXRlZCBsaW5rPC9OYXZEcm9wZG93bi5JdGVtPlxyXG4gICAgICAgIDwvTmF2RHJvcGRvd24+ICovfVxyXG4gICAgICAgICAgPC9OYXY+XHJcbiAgICAgICAgICB7LyogPEZvcm0gaW5saW5lPlxyXG4gICAgICAgIDxGb3JtQ29udHJvbCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCIgY2xhc3NOYW1lPVwibXItc20tMlwiIC8+XHJcbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZS1zdWNjZXNzXCI+U2VhcmNoPC9CdXR0b24+XHJcbiAgICAgIDwvRm9ybT4gKi99XHJcbiAgICAgICAgICA8TmF2YmFyLlRleHQ+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgPGEgLz5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9OYXZiYXIuVGV4dD5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgIDxCdXR0b24gc2l6ZT1cIm1kXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zaWdudXBcIj5cclxuICAgICAgICAgICAgICBTSUdOIFVQIEZSRUVcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9OYXZiYXIuQ29sbGFwc2U+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9OYXZiYXI+XHJcbiAgICA8c3R5bGUganN4PntgYH08L3N0eWxlPlxyXG4gIDwvSGVhZGVyU3R5bGU+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\shwe.yee\\Documents\\git\\syw\\mml\\components\\Header\\Header.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.07e4fb857d4329b008b9.hot-update.js.map