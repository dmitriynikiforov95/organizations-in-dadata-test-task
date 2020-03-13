import React from "react";
import { connect } from "react-redux";
import Popup from "reactjs-popup";
import {
  getОrganizationDetails,
  deleteOrganization,
  showSavedOrganizationDetails
} from "../../actions";

import OrganizationDetails from "../organization-details";
import s from "./organization.module.css";

const Organization = ({
  organization,
  getОrganizationDetails,
  isSavedOrganizationList,
  deleteOrganization,
  showSavedOrganizationDetails,
  organizationDetails
}) => {
  const deleteOrganizationBtn = (
    <button type="button" onClick={() => deleteOrganization(organization)}>
      удалить
    </button>
  );

  const getDetailsOrganizationBtn = (
    <div
      className={s.toolTip}
      onClick={() => showSavedOrganizationDetails(organization)}
    >
      <Popup trigger={<button className="button">подробнее </button>} modal>
        {close => (
          <div className={s.modal}>
            <a className={s.close} onClick={close}>
              &times;
            </a>
            <div className={s.content}>
              <OrganizationDetails organization={organizationDetails} />
            </div>
          </div>
        )}
      </Popup>
    </div>
  );

  return (
    <div
      className={s.container}
      onClick={
        !isSavedOrganizationList
          ? () => getОrganizationDetails(organization)
          : null
      }
    >
      <b>{organization.value}</b>
      <div className={s.wrapper}>
        <span className={s.inn}>{organization.data.inn}</span>
        <span>{organization.data.address.value} </span>
      </div>
      <div>
        {isSavedOrganizationList ? deleteOrganizationBtn : null}
        {isSavedOrganizationList ? getDetailsOrganizationBtn : null}
      </div>
    </div>
  );
};

const mapStateToProps = ({ organizationDetails }) => {
  return {
    organizationDetails: organizationDetails.details
  };
};

const mapDispatchToProps = {
  getОrganizationDetails,
  deleteOrganization,
  showSavedOrganizationDetails
};

export default connect(mapStateToProps, mapDispatchToProps)(Organization);
