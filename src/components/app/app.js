import React from "react";
import { Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import AppHeader from "../app-header";
import NavTabsContainer from "../../containers/nav-tabs-container";
import OraganizationSearchPageContainer from "../../containers/pages-container/organizations-search-page-container";
import SavedOrganizationsPageContainer from "../../containers/pages-container/saved-organizations-page-container";
import "./app.css";

const App = () => {
  const routes = [
    {
      path: "/organizations-in-dadata",
      Component: OraganizationSearchPageContainer,
    },
    {
      path: "/organizations-in-dadata/saved-organizations",
      Component: SavedOrganizationsPageContainer,
    },
  ];

  return (
    <>
      <AppHeader />
      <div className="app-container">
        <h1 className="app-title">Мои организации</h1>
        <NavTabsContainer />
        <div className="pages-positioning-container">
          {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={200}
                  classNames="page"
                  unmountOnExit
                >
                  <div className="page">
                    <div className="pages-container">
                      <Component />
                    </div>
                  </div>
                </CSSTransition>
              )}
            </Route>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
