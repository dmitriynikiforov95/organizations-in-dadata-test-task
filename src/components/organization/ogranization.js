import React from "react";
import { connect } from "react-redux";

import { getОrganizationDetails, deleteOrganization } from "../../actions";

import s from "./organization.module.css";

const Organization = ({
  organization,
  getОrganizationDetails,
  hasDeleteOrganizationBtn,
  deleteOrganization
}) => {
  const deleteOrganizationBtn = <button type="button" onClick={() => deleteOrganization(organization)}>удалить</button>;

  return (
    <div
      className={s.container}
      onClick={() => getОrganizationDetails(organization)}
    >
      <b>{organization.value}</b>
      <div className={s.wrapper}>
        <span>{organization.data.inn}</span>
        <span>{organization.data.address.value} </span>
      </div>
      {hasDeleteOrganizationBtn ? deleteOrganizationBtn : null}
    </div>
  );
};

const mapDispatchToProps = {
  getОrganizationDetails,
  deleteOrganization
};

export default connect(null, mapDispatchToProps)(Organization);
