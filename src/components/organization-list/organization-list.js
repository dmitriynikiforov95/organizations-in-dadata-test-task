import React from "react";
import Organization from "../organization";

import s from "./organization-list.module.css";

const OrganizationList = ({organizations}) => {
  
  let organizationsList = organizations.map((item, idx) => (
    <li key={idx}><Organization organization={item}/></li>
  ));

  return <ul class={s.list}>{organizationsList}</ul>;
};

export default OrganizationList;