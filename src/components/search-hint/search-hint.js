import React from "react";
import icon from "./search-hint-icon.png";
import classNames from "classnames/bind";
import s from "./search-hint.module.css";

const SearchHint = ({
  isSearchResultEmpty,
  focusSearchPanel,
  isSavedOrganizationsPage,
}) => {
  const cx = classNames.bind(s);

  if (isSavedOrganizationsPage)
    return (
      <p className={s.isResultEmpty}> Сохраненные организации отсутствуют.</p>
    );

  if (isSearchResultEmpty)
    return (
      <p
        className={cx({
          isResultEmpty: true,
          orgSearchPage: true,
        })}
      >
        К сожалению, поиск организации по вашему запросу не дал результатов.
        <br /> Пожалуйста, проверьте введенные данные и повторите попытку.
      </p>
    );

  return (
    <div className={s.container}>
      <img
        onClick={focusSearchPanel}
        src={icon}
        width="68"
        height="68"
        alt="search-hint"
      />
      <p className={s.text}>
        Для добавления новой организации
        <br />
        введите ее название, ИНН или адрес.
      </p>
    </div>
  );
};

export default SearchHint;
