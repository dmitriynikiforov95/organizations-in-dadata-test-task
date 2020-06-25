import React, { useRef } from "react";

import trashCan from "./trash-can.svg";
import classNames from 'classnames/bind';

import s from "./organization-list-item.module.css";

const OrganizationDetailsList = ({ details }) => {
  const OrganizationDetailsListItem = ({ name, value }) =>
    value ? (
      <p className={s.organizationDetail}><span className={s.organizationDetailName}>
        {(name === "инн" || name ===  "кпп" || name === "огрн") ? name.toUpperCase() : name}
      </span>
        {value}</p>
    ) : null;

  return (
    <>
      {details.map((detail, id) => (
        <OrganizationDetailsListItem {...detail} key={id} />
      ))}
    </>
  );
};

const OrganizationListItem = ({
  organization,
  organizationDetails,
  isSavedOrganizationList,
  getОrganizationDetails,
  removeOrganization,
  openDetails,
  isMoreDetailsOpen,
}) => {

  const contentRef = useRef(null);

  const expansionPanelContentStyle = {
    transitionProperty: "max-height",
    transitionDuration: " 0.4s",
    maxHeight: isMoreDetailsOpen
      ? `${contentRef.current.scrollHeight}px`
      : "0px",
  };

  const cx = classNames.bind(s);

  const containerClazz = cx({
    container: !isSavedOrganizationList,
    savedOrganizationListContainer: isSavedOrganizationList,
  });

  const orgNameTextClazz = cx({
    orgNameText: !isSavedOrganizationList,
    savedOrganizationListOrgNameText: isSavedOrganizationList,
  });

  const orgNameContainerClazz = cx({
    orgNameContainer: !isSavedOrganizationList,
    savedOrganizationListOrgNameContainer: isSavedOrganizationList,
  });

  const arrowClazz = cx({ arrow: true, arrowActive: isMoreDetailsOpen });
  
  const organizationDetailsExpansionPanelWrapperClazz = cx({
    organizationDetailsExpansionPanelWrapper: true,
    organizationDetailsExpansionPanelWrapperActive: isMoreDetailsOpen,
  });


  const organizationDetailsExpansionPanel = (
    <>
      <div>
        <OrganizationDetailsList details={organizationDetails.slice(0, 1)} />
      </div>
      <div
        ref={contentRef}
        style={expansionPanelContentStyle}
      >
        <OrganizationDetailsList details={organizationDetails.slice(1)} />
      </div>
    </>
  )
  
  return (
    <div
      className={containerClazz}
      onClick={!isSavedOrganizationList ? getОrganizationDetails : null}
    >
      <div className={orgNameContainerClazz}>
        <b className={orgNameTextClazz}>{organization.value}</b>
       {!isSavedOrganizationList && <p>
        <span className={orgNameTextClazz + " " + s.orgInn}>{organization.data.inn}</span>
        <span className={orgNameTextClazz}>{organization.data.address.data.city_with_type}</span>
       </p>}
        {isSavedOrganizationList && (
          <img
            className={s.trashCan}
            src={trashCan}
            alt="remove-organization"
            onClick={removeOrganization}
          />
        )}
      </div>
      <div>
        <div className={organizationDetailsExpansionPanelWrapperClazz}>
          {isSavedOrganizationList && organizationDetailsExpansionPanel}
        </div>
        <div>
          {isSavedOrganizationList && (
            <div
              onClick={() => openDetails((prevIsMoreDetailsOpen) => !prevIsMoreDetailsOpen)}
            >
              <p className={s.moreDetailsContainer}>
                <p className={s.moreDetailsWrapper}> <span className={s.moreDetailsText}>
                  {isMoreDetailsOpen ? "скрыть подробности" : "подробнее"}
                </span>
                <i className={arrowClazz}></i>
                  </p>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default OrganizationListItem;
