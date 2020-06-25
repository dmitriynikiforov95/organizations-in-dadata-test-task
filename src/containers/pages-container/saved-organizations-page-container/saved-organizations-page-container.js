import React from "react";
import { connect } from "react-redux";
import SavedOrganizationsPage from "../../../components/pages/saved-organizations-page";

const SavedOrganizationsPageContainer = ({ savedOrganizations }) => <SavedOrganizationsPage savedOrganizations={savedOrganizations} />

const mapStateToProps = ({ savedOrganizations }) => {
  return {
    savedOrganizations,
  };
};

export default connect(mapStateToProps)(SavedOrganizationsPageContainer);
