import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/home-page";
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
        <Route path ="/" exact component={HomePage} />
      </Switch>
      </div>
      </div>
    </div>
  );
};

export default App;
