import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';

import HeaderStyle from './HeaderStyle';

import {
  Image,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Container,
  Col,
  Row
} from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};
Router.onRouteChangeError = () => {
  NProgress.done();
};

const Header = () => (
  <HeaderStyle>
    <Navbar expand="lg" className="scrolling-navbar">
      <Container>
        <Navbar.Brand href="/">
          <Image
            src="/static/logo/logo.png"
            width="150px"
            height="auto"
            className="d-inline-block align-top"
            alt="Myanmar Literature"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link href="/">
              <a className="menu-link">Home</a>
            </Link>
            <Link href="/about">
              <a className="menu-link">About</a>
            </Link>
            <Link href="/category">
              <a className="menu-link">Categories</a>
            </Link>
          </Nav>

          <Nav>
            <Link href="/about">
              <a className="menu-link">Sign in</a>
            </Link>
          </Nav>
          <Navbar.Text>
            <Link href="/">
              <a />
            </Link>
          </Navbar.Text>
          <Link href="/">
            <Button size="md" className="btn btn-signup">
              SIGN UP FREE
            </Button>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {/* <style jsx>{``}</style> */}
  </HeaderStyle>
);

export default Header;
