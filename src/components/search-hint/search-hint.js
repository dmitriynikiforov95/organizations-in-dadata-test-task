import React from "react";
import icon from "./search-hint-icon.png";
import s from "./search-hint.module.css";

const SearchHint = ({
  isSearchResultEmpty,
  focusSearchPanel,
  isSavedOrganizationsPage,
}) => {
  if (isSearchResultEmpty)
    return (
      <p className={s.isResultEmpty}>
        К сожалению, поиск организации по вашему запросу не дал результатов.
        <br /> Пожалуйста, проверьте введенные данные и повторите попытку.
      </p>
    );
  if (isSavedOrganizationsPage)
    return <p className={s.isResultEmpty}> Сохраненные организации отсутствуют.</p>;

  return (
    <div className={s.container}>
      <img onClick={focusSearchPanel} src={icon} alt="search-hint" />
      <p className={s.text}>
        Для добавления новой организации
        <br />
        введите ее название, ИНН или адрес.
      </p>
    </div>
  );
};

export default SearchHint;
