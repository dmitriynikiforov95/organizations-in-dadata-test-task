import React from "react";
import { Link } from "react-router-dom";

import s from "./nav-tabs.module.css";

const NavTabs = ({ navTabs, activeTab, setActiveTab, savedOrganizations }) => {

  const savedOrganizationsLength = <span className={`${s.savedOrganizationsLength} ${
    activeTab === "saved-organizations" && s.activeSavedOrganizationsLength
    }`}> ({savedOrganizations.length})</span>;

  return (
    <nav>
      {navTabs.map(({ text, value, link }) => (
        <Link to={link}>
          <button type="button"
            onClick={() => setActiveTab(value)}
            className={`${s.btn} ${
              activeTab === value ? s.activeBtn : ""
              }`}>
            <span className={`${s.text} ${
              activeTab === value ? s.activeText : ""
              }`}>
              {text[0].toUpperCase() + text.slice(1)}{value === "saved-organizations" && savedOrganizationsLength}
            </span></button>
        </Link>
      ))}
    </nav>
  );
};

export default NavTabs;
