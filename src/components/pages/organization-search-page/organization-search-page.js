import React from "react";
import { connect } from "react-redux";

import SearchPanel from "../../search-panel";

import OrganizationDetails from "../../organization-details/";

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

const OraganizationSearchPage = ({ searchPanelValue, foundOrganizations, isShowDetails }) => {

  const isSearchPanelValueEmpty =
    searchPanelValue.query.length === 0 ? (
      <SearchHint />
    ) : null;

  return (
    <div>
      <SearchPanel />
      {isSearchPanelValueEmpty}
      {(foundOrganizations.length === 1 && isShowDetails) ? (
          <OrganizationDetails details={foundOrganizations[0]} />
        ) : <OrganizationListContainer />}
    </div>
  );
};

const mapStateToProps = ({ searchPanelValue, foundOrganizations, isShowDetails }) => {
  return {
    searchPanelValue,
    foundOrganizations,
    isShowDetails
  };
};

export default connect(mapStateToProps)(OraganizationSearchPage);
