import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { StateContextProvider } from "./context/StateContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StateContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </StateContextProvider>
);
