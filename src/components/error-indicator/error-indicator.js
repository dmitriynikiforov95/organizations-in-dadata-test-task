import React from "react";
import s from "./error-indicator.module.css";

const ErrorIndicator = () => {
    return (
          <div className={s.messageWrapper}>
            <p className={s.title}>Ошибка</p>
            <div>Организации не загружены  <br></br>Техническая поддержка <a href="https://dadata.userecho.com">https://dadata.userecho.com/</a></div>
          </div>
      );
}

export default ErrorIndicator;