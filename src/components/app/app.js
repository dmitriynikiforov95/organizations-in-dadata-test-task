import React from "react";
import { Switch, Route } from "react-router-dom";

import NavTabsContainer from "../../containers/nav-tabs-container";
import OraganizationSearchPageContainer from "../../containers/pages-container/organizations-search-page-container";
import SavedOrganizationsPageContainer from "../../containers/pages-container/saved-organizations-page-container";
import AppHeader from "../app-header";

import "./app.css";

const App = () => {
  return (
    <div>
      <AppHeader />
      <div className="pages-container">
        <h1 className="app-title">Мои организации</h1>
        <NavTabsContainer />
        <div className="pages-content-container">
          <Switch>
            <Route path="/" exact component={OraganizationSearchPageContainer} />
            <Route path="/saved-organizations" exact component={SavedOrganizationsPageContainer} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default App;
