import React from "react";
import { connect } from "react-redux";

import SearchPanel from "../../search-panel";

import OrganizationListContainer from "../../../containers/organization-list-container";

const SearchHint = () => {
  return (
    <div>
      <p>search-hint-icon</p>
      <p>
        Для добавления новой организации
        <br />
        введите ее название, ИНН или адрес.
      </p>
    </div>
  );
};


const OraganizationSearchPage = ({searchPanelValue, foundOrganizations}) => {

  const isSearchPanelValueEmpty =
  searchPanelValue.query.length === 0
    ? <SearchHint />
    :  <OrganizationListContainer />;

  return (
    <div>
      <SearchPanel />
      {isSearchPanelValueEmpty}
    </div>
  );
};


const mapStateToProps = ({ searchPanelValue, foundOrganizations}) => {
  return {
    searchPanelValue,
   foundOrganizations,
  };
};

export default connect(mapStateToProps)(OraganizationSearchPage);
