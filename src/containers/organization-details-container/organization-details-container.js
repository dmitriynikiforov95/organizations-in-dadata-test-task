import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { saveOrganization } from "../../actions/";
import OrganizationDetails from "../../components/organization-details";

const OrganizationDetailsContainer = ({
  organization,
  saveOrganization,
  savedOrganizations,
}) => {
  const isOrganizationAlreadySaved = savedOrganizations.find(
    ({ data: { hid } }) => hid === organization.data.hid
  )
    ? true
    : false;
    
  const [isOrganizationSaved, setIsOrganizationSavedValue] = useState(
    isOrganizationAlreadySaved
  );

  useEffect(() => {
    if (isOrganizationAlreadySaved) {
      setIsOrganizationSavedValue(true);
    }
  }, [savedOrganizations, isOrganizationAlreadySaved]);

  return (
    <OrganizationDetails
      organization={organization}
      isOrganizationSaved={isOrganizationSaved}
      saveOrganization={saveOrganization}
    />
  );
};

const mapStateToProps = ({ savedOrganizations }) => ({
  savedOrganizations,
});

const mapDispatchToProps = {
  saveOrganization,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrganizationDetailsContainer);
