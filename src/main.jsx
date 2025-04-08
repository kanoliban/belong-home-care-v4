import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { Toaster } from "./components/ui/toaster";
import { ModalProvider } from "./context/ModalContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ModalProvider>
        <App />
        <Toaster />
      </ModalProvider>
    </BrowserRouter>
  </React.StrictMode>
);
