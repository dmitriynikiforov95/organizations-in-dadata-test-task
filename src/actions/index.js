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

export { changeQuery, getOrganizations, getОrganizationDetails, saveOrganization};
