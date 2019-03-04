import React, { Component } from 'react';
import Link from 'next/link';

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

const Header = () => (
  <div className="navContainer">
    <Navbar expand="lg" className="scrolling-navbar">
      <Container>
        <Navbar.Brand href="/">
          <Image
            src="https://react-bootstrap.github.io/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
          {' MMLiterature'}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/" className="menu-link">
              Home
            </Nav.Link>
            <Nav.Link href="/about" className="menu-link">
              About
            </Nav.Link>
            <NavDropdown
              title="Categories"
              id="basic-nav-dropdown"
              className="menu-link"
            >
              <NavDropdown.Item href="/category">Novels</NavDropdown.Item>
              <NavDropdown.Item href="/category">Fiction</NavDropdown.Item>
              <NavDropdown.Item href="/category">Non-fiction</NavDropdown.Item>
              {/* <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
            </NavDropdown>
          </Nav>

          <Nav>
            <Nav.Link
              eventKey={2}
              href="/"
              style={{ paddingRight: 20 }}
              className="menu-link"
            >
              Sign In
            </Nav.Link>
            {/* <Navbar.Brand href="/">
          <img
            src="/static/users/avada.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="User Avada Image"
          />
          
        </Navbar.Brand> */}
            {/* <Navbar.Text>
            Signed in as: 
        </Navbar.Text>
        <NavDropdown title="Shwe Yee" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1"><FontAwesomeIcon icon="key" color="#6DB65B" />{' '}Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown> */}
          </Nav>
          {/* <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Form> */}
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
    <style jsx>{`
      .scrolling-navbar {
        padding-top: 1.5rem;
        padding-bottom: 1.5rem;
      }
      .menu-link {
        color: #17191d !important;
        font: bold 14px/14px 'Roboto', sans-serif;
        text-decoration: none;
      }
      .navContainer {
        margin: 0px auto;
        padding: 0;
        border: 0;
        width: calc(100% - 60px);
        height: 100%;
        max-width: 1740px;
        position: relative;
        display: block;
      }
      .btn {
        cursor: pointer;
        color: rgb(255, 255, 255);
        display: inline-block;
        font-family: 'Roboto', sans-serif;
        font-size: 12px;
        font-weight: bold;
        letter-spacing: 1px;
        line-height: 14px;
        position: relative;
        text-align: center;
        text-transform: uppercase;
        white-space: nowrap;
        max-width: 100%;
        background: #ff3366;
        border-width: 2px;
        border-style: solid;
        border-color: #ff3366;
        border-image: initial;
        border-radius: 100em;
        outline: 0px;
        overflow: hidden;
        padding: 13px 32px 11px;
        text-decoration: none;
        transition: all 0.2s ease 0s;
      }
      .btn:hover {
        color: #e81e61;
        background: #ffffff;
        border-color: #e81e61;
      }
    `}</style>
  </div>
);

export default Header;
