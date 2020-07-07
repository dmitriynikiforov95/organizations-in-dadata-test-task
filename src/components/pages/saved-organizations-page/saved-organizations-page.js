import React from "react";
import OrganizationList from "../../organization-list";
import SearchHint from "./../../search-hint/index";

const SavedOrganizationsPage = ({ savedOrganizations }) => (
  <>
    {savedOrganizations.length === 0 && (
      <SearchHint isSavedOrganizationsPage={true} />
    )}
    <OrganizationList
      organizations={savedOrganizations}
      isSavedOrganizationList={true}
    />
  </>
);

export default SavedOrganizationsPage;
