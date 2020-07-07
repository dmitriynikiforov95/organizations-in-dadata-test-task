import React, { useRef } from "react";

import trashCan from "./trash-can.svg";
import classNames from "classnames/bind";

import s from "./organization-list-item.module.css";

const SavedOrgDetailsList = ({ details }) => {
  const SavedOrgDetailsListItem = ({ name, value }) =>
    value ? (
      <p className={s.savedOrgsPageItemSavedOrgDetail}>
        <span className={s.savedOrgsPageItemSavedOrgDetailName}>
          {name === "инн" || name === "кпп" || name === "огрн"
            ? name.toUpperCase()
            : name}
        </span>
        {value}
      </p>
    ) : null;

  return (
    <>
      {details.map((detail, id) => (
        <SavedOrgDetailsListItem {...detail} key={id} />
      ))}
    </>
  );
};

const OrganizationListItem = ({
  organization,
  organizationDetails,
  isSavedOrgsList,
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
    orgSearchPageItemContainer: !isSavedOrgsList,
    savedOrgsPageItemContainer: isSavedOrgsList,
  });

  const orgNameContainerClazz = cx({
    orgsSearchPageItemOrgNameContainer: !isSavedOrgsList,
    savedOrgsPageItemOrgNameContainer: isSavedOrgsList,
  });

  const orgsSearchPageItemDetails = (
    <p>
      <span className={s.orgSearchPageItemOrgInn}>{organization.data.inn}</span>
      <span>{organization.data.address.data.city_with_type}</span>
    </p>
  );

  const expansionPanel = (
    <>
      <div>
        <SavedOrgDetailsList details={organizationDetails.slice(0, 1)} />
      </div>
      <div ref={contentRef} style={expansionPanelContentStyle}>
        <SavedOrgDetailsList details={organizationDetails.slice(1)} />
      </div>
    </>
  );

  const savedOrgsPageItemDetails = (
    <>
      <div
        className={cx({
          savedOrgsPageItemExpansionPanelWrapper: true,
          savedOrgsPageItemExpansionPanelWrapperActive: isMoreDetailsOpen,
        })}
      >
        {expansionPanel}
      </div>
      <div
        onClick={() =>
          openDetails((prevIsMoreDetailsOpen) => !prevIsMoreDetailsOpen)
        }
      >
        <p className={s.savedOrgsPageItemMoreDetailsContainer}>
          <p className={s.savedOrgsPageItemMoreDetailsPositioningWrapper}>
            {" "}
            <span className={s.savedOrgsPageItemMoreDetailsText}>
              {isMoreDetailsOpen ? "скрыть подробности" : "подробнее"}
            </span>
            <i
              className={cx({
                savedOrgsPageItemArrow: true,
                savedOrgsPageItemArrowActive: isMoreDetailsOpen,
              })}
            ></i>
          </p>
        </p>
      </div>
    </>
  );

  return (
    <div
      className={containerClazz}
      onClick={isSavedOrgsList ? null : getОrganizationDetails}
    >
      <div className={orgNameContainerClazz}>
        <b className={cx({ savedOrganizationListOrgName: isSavedOrgsList })}>
          {organization.value}
        </b>
        {!isSavedOrgsList && orgsSearchPageItemDetails}
        {isSavedOrgsList && (
          <img
            className={s.savedOrgsPageItemTrashCan}
            src={trashCan}
            alt="remove-organization"
            onClick={removeOrganization}
          />
        )}
      </div>
      {isSavedOrgsList && savedOrgsPageItemDetails}
    </div>
  );
};

export default OrganizationListItem;
