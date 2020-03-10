import React from "react";
import { Link } from "react-router-dom";

import s from "./nav-tabs.module.css";

const NavTabs = () => {
  const clazz = s.btn + " " + s.activeBtn;
  return (
    <nav>
      <Link to="/">
        <button type="button" className={clazz}><span className={s.btnActiveText}>Новая организация</span></button>
      </Link>
      <Link to="/saved-organizations">
      <button type="button" className={s.btn}><span className={s.btnText}>Сохраненные организации (3) </span></button></Link>
    </nav>
  );
};

export default NavTabs;
