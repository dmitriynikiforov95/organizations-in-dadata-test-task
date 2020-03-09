import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { DadataApiServiceProvider } from "./components/dadata-api-service-context/";
import App from "./components/app";
import ErrorBoundry from "./components/error-boundry/";

import DadataApiService from "./services/dadata-api-service";
import store from "./store";

const dadataService = new DadataApiService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <DadataApiServiceProvider value={dadataService}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </DadataApiServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById("root")
);
