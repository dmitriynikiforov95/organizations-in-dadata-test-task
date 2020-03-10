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
export { changeQuery, getOrganizations };
