import React, { useState } from "react";
import { connect } from "react-redux";
import { useLocation } from 'react-router-dom';

import NavTabs from "../../components/nav-tabs";

const NavTabsContainer = ({ savedOrganizations }) => {

  const location = useLocation();

  const selectedPage =
   (location.pathname === "/saved-organizations")
      ? "saved-organizations"
      : "organizations-search";

  const [activeTab, setActiveTab] = useState(selectedPage);

  const navTabs = [
    {
      text: "новая организация",
      value: "organizations-search",
      link: "/",
    },
    {
      text: "сохраненные организации",
      value: "saved-organizations",
      link: "/saved-organizations",
    },
  ];

  return (
    <NavTabs
      navTabs={navTabs}
      savedOrganizations={savedOrganizations}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
    />
  );
};

const mapStateToProps = ({ savedOrganizations }) => {
  return {
    savedOrganizations,
  };
};

export default connect(mapStateToProps)(NavTabsContainer);
