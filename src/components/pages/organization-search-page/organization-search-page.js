import React from "react";
import SearchPanelContainer from "../../../containers/search-panel-container";

const OraganizationSearchPage = ({
  spinner,
  errorMessage,
  resultHint,
  pageContent,
  organizationDetails,
  searchPanelRef,
}) => (
  <>
    <SearchPanelContainer searchPanelRef={searchPanelRef} />
    {spinner}
    {errorMessage}
    {resultHint}
    {pageContent}
    {organizationDetails}
  </>
);

export default OraganizationSearchPage;
