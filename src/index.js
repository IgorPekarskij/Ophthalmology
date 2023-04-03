import React from "react";
import {ChakraBaseProvider, ChakraProvider} from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { GlobalContextProvider } from "./context/globalContext";
import { createStandaloneToast } from '@chakra-ui/react';

const root = ReactDOM.createRoot(document.getElementById("root"));

const { ToastContainer } = createStandaloneToast()

root.render(
    <React.StrictMode>
        <ChakraProvider toastOptions={{ defaultOptions: { position: 'bottom' } }}>
            <GlobalContextProvider>
                <BrowserRouter>
                    <App />
                    <ToastContainer />
                </BrowserRouter>
            </GlobalContextProvider>
        </ChakraProvider>
    </React.StrictMode>
);