import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { GlobalContextProvider } from "./context/globalContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <GlobalContextProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </GlobalContextProvider>
    </React.StrictMode>
);
