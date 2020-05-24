import React from "react";
import { connect } from "react-redux";

import { changeQuery, getOrganizations } from "../../actions";

import useEffectOnlyOnUpdate from "../../helpers";

import {withDadataApiService} from "../../components/hoc/with-dadata-api-service";
import SearchPanel from "../../components/search-panel";

const SearchPanelContainer = ({ dadataApiService, getOrganizations, searchPanelValue, changeQuery, searchPanelRef}) => {

  useEffectOnlyOnUpdate(() => {
      dadataApiService
        .getOrganizations(searchPanelValue)
        .then(({ suggestions }) => getOrganizations(suggestions))
    }, [searchPanelValue])

  return (
    <SearchPanel query={searchPanelValue.query} changeQuery={changeQuery} searchPanelRef={searchPanelRef}/>
  );
}

const mapStateToProps = ({ searchPanelValue }) => {
  return {
    searchPanelValue
  };
};

const mapDispatchToProps = {
  changeQuery,
  getOrganizations,
};

export default withDadataApiService(
  connect(mapStateToProps, mapDispatchToProps)(SearchPanelContainer)
);
