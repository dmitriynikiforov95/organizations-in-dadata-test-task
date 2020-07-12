import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { saveOrganization } from "../../actions/";
import OrganizationDetails from "../../components/organization-details";

const OrganizationDetailsContainer = ({
  organization,
  saveOrganization,
  savedOrganizations,
}) => {
  
  const isOrgAlrdySaved = savedOrganizations.find(
    ({ data: { hid } }) => hid === organization.data.hid
  );
    
  const [isOrganizationSaved, setIsOrganizationSavedValue] = useState(
    isOrgAlrdySaved
  );

  useEffect(() => {
    if (isOrgAlrdySaved) {
      setIsOrganizationSavedValue(true);
    }
  }, [savedOrganizations, isOrgAlrdySaved]);

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
