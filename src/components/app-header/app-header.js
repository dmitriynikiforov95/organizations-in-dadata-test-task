import React from "react";
import logo from "./app-logo.svg";
import s from "./app-header.module.css";

const AppHeader = () => {
  return (
    <header class={s.header}>
      <div class={s.container}>
        <img src={logo} alt="app-logo"/>
      </div>
    </header>
  );
};

export default AppHeader;
