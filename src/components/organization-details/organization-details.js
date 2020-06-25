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
      <h2 className={s.title}>{value}</h2>
      <div className={s.OrganizationDetailsWrapper}>
        <p className={s.managementInfo}>
          <p className={s.addressWrapper}>
          <b>Юридический адрес</b>
          <br></br>
          {address?.unrestricted_value}
          </p>
          {management?.name && (
            <p className={s.generalManagerWrapper}>
              <b>Генеральный директор</b>
              <br></br>
              {management.name}
            </p>
          )}
        </p>
        <ul className={s.identifierList}>
          <li className={s.identifierItem}>
            <strong>{"инн".toUpperCase()}</strong> {inn}
          </li>
          <li className={s.identifierItem}>
            <strong>{"кпп".toUpperCase()} </strong> {kpp}
          </li>
          <li className={s.identifierItem}>
            <strong>{"огрн".toUpperCase()} </strong> {ogrn}
          </li>
        </ul>
      </div>
      {saveOrganizationBtn}
    </>
  );
};

export default OrganizationDetails;
