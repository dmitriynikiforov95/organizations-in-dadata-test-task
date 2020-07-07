const changeQuery = (query) => ({
  type: "ORGANIZATIONS_FETCH_REQUEST",
  payload: query,
});

const organizationsLoaded = (organizations) => ({
  type: "ORGANIZATIONS_FETCH_SUCCESS",
  payload: organizations,
});

const organizationsError = (error) => ({
  type: "ORGANIZATIONS_FETCH_FAILURE",
  payload: error,
});

const fetchOrganizations = (dispatch) => (
  dadataApiService,
  query,
  condition
) => {
  dadataApiService
    .fetchOrganizations(query)
    .then(({ suggestions }) => {
      condition && dispatch(organizationsLoaded(suggestions));
    })
    .catch(({ message }) => {
      dispatch(organizationsError(message));
    });
};

const getОrganizationDetails = (organization) => ({
  type: "ORGANIZATION_DETAILS_GETTED",
  payload: organization,
});

const saveOrganization = (organization) => ({
  type: "ORGANIZATION_SAVED",
  payload: organization,
});

const removeOrganization = (organization) => ({
  type: "ORGANIZATION_REMOVED_FROM_SAVED",
  payload: organization,
});

export {
  changeQuery,
  fetchOrganizations,
  getОrganizationDetails,
  saveOrganization,
  removeOrganization,
};
