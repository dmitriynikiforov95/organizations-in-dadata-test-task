import React from "react";
import s from "./organization-details.module.css";

 const OrgDetailsList = ({ details }) => {
    const OrgDetailsListItem = ({ name, value }) =>
      value ? (
        <p className={s.detailWrapper}>
          <span className={s.detailName}>
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
          <OrgDetailsListItem {...detail} key={id} />
        ))}
      </>
    );
  };

  export default OrgDetailsList;