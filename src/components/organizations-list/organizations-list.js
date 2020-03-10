import React from "react";
import Organization from "../organization";

import s from "./organizations-list.module.css";

const OrganizationsList = () => {
    let data = ["test", "test"];

  let organizations = data.map(item => (
    <li><Organization/></li>
  ));

  return <ul class={s.list}>{organizations}</ul>;
};

export default OrganizationsList;