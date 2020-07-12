import React from "react";
import { DebounceInput } from "react-debounce-input";
import s from "./search-panel.module.css";

const SearchPanel = ({ query, changeQuery, searchPanelRef }) => (
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

export default SearchPanel;
