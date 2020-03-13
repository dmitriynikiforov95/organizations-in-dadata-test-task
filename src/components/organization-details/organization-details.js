import React from "react";
import { connect } from "react-redux";

import {saveOrganization} from "../../actions/";
import s from "./organization-details.module.css";

const OrganizationDetails = ({organization, saveOrganization, isSavedOrganizationDetailsShowed}) => {

  const {value, data: {inn, kpp, ogrn, management, address}} = organization;


  const saveBtn = <button type="button" onClick={() => saveOrganization(organization)}>
  Сохранить
</button>

  return (
    <div>
      <h2 className={s.title}>{value}</h2>
      <b>Юридический адрес</b>
      <div>{address.unrestricted_value}</div>
      <b>Генеральный директор</b>
      <div>{management.name}</div>
      <ul>
        <li>{inn}</li>
        <li>{kpp}</li>
        <li>{ogrn}</li>
      </ul>
      {isSavedOrganizationDetailsShowed ? null : saveBtn}
    </div>
  );
}


const mapStateToProps = ({organizationDetails}) => {
  return {
    isSavedOrganizationDetailsShowed: organizationDetails.isSavedOrganizationDetailsShowed
  }
}

const mapDispatchToProps = {
  saveOrganization
}

export default connect(mapStateToProps, mapDispatchToProps)(OrganizationDetails);
