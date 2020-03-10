import React, { Component } from "react";
import { connect } from "react-redux";

import { changeQuery, getOrganizations } from "../../actions";
import withDadataApiService from "../hoc/with-dadata-api-service";
import s from "./search-panel.module.css";

class SearchPanel extends Component {
  componentDidUpdate(prevProps) {
    if (
      prevProps.searchPanelValue.query !== this.props.searchPanelValue.query
    ) {
      const { dadataApiService, getOrganizations } = this.props;
      const query = this.props.searchPanelValue;
      dadataApiService
        .getOrganizations(query)
        .then(res => getOrganizations(res.suggestions));
    }
  }

  render() {
    const { searchPanelValue, changeQuery } = this.props;
    return (
      <div>
        {/* rename */}
        <p className={s.title}>Организация или ИП</p>
        <input
          value={searchPanelValue.query}
          type="text"
          placeholder="Введите название, ИНН или адрес организации"
          className={s.searchPanel}
          onChange={e => changeQuery(e.target.value)}
        />
      </div>
    );
  }
}
const mapStateToProps = ({ searchPanelValue }) => {
  return {
    searchPanelValue
  };
};

const mapDispatchToProps = {
  changeQuery,
  getOrganizations
};

export default withDadataApiService(
  connect(mapStateToProps, mapDispatchToProps)(SearchPanel)
);
