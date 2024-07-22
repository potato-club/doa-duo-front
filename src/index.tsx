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
  }
  @font-face {
  font-family: "MediumFont"; /* 사용할 폰트 이름 */
  src: url("/fonts/12롯데마트행복Medium.ttf") format("truetype"); /* 폰트 파일 경로 */
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "LightFont"; /* 사용할 폰트 이름 */
  src: url("/fonts/12롯데마트행복Light.ttf") format("truetype"); /* 폰트 파일 경로 */
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "BoldFont"; /* 사용할 폰트 이름 */
  src: url("/fonts/12롯데마트행복Bold.ttf") format("truetype"); /* 폰트 파일 경로 */
  font-weight: normal;
  font-style: normal;
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
