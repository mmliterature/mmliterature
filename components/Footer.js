import Link from 'next/link';
import { library } from '@fortawesome/fontawesome-svg-core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Col, Row, Image } from 'react-bootstrap';

import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, far, fab);

import {
  faEnvelope,
  faKey,
  faIgloo,
  faUserCircle
} from '@fortawesome/free-solid-svg-icons';
library.add(faEnvelope, faKey, faIgloo, faUserCircle);

import {
  faFacebookSquare,
  faTwitterSquare,
  faGooglePlusSquare
} from '@fortawesome/free-brands-svg-icons';
library.add(faFacebookSquare, faTwitterSquare, faGooglePlusSquare);

import { faCircle as fasFaCircle } from '@fortawesome/free-solid-svg-icons'; // ES Module "as" syntax
import { faCircle as farFaCircle } from '@fortawesome/free-regular-svg-icons';
library.add(fasFaCircle, farFaCircle);

const Footer = () => (
  <div id="footer" className="pt-4 pb-4">
    <Container>
      <Row>
        <Col xs={12} md={2}>
          <div className="footer-logo">
            <Image
              src="https://react-bootstrap.github.io/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="MMLiterature"
            />
            {' MMLiterature'}
          </div>
        </Col>

        <Col xs={12} md={6}>
          <ul className="footer-menu">
            <li className="ftmenu-item">
              <Link as={`/`} href={`/`}>
                <a>Home</a>
              </Link>
            </li>
            <li className="ftmenu-item">
              <Link as={`/`} href={`/`}>
                <a>About</a>
              </Link>
            </li>
            <li className="ftmenu-item">
              <Link as={`/`} href={`/`}>
                <a>Categories</a>
              </Link>
            </li>
          </ul>
        </Col>

        <Col xs={12} md={4} className="text-right">
          <ul className="social-list">
            <li className="social-item">
              <Link as={`/`} href={`/`}>
                <a>
                  <FontAwesomeIcon icon={['fab', 'facebook-square']} />
                </a>
              </Link>
            </li>
            <li className="social-item">
              <Link as={`/`} href={`/`}>
                <a>
                  <FontAwesomeIcon icon={['fab', 'twitter-square']} />
                </a>
              </Link>
            </li>
            <li className="social-item">
              <Link as={`/`} href={`/`}>
                <a>
                  <FontAwesomeIcon icon={['fab', 'google-plus-square']} />
                </a>
              </Link>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
    <style jsx>{`
      #footer {
        background-color: #000000;
      }
      .footer-logo {
        text-transform: uppercase;
        z-index: 10;
        position: relative;
        cursor: pointer;
        display: inline-block;
        font: bold 16px/32px 'Roboto', sans-serif;
        padding: 0px 0px 12px 0px;
        color: #ffffff;
      }
      .ftmenu-item {
        display: inline-block;
        margin: 6px;
      }
      .ftmenu-item a {
        display: inline-block;
        color: #ffffff;
        text-transform: capitalize;
        padding: 6px 5px;
        font: bold 14px/14px 'Roboto', sans-serif;
        transition: color 0.25s ease-out 0s;
      }
      .social-item {
        list-style: none;
        display: inline-block;
        margin-right: 12px;
        font-size: 24px;
      }
      .social-item a {
        color: #ffffff;
        text-decoration: none;
      }
    `}</style>
  </div>
);

export default Footer;
