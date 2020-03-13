import React from "react";
import { Link } from "react-router-dom";
import {toSavedOrganizationsPage} from "../../actions/";
import {connect} from "react-redux";

import s from "./nav-tabs.module.css";

const NavTabs = ({savedOrganizations, toSavedOrganizationsPage}) => {
  const clazz = s.btn + " " + s.activeBtn;
  return (
    <nav>
      <Link to="/">
        <button type="button" className={clazz}><span className={s.btnActiveText}>Новая организация</span></button>
      </Link>
      <Link to="/saved-organizations" onClick={toSavedOrganizationsPage}>
      <button type="button" className={s.btn}><span className={s.btnText}>Сохраненные организации ({savedOrganizations.length}) </span></button></Link>
    </nav>
  );
};

const mapStateToProps = ({savedOrganizations}) => {
  return {
    savedOrganizations
  }
}

const mapDispatchToProps = {
  toSavedOrganizationsPage
}

export default connect(mapStateToProps, mapDispatchToProps)(NavTabs);
