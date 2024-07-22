import React from "react";
import ReactDOM from "react-dom/client";
import { normalize } from "styled-normalize";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  html, body, #root {
    height: 100%;
    font-family: 'LotteMartDream';
  }


  @font-face {
    font-family: "MediumFont1"; /* 사용할 폰트 이름 */
    src: url("/fonts/font1/12롯데마트행복Medium.ttf") format("truetype"); /* 폰트 파일 경로 */
    font-weight: normal;
    font-style: normal;
  }

  @font-face { 
    font-family: "LightFont1"; /* 사용할 폰트 이름 */
    src: url("/fonts/font1/12롯데마트행복Light.ttf") format("truetype"); /* 폰트 파일 경로 */
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "BoldFont1"; /* 사용할 폰트 이름 */
    src: url("/fonts/font1/12롯데마트행복Bold.ttf") format("truetype"); /* 폰트 파일 경로 */
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
  font-family: 'MediumFont2';
  font-style: normal;
  font-weight: 400;
  src: url('//fastly.jsdelivr.net/korean-webfonts/1/corps/lottemart/LotteMartDream/LotteMartDreamMedium.woff2') format('woff2'), url('//fastly.jsdelivr.net/korean-webfonts/1/corps/lottemart/LotteMartDream/LotteMartDreamMedium.woff') format('woff');
}
@font-face {
  font-family: 'BoldFont2';
  font-style: normal;
  font-weight: 700;
  src: url('//fastly.jsdelivr.net/korean-webfonts/1/corps/lottemart/LotteMartDream/LotteMartDreamBold.woff2') format('woff2'), url('//fastly.jsdelivr.net/korean-webfonts/1/corps/lottemart/LotteMartDream/LotteMartDreamBold.woff') format('woff');
}
@font-face {
  font-family: 'LightFont2';
  font-style: normal;
  font-weight: 300;
  src: url('//fastly.jsdelivr.net/korean-webfonts/1/corps/lottemart/LotteMartDream/LotteMartDreamLight.woff2') format('woff2'), url('//fastly.jsdelivr.net/korean-webfonts/1/corps/lottemart/LotteMartDream/LotteMartDreamLight.woff') format('woff');
}
  @font-face {
    font-family: 'LotteMartDream';
    font-style: normal;
    font-weight: 400;
    src: url('//fastly.jsdelivr.net/korean-webfonts/1/corps/lottemart/LotteMartDream/LotteMartDreamMedium.woff2') format('woff2'), url('//fastly.jsdelivr.net/korean-webfonts/1/corps/lottemart/LotteMartDream/LotteMartDreamMedium.woff') format('woff');
  }
  @font-face {
    font-family: 'LotteMartDream';
    font-style: normal;
    font-weight: 700;
    src: url('//fastly.jsdelivr.net/korean-webfonts/1/corps/lottemart/LotteMartDream/LotteMartDreamBold.woff2') format('woff2'), url('//fastly.jsdelivr.net/korean-webfonts/1/corps/lottemart/LotteMartDream/LotteMartDreamBold.woff') format('woff');
  }
  @font-face {
    font-family: 'LotteMartDream';
    font-style: normal;
    font-weight: 300;
    src: url('//fastly.jsdelivr.net/korean-webfonts/1/corps/lottemart/LotteMartDream/LotteMartDreamLight.woff2') format('woff2'), url('//fastly.jsdelivr.net/korean-webfonts/1/corps/lottemart/LotteMartDream/LotteMartDreamLight.woff') format('woff');
  }
  
  :root {
    --color-gray-100: #e9e9e9;
    --color-gray-200: #d9d9d9;
    --color-gray-300: #c4c4c4;
    --color-gray-400: #9d9d9d;
    --color-gray-50: #f5f5f5;
    --color-gray-500: #7b7b7b;
    --color-gray-600: #555555;
    --color-gray-700: #434343;
    --color-gray-800: #262626;
    --color-gray-900: #000000;
    --color-yellow-100: #ffedbb;
    --color-yellow-200: #ffe191;
    --color-yellow-300: #ffd769;
    --color-yellow-400: #fecd51;
    --color-yellow-50: #fff8e4;
    --color-yellow-500: #fec441;
    --color-yellow-600: #fdb73d;
    --color-yellow-700: #fba538;
    --color-yellow-800: #fa9634;
    --color-yellow-900: #f8792c;
    --color-orange-100: #ffdfb1;
    --color-orange-200: #ffca7f;
    --color-orange-300: #ffb44c;
    --color-orange-400: #ffa424;
    --color-orange-50: #fff3e0;
    --color-orange-500: #ffa424;
    --color-orange-600: #ff8800;
    --color-orange-700: #f97802;
    --color-orange-800: #f36703;
    --color-orange-900: #ea4b04;
    --color-primary: var(--color-orange-600);
    --color-secondary: var(--color-orange-300);
  }
`;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <GlobalStyle />
    <App />
  </BrowserRouter>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
