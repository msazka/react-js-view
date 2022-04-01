import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
//import * as serviceWorker from "./serviceWorker";
import App from "./App";

// ReactDOM.render(
//   <BrowserRouter>
//     <StrictMode>
//       <App />
//     </StrictMode>
//   </BrowserRouter>,
//   document.getElementById("root")
// );
// serviceWorker.unregister();

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
