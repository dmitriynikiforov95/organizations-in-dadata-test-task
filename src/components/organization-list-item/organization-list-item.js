import React, { useRef } from "react";
import OrgDetailsList from './organization-details-list/organization-details-list';
import trashCan from "./trash-can.svg";
import classNames from "classnames/bind";
import s from "./organization-list-item.module.css";

const OrganizationListItem = ({
  organization,
  organizationDetails,
  isSavedOrgsList,
  getОrganizationDetails,
  removeOrganization,
  openDetails,
  isMoreDetailsOpen,
}) => {
  const cx = classNames.bind(s);

  const contentRef = useRef(null);

  const expansionPanelContentStyle = {
    transitionProperty: "max-height",
    transitionDuration: " 0.4s",
    maxHeight: isMoreDetailsOpen
      ? `${contentRef.current.scrollHeight}px`
      : "0px",
  };

  const orgListItemContent = (
    <p>
      <span className={s.orgListItemOrgInn}>{organization.data.inn}</span>
      <span>{organization.data.address.data.city_with_type}</span>
    </p>
  );
  
  const expansionPanel = (
    <>
      <div>
        <OrgDetailsList details={organizationDetails.slice(0, 1)} />
      </div>
      <div ref={contentRef} style={expansionPanelContentStyle}>
        <OrgDetailsList details={organizationDetails.slice(1)} />
      </div>
    </>
  );

  const savedOrgListItemContent = (
    <>
      <div
        className={cx({
          expansionPanelWrapper: true,
          expansionPanelWrapperActive: isMoreDetailsOpen,
        })}
      >
       {expansionPanel}
      </div>
      <div
        onClick={() =>
          openDetails((prevIsMoreDetailsOpen) => !prevIsMoreDetailsOpen)
        }
      >
        <p className={s.savedOrgListItemFooter}>
          <p className={s.savedOrgListItemFooterInnerWrapper}>
            {" "}
            <span className={s.savedOrgListItemFooterText}>
              {isMoreDetailsOpen ? "скрыть подробности" : "подробнее"}
            </span>
            <i
              className={cx({
                arrowIcon: true,
                arrowIconActive: isMoreDetailsOpen,
              })}
            ></i>
          </p>
        </p>
      </div>
    </>
  );

  return (
    <div
      className={cx({
        orgListItemContainer: !isSavedOrgsList,
        savedOrgListItemContainer: isSavedOrgsList,
      })}
      onClick={isSavedOrgsList ? null : getОrganizationDetails}
    >
      <div
        className={cx({
          orgListItemOrgNameContainer: !isSavedOrgsList,
          savedOrgListItemOrgNameContainer: isSavedOrgsList,
        })}
      >
        <b className={cx({ savedOrgListItemOrgName: isSavedOrgsList })}>
          {organization.value}
        </b>
        {!isSavedOrgsList && orgListItemContent}
        {isSavedOrgsList && (
          <img
            className={s.trashCanIcon}
            src={trashCan}
            alt="remove-organization"
            onClick={removeOrganization}
          />
        )}
      </div>
      {isSavedOrgsList && savedOrgListItemContent}
    </div>
  );
};

export default OrganizationListItem;
