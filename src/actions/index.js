const changeQuery = query => {
  return {
    type: "QUERY_CHANGED",
    payload: query
  };
};
const getOrganizations = suggestions => {
  return {
    type: "ORGANIZATIONS_GETTED",
    payload: suggestions
  };
};

const getОrganizationDetails = suggestion => {
  return {
    type: "ORGANIZATION_DETAILS_GETTED",
    payload: suggestion
  };
};

export { changeQuery, getOrganizations, getОrganizationDetails};
