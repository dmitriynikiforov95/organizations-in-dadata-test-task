import React,{useContext} from "react";
import { connect } from "react-redux";
import { DadataApiServiceContext } from "../../components/dadata-api-service-context";
import {
  changeQuery,
  fetchOrganizations,
} from "../../actions";

import useEffectOnlyOnUpdate from "../../helpers";

import SearchPanel from "../../components/search-panel";

const SearchPanelContainer = ({
  isShowOrganizationDetails,
  fetchOrganizations,
  searchPanelValue,
  changeQuery,
  searchPanelRef,
}) => {

  const dadataApiService = useContext(DadataApiServiceContext);

  useEffectOnlyOnUpdate(() => {
    fetchOrganizations(dadataApiService, searchPanelValue, !isShowOrganizationDetails)
  }, [searchPanelValue]);

  return (
      <SearchPanel
        query={searchPanelValue.query}
        changeQuery={changeQuery}
        searchPanelRef={searchPanelRef}
      />
  );
};

const mapStateToProps = ({ searchPanelValue, isShowOrganizationDetails }) => {
  return {
    searchPanelValue,
    isShowOrganizationDetails,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeQuery: (e) => dispatch(changeQuery(e)),
    fetchOrganizations: fetchOrganizations(dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPanelContainer)

