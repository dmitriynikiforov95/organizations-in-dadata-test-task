import React from "react";
import OrganizationListItemContaniner from "../../containers/organization-list-item-container";

import s from "./organization-list.module.css";

const OrganizationList = ({ organizations, isSavedOrganizationList }) => {
  const organizationsList = organizations.map((item, idx) => (
    <li key={idx}>
      <OrganizationListItemContaniner
        organization={item}
        isSavedOrganizationList={isSavedOrganizationList}
      />
    </li>
  ));

  return <ul class={s.list}>{organizationsList}</ul>;
};

export default OrganizationList;
