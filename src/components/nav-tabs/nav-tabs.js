import React from "react";
import { Link } from "react-router-dom";
import {connect} from "react-redux";

import s from "./nav-tabs.module.css";

const NavTabs = ({savedOrganizations}) => {
  const clazz = s.btn + " " + s.activeBtn;
  return (
    <nav>
      <Link to="/">
        <button type="button" className={clazz}><span className={s.btnActiveText}>Новая организация</span></button>
      </Link>
      <Link to="/saved-organizations">
      <button type="button" className={s.btn}><span className={s.btnText}>Сохраненные организации ({savedOrganizations.length}) </span></button></Link>
    </nav>
  );
};

const mapStateToProps = ({savedOrganizations}) => {
  return {
    savedOrganizations
  }
}

export default connect(mapStateToProps)(NavTabs);
