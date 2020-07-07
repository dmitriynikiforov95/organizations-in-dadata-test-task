import React from "react";
import s from "./organization-details.module.css";
import classNames from "classnames/bind";

const OrganizationDetails = ({
  organization,
  isOrganizationSaved,
  saveOrganization,
}) => {
  const {
    value,
    data: { inn, kpp, ogrn, management, address },
  } = organization;

  const identifierList = [
    { text: "инн", value: inn },
    { text: "кпп", value: kpp },
    { text: "огрн", value: ogrn },
  ];

  const managementInfo = [
    {
      text: "юридический адрес",
      value: address?.unrestricted_value,
      clazz: s.addressWrapper,
    },
    {
      text: "генеральный директор",
      value: management?.name,
      clazz: s.generalManagerWrapper,
    },
  ];

  const cx = classNames.bind(s);

  const saveOrganizationBtn = (
    <button
      className={cx({
        btn: true,
        activeBtn: isOrganizationSaved,
      })}
      type="button"
      onClick={() => saveOrganization(organization)}
    >
      <span className={s.btnText}>
        {isOrganizationSaved ? "Сохранено" : "Сохранить"}
      </span>
    </button>
  );

  return (
    <>
      <h2 className={s.orgName}>{value}</h2>
      <div className={s.orgDetailsWrapper}>
        <p className={s.managementInfo}>
          {managementInfo.map(
            ({ text, value, clazz }) =>
              value && (
                <p className={clazz}>
                  <b>{text[0].toUpperCase() + text.slice(1)}</b>
                  <br></br>
                  {value}
                </p>
              )
          )}
        </p>
        <ul className={s.identifierList}>
          {identifierList.map(
            ({ text, value }) =>
              value && (
                <li className={s.identifierItem}>
                  <strong>{text.toUpperCase()}</strong> {value}
                </li>
              )
          )}
        </ul>
      </div>
      {saveOrganizationBtn}
    </>
  );
};

export default OrganizationDetails;
