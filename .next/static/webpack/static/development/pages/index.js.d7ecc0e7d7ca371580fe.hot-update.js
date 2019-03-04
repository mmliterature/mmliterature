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
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1599344268" + " " + "navContainer"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Navbar"], {
    expand: "lg",
    className: "scrolling-navbar"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Navbar"].Brand, {
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Image"], {
    src: "https://react-bootstrap.github.io/logo.svg",
    width: "30",
    height: "30",
    className: "d-inline-block align-top",
    alt: "React Bootstrap logo"
  }), ' MMLiterature'), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Navbar"].Toggle, {
    "aria-controls": "basic-navbar-nav"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Navbar"].Collapse, {
    id: "basic-navbar-nav"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Nav"], {
    className: "mr-auto"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    className: "menu-link"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-1599344268"
  }, "Home")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Nav"].Link, {
    href: "/about",
    className: "menu-link"
  }, "About"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NavDropdown"], {
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
    className: "jsx-1599344268"
  }, "Sign In"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Navbar"].Text, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-1599344268"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    size: "md",
    className: "btn btn-signup"
  }, "SIGN UP FREE"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1599344268"
  }, ".scrolling-navbar.jsx-1599344268{padding-top:1.5rem;padding-bottom:1.5rem;}.menu-link.jsx-1599344268{color:#17191d !important;font:bold 14px/14px 'Roboto',sans-serif;-webkit-text-decoration:none;text-decoration:none;}.btn.jsx-1599344268{cursor:pointer;color:rgb(255,255,255);display:inline-block;font-family:'Roboto',sans-serif;font-size:12px;font-weight:bold;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;line-height:14px;position:relative;text-align:center;text-transform:uppercase;white-space:nowrap;max-width:100%;background:#ff3366;border-width:2px;border-style:solid;border-color:#ff3366;border-image:initial;border-radius:100em;outline:0px;overflow:hidden;padding:13px 32px 11px;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:all 0.2s ease 0s;transition:all 0.2s ease 0s;}.btn.jsx-1599344268:hover{color:#e81e61;background:#ffffff;border-color:#e81e61;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2h3ZS55ZWVcXERvY3VtZW50c1xcZ2l0XFxzeXdcXG1tbFxcY29tcG9uZW50c1xcSGVhZGVyXFxIZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkhnQixBQUc0QixBQUlNLEFBTVYsQUEwQkQsY0FDSyxDQTFCTSxJQVZILE1BSW1CLFFBaUNwQixLQTFCQSxHQVZ2QixhQXFDQSxLQTFCbUMsTUFQWiwwQkFRTixlQUNFLFNBUm5CLFFBU3FCLDZGQUNGLGlCQUNDLGtCQUNBLGtCQUNPLHlCQUNOLG1CQUNKLGVBQ0ksbUJBQ0YsaUJBQ0UsbUJBQ0UscUJBQ0EscUJBQ0Qsb0JBQ1IsWUFDSSxnQkFDTyx1QkFDRixrREFDTyxnRUFDOUIiLCJmaWxlIjoiQzpcXFVzZXJzXFxzaHdlLnllZVxcRG9jdW1lbnRzXFxnaXRcXHN5d1xcbW1sXFxjb21wb25lbnRzXFxIZWFkZXJcXEhlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgTlByb2dyZXNzIGZyb20gJ25wcm9ncmVzcyc7XHJcblxyXG5pbXBvcnQgSGVhZGVyU3R5bGUgZnJvbSAnLi9IZWFkZXJTdHlsZSc7XHJcbmltcG9ydCB7XHJcbiAgSW1hZ2UsXHJcbiAgTmF2YmFyLFxyXG4gIE5hdixcclxuICBOYXZEcm9wZG93bixcclxuICBGb3JtLFxyXG4gIEZvcm1Db250cm9sLFxyXG4gIEJ1dHRvbixcclxuICBDb250YWluZXIsXHJcbiAgQ29sLFxyXG4gIFJvd1xyXG59IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcblxyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xyXG5cclxuUm91dGVyLm9uUm91dGVDaGFuZ2VTdGFydCA9ICgpID0+IHtcclxuICBOUHJvZ3Jlc3Muc3RhcnQoKTtcclxufTtcclxuUm91dGVyLm9uUm91dGVDaGFuZ2VDb21wbGV0ZSA9ICgpID0+IHtcclxuICBOUHJvZ3Jlc3MuZG9uZSgpO1xyXG59O1xyXG5Sb3V0ZXIub25Sb3V0ZUNoYW5nZUVycm9yID0gKCkgPT4ge1xyXG4gIE5Qcm9ncmVzcy5kb25lKCk7XHJcbn07XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9XCJuYXZDb250YWluZXJcIj5cclxuICAgIDxOYXZiYXIgZXhwYW5kPVwibGdcIiBjbGFzc05hbWU9XCJzY3JvbGxpbmctbmF2YmFyXCI+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPE5hdmJhci5CcmFuZCBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vcmVhY3QtYm9vdHN0cmFwLmdpdGh1Yi5pby9sb2dvLnN2Z1wiXHJcbiAgICAgICAgICAgIHdpZHRoPVwiMzBcIlxyXG4gICAgICAgICAgICBoZWlnaHQ9XCIzMFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtaW5saW5lLWJsb2NrIGFsaWduLXRvcFwiXHJcbiAgICAgICAgICAgIGFsdD1cIlJlYWN0IEJvb3RzdHJhcCBsb2dvXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICB7JyBNTUxpdGVyYXR1cmUnfVxyXG4gICAgICAgIDwvTmF2YmFyLkJyYW5kPlxyXG4gICAgICAgIDxOYXZiYXIuVG9nZ2xlIGFyaWEtY29udHJvbHM9XCJiYXNpYy1uYXZiYXItbmF2XCIgLz5cclxuICAgICAgICA8TmF2YmFyLkNvbGxhcHNlIGlkPVwiYmFzaWMtbmF2YmFyLW5hdlwiPlxyXG4gICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJtci1hdXRvXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwibWVudS1saW5rXCI+XHJcbiAgICAgICAgICAgICAgPGE+SG9tZTwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIi9hYm91dFwiIGNsYXNzTmFtZT1cIm1lbnUtbGlua1wiPlxyXG4gICAgICAgICAgICAgIEFib3V0XHJcbiAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgIDxOYXZEcm9wZG93blxyXG4gICAgICAgICAgICAgIHRpdGxlPVwiQ2F0ZWdvcmllc1wiXHJcbiAgICAgICAgICAgICAgaWQ9XCJiYXNpYy1uYXYtZHJvcGRvd25cIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1lbnUtbGlua1wiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBocmVmPVwiL2NhdGVnb3J5XCI+Tm92ZWxzPC9OYXZEcm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGhyZWY9XCIvY2F0ZWdvcnlcIj5GaWN0aW9uPC9OYXZEcm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGhyZWY9XCIvY2F0ZWdvcnlcIj5Ob24tZmljdGlvbjwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICB7LyogPE5hdkRyb3Bkb3duLkRpdmlkZXIgLz5cclxuICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGhyZWY9XCIjYWN0aW9uLzMuNFwiPlNlcGFyYXRlZCBsaW5rPC9OYXZEcm9wZG93bi5JdGVtPiAqL31cclxuICAgICAgICAgICAgPC9OYXZEcm9wZG93bj5cclxuICAgICAgICAgIDwvTmF2PlxyXG5cclxuICAgICAgICAgIDxOYXY+XHJcbiAgICAgICAgICAgIDxOYXYuTGlua1xyXG4gICAgICAgICAgICAgIGV2ZW50S2V5PXsyfVxyXG4gICAgICAgICAgICAgIGhyZWY9XCIvXCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nUmlnaHQ6IDIwIH19XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWVudS1saW5rXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEFBQVxyXG4gICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgIGhyZWY9XCIvYWJvdXRcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1lbnUtbGluayBuYXYtbGlua1wiXHJcbiAgICAgICAgICAgICAgZXZlbnRLZXk9ezJ9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZ1JpZ2h0OiAyMCB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGE+U2lnbiBJbjwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgey8qIDxOYXZiYXIuQnJhbmQgaHJlZj1cIi9cIj5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgc3JjPVwiL3N0YXRpYy91c2Vycy9hdmFkYS5wbmdcIlxyXG4gICAgICAgICAgICB3aWR0aD1cIjMwXCJcclxuICAgICAgICAgICAgaGVpZ2h0PVwiMzBcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJkLWlubGluZS1ibG9jayBhbGlnbi10b3BcIlxyXG4gICAgICAgICAgICBhbHQ9XCJVc2VyIEF2YWRhIEltYWdlXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICBcclxuICAgICAgICA8L05hdmJhci5CcmFuZD4gKi99XHJcbiAgICAgICAgICAgIHsvKiA8TmF2YmFyLlRleHQ+XHJcbiAgICAgICAgICAgIFNpZ25lZCBpbiBhczogXHJcbiAgICAgICAgPC9OYXZiYXIuVGV4dD5cclxuICAgICAgICA8TmF2RHJvcGRvd24gdGl0bGU9XCJTaHdlIFllZVwiIGlkPVwiYmFzaWMtbmF2LWRyb3Bkb3duXCI+XHJcbiAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBocmVmPVwiI2FjdGlvbi8zLjFcIj48Rm9udEF3ZXNvbWVJY29uIGljb249XCJrZXlcIiBjb2xvcj1cIiM2REI2NUJcIiAvPnsnICd9QWN0aW9uPC9OYXZEcm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gaHJlZj1cIiNhY3Rpb24vMy4yXCI+QW5vdGhlciBhY3Rpb248L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBocmVmPVwiI2FjdGlvbi8zLjNcIj5Tb21ldGhpbmc8L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICA8TmF2RHJvcGRvd24uRGl2aWRlciAvPlxyXG4gICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gaHJlZj1cIiNhY3Rpb24vMy40XCI+U2VwYXJhdGVkIGxpbms8L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgPC9OYXZEcm9wZG93bj4gKi99XHJcbiAgICAgICAgICA8L05hdj5cclxuICAgICAgICAgIHsvKiA8Rm9ybSBpbmxpbmU+XHJcbiAgICAgICAgPEZvcm1Db250cm9sIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIiBjbGFzc05hbWU9XCJtci1zbS0yXCIgLz5cclxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lLXN1Y2Nlc3NcIj5TZWFyY2g8L0J1dHRvbj5cclxuICAgICAgPC9Gb3JtPiAqL31cclxuICAgICAgICAgIDxOYXZiYXIuVGV4dD5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICA8YSAvPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L05hdmJhci5UZXh0PlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgPEJ1dHRvbiBzaXplPVwibWRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXNpZ251cFwiPlxyXG4gICAgICAgICAgICAgIFNJR04gVVAgRlJFRVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L05hdmJhci5Db2xsYXBzZT5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L05hdmJhcj5cclxuICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgLnNjcm9sbGluZy1uYXZiYXIge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxLjVyZW07XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcclxuICAgICAgfVxyXG4gICAgICAubWVudS1saW5rIHtcclxuICAgICAgICBjb2xvcjogIzE3MTkxZCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQ6IGJvbGQgMTRweC8xNHB4ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmJ0biB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmMzM2NjtcclxuICAgICAgICBib3JkZXItd2lkdGg6IDJweDtcclxuICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogI2ZmMzM2NjtcclxuICAgICAgICBib3JkZXItaW1hZ2U6IGluaXRpYWw7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwZW07XHJcbiAgICAgICAgb3V0bGluZTogMHB4O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgcGFkZGluZzogMTNweCAzMnB4IDExcHg7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UgMHM7XHJcbiAgICAgIH1cclxuICAgICAgLmJ0bjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICNlODFlNjE7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICBib3JkZXItY29sb3I6ICNlODFlNjE7XHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIl19 */\n/*@ sourceURL=C:\\Users\\shwe.yee\\Documents\\git\\syw\\mml\\components\\Header\\Header.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Header/HeaderStyle.js":
/*!******************************************!*\
  !*** ./components/Header/HeaderStyle.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin: 0px auto;\n  padding: 0;\n  border: 0;\n  width: calc(100% - 60px);\n  height: 100%;\n  max-width: 1740px;\n  position: relative;\n  display: block;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var navContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section(_templateObject());

/***/ })

})
//# sourceMappingURL=index.js.d7ecc0e7d7ca371580fe.hot-update.js.map