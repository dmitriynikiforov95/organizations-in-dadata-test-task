import React, { Component } from "react";
import s from "./search-panel.module.css";

export default class SearchPanel extends Component {
  render() {
    return (
      <div>
        {/* rename */}
        <p className={s.title}>Организация или ИП</p>
        <input
          type="text"
          placeholder="Введите название, ИНН или адрес организации"
          className={s.searchPanel}
        />
      </div>
    )
  }
}



