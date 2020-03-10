import React from "react";

import s from "./organization.module.css";

const Organization = props => {
    return (
      <div class={s.container}>
        <b>ООО “Пухлый буратино”</b>
        <div class={s.wrapper}>
          <span>789098768945</span>
          <span>г. Санкт-Петербург </span>
        </div>
      </div>
    );
  };

  export default Organization