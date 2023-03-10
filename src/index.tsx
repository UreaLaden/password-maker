import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { registerIcons,initializeIcons } from "@fluentui/react";
import { SVGIcons } from "./utils/helpers";
import { PasswordContextProvider } from './store/passwordContext';

initializeIcons();
registerIcons(SVGIcons);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <PasswordContextProvider>
    <App />
  </PasswordContextProvider>
);
