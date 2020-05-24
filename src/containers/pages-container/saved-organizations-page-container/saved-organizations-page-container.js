import React from "react";
import { connect } from "react-redux";

import SearchHint from "../../../components/search-hint";
import SavedOrganizationsPage from "../../../components/pages/saved-organizations-page";

const SavedOrganizationsPageContainer = ({ savedOrganizations }) => {
  if (savedOrganizations.length === 0)
    return <SearchHint isSavedOrganizationsPage={true} />;

  return <SavedOrganizationsPage savedOrganizations={savedOrganizations} />;
};

const mapStateToProps = ({ savedOrganizations }) => {
  return {
    savedOrganizations,
  };
};

export default connect(mapStateToProps)(SavedOrganizationsPageContainer);
