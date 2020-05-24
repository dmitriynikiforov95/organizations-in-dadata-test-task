import React from "react";

import SearchPanelContainer from "../../../containers/search-panel-container";

const OraganizationSearchPage = ({pageContent, searchPanelRef}) => {

  return (
    <div>
      <SearchPanelContainer searchPanelRef={searchPanelRef} />
      {pageContent}
    </div>
  );
}

export default OraganizationSearchPage;
