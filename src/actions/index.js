const changeQuery = query => {
  return {
    type: "QUERY_CHANGED",
    payload: query
  };
};
const getOrganizations = organizations => {
  return {
    type: "ORGANIZATIONS_GETTED",
    payload: organizations
  };
};

const getОrganizationDetails = organization => {
  return {
    type: "ORGANIZATION_DETAILS_GETTED",
    payload: organization
  };
};

const saveOrganization = organization => {
  return {
    type: "ORGANIZATION_SAVED",
    payload: organization
  }
}
const deleteOrganization = organization => {
  return {
    type: "ORGANIZATION_DELETED",
    payload: organization
  }
}
// rename
const toSavedOrganizationsPage = () => {
  return {
    type: "TO_SAVED-ORGANIZATIONS_PAGE",
  }
}

// rename, refactoring
const showSavedOrganizationDetails = organization => {
  return {
    type: "SAVED_ORGANIZATION_DETAILS_SHOWED",
    payload: organization
  };
}

export { changeQuery, getOrganizations, getОrganizationDetails, saveOrganization, deleteOrganization, toSavedOrganizationsPage, showSavedOrganizationDetails};
