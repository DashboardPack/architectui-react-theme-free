import "./polyfills";
import React from "react";
import { createRoot } from 'react-dom/client';

import { HashRouter } from "react-router-dom";
import "./assets/base.scss";
import Main from "./DemoPages/Main";
import configureAppStore from "./config/configureStore";
import { Provider } from "react-redux";

const store = configureAppStore();
const rootElement = document.getElementById("root");

const renderApp = (Component) => (
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true
        }}
      >
        <Component />
      </HashRouter>
    </Provider>
  </React.StrictMode>
);

const root = createRoot(rootElement);
root.render(renderApp(Main));

// Vite HMR
if (import.meta.hot) {
  import.meta.hot.accept("./DemoPages/Main", (newModule) => {
    if (newModule) {
      root.render(renderApp(newModule.default));
    }
  });
}