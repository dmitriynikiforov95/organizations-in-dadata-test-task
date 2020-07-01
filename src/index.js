import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { DadataApiServiceContext } from "./components/dadata-api-service-context/";
import App from "./components/app";
import ErrorBoundary from "./components/error-boundary/";

import DadataApiService from "./services/dadata-api-service";
import store from "./store";

const dadataApiService = new DadataApiService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <DadataApiServiceContext.Provider value={dadataApiService}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </DadataApiServiceContext.Provider>
    </ErrorBoundary>
  </Provider>,
  document.getElementById("root")
);
