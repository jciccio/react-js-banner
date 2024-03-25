
import './index.css';
import React from 'react';

import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render( <StrictMode>
    <App />
  </StrictMode>
);


