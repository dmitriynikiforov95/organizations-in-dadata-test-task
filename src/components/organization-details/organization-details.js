import React  from "react";

import s from "./organization-details.module.css";

const OrganizationDetails = ({
  organization,
  isOrganizationSaved,
  saveOrganization,
}) => {
  const {
    value,
    data: { inn, kpp, ogrn, management, address },
  } = organization;

  const saveOrganizationBtn = (
    <button
      className={`${s.btn} ${isOrganizationSaved && s.activeBtn}`}
      type="button"
      onClick={() => saveOrganization(organization)}
    >
      <span className={s.btnText}>
        {isOrganizationSaved ? "Сохранено" : "Сохранить"}
      </span>
    </button>
  );
  return (
    <div>
      <h2 className={s.title}>{value}</h2>
      <b>Юридический адрес</b>
      <div>{address.unrestricted_value}</div>
      {management?.name && (
        <>
          <b>Генеральный директор</b> <div>{management.name}</div>
        </>
      )}
      <ul>
        <li>{inn}</li>
        <li>{kpp}</li>
        <li>{ogrn}</li>
      </ul>
      {saveOrganizationBtn}
    </div>
  );
};

export default OrganizationDetails;
