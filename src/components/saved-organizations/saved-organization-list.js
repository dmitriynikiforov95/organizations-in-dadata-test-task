import React from "react";
import { connect } from "react-redux";

import OrganizationList from "../organization-list";

const SavedOrganizationList = ({ savedOrganizations }) => {
  if (savedOrganizations.length === 0)
    return <p>Сохраненные организации отсутствуют</p>;
    
  return <OrganizationList organizations={savedOrganizations} />;
};

const mapStateToProps = ({ savedOrganizations }) => {
  return {
    savedOrganizations
  };
};

export default connect(mapStateToProps)(SavedOrganizationList);
