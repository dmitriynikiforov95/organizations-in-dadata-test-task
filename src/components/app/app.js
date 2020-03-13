import React from "react";
import { Switch, Route } from "react-router-dom";
import OraganizationSearchPage from "../pages/organization-search-page";
import SavedOrganizationsPage from "../pages/saved-organizations-page";
import NavTabs from "../nav-tabs";
import "./app.css";

import AppHeader from "../app-header";
const App = () => {
  return (
    <div>
      <AppHeader />
      <div className="pages-container">
      <h1 className="app-title">Мои организации</h1>
      <NavTabs />
      <div className="pages-content-container">
      <Switch>
        <Route path ="/" exact component={OraganizationSearchPage} />
        <Route path ="/saved-organizations" exact component={SavedOrganizationsPage} />
      </Switch>
      </div>
      </div>
    </div>
  );
};

export default App;
