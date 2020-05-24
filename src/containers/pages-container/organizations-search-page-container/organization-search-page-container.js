import React, { useRef } from "react";
import { connect } from "react-redux";
import OrganizationSearchPage from "../../../components/pages/organization-search-page";
import SearchHint from "../../../components/search-hint";
import OrganizationDetailsContainer from "../../organization-details-container";
import OrganizationListContainer from "../../organization-list-container";

const OraganizationSearchPageContainer = ({ queryLength, isQueryResultloading, organizations, isShowOrganizationDetails }) => {

  const searchPanel = useRef();

  const focusSearchPanel = () => {
    searchPanel.current.focus();
  };

  let pageContent;

  if (organizations.length === 1 && isShowOrganizationDetails) {
    pageContent = <OrganizationDetailsContainer organization={organizations[0]} />;
  } else if (queryLength !== 0 && organizations.length === 0 && !isQueryResultloading) {
    pageContent = <SearchHint isSearchResultEmpty={true} />;
  } else if (queryLength === 0) {
    pageContent = <SearchHint focusSearchPanel={focusSearchPanel} />;
  } else {
    pageContent = <OrganizationListContainer />;
  }

  return (
   <OrganizationSearchPage pageContent={pageContent} searchPanelRef={searchPanel}/>
  );
}

const mapStateToProps = ({
  searchPanelValue,
  isQueryResultloading,
  organizations,
  isShowOrganizationDetails,
  
}) => {
  return {
    queryLength: searchPanelValue.query.length,
    organizations,
    isShowOrganizationDetails,
    isQueryResultloading,
  };
};

export default connect(mapStateToProps)(OraganizationSearchPageContainer);
