import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { RecoilRoot } from "recoil";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>
);

serviceWorkerRegistration.register();
reportWebVitals();

serviceWorkerRegistration.register({
  onUpdate: () => {
    console.log("onUpdate");
  },
  onSuccess: () => {
    console.log("onSuccess");
  },
});