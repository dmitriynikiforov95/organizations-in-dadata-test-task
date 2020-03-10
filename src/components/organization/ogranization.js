import React from "react";

import s from "./organization.module.css";

const Organization = ({organization}) => {
    return (
      <div class={s.container}>
        <b>{organization.value}</b>
        <div class={s.wrapper}>
          <span>{organization.data.inn}</span>
          <span>{organization.data.address.value} </span>
        </div>
      </div>
    );
  };

  export default Organization