import React, { useRef } from "react";
import { connect } from "react-redux";
import OrganizationSearchPage from "../../../components/pages/organization-search-page";
import SearchHint from "../../../components/search-hint";
import OrganizationDetailsContainer from "../../organization-details-container";
import OrganizationListContainer from "../../organization-list-container";
import Spinner from "../../../components/spinner";
import ErrorIndicator from './../../../components/error-indicator/error-indicator';

const OraganizationSearchPageContainer = ({ queryLength, isOrganizationsLoading, organizations, isShowOrganizationDetails, organizationsError }) => {

  const searchPanel = useRef();

  const focusSearchPanel = () => {
    searchPanel.current.focus();
  };

  const spinner = isOrganizationsLoading === true ? <Spinner /> : null;
  const hasData = !(isOrganizationsLoading || organizationsError);
  const errorMessage = organizationsError ? <ErrorIndicator /> : null;

  let pageContent;
  const isShowOrganizationDetailsContainer =
    organizations.length === 1 &&
    isShowOrganizationDetails &&
    !errorMessage &&
    hasData;

  if (isShowOrganizationDetailsContainer) {
    pageContent = <OrganizationDetailsContainer organization={organizations[0]} />;
  } else if (hasData && queryLength !== 0 && organizations.length !== 0) {
    pageContent = <OrganizationListContainer />
  } else {
    pageContent = null;
  }

  let resultHint;
  const isShowSearchHintResultEmpty =
    (queryLength !== 0 &&
    organizations.length === 0 &&
    !isOrganizationsLoading &&
    hasData)
    
  const isShowPreSearchHint =
    queryLength === 0 && organizations.length === 0 && hasData;

  if (isShowSearchHintResultEmpty) {
    resultHint = <SearchHint isSearchResultEmpty={true} />;
  } else if (isShowPreSearchHint) {
    resultHint = <SearchHint focusSearchPanel={focusSearchPanel} />
  } else {
    resultHint = null;
  }

  return (
    <OrganizationSearchPage
      spinner={spinner}
      pageContent={pageContent}
      resultHint={resultHint}
      errorMessage={errorMessage}
      searchPanelRef={searchPanel}
    />
  );
}

const mapStateToProps = ({
  searchPanelValue,
  isOrganizationsLoading,
  organizations,
  organizationsError,
  isShowOrganizationDetails,

}) => {
  return {
    queryLength: searchPanelValue.query.length,
    organizations,
    isShowOrganizationDetails,
    isOrganizationsLoading,
    organizationsError,
  };
};

export default connect(mapStateToProps)(OraganizationSearchPageContainer);
