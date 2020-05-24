import React from "react";
import OrganizationList from "../../organization-list";

const SavedOrganizationsPage = ({ savedOrganizations }) => {
  return (
    <OrganizationList
      organizations={savedOrganizations}
      isSavedOrganizationList={true}
    />
  );
};

export default SavedOrganizationsPage;
