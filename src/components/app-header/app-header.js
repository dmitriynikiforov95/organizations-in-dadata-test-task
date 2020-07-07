import React from "react";
import logo from "./app-logo.svg";
import s from "./app-header.module.css";

const AppHeader = () => (
  <header class={s.header}>
    <div class={s.container}>
      <img
        src={logo}
        className={s.logo}
        width="52"
        heigth="48"
        alt="app-logo"
      />
    </div>
  </header>
);

export default AppHeader;
