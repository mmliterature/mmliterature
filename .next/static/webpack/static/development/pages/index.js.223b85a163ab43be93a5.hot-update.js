webpackHotUpdate("static\\development\\pages\\index.js",{

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
    className: "menu-link navbar-nav nav-link",
    eventKey: 2,
    style: {
      paddingRight: 20
    }
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
  }, ".scrolling-navbar.jsx-1378284321{padding-top:1.5rem;padding-bottom:1.5rem;}.menu-link.jsx-1378284321{color:#17191d !important;font:bold 14px/14px 'Roboto',sans-serif;-webkit-text-decoration:none;text-decoration:none;}.navContainer.jsx-1378284321{margin:0px auto;padding:0;border:0;width:calc(100% - 60px);height:100%;max-width:1740px;position:relative;display:block;}.btn.jsx-1378284321{cursor:pointer;color:rgb(255,255,255);display:inline-block;font-family:'Roboto',sans-serif;font-size:12px;font-weight:bold;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;line-height:14px;position:relative;text-align:center;text-transform:uppercase;white-space:nowrap;max-width:100%;background:#ff3366;border-width:2px;border-style:solid;border-color:#ff3366;border-image:initial;border-radius:100em;outline:0px;overflow:hidden;padding:13px 32px 11px;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:all 0.2s ease 0s;transition:all 0.2s ease 0s;}.btn.jsx-1378284321:hover{color:#e81e61;background:#ffffff;border-color:#e81e61;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2h3ZS55ZWVcXERvY3VtZW50c1xcZ2l0XFxzeXdcXG1tbFxcY29tcG9uZW50c1xcSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1JZ0IsQUFHNEIsQUFJTSxBQUtULEFBVUQsQUEwQkQsY0FDSyxDQTFCTSxDQVZmLEdBVFksTUFJbUIsQ0FNaEMsT0FvQ1ksRUFuQ0csR0FTSCxHQW5CdkIsYUE4Q0EsS0FuQ2MsQUFTcUIsTUFoQlosTUFRSixpQkFDQyxHQVFILGVBUEQsQUFRRyxTQWpCbkIsS0FVQSxHQVFxQiw2RkFDRixpQkFDQyxrQkFDQSxrQkFDTyx5QkFDTixtQkFDSixlQUNJLG1CQUNGLGlCQUNFLG1CQUNFLHFCQUNBLHFCQUNELG9CQUNSLFlBQ0ksZ0JBQ08sdUJBQ0Ysa0RBQ08sZ0VBQzlCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcc2h3ZS55ZWVcXERvY3VtZW50c1xcZ2l0XFxzeXdcXG1tbFxcY29tcG9uZW50c1xcSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBOUHJvZ3Jlc3MgZnJvbSAnbnByb2dyZXNzJztcclxuXHJcblJvdXRlci5vblJvdXRlQ2hhbmdlU3RhcnQgPSAoKSA9PiB7XHJcbiAgTlByb2dyZXNzLnN0YXJ0KCk7XHJcbn07XHJcblJvdXRlci5vblJvdXRlQ2hhbmdlQ29tcGxldGUgPSAoKSA9PiB7XHJcbiAgTlByb2dyZXNzLmRvbmUoKTtcclxufTtcclxuUm91dGVyLm9uUm91dGVDaGFuZ2VFcnJvciA9ICgpID0+IHtcclxuICBOUHJvZ3Jlc3MuZG9uZSgpO1xyXG59O1xyXG5cclxuTmF2Lkxpbmsub25Sb3V0ZUNoYW5nZVN0YXJ0ID0gKCkgPT4ge1xyXG4gIE5Qcm9ncmVzcy5zdGFydCgpO1xyXG59O1xyXG5OYXYuTGluay5vblJvdXRlQ2hhbmdlQ29tcGxldGUgPSAoKSA9PiB7XHJcbiAgTlByb2dyZXNzLmRvbmUoKTtcclxufTtcclxuTmF2Lkxpbmsub25Sb3V0ZUNoYW5nZUVycm9yID0gKCkgPT4ge1xyXG4gIE5Qcm9ncmVzcy5kb25lKCk7XHJcbn07XHJcblxyXG5pbXBvcnQge1xyXG4gIEltYWdlLFxyXG4gIE5hdmJhcixcclxuICBOYXYsXHJcbiAgTmF2RHJvcGRvd24sXHJcbiAgRm9ybSxcclxuICBGb3JtQ29udHJvbCxcclxuICBCdXR0b24sXHJcbiAgQ29udGFpbmVyLFxyXG4gIENvbCxcclxuICBSb3dcclxufSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPVwibmF2Q29udGFpbmVyXCI+XHJcbiAgICA8TmF2YmFyIGV4cGFuZD1cImxnXCIgY2xhc3NOYW1lPVwic2Nyb2xsaW5nLW5hdmJhclwiPlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxOYXZiYXIuQnJhbmQgaHJlZj1cIi9cIj5cclxuICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL3JlYWN0LWJvb3RzdHJhcC5naXRodWIuaW8vbG9nby5zdmdcIlxyXG4gICAgICAgICAgICB3aWR0aD1cIjMwXCJcclxuICAgICAgICAgICAgaGVpZ2h0PVwiMzBcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJkLWlubGluZS1ibG9jayBhbGlnbi10b3BcIlxyXG4gICAgICAgICAgICBhbHQ9XCJSZWFjdCBCb290c3RyYXAgbG9nb1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgeycgTU1MaXRlcmF0dXJlJ31cclxuICAgICAgICA8L05hdmJhci5CcmFuZD5cclxuICAgICAgICA8TmF2YmFyLlRvZ2dsZSBhcmlhLWNvbnRyb2xzPVwiYmFzaWMtbmF2YmFyLW5hdlwiIC8+XHJcbiAgICAgICAgPE5hdmJhci5Db2xsYXBzZSBpZD1cImJhc2ljLW5hdmJhci1uYXZcIj5cclxuICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPlxyXG4gICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJtZW51LWxpbmtcIj5cclxuICAgICAgICAgICAgICBIb21lXHJcbiAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiL2Fib3V0XCIgY2xhc3NOYW1lPVwibWVudS1saW5rXCI+XHJcbiAgICAgICAgICAgICAgQWJvdXRcclxuICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgPE5hdkRyb3Bkb3duXHJcbiAgICAgICAgICAgICAgdGl0bGU9XCJDYXRlZ29yaWVzXCJcclxuICAgICAgICAgICAgICBpZD1cImJhc2ljLW5hdi1kcm9wZG93blwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWVudS1saW5rXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGhyZWY9XCIvY2F0ZWdvcnlcIj5Ob3ZlbHM8L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gaHJlZj1cIi9jYXRlZ29yeVwiPkZpY3Rpb248L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gaHJlZj1cIi9jYXRlZ29yeVwiPk5vbi1maWN0aW9uPC9OYXZEcm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgIHsvKiA8TmF2RHJvcGRvd24uRGl2aWRlciAvPlxyXG4gICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gaHJlZj1cIiNhY3Rpb24vMy40XCI+U2VwYXJhdGVkIGxpbms8L05hdkRyb3Bkb3duLkl0ZW0+ICovfVxyXG4gICAgICAgICAgICA8L05hdkRyb3Bkb3duPlxyXG4gICAgICAgICAgPC9OYXY+XHJcblxyXG4gICAgICAgICAgPE5hdj5cclxuICAgICAgICAgICAgPE5hdi5MaW5rXHJcbiAgICAgICAgICAgICAgZXZlbnRLZXk9ezJ9XHJcbiAgICAgICAgICAgICAgaHJlZj1cIi9cIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmdSaWdodDogMjAgfX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZW51LWxpbmtcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQUFBXHJcbiAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgaHJlZj1cIi9hYm91dFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWVudS1saW5rIG5hdmJhci1uYXYgbmF2LWxpbmtcIlxyXG4gICAgICAgICAgICAgIGV2ZW50S2V5PXsyfVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmdSaWdodDogMjAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxhPlNpZ24gSW48L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgIHsvKiA8TmF2YmFyLkJyYW5kIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHNyYz1cIi9zdGF0aWMvdXNlcnMvYXZhZGEucG5nXCJcclxuICAgICAgICAgICAgd2lkdGg9XCIzMFwiXHJcbiAgICAgICAgICAgIGhlaWdodD1cIjMwXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1pbmxpbmUtYmxvY2sgYWxpZ24tdG9wXCJcclxuICAgICAgICAgICAgYWx0PVwiVXNlciBBdmFkYSBJbWFnZVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgPC9OYXZiYXIuQnJhbmQ+ICovfVxyXG4gICAgICAgICAgICB7LyogPE5hdmJhci5UZXh0PlxyXG4gICAgICAgICAgICBTaWduZWQgaW4gYXM6IFxyXG4gICAgICAgIDwvTmF2YmFyLlRleHQ+XHJcbiAgICAgICAgPE5hdkRyb3Bkb3duIHRpdGxlPVwiU2h3ZSBZZWVcIiBpZD1cImJhc2ljLW5hdi1kcm9wZG93blwiPlxyXG4gICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gaHJlZj1cIiNhY3Rpb24vMy4xXCI+PEZvbnRBd2Vzb21lSWNvbiBpY29uPVwia2V5XCIgY29sb3I9XCIjNkRCNjVCXCIgLz57JyAnfUFjdGlvbjwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGhyZWY9XCIjYWN0aW9uLzMuMlwiPkFub3RoZXIgYWN0aW9uPC9OYXZEcm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gaHJlZj1cIiNhY3Rpb24vMy4zXCI+U29tZXRoaW5nPC9OYXZEcm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgPE5hdkRyb3Bkb3duLkRpdmlkZXIgLz5cclxuICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGhyZWY9XCIjYWN0aW9uLzMuNFwiPlNlcGFyYXRlZCBsaW5rPC9OYXZEcm9wZG93bi5JdGVtPlxyXG4gICAgICAgIDwvTmF2RHJvcGRvd24+ICovfVxyXG4gICAgICAgICAgPC9OYXY+XHJcbiAgICAgICAgICB7LyogPEZvcm0gaW5saW5lPlxyXG4gICAgICAgIDxGb3JtQ29udHJvbCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCIgY2xhc3NOYW1lPVwibXItc20tMlwiIC8+XHJcbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZS1zdWNjZXNzXCI+U2VhcmNoPC9CdXR0b24+XHJcbiAgICAgIDwvRm9ybT4gKi99XHJcbiAgICAgICAgICA8TmF2YmFyLlRleHQ+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgPGEgLz5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9OYXZiYXIuVGV4dD5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgIDxCdXR0b24gc2l6ZT1cIm1kXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zaWdudXBcIj5cclxuICAgICAgICAgICAgICBTSUdOIFVQIEZSRUVcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9OYXZiYXIuQ29sbGFwc2U+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9OYXZiYXI+XHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIC5zY3JvbGxpbmctbmF2YmFyIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMS41cmVtO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxLjVyZW07XHJcbiAgICAgIH1cclxuICAgICAgLm1lbnUtbGluayB7XHJcbiAgICAgICAgY29sb3I6ICMxNzE5MWQgIWltcG9ydGFudDtcclxuICAgICAgICBmb250OiBib2xkIDE0cHgvMTRweCAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIH1cclxuICAgICAgLm5hdkNvbnRhaW5lciB7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNjBweCk7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG1heC13aWR0aDogMTc0MHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG4gICAgICAuYnRuIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmYzMzY2O1xyXG4gICAgICAgIGJvcmRlci13aWR0aDogMnB4O1xyXG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjZmYzMzY2O1xyXG4gICAgICAgIGJvcmRlci1pbWFnZTogaW5pdGlhbDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDBlbTtcclxuICAgICAgICBvdXRsaW5lOiAwcHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBwYWRkaW5nOiAxM3B4IDMycHggMTFweDtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZSAwcztcclxuICAgICAgfVxyXG4gICAgICAuYnRuOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogI2U4MWU2MTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogI2U4MWU2MTtcclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gIDwvZGl2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\shwe.yee\\Documents\\git\\syw\\mml\\components\\Header.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.223b85a163ab43be93a5.hot-update.js.map