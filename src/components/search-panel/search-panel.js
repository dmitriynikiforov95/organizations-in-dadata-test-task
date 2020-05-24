import React from "react";

import s from "./search-panel.module.css";

const SearchPanel = ({query, changeQuery, searchPanelRef}) => {
    return (
      <div>
        <p className={s.text}>Организация или ИП</p>
        <input
          value={query}
          ref={searchPanelRef}
          type="text"
          placeholder="Введите название, ИНН или адрес организации"
          className={s.searchPanel}
          onChange={e => changeQuery(e.target.value)}
        />
      </div>
    );
}

export default SearchPanel;
