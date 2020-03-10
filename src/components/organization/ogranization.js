import React from "react";
import { connect } from "react-redux";

import {getОrganizationDetails} from "../../actions";

import s from "./organization.module.css";

const Organization = ({organization, getОrganizationDetails}) => {

    return (
      <div className={s.container} onClick={() => getОrganizationDetails(organization)}>
        <b>{organization.value}</b>
        <div className={s.wrapper}>
          <span>{organization.data.inn}</span>
          <span>{organization.data.address.value} </span>
        </div>
      </div>
    );
  };

  const mapDispatchToProps = {
    getОrganizationDetails,
  };
  
  export default connect(
    null,
    mapDispatchToProps
  )(Organization);
  