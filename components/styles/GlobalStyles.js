import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    background: ${props => props.theme.white};
  }
  .mainContainer {
    padding: 0px;
    border: 0px;
    width: calc(100% - 60px);
    height: 100%;
    max-width: ${props => props.theme.maxWidth};
    position: relative;
    display: block;
    margin: 0px auto;
  }
  
  button, 
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
  button:hover,
  .btn:hover {
    color: #e81e61;
    background: #ffffff;
    border-color: #e81e61;
  }
  .image-wrapper {
    margin-bottom: 20px;
  }
  .article-title {
    letter-spacing: 0.2px;
    color: rgb(0, 0, 0);
    cursor: pointer;
    font: 500 16px/22px 'Roboto', sans-serif;
    margin: 0px;
  }
  .category-title {
    color: #ff3366;
    text-transform: uppercase;
    z-index: 10;
    position: relative;
    cursor: pointer;
    display: inline-block;
    font: bold 11px/18px 'Roboto', sans-serif;
  }
  .section-title {
    color: rgb(0, 0, 0);
    font: 700 45px/55px 'Roboto', sans-serif;
    margin: 0px 0px 0px;
  }
  .section-cap {
    text-transform: uppercase;
    z-index: 10;
    position: relative;
    cursor: pointer;
    display: inline-block;
    font: bold 11px/16px 'Roboto', sans-serif;
    padding: 0px 0px 12px 0px;
    color: #000000;
  }
  .article-author {
    color: #999999;
    text-transform: uppercase;
    z-index: 10;
    position: relative;
    cursor: pointer;
    display: inline-block;
    font: bold 11px/18px 'Roboto', sans-serif;
    padding: 12px 0px;
  }
  .article-author a {
    color: #999999;
  }
  .fa-circle {
    background-color: #e81e61;
    border-radius: 50%;
    color: #ffffff;
  }
  .fa-circle.fb {
    padding: 3px 13px;
  }
  .fa-circle.tw {
    padding: 3px 8px;
  }
  .fa-circle.gp {
    padding: 3px 6px;
  }
  .fa-circle.ht {
    padding: 3px 6px;
  }
  .fa-circle.pl {
    padding: 3px 7px;
  }
  
  .article-desc {
    color: #000000;
    font: 300 16px/22px 'Padauk', sans-serif;
    margin: 0px 0px 16px 0px;
    font-size: 16px !important;
  }
  @media only screen and (min-width: 1755px) {
    .mainContainer {
      margin: 0px auto;
    }
  }

`;

export default GlobalStyles;
