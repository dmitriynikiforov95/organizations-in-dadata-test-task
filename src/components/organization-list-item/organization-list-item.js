import React  from "react";

import arrow from "./arrow.svg";
import trashCan from "./trash-can.svg";

import s from "./organization-list-item.module.css";

const OrganizationDetailsItem = ({ name, value }) => {
  if (!value) return null;

  return <p className={s.organizationDetail}>{`${name} ${value}`}</p>;
};

const OrganizationListItem = ({
      organizationName,
      organizationDetails,
      isSavedOrganizationList,
      getОrganizationDetails,
      deleteOrganization,
      openDetails,
      isMoreDetailsOpen,
}) => {

  const showedOrganizationDetails = (
    <>
      {organizationDetails.map((item) => (
        <OrganizationDetailsItem {...item} />
      ))}
    </>
  );

  let arrowClazz = s.arrow;

  if (isMoreDetailsOpen) arrowClazz += " " + s.arrowActive;

  return (
    <div
      className={s.container}
      onClick={
        !isSavedOrganizationList
          ? () => getОrganizationDetails()
          : null
      }
    >
      <div className={s.valueContainer}>
        <b>{organizationName}</b>
        {isSavedOrganizationList && (
          <img
            className={s.trashCan}
            src={trashCan}
            alt="trash-can"
            onClick={() => deleteOrganization()}
          />
        )}
      </div>

      <div className={s.wrapper}>{showedOrganizationDetails}</div>
      <div>
        {isSavedOrganizationList && (
          <div
            onClick={() =>
              openDetails((prevIsMoreDetailsOpen) => {
                const isMoreDetailsOpen = !prevIsMoreDetailsOpen;
                return isMoreDetailsOpen;
              })
            }
          >
            <p className={s.moreDetailsContainer}>
              <span className={s.moreDetailsText}>
                {" "}
                {isMoreDetailsOpen ? "скрыть подробности" : "подробнее"}
              </span>
              <img className={arrowClazz} src={arrow} alt="arrow" />
            </p>
          </div>
        )}
      </div>
    </div>
  );
};


export default OrganizationListItem;
