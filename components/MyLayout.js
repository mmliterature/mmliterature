import Header from './Header';
import Footer from './Footer';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Col, Row } from 'react-bootstrap';

const siteName = 'MMLiterature';

const Layout = props => (
  <div>
    <Head>
      <title>{siteName}</title>
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
        key="viewport"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400,700"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Raleway"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,700"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Padauk:400,700&amp;subset=myanmar"
        rel="stylesheet"
      />
    </Head>
    <Header />
    {props.children}
    <Footer />
    <style jsx>{`
      body {
        background: #ffffff;
      }
      .mainContainer {
        padding: 0px;
        border: 0px;
        width: calc(100% - 60px);
        height: 100%;
        max-width: 1740px;
        position: relative;
        display: block;
        margin: 0px auto;
      }

      @media only screen and (min-width: 1755px) {
        .mainContainer {
          margin: 0px auto;
        }
      }
    `}</style>
  </div>
);

export default Layout;
