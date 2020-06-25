import React from "react";
import s from "./search-panel.module.css";
import {DebounceInput} from 'react-debounce-input';
const SearchPanel = ({query, changeQuery, searchPanelRef}) => {

    return (
      <div>
        <p className={s.prePanelText}>Организация или ИП</p>
        <DebounceInput
          debounceTimeout={600}
          value={query}
          inputRef={searchPanelRef}
          type="text"
          placeholder="Введите название, ИНН или адрес организации"
          className={s.searchPanel}
          onChange={(e) => changeQuery(e.target.value)}
        />
      </div>
    );
}

export default SearchPanel;
