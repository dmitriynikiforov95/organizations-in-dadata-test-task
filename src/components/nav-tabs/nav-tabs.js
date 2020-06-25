import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import s from "./nav-tabs.module.css";

const NavTabs = ({ navTabs, activeTab, setActiveTab, savedOrganizations }) => {
  const cx = classNames.bind(s);

  const savedOrganizationsLengthWithRoundBrackets = (
    <span
      className={cx({
        savedOrganizationsLength: true,
        activeSavedOrganizationsLength: activeTab === "saved-organizations",
      })}
    >
      {" "}
      ({savedOrganizations.length})
    </span>
  );

  return (
    <nav>
      {navTabs.map(({ text, value, link }) => {
        const isTabActive = activeTab === value;
        return (
          <Link to={link}>
            <button
              type="button"
              onClick={() => setActiveTab(value)}
              className={cx({
                tab: true,
                activeTab: isTabActive,
              })}
            >
              <span
                className={cx({
                  tabText: true,
                  tabActiveText: isTabActive,
                })}
              >
                {text[0].toUpperCase() + text.slice(1)}
                {value === "saved-organizations" &&
                  savedOrganizationsLengthWithRoundBrackets}
              </span>
            </button>
          </Link>
        );
      })}
    </nav>
  );
};

export default NavTabs;
